/*const { response } = require('express');*/
const express = require('express');
/* var http = require('http'); */
var fs = require('fs');
/*const path = require('path');*/
const app = express();

app.get('/',(request,response)=>{
    return response.send('Funcinou');
);
app.post('/teste',(request,response) =>{
    const {name,date} = request.body;
    return response.json({name, date});
})
app.listen(3333);
