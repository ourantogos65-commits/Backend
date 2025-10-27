import { Router } from "express"
import { CreateUser, deleteUserById, getUsers, UpdateById } from "../controllers/user.js"

 export const useRouter=Router()

 useRouter
 .get("/student",getUsers)
 .post("/student",CreateUser)
//  .put ("/:id" , UpdateById)
 .delete("student/:id",deleteUserById)


