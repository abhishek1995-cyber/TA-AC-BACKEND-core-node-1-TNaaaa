var http = require('http');

var fs = require('fs');

var server = http.createServer(handleRequest);

function handleRequest(req,res){
   if(req.method === 'GET' && req.url === '/'){
    res.setHeader('Content-Type','text/html');
    fs.createReadStream('./index.html').pipe(res);
   }if(req.method === 'GET' && req.url === '/about'){
    res.setHeader('Content-Type','text/html');
    fs.createReadStream('./about.html').pipe(res);
   }if(req.url.split('.').pop() === 'css') {
    // set header for css file
    res.setHeader('Content-Type', 'text/css');
    // read css file and send it in response
    fs.readFile('../stylesheet/style.css' , (err, content) => {
      console.log(content)
      if(err) return console.log(err);
      res.end(content)
    })
  }  if (req.methods === "GET" && req.url.split(".").pop() === "png") {
    res.setHeader("Content-Type", "image/png");
    fs.readFile("../media/team/", (err, content) => {
      if (err) return console.log(err);
      res.end(content);
    });
  }
}

server.listen(3000,()=>{
    console.log('done')
})