/* const { response } = require('express');
const express = require('express'); */
var http = require('http');
var fs = require('fs');
/* const path = require('path'); */

var server = http.createServer(function(request, response){
    fs.readFile(__dirname, 'index.html', function(err, html){
        response.writeHeader(200,{'Content-Type':'text/html'});
        response.write(html);
        response.end();
    });
});
server.listen(3333, function(){
    console.log('Executando App');
});



















/* const app = express(); */

/* app.get('/',(request,response)=>{
    if(request.url === '/'){
        fs.readFile(
            path.join(__dirname,'/','index.html'),
            (err,content) => {
                if(err) throw err
                response.end(content)
            }
        )
    }
    return response.send();
})
app.post('/teste',(request,response) =>{
    const {name,date} = request.body;
    return response.json({name, date});
})
app.listen(3333); */