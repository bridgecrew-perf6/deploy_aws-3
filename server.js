const { response } = require('express');
const express = require('express');

const app = express();

app.get('/',(request,response)=>{
    return response.send('<h1>Servidor Up!</h1>');
})
app.post('/teste',(request,response) =>{
    const {name,date} = request.body;
    return response.json({name, date});
})
app.listen(3333);