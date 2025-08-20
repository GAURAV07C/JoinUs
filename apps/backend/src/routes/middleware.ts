import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import { prisma } from "@joinUs/database";
import { JWT_SECRET } from "@joinUs/backend-common/config";
import { Role } from "@joinUs/database"; // ✅ Import Role enum

declare global {
  namespace Express {
    interface Request {
      user?: { id: string; email: string; role: Role[] }; // ✅ Use Prisma Enum
    }
  }
}

export const Middleware = (allowedRoles: string[]) => {
  return async (
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> => {
    try {
      // Token extract karo
      const authHeader = req.headers["authorization"];
      if (!authHeader?.startsWith("Bearer ")) {
        res
          .status(401)
          .json({ error: "Authorization token is missing or invalid" });

        return;
      }

      const token = authHeader.split(" ")[1];
      if (!token) {
        res.status(401).json({ error: "Token is missing" });
        return;
      }

      // Token verify karo
      let decoded;
      try {
        decoded = jwt.verify(token, JWT_SECRET) as { id: string };
      } catch (error) {
        res.status(401).json({ error: "Invalid or expired token" });
        return;
      }

      // Database se user fetch karo
      const user = await prisma.user.findUnique({
        where: { id: decoded.id },
        select: { id: true, email: true, role: true }, // ✅ Role bhi fetch karna zaroori hai
      });

      if (!user) {
        res.status(401).json({ error: "User not found" });
        return;
      }

      // ✅ User ke roles ka check karo
      const hasAccess = user.role.some((r) => allowedRoles.includes(r));
      if (!hasAccess) {
        res
          .status(403)
          .json({ error: "Access denied. Insufficient permissions." });
        return;
      }

      req.user = { id: user.id, email: user.email, role: user.role };
      next();
    } catch (err) {
      console.error("Auth Middleware Error:", err);
      res
        .status(500)
        .json({ error: "Something went wrong with authentication" });
    }
  };
};
