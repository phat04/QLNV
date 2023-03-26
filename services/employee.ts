import { AppDataSource } from "../databases/data";
import { Employee } from "../entities/employee";
import { CustomAPIError } from "../errors/custom-error";

export const createEmployee = async (body: any) => {
  const employeeRepository = AppDataSource.getRepository(Employee);
  const employee = employeeRepository.create(body);
  return await employeeRepository.save(employee);
};

export const deleteEmployeeById = async (id: number) => {
  const employeeRepository = AppDataSource.getRepository(Employee);
  const employee = await employeeRepository.findOneBy({ id });
  if (!employee) {
    throw new CustomAPIError("Not found employee", 404);
  }
  await employeeRepository.delete(id);
};

export const updateEmployeeById = async (id: number, body: any) => {
  if (body.id) {
    throw new CustomAPIError("Don't change id", 403);
  }
  const employeeRepository = AppDataSource.getRepository(Employee);
  const employee = await employeeRepository.findOneBy({ id });
  if (!employee) {
    throw new CustomAPIError("Not found employee", 404);
  }
  await employeeRepository.update(id, body);
  return await employeeRepository.findOneBy({ id });
};

export const getEmployeeById = async (id: number) => {
  const employeeRepository = AppDataSource.getRepository(Employee);
  const employee = await employeeRepository.findOneBy({
    id,
  });
  if (!employee) {
    throw new CustomAPIError("Not found Employee", 404);
  }
  return employee;
};

export const getAllE = async () => {
  const employeeRepository = AppDataSource.getRepository(Employee);
  const employee = await employeeRepository.find();
  if (!employee) {
    throw new CustomAPIError("Not found employee", 404);
  }
  return employee;
};
