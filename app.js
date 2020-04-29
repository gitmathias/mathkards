var express = require('express');
var app = express();


// ------------------------ ROUTES ----------------------

// Landing Page:
app.get('/', function (req, res) {
    res.send('You should read the docs (project source code) to see what to do');
});

// Game:
app.get('/game/start', function (req, res) {
    const gameSvc = require('./services/game');

    gameSvc.shuffle();

    // Assume international rules (all players have same hand)
    var myHand = gameSvc.dealHand(1),
        targetCard = gameSvc.dealTargetCard();

    res.json({ hand: myHand, target: targetCard });
});



// -------------------- BOOTSTRAP FINISH ---------------

// Error handler:
app.use(function(err, req, res, next) {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});

// Stock 404 handler (lack of response):
app.use(function(req, res, next) {
    res.status(404).send('Sorry cant find that!');
});

// Heroku deploy support:
var port = process.env.PORT;
if (port == null || port == "") {
  port = 3000;
}
app.listen(port, "0.0.0.0", function () {
    console.log('Example app listening on port ' + port + '!');
});
