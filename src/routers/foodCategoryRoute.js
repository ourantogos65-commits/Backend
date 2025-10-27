import { Router } from "express"
import { createfoodCategory, deletefoodCaregoryById, getfoodCaregory } from "../controllers/foodCategoryControllers.js"


 export const FoodRouter=Router()

 FoodRouter
 .get("/",getfoodCaregory)
 .post("/",createfoodCategory)
//  .put ("/:id" , Update)
 .delete("/:id",deletefoodCaregoryById)


