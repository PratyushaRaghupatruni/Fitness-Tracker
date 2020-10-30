'use strict';

'use strict';

var path=require('path');

module.exports=function(app){
    app.get('/',function(req,res){
        //establishing a route for index.html
        res.sendFile(path.join(__dirname,'../public/index.html'));
    });
    
    app.get(`/exercise`,function(req,res){
        //establishing a route for excercise.html
        res.sendFile(path.join(__dirname,`../public/exercise.html`));
    });

    app.get(`/stats`,function(req,res){
        //establishing a route for stats.html
        res.sendFile(path.join(__dirname,`../public/stats.html`));
    });
};