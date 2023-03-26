import { Request, Response } from "express";
import { CustomAPIError } from "../errors/custom-error";
import {
  createWage,
  deleteWageById,
  getAllW,
  getWageById,
  updateWageById,
} from "../services/wage";
import { catchAsync } from "../utils/catchAsync";

export const addWage = catchAsync(async (req: Request, res: Response) => {
  const empoyee = await createWage(req.body);
  if (!empoyee) {
    throw new CustomAPIError("Not found empoyee", 404);
  }
  res.status(200).json({ message: "success" });
});

export const deleteWage = catchAsync(async (req: Request, res: Response) => {
  await deleteWageById(parseInt(req.params.id));
  res.status(200).json({ message: "success" });
});

export const updateWage = catchAsync(async (req: Request, res: Response) => {
  const wage = await updateWageById(parseInt(req.params.id), req.body);
  return res.status(200).json({ message: "Updated", wage });
});

export const getWage = catchAsync(async (req: Request, res: Response) => {
  const employee = await getWageById(parseInt(req.params.id));
  res.status(200).json({ message: "success", employee });
});

export const getAllWage = catchAsync(async (req: Request, res: Response) => {
  const wage = await getAllW();
  res.status(200).json({ message: "success", wage });
});
