const Habit = require('../models/habit');

module.exports.create = function(req, res){
  Habit.create({
    habit: req.body.habit,
    user: req.user._id,
    priority: req.body.priority,
    date: req.body.date
  }, function(err, habit){
    if(err){
      console.log('Error in creating habit');
      return;
    }

    return res.redirect('back');
  });
}

module.exports.destroy = function(req, res){
  Habit.findById(req.params.id, function(err, habit){
    // .id means converting the object id into string 
    if(habit.user == req.user.id){
      habit.remove();
    }
    return res.redirect('back');
  });
}