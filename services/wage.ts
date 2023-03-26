import { AppDataSource } from "../databases/data";
import { Wage } from "../entities/wage";
import { CustomAPIError } from "../errors/custom-error";

export const createWage = async (body: any) => {
  const wageRepository = AppDataSource.getRepository(Wage);
  const wage = wageRepository.create(body);
  return await wageRepository.save(wage);
};

export const deleteWageById = async (id: number) => {
  const wageRepository = AppDataSource.getRepository(Wage);
  const wage = await wageRepository.findOneBy({ id });
  if (!wage) {
    throw new CustomAPIError("Not found user", 404);
  }
  await wageRepository.delete(id);
};

export const updateWageById = async (id: number, body: any) => {
  if (body.id) {
    throw new CustomAPIError("Don't change id", 403);
  }
  const wageRepository = AppDataSource.getRepository(Wage);
  const wage = await wageRepository.findOneBy({ id });
  if (!wage) {
    throw new CustomAPIError("Not found wage", 404);
  }
  await wageRepository.update(id, body);
  return await wageRepository.findOneBy({ id });
};

export const getWageById = async (id: number) => {
  const wageRepository = AppDataSource.getRepository(Wage);
  const wage = await wageRepository.findOneBy({
    id,
  });
  if (!wage) {
    throw new CustomAPIError("Not found wage", 404);
  }
  return wage;
};

export const getWageByEmployeeId = async (empoyeeId: number) => {
  const wageRepository = AppDataSource.getRepository(Wage);
  const wage = await wageRepository.findOneBy({
    id: empoyeeId,
  });
  if (!wage) {
    throw new CustomAPIError("Not found wage", 404);
  }
  return wage;
};

export const getAllW = async () => {
  const wageRepository = AppDataSource.getRepository(Wage);
  const wage = await wageRepository.find();
  if (!wage) {
    throw new CustomAPIError("Not found wage", 404);
  }
  return wage;
};
