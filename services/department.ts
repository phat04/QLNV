import { AppDataSource } from "../databases/data";
import { Department } from "../entities/department";
import { CustomAPIError } from "../errors/custom-error";

export const createDepartment = async (body: any) => {
  const departmentRepository = AppDataSource.getRepository(Department);
  const department = departmentRepository.create(body);
  return await departmentRepository.save(department);
};

export const deleteDepartrmentById = async (id: number) => {
  const departmentRepository = AppDataSource.getRepository(Department);
  const department = await departmentRepository.findOneBy({ id });
  if (!department) {
    throw new CustomAPIError("Not found user", 404);
  }
  await departmentRepository.delete(id);
};

export const updateDepartmentById = async (id: number, body: any) => {
  if (body.id) {
    throw new CustomAPIError("Don't change id", 403);
  }
  const departmentRepository = AppDataSource.getRepository(Department);
  const department = await departmentRepository.findOneBy({ id });
  if (!department) {
    throw new CustomAPIError("Not found department", 404);
  }
  await departmentRepository.update(id, body);
  return await departmentRepository.findOneBy({ id });
};

export const getDepartmentById = async (id: number) => {
  const departmentRepository = AppDataSource.getRepository(Department);
  const department = await departmentRepository.findOneBy({
    id,
  });
  if (!department) {
    throw new CustomAPIError("Not found department", 404);
  }
  return department;
};

export const getAllD = async () => {
  const departmentRepository = AppDataSource.getRepository(Department);
  const department = await departmentRepository.find();
  if (!department) {
    throw new CustomAPIError("Not found department", 404);
  }
  return department;
};
