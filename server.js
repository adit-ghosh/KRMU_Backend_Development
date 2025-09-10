const express = require('express');
const mongoose = require('mongoose');

mongoose.connect(
    'mongodb+srv://back:end@cluster0.7xuxs8r.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'
).then(() => {
    console.log('Connected to MongoDB');
}).catch((err) => {
    console.error('Error connecting to MongoDB', err);
});

const app = express();

app.get("/hello",(req,res)=>{
    return res.send("<h1>Hello World</h1>");
})

app.get("/users",(req,res)=>{
    return res.json({users:[
    {
        id:1,
        name: "a"
    },
    {
        id:2,
        name: "b"
    },
    {
        id:3,
        name: "c"
    }
        ]});
})

app.listen(5678,()=>{ 
    console.log('Server is running on port 5678');
});