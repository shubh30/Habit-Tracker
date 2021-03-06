const Habit = require('../models/habit');

module.exports.home = function(req, res){
  // Habit.find({}, function(err, habits){
  //   return res.render('home', {
  //     title: "Home",
  //     habits: habits
  //   });
  // })

  // Populate the user for each post
  Habit.find({}).populate('user').exec(function(err, habits){
    if(err){
      console.log('Error in fetching contacts from db');
      return;
    }
    
    return res.render('home', {
      title: "Home",
      habits: habits
    });
  });
}

