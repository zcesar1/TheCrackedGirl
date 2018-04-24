const express = require('express');//express server
const bodyParser = require('body-parser');//extract data from forms and such
const path = require('path');//deals with files and directory paths
const http = require('http');//http server creation
const app = express();//bound to express

//Parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

//serve static files
app.use(express.static(path.join(__dirname, 'dist')));

//set api routes
//app.use('/api', api);

//Return other routes to Angular index file
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist/index.html'));
})

//Set port
const port = process.env.PORT || '3000';
app.set('port', port);

//Create the HTTP Server
const server = http.createServer(app);

server.listen(port, () => console.log('Running on localhost:${port}'));
