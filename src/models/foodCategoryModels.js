import { Schema, model } from "mongoose";

const foodSchema = new Schema({
  categoryName:{type:String},
   createdAt:{type:Date},
   updatedAt:{type:Date},


},{timestamps:true});

export const foodCaregory = model("food", foodSchema);

