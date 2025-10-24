import { Router } from "express"
import { CreateUser, deleteUserById, getUsers, UpdateById } from "../controllers/user.js"

 export const useRouter=Router()

 useRouter
 .get("/",getUsers)
 .post("/",CreateUser)
 .put ("/:id" , UpdateById)
 .delete("/:id",deleteUserById)


