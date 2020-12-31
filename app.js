const express = require('express');
const app = express();
const path = require('path');

app.set('port', process.env.port || 4000) 
let name = {
    'name': 'javid'
}
app.get('/', (req, res, next) =>{
    res.send(JSON.stringify(name));
})

app.listen(app.get('port'), server =>{
    console.info(`Server listen on port ${app.get('port')}`);
})