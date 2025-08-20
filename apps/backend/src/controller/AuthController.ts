import { prisma } from "@joinUs/database";
import { BuyerRegisterSchema, LoginSchema } from "@joinUs/validation/authTypes";
import { JWT_SECRET } from "@joinUs/backend-common/config";
import { Request, Response } from "express";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export const SignupController = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    // Validate input using Zod
    const validateFields = BuyerRegisterSchema.safeParse(req.body);
    if (!validateFields.success) {
      res.status(400).json({
        error: "Invalid fields!",
        issues: validateFields.error.errors,
      });
      return;
    }

    const { email, password, name, role } = validateFields.data;

    // Ensure role is "BUYER"
    if (role !== "BUYER") {
      res.status(400).json({ error: "Invalid role!" });
      return;
    }

    // Check if email is already registered as a BUYER
    const existingUser = await prisma.user.findFirst({
      where: { email, role: { hasSome: ["BUYER"] } }, // ✅ Corrected Role Check
    });

    if (existingUser) {
      res.status(400).json({ error: "Email already in use!" });
      return;
    }

    // Hash password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Create new buyer
    const newBuyer = await prisma.user.create({
      data: { name, email, password: hashedPassword, role: ["BUYER"] },
    });

    // Generate JWT token
    const token = jwt.sign(
      { id: newBuyer.id, email: newBuyer.email, role: "BUYER" },
      JWT_SECRET,
      { expiresIn: "7d" }
    );

    res.status(201).json({
      message: "Buyer registered successfully",
      token,
      user: {
        id: newBuyer.id,
        name: newBuyer.name,
        email: newBuyer.email,
        role: newBuyer.role,
      },
    });
  } catch (error) {
    res.status(500).json({
      message: "Internal Server Error",
      error: error instanceof Error ? error.message : "Unknown error",
    });
  }
};

export const LoginController = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    // ✅ Validate input using Zod
    const validateFields = LoginSchema.safeParse(req.body);
    if (!validateFields.success) {
      res.status(400).json({
        error: "Invalid fields!",
        issues: validateFields.error.errors,
      });
      return;
    }

    const { email, password, role, rememberMe } = validateFields.data;

    if (role !== "BUYER") {
      res.status(400).json({ error: "Invalid role!" });

      return;
    }

    const user = await prisma.user.findFirst({
      where: { email, role: { hasSome: ["BUYER"] } },
    });

    if (!user) {
      res.status(401).json({ error: "User Not register" });
      return;
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      res.status(401).json({ error: "Invalid email or password!" });
      return;
    }

    const token = jwt.sign(
      { id: user.id, email: user.email, role: user.role },
      JWT_SECRET,
      { expiresIn: rememberMe ? "30d" : "7d" }
    );

    res.json({
      message: "Login successful!",
      token,
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
        role: user.role,
      },
    });
  } catch (error) {
    console.error("Login Error:", error);
    res.status(500).json({
      message: "Internal Server Error",
      error: error instanceof Error ? error.message : "Unknown error",
    });
  }
};
