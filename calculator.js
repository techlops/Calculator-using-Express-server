//jshint esversion:6

var express = require("express");
var bodyParser = require("body-parser"); //body parser required used.
                                        // after version 17 of express, we can use express without bodyparser package.

var app = express();
app.use(bodyParser.urlencoded({extended: true})); // app.use to use body-parser with express
                                                  // we can use express.urlencoded({exteded: true})
                                                  //res of the code will be same whether express or bodyparser
                                                  // i recommend express only but i dont want to change my first code 
                                                  //.urlencoded to be used only grab info posted from html forms
                                                  //other than urlencoded:.json, .txt, etc.
                                                  //{extended: true} allows us to use posted objects

app.get("/", function(req, res){
  res.sendFile(__dirname + "/index.html"); //__dirname always used
                                           //res.sendFile used to send a file from server
});

// req.body used to access form specific items (body function from body-parser package)
//use >console.log(req.body) to console the header file from html in our terminal
// use req.body inside app.post to access whatever specific thing you want for calculations or etc.

app.post("/", function(req, res){    //app.post always used to accept posted info from browser to server 
                                     //res.send use here will only respond when user enters submit/posts on our form.
                                     
                                     //fetching num1 and 2 from html num1 and num2.
  
  var num1 = Number(req.body.num1);  //binding req.body.num1 to a a variable in our server
  var num2 = Number(req.body.num2);  // use Number function to convert text num2 to integer 2 or else it will just append num1 to num2.
  var result = num1 + num2; //you'll get 23 from 2+3 because body parser is taking 2 and 3 as text. so use Number function

  //if the number function doesn't work like it did when i'm writing this, refresh the server and try again.it worked.

  res.send("the result of num1 + num2 is " + result);
});

app.listen(3000, function(){
  console.log("server is running on port 3000");
});
