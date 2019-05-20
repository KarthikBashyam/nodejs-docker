
const express = require('express');

let app = express()

app.set('port', 3000);

app.get('/', (req, res) => {
    res.send('Nodejs Docker');
})

app.listen(app.get('port'), () => {
    console.log('Express server started on port :' + app.get('port'));
});