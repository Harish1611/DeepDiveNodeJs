const http = require('http');





/**
 * 
 * Creation of Simple Server
 */


 const server = http.createServer((req,res) => {

    res.end("Sample Server Response!");  

});

server.listen(8000 , () => {
    console.log('Sample Node Server Up & Running');
}); // local host port