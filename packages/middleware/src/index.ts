import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import { prisma } from "@joinUs/database";
import { JWT_SECRET } from "@joinUs/backend-common/config";
import { Role } from "@prisma/client"; // ✅ Import Role enum

declare global {
  namespace Express {
    interface Request {
      user?: { id: string; email: string; role: Role[] }; // ✅ Use Prisma Enum
    }
  }
}

export const Middleware = (allowedRoles: string[]) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      // Token extract karo
      const authHeader = req.headers["authorization"];
      if (!authHeader?.startsWith("Bearer ")) {
        return res
          .status(401)
          .json({ error: "Authorization token is missing or invalid" });
      }

      const token = authHeader.split(" ")[1];
      if (!token) {
        return res.status(401).json({ error: "Token is missing" });
      }

      // Token verify karo
      let decoded;
      try {
        decoded = jwt.verify(token, JWT_SECRET) as { id: string };
      } catch (error) {
        return res.status(401).json({ error: "Invalid or expired token" });
      }

      // Database se user fetch karo
      const user = await prisma.user.findUnique({
        where: { id: decoded.id },
        select: { id: true, email: true, role: true }, // ✅ Role bhi fetch karna zaroori hai
      });

      if (!user) {
        return res.status(401).json({ error: "User not found" });
      }

      // ✅ User ke roles ka check karo
      const hasAccess = user.role.some((r) => allowedRoles.includes(r));
      if (!hasAccess) {
        return res
          .status(403)
          .json({ error: "Access denied. Insufficient permissions." });
      }

      // ✅ User ko request me attach karo
      req.user = { id: user.id, email: user.email, role: user.role };
      next();
    } catch (err) {
      console.error("Auth Middleware Error:", err);
      return res
        .status(500)
        .json({ error: "Something went wrong with authentication" });
    }
  };
};
