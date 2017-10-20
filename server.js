const express = require('express');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');

const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req,res) =>{
  res.send("HELLO WORLD");
});

app.listen(PORT, ()=>{
  console.log("Listening on PORT " + PORT);
});
