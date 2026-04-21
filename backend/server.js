const express = require ('express');
const app = express();
const PORT = 5000;


//Basic route 
app.get('/',(req,res) =>{
    res.send("backend is running") 
});


app.listen(PORT,() =>{
    console.log(`server is running on port http://localhost:${PORT}`)
});