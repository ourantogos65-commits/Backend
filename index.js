
import axios from "axios";
import express from "express";
import chalk from "chalk";
import bodyParser from "body-parser";
import { configDotenv } from "dotenv";

configDotenv();

const PORT = process.env.PORT;
const app = express();

app.use(bodyParser.json())


    let students = [
      ];
      

app.get("/movie",async(req,res)=>{
    const {language ,page  } = req.query;
    let stu=students
     
    if(language){
        stu = stu.filter((s)=s.language===language)
    }
    if(page){
        stu =stu.filter((s)=>s.page===Number(page))
    }
    return res.status(200).send(stu).end();

})
app.post("/movie", async (req, res) => {
    const previousStudents = students.filter((student)=>student.phoneNumber ===req.body.phoneNumber)
    console.log(previousStudents,'filter')
    if(previousStudents.length === 0) {
      students.push(req.body)
      return res.status(200).send(students).end()
    }else{
        return res.status(409).send({ message: "Failed to fetch data" });
    }
});
app.get("/student", async(req,res)=>{

    const {gender,age}=req.query
    let filterStudents=students
    if(gender){
        filterStudents=filterStudents.filter((s)=>s.gender===gender)
    }
    if(age){
        filterStudents=filterStudents.filter((s)=>s.age===Number(age))
    }
    return res.status(200).send(filterStudents);
})
app.post("/student", async (req, res) => {
    const previousStudents = students.filter((student)=>student.phoneNumber ===req.body.phoneNumber)
    console.log(previousStudents,'filter')
    if(previousStudents.length === 0) {
      students.push(req.body)
      return res.status(200).send(students).end()
    }else{
        return res.status(409).send({ message: "Failed to fetch data" });
    }
});
app.put("/student", (req, res) => {
    const index = students.findIndex(
      (s) => s.phoneNumber === req.body.phoneNumber
    );
  
    if (index === -1) {
      return res.status(404).send({ message: "Student not found" });
    }
  
    students[index] = req.body;
    return res.status(200).send(students);
  });
  
app.delete('/student/:phoneNumber',(req,res)=>{
    const {phoneNumber}=req.params
  
    students=students.filter((student)=>{
        return student.phoneNumber != phoneNumber
    })
    return res.send (students)
})



app.get("/students/:phoneNumber",async(req,res)=>{
    const{phoneNumber}=req.params
    const student = students.filter((s)=>s.phoneNumber===Number(phoneNumber))
    if(!student){
        return res.status.send(404).send({message:"student not student"})
     }
    
        return res.status(200).send(student)
      

})

app.listen(PORT, () => {
  console.log(chalk.green(` Server is running at http://localhost:${PORT}`));
});
