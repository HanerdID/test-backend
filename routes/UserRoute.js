import express from "express";
import {getUsers ,createUser} from "../controller/UserController.js";

const router = express.Router();

router.get('/user', getUsers);
router.post('/user', createUser);

export default router;