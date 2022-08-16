// var http = require('http');

// var server = http.createServer(handleRequest);

// function handleRequest(req,res){
//     console.log(req,res);
//     res.end('welcome')
// }
// server.listen(4000,()=>{
//     console.log('listening to 4k')
// });



// var http1 = require('http');

// var server1 = http1.createServer(handleRequest);

// function handleRequest(req,res){
//     res.end('My first server in NodeJS')
// }

// server1.listen(4100,()=>{
//     console.log('listening to 4100')
// });

// var http2 = require('http');

// var server2 = http2.createServer(handleRequest);

// function handleRequest(req,res){
//     console.log(req.headers)
//     res.end(req.headers['user-agent'])
// }

// server2.listen(4444,()=>{
//     console.log('listening to 4444')
// });

// var http3 = require('http');

// var server3 = http3.createServer(handleRequest);

// function handleRequest(req,res){
//     console.log(req.method,req.url)
//     res.end(req.method+req.url)
// }

// server3.listen(4455,()=>{
//     console.log('listening to 4455')
// });

// var http4 = require('http');

// var server4 = http4.createServer(handleRequest);

// function handleRequest(req,res){
//     let data = req.headers;
//     res.end(JSON.stringify(data))
// }

// server4.listen(3000,()=>{
//     console.log('server listening on port 7000')
// });


// var http5 = require('http');

// var server5 = http5.createServer(handleRequest);

// function handleRequest(req,res){
//     res.statusCode = 202;
//     res.end()
// }

// server5.listen(3333,()=>{
//     console.log('server listening on port 3333')
// });


// var http6 = require('http');

// var server6 = http6.createServer(handleRequest);

// function handleRequest(req,res){
//     res.setHeader('Content-Type', 'text/html')
//     res.end('<h3>Welcome to altcampus</h3>')
// }

// server6.listen(8000,()=>{
//     console.log('server listening on port 8000')
// });

// var http7 = require('http');

// var server7 = http7.createServer(handleRequest);

// function handleRequest(req,res){
//     res.writeHead(200,{'Content-Type': 'text/html'})
//     res.end('<h3>Welcome to altcampus</h3>')
// }

// server7.listen(8000,()=>{
//     console.log('server listening on port 8000')
// });


// var http8 = require('http');

// var server8 = http8.createServer(handleRequest);

// function handleRequest(req,res){
//     res.writeHead(200, { 'Content-Type': 'text/json'});
//     res.end(JSON.stringify({success: true, message: 'Welcome to Nodejs'}));
// }

// server8.listen(8888,()=>{
//     console.log('server listening on port 8888')
// });


// var http9 = require('http');

// var server9 = http9.createServer(handleRequest);

// function handleRequest(req,res){
//     console.log(req.method)
//     res.setHeader('Content-Type','text/html')
//     res.end(`<h2>posted for first time</h2>`);
// }

// server9.listen(4050,()=>{
//     console.log('server listening on port 4050')
// });


// var http10 = require('http');

// var server10 = http10.createServer(handleRequest);

// function handleRequest(req,res){
//   if(req.method === 'GET' && req.url === '/'){
//     res.end('Abhishek')
//   }else if(req.method === 'GET' && req.url === '/about'){
//     res.setHeader('Content-Type','text/html')
//     res.end('<h2>Abhishek</h2/')
//   }else{
//     res.statusCode = 404;
//     res.end()
//   }
// }

// server10.listen(2345,()=>{
//     console.log('server listening on port 2345')
// });


// var http11 = require('http');
// var fs = require('fs')

// var server11 = http11.createServer(handleRequest);

// function handleRequest(req,res){
//   if(req.method === 'GET' && req.url === '/users'){
//     res.setHeader('Content-Type','text/html')
//     fs.readFile('./index.html',(err,Content)=>{
//         if(err) console.log(err);
//         res.end(Content)
//     })
//     }else if(req.method === 'POST' && req.url === '/users'){
//         res.end('Posted for the second time')
//     }
// }

// server11.listen(2345,()=>{
//     console.log('server listening on port 2345')
// });


var http12 = require('http');

var url = require('/users?email=nodeserver@gmail.com');

var server12 = http12.createServer(handleRequest);

function handleRequest(req,res){
    var parsedurl = url.parse(req.url,true);
    var pathname = parsedurl.pathname;
    console.log(pathname,parsedurl);
    res.setHeader('Content-Type', 'application/json')
  res.end(JSON.stringify(parsedUrl.query));
}

server12.listen(3000,()=>{
    console.log('server listening on port 3000')
});



