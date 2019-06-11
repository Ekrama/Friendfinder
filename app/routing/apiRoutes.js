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
//goes through the people that have taken the survey before.
for(var i =0;i <friendArray.length; i++)
{
    var totalDifference = 0;
// for (start; end; increment)

    for(var j=0; j<friendArray[i].scores.length; j++)
{
   totalDifference += Math.abs(req.body.scores[j] -friendArray[i].scores[j]);
}

arrrayToHoldDiffernces.push(totalDifference);
[2,3,4,5]
mostcompatibleMatchIndex = arrrayToHoldDiffernces.indexOf(math.apply (math, arrrayToHoldDiffernces));
    return friendArray[mostcompatibleMatchIndex]
}

//hold the diff btn the users 
};


