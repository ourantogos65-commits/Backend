import { Schema, model } from "mongoose";

const userSchemas = new Schema({
  email: { type: String, required: true },
  password: { type: Number, required: true },
  name: { type: String, required: true },
  gender: { type: String ,enum:["male","female"]},
  age: { type: Number },
  phoneNumber: { type: Number },
  price:{type:Number}

},{timestamps:true});

export const User = model("User", userSchemas);
