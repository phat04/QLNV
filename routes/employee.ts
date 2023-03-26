import { Router } from "express";
import {
  addEmployee,
  deleteEmployee,
  getAllEmployee,
  getEmployee,
  updateEmployee,
} from "../controllers/employee";

const router = Router();

router.route("/").post(addEmployee).get(getAllEmployee);
router.route("/getEmployee/:id").get(getEmployee);
router.route("/updateEmployee/:id").patch(updateEmployee);
router.route("/deleteEmployee/:id").delete(deleteEmployee);

export default router;
