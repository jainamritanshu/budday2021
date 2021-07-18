const http = require('http')
const fs = require('fs')

const server = http.createServer((req, res) => {
  var url = req.url;
  function serveFile(content, contentType){
  	res.writeHead(200, { 'content-type': contentType })
  	fs.readFile(content,function(err,contents){
  		//if the fileRead was successful...
  		if(!err){
  			//send the contents of index.html
  			//and then close the request
  			res.end(contents);
  		} else {
  			//otherwise, let us inspect the eror
  			//in the console
        console.log(err);
  			console.dir(err);
  		};
  	});

  }

  if(url == '/landing/'){
  	serveFile("index.html", "text/html");
  }
  if(url.endsWith('.js') == true){
  	serveFile(url.split("/").slice(2).join('/'), "text/javascript");
  }
  if(url.endsWith('.png') == true){
  	console.log(url);
  	serveFile(url.split("/").slice(2).join('/'), "image/png");
  }
  if(url.endsWith('.svg') == true){
    console.log(url);
    serveFile(url.split("/").slice(2).join('/'), "image/svg+xml");
  }
  if(url.endsWith('.css') == true){
    console.log(url);
    serveFile(url.split("/").slice(2).join('/'), "text/css");
  }
  if(url.endsWith('.jpg') == true){
  	serveFile(url.split("/").slice(2).join('/'), "image/jpg");
  }
  if(url.endsWith('.gif') == true){
  	serveFile(url.split("/").slice(2).join('/'), "image/gif");
  }
  if(url.endsWith('.ico') == true){
  	serveFile(url.split("/").slice(2).join('/'), "image/x-icon");
  }
})

server.listen(process.env.PORT || 3001)
