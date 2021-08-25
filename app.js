const express=require(`express`);
const app=express();
const cors= require(`cors`);
const dotenv=require(`dotenv`);
const { urlencoded } = require("express");
dotenv.config();

app.use(cors);
app.use(express.json());
app.use(express.urlencoded({extended:false}));


app.get('/',(req,res)=>{
    console.log('Home page');
    res.send('Home page');
});
//create
app.post('/insert',(req,res)=>{

});
//read
app.get('/getAll',(req,res)=>{
    console.log('test');
});

//update
app.post('/insert1',(req,res)=>{

});

//delete
app.post('/inserts',(req,res)=>{

});

app.listen(process.env.PORT,()=>{
    console.log("app is running");
});