var path =require('path');

module.exports = function(app) {
    app.get('/survey', function(req,res) {
        res.SendFile(path.join(__dirname, '/../public/survey.html'));
        
    });
    
    app.get('/', function(req, res){
        res.SendFile(path.join(__dirname, '/../public/home.html'));
    });
}