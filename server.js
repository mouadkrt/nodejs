var express = require('express'),
    fs = require('fs'),
    app = express();

var app = express();

const bodyParser = require('body-parser');
//require('body-parser-xml')(bodyParser);
//app.use(bodyParser.xml({inflate:true}));

var ip = process.env.IP || process.env.OPENSHIFT_NODEJS_IP || '0.0.0.0';


app.get('/', bodyParser.text({type: '*/*'}), function(req, res) {
    console.log("Got request on / endpoint. Sending back a Hello World ....");
    
    console.log("HTTP HEADER %j", req.headers);
    console.log("HTTP BODY %j", req.body);
    //console.log(req.headers);

    //console.log("\nHTTP BODY : %j", req.body);
    
    res.send(req.body + " (data added from backend)");
});

app.get('/api/end_point1', function(req, res) {
    console.log("\n------------\nGot request on /end_point1 endpoint. Sending some json content ....");
    console.log(req);
    res.json({ company: 'Munisys' });
});

app.get('/api/end_point2', function(req, res) {
    console.log("Got request on /end_point2 endpoint. Sending some json content ....");
    res.json([{ user: 'Ayoub' }, { user: 'Mouad' }]);
});

app.get('/api/end_point3/:id', function(req, res) {
    console.log("Got request on /end_point3 endpoint. Sending some json content ....");
    res.json(req.params);
});

app.get('*', function(req, res){
  res.status(404).send('what???');
});


app.listen(8080, ip);
console.log('Server listening on 8080 ...');

module.exports = app;
