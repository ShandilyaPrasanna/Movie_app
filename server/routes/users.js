var express = require('express');

var router = express.Router();

var Movie = require('../models/movie');

var mongoose= require("mongoose");

/* GET users listing. */

console.log("1st route");

router.route("/add").post(function(req,res){

if(req.body){
console.log(req.body);
 var movieVar  = new Movie(req.body);  movieVar.save(function(err){

   if (err){

     res.send(err);

   }

   else{

     res.send("Movie Instered");

   }

 });

}

});

router.route("/getmovies").get(function(req,res){

mongoose.model('MovieDetails').find({}, function(err, movies){

       if (err) {

                   res.send(err);

               }

               else {

                 res.send(movies);

             }

});

});router.route("/update").put(function(req,res){    var upid  = req.query.id;

   var uptitle = req.query.title;Movie.find({'idkey':upid}, function(err, movie){

       if (err) {

         console.log(err);

                   res.send(err);

               }

               else {

               Movie.update({'idkey':upid},{"$set":{'Title':uptitle}},function(err){

                 if (err){

                   res.send(err);

                 }

                 else{

                   res.send("Movie updated with response \n"+movie);

                 }

               });              }

});

});router.route("/delmovies").delete(function(req,res){    var delid  = req.query.id;Movie.find({'imdbID':delid}, function(err, movie){

       if (err) {

         console.log(err);

                   res.send(err);

               }

               else {

                 //console.log(movies);
                
                 Movie.remove({'imdbID':delid},function (err, data){



                   if (err) {                      res.send(err);

               } else {                  res.send(data);

               }

                 });              }

});

});module.exports = router;
