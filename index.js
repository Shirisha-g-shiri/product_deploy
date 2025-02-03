const express = require('express')
const app = express();
const mongoose = require('mongoose')
const productRouter = require('./Routes/ProductRoutes')

app.use(express.json())

app.listen('5000', ()=> console.log('server running on 5000'))

mongoose.connect('mongodb+srv://2216115:123456shiri@myproject.rf1bs.mongodb.net/?retryWrites=true&w=majority&appName=myProject')
    .then(()=> console.log('database connected..'))
    .catch((err) => console.log(err))

app.use("", productRouter);

app.get('/', (req, res)=>{
    res.send('server reacted...')
})
console.log("updated");
