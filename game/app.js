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
  			console.dir(err);
  		};
  	});

  }
  
  // fs.createReadStream('game.html').pipe(res)
  if(url == '/'){
  	serveFile("game.html", "text/html");
  }
  if(url.endsWith('.js') == true){
  	console.log("hello");
  	serveFile(url.substring(1), "text/javascript");
  }
  if(url.endsWith('.png') == true){
  	console.log(url)
  	serveFile(url.substring(1), "image/png");
  }
  if(url.endsWith('.jpg') == true){
  	serveFile(url.substring(1), "image/jpg");
  }
  if(url.endsWith('.gif') == true){
  	serveFile(url.substring(1), "image/gif");
  }
  if(url.endsWith('.ico') == true){
  	serveFile(url.substring(1), "image/x-icon");
  }
})

server.listen(process.env.PORT || 3000)
