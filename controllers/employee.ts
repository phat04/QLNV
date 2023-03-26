import { Request, Response } from "express";
import { CustomAPIError } from "../errors/custom-error";
import {
  createEmployee,
  deleteEmployeeById,
  getAllE,
  getEmployeeById,
  updateEmployeeById,
} from "../services/employee";
import { catchAsync } from "../utils/catchAsync";

export const addEmployee = catchAsync(async (req: Request, res: Response) => {
  const employee = await createEmployee(req.body);
  if (!employee) {
    throw new CustomAPIError("Not found employee", 404);
  }
  res.status(200).json({ message: "success" });
});

export const deleteEmployee = catchAsync(
  async (req: Request, res: Response) => {
    await deleteEmployeeById(parseInt(req.params.id));
    res.status(200).json({ message: "success" });
  }
);

export const updateEmployee = catchAsync(
  async (req: Request, res: Response) => {
    const employee = await updateEmployeeById(
      parseInt(req.params.id),
      req.body
    );
    return res.status(200).json({ message: "Updated", employee });
  }
);

export const getEmployee = catchAsync(async (req: Request, res: Response) => {
  const employee = await getEmployeeById(parseInt(req.params.id));
  res.status(200).json({ message: "success", employee });
});

export const getAllEmployee = catchAsync(
  async (req: Request, res: Response) => {
    const employee = await getAllE();
    res.status(200).json({ message: "success", employee });
  }
);
