import express from 'express';
import cors from 'cors';
const app = express();
app.use(cors());



app.get('/add' , (req , res) => {
    const firstNum = Number(req.query.num1);
    const secondNum = Number(req.query.num2);

    return res.json({
        result : firstNum+secondNum
    })
})


app.listen(8000 , (err) => {
    console.log("server is running on port: 8000");
})