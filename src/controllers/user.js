import { Query } from "mongoose";
import { User } from "../models/user.js";



export const getUsers = async (req, res) => {
  
  try {
    const result = await User.find();
    res.send(result)
  } catch (error) {
    res.send(error);
  }
};


export const CreateUser = async (req, res) => {
  const {body} = req
  console.log(body)
  try {
    const result = await User.create(body);
    res.send (result)
  } catch (error) {
    res.send(error);
  }
};
export const UpdateById=async (req,res)=>{
const {id}=req.params
try {
 const result= await User.findUpdate(id)
 res.send(result)
} catch (error) {
  res.send(error)
}
}

export const deleteUserById = async (req, res) => {
  const { id } = req.params;
  try {
    const result = await User.findByIdAndDelete(id);
    res.send(result)
  } catch (error) {
    res.send(error);
  }
};
