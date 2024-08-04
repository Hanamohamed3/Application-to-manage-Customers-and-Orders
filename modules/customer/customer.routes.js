import { Router } from "express";
import { signup } from "./customer.controller.js";
import { checkEmail } from "../../middleware/checkEmail.js";
const custRoutes = Router();




custRoutes.post("/signUp",checkEmail,signup)
// custRoutes.post("/signIn",signin)







export default custRoutes;