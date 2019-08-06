const express = require('express');
const bodyParser = require('body-parser');


const app = express();

app.use(bodyParser.json());
app.use(express.static('public'));

const PORT = process.env.PORT || 3000

app.listen(PORT, (err)=>{
    if(err){
        console.log("Nothing here, kid", err)
    };
    console.log("Server running on port 3000...")
})


//NOTE to self: CRUD API: Create, Read, Update and Delete