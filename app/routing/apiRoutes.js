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
        var userscores = data.scores;
        var totaldifference;
        // for (var i = 0; i < friends.length; i++) {
        //     var indexFriends = friends[i];
        //     totaldifference = 0;

        //     for (var j = 0; j < indexFriends.score.length; j++) {
        //         var indexFriendscore = indexFriends.score[j];
        //         var indexuserscores = userscores[j];
        //         totaldifference += Math.abs(parseInt(indexuserscores) - parseInt(indexFriendscore));
        //         if 
        //         friends.push
        //         return 
        //     }
        // }
    });
}

