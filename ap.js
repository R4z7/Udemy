require('dotenv').config()
const express = require("express");
const app = express();
const morgan = require("morgan");
const postRoute = require("./routes/post");
const mongoose = require('mongoose');



//process.env.MONGO_URI = 'mongodb+srv://Raz:fdddddddddd%241234@nodeapi-pfnv8.mongodb.net/test?retryWrites=true'
mongoose.connect(process.env.MONGO_URI,{useNewUrlParser: true})
.then(() => console.log('DB Connected'))
 
mongoose.connection.on('error', err => {
  console.log(`DB connection error: ${err.message}`)
});




/*
const middle = function(res,req,next){ // simple middleware function
	console.log("The site has refreshed!");
	next();
} 
*/

//middleware
app.use(morgan("dev"));
app.use("/",postRoute);

const port = process.env.PORT || 8080;
app.listen(port, function(){
	 console.log("Nodejs api is listening port:",port);
});

