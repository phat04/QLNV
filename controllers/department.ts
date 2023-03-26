import { Request, Response } from "express";
import { CustomAPIError } from "../errors/custom-error";
import {
  createDepartment,
  deleteDepartrmentById,
  getAllD,
  getDepartmentById,
  updateDepartmentById,
} from "../services/department";
import { catchAsync } from "../utils/catchAsync";

export const addDepartment = catchAsync(async (req: Request, res: Response) => {
  const department = await createDepartment(req.body);
  if (!department) {
    throw new CustomAPIError("Not found department", 404);
  }
  res.status(200).json({ message: "success" });
});

export const deleteDepartment = catchAsync(
  async (req: Request, res: Response) => {
    await deleteDepartrmentById(parseInt(req.params.id));
    res.status(200).json({ message: "success" });
  }
);

export const updateDepartment = catchAsync(
  async (req: Request, res: Response) => {
    const department = await updateDepartmentById(
      parseInt(req.params.id),
      req.body
    );
    return res.status(200).json({ message: "Updated", department });
  }
);

export const getDepartment = catchAsync(async (req: Request, res: Response) => {
  const department = await getDepartmentById(parseInt(req.params.id));
  res.status(200).json({ message: "success", department });
});

export const getAllDepartment = catchAsync(
  async (req: Request, res: Response) => {
    const department = await getAllD();
    res.status(200).json({ message: "success", department });
  }
);
