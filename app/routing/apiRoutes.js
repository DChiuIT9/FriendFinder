var path = require("path");
var friends = require("../data/friends.js");

module.exports = function(app) {
    app.get("/api/friends", function(req, res) {
        res.json(friends);
    });
      
    app.post("/api/friends", function(req, res) {
        var match = {
            name: "",
            photo: "",
            ansDiff: Infinity
        }
        var data = req.body;
        var userScores = data.scores;
        var totalDiff;


        for (var i = 0; i < friends.length; i++) {
            var indexFriends = friends[i];
            totalDiff = 0;

            for (var j = 0; j < indexFriends.score.length; j++) {
                var indexFriendscores = indexFriends.score[j];
                var indexUserScores = userScores[j];
                totalDiff += Math.abs(parseInt(indexUserScores) - parseInt(indexFriendscores));
            }
        }

    });
}

