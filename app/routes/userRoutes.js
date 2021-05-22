import express from "express";
import { create, getUsers } from "../controllers/userController.js";

//Routes for User
const router = express.Router();

router.post("/users/", create);
router.get("/users/", getUsers);

export default router;
