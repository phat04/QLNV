import { Router } from "express";
import {
  addWage,
  deleteWage,
  getAllWage,
  getWage,
  updateWage,
} from "../controllers/wage";

const router = Router();

router.route("/").post(addWage).get(getAllWage);
router.route("/getWage/:id").get(getWage);
router.route("/updateWage/:id").patch(updateWage);
router.route("/deleteWage/:id").delete(deleteWage);

export default router;
