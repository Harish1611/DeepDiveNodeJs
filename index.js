const http = require('http');
const url = require('url');


/**
 * 
 * Creation of Simple Server
 */


 const server = http.createServer((req,res) => {
    
    const pathName = req.url; //grabs the url end point

    if( pathName === '/' || pathName === '/overview'){
     
    res.end("Welcome To Overview!");  

    } else if( pathName === '/product'){

    res.end("This is Product");

    } else{
    
    res.writeHead(404, {
        'Content-type' : 'text/html',
        'my-own-header':'hello world'
    });
    res.end("<h1>Page Not Found</h1>");

    }

});

server.listen(8000 , () => {
    console.log('Sample Node Server Up & Running');
}); // local host port