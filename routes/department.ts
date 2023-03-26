import { Router } from "express";
import {
  addDepartment,
  deleteDepartment,
  getAllDepartment,
  getDepartment,
  updateDepartment,
} from "../controllers/department";

const router = Router();

router.route("/").post(addDepartment).get(getAllDepartment);
router.route("/getDepartment/:id").get(getDepartment);
router.route("/updateDepartment/:id").patch(updateDepartment);
router.route("/deleteDepartment/:id").delete(deleteDepartment);

export default router;
