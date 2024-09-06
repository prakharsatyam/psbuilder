import { testRoute } from "../controllers/user.controller.js";
import { Router } from "express";
const router = Router()
router.route('/test').get(testRoute);
export {router} 