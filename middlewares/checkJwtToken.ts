import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

export const checkJwtToken = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const authHeader = req.headers.authorization;
    if (!authHeader) {
      return res.status(400).json({ message: "please provide Token" });
    }

    const token = authHeader.split(" ")[1];
    jwt.verify(token, String(process.env.TOKEN_SECRET));
    next();
  } catch (error) {
    console.error(error);
  }
};
