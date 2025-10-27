
import { foodCaregory } from "../models/foodCategoryModels.js";



export const getfoodCaregory = async (req, res) => {
  
  try {
    const result = await foodCaregory.find();
    res.send(result)
  } catch (error) {
    res.send(error);
  }
};


// export const UpdatefoodById=async (req,res)=>{
// const {id}=req.params
// try {
//  const result= await foodCaregory.findUpdate(id)
//  res.send(result)
// } catch (error) {
//   res.send(error)
// }
// }
export const createfoodCategory=async(req,res)=>{
  const {body}=req
 try {
 const result= await foodCaregory.create(body)
 res.send(result)
} catch (error) {
  res.send(error)
}
}
export const deletefoodCaregoryById = async (req, res) => {
  const { id } = req.params;
  try {
    const result = await foodCaregory.findByIdAndDelete(id);
    res.send(result)
  } catch (error) {
    res.send(error);
  }
};
