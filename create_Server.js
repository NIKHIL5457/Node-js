
const server=require('http')

server.createServer((req,res)=>{
    res.write("<h1>zxnbhs</h1>")
    res.end();
}).listen(500, () => {
    console.log('Server is running on port 4500')
})

const server = require('http');

Explanation: This line imports the http module, which is part of Node.js's core modules. The http module allows you to create a web server that can listen for and respond to HTTP requests.

server.createServer((req, res) => {
	
Explanation: This line uses the createServer method from the http module to create an HTTP server. The createServer method takes a callback function as an argument, which will be executed every time the server receives a request.
The req (short for "request") object contains information about the incoming request, such as the request headers and URL.
The res (short for "response") object is used to send a response back to the client.

    res.write("<h1>zxnbhs</h1>");
Explanation: The res.write method sends a chunk of the response body to the client. 
    res.end();
Explanation: The res.end method signals that the response is complete.
	
}).listen(500, () => {
Explanation: This line tells the server to start listening for incoming connections on port 500. The listen method takes two arguments:
The first argument 500 specifies the port number.
The second argument is an optional callback function that runs once the server starts listening. This is where you can add a message to indicate that the server is up and running.
