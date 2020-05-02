var express=require("express");
var mongoose=require("mongoose");
var bodyParser=require("body-parser");
var cors=require("cors");

var app=express();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }))
app.use(require("./routers/tendors-router"));
app.use(bodyParser.json({ type: 'application/*+json' }))

if (process.env.NODE_ENV !== 'production') {
   require('dotenv').config();
  }

mongoose.connect(process.env.MONGOURL);

var connection = mongoose.connection;

connection.on('error', console.error.bind(console, 'Connection Error:'));

connection.once('open', function() {
    console.log("Successfully connected to MongoDB!");
  });


var port=process.env.PORT || 3000
app.listen(port,()=>{
    console.log("Server Started at ",port,"...");
})