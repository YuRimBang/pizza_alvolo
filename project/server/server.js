const express = require("express"); 
const app = express();
const PORT = process.env.PORT || 4000;
const db = require('./config/db.js')

app.get('/', (req, res)=>{
    console.log('/root')
})

app.get('/product', (req, res)=>{
    console.log('/product')
    db.query("select * from product", (err, data) => {
        if(!err){
            // console.log(data)
            res.send(data)
            console.log(data)
        }
        else{
            console.log(err)
        }
    })
})

app.listen(PORT, ()=>{
    console.log(`Server On : http://localhost:${PORT}`);
})
