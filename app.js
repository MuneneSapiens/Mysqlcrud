const express=require(`express`);
const cors= require(`cors`);
const dotenv=require(`dotenv`);
var app=express();
//const { urlencoded, response } = require("express");
dotenv.config();
const dbService =require(`./dbservice`);

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:false}));
 


app.get('/', function (req, res) {
    res.send('hello world');
  });
//create
app.post('/insert',(req,res)=>{

});
//read
app.get('/getAll',function(req,res){
    console.log("test");
  

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