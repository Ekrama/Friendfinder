var friendArray = require('../data/friends')
var path =require('path');

module.exports = function(app) {
    app.get('/api/friends', function(req,res ) {
        res.json(friendArray);
    });


    app.post('/api/friends', function(req,res){
        var compatibleFriend = findMostCompatableFriends (req);
        friendArray.push(req.body);
        res.json(compatibleFriend);
    })
};

function findMostCompatableFriends(req) {
    var arrrayToHoldDiffernces = [];
    //console.log(friendArray);
    //goes through the people that have taken the survey before.
    console.log(friendArray.length);
    let minDifference = Infinity;
    let friendIndex = 0;
    for(var i=0; i < friendArray.length; i++){
        var totalDifference = 0;
    // for (start; end; increment)
        console.log(friendArray[i]);
        for(var j=0; j<friendArray[i].scores.length; j++){
            totalDifference += Math.abs(req.body.scores[j] -friendArray[i].scores[j]);
        }

        if (totalDifference < minDifference){
            minDifference = totalDifference;
            friendIndex = i;
        }
        return friendArray[friendIndex];
    }

//hold the diff btn the users 
};


