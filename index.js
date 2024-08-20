const express = require ('express');
const router = require('./router/router');
const app = express();
const PORT = 3002;
const path = require('path');

app.set ("view engine","ejs");
app.set('views',path.join(__dirname,'/views'));

app.use(express.static(path.join(__dirname,'views')));

app.use("/",router);
app.listen(PORT,()=>{
        console.log(`server running at http://localhost:${PORT}`);
})