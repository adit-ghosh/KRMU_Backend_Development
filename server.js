const express = require('express');
const mongoose = require('mongoose'); // ODM
const userRouter = require('./routes/user.routes');
const dotenv = require('dotenv');

dotenv.config();

mongoose.connect(process.env.MONGO).then(() => {
    console.log('Connected to MongoDB');
}).catch((err) => {
    console.error('Error connecting to MongoDB', err);
});

const app = express();

app.use(express.json());
app.use('/api', userRouter);

app.get("/",(req,res)=>{
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
