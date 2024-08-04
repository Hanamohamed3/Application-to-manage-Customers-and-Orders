import { Router } from "express";

import {addProduct} from './products.controller.js'
const productRoutes = Router();




productRoutes.post("/addProduct",addProduct)
// productRoutes.get("/totalSold",totalSold)


export default productRoutes;