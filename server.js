const { response } = require('express');
const express = require('express');
/* var http = require('http'); */
var fs = require('fs');
const path = require('path');
const app = express();

app.get('/',(request,response)=>{
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
app.listen(3333);