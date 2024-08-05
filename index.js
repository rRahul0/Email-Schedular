import express from "express";
import { schedule } from "node-cron";
import { transporter, options } from "./email.js";

const app = express();

schedule("* * * * *", ()=>{
  console.log("sending mail");
  transporter.sendMail(options, (err, info)=>{
    if(err){
      console.log(err);
    }else{
      console.log("Email sent");
    }
  })
})

app.get("/", (req, res) => res.send("Hello, World!"));
app.listen(3000, () => console.log("Project is ready!"));