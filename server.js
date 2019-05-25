
const express = require('express');
const bodyParser = require('body-parser')

let app = express();

app.set('port', 3000);
//app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.get('/', (req, res) => {
    res.send('Hello World Nodejs Docker :' + process.env.SERVICE_NAME);
})

app.post('/event', (req, res) => {	
	console.log('EVENT RECEIVED :'+ req.body);
	res.json('Ok');
});

app.listen(app.get('port'), () => {
    console.log('Express server started on port :' + app.get('port'));
});