import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import mongoose from 'mongoose';
import router from './Routers/Routes.js';

const app = express();
app.use(express.json());
// app.use(cors());
app.use(cors({
    origin: 'https://webcook-android.onrender.com',
}));
// app.options('/signup', cors()); // Preflight handling for /signup
// app.set("view engine","ejs");

const url = process.env.DATABASE_URl;
const port = process.env.PORT;

mongoose.connect(url)
.then((res)=>{
    console.log(`database connected`)
})
.catch((err)=>{
    console.error(err);
})

app.use(router)


// app.use((req,res)=>{
//     res.render("404");
// })
// 
//app.use((req,res)=>{
   // res.render("404");
//})
app.listen(port,(req,res)=>{
    console.log(`running in  the port ${port}`)
})

