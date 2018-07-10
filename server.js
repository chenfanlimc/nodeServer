var http = require("http");
var PORT1 = 7000;
var PORT2 = 7500;

function handleRequestOne(request, response) {
    response.end("You're an awesome person!")
}

function handleRequestTwo(request, response) {
    response.end(randomBad)
}

var badPhrases = ["You suck!", "You're lame!", "You're gonna break your legs! Both of em!", "Oh, you suck so much!"]
var randomBad = badPhrases[Math.floor(Math.random()*badPhrases.length)];

var server1 = http.createServer(handleRequestOne);
var server2 = http.createServer(handleRequestTwo);

server1.listen(PORT1, function(){
    console.log("Server is listening on http://localhost:" + PORT1);
})

server2.listen(PORT2, function(){
    console.log("Server is listening on http://localhost:" + PORT2);
})