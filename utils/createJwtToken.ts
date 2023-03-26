import jwt from "jsonwebtoken";
import "dotenv/config";
import { JwtPayload } from "./jwtPayload";
export const createToken = (payload: JwtPayload): string => {
  return jwt.sign(payload, String(process.env.TOKEN_SECRET), {
    expiresIn: "1d",
  });
};
