var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var cors = require('cors');
app.use(cors());

var login = require('./routes/login');
var minutes = require('./routes/minutes');
var profile = require('./routes/profile');
var attendance = require('./routes/attendance');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

app.use('/login',login);
app.use('/minutes',minutes);
app.use('/profile',profile);
app.use('/attendance',attendance);

app.get("/", (req,res)=>{
return res.send("Welcome to CSI-DBIT");
});

//port activation
app.listen(8081, (req, res) => {
    console.log("Listening on 8081");
});
