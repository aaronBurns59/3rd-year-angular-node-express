var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require("body-parser")

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json())

app.get('/', function (req, res) {
   res.send('Hello from Express');
})

app.get('/something', function(req, res) {
    res.send("Hello from something");
})

//outputs a message to the brower saying Hello ....
app.get('/hello/:name', function(req, res) {
    console.log(req.params.name);
    res.send("Hello " + req.params.name);
})

//opens a html page in the same folder
app.get('/test', function(req, res){
    console.log("file.io");
    res.sendFile(path.join(__dirname +'/index.html'));
})

//gets the name vars from the form in the html
app.get('/name', function(req, res){
    console.log("Get Method");
    console.log(req.params.name);
    res.send('Hello my name is ' + " " + req.query.firstname + " " + req.query.lastname);
})

app.post('/name', function(req, res){
    console.log("post Method");
    console.log(req.body.name);
    res.send('Hello you sent ' + req.body.firstname + " " + req.body.lastname);

})

//an api with example json data
app.get('/api/posts', function(req, res, next) {

    const posts = [
    {
        id: "fadf12421l",
        title: "First server-side post",
        content: "This is coming from the server"
    },
    {
        id: "ksajflaj132",
        title: "Second server-side post",
        content: "This is coming from the server!"
    }];
    
        res.status(200).json({ message: 'Posts fetched succesfully!',
        AB: posts});
      
    });

    //where the server is being hosted
    var server = app.listen(8081, function () {
    var host = server.address().address
    var port = server.address().port
   
   console.log("Example app listening at http://%s:%s", host, port)
})