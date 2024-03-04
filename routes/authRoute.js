import exppress from "express";
import {
  handledeleteuser,
  handlegetallusers,
  handlegetuserbyid,
  handleregisteruser,
  handleupdateuser,
} from "../controllers/authController.js";

const router = exppress.Router();

router.route("/register").post(handleregisteruser);
router.route("/users").get(handlegetallusers);
router.route("/users/:id").get(handlegetuserbyid);
router.route("/users/:id").put(handleupdateuser);
router.route("/users/:id").delete(handledeleteuser);

export default router;
