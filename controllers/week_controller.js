const Habit = require('../models/habit');

module.exports.home= function(req,res){
  //fetches all the habits and passes it to 7days view
  Habit.find({},function(err,habits){
      if(err){
        console.log('Error in fetching contacts from db');
        return;

      }
      return res.render('7-days', 
      {
        title: "Week Status",
        habits: habits
      });
  });
 
}

//update module
module.exports.update = async function(req,res){
    
  //Handles status changes
  try{
    let habit = await Habit.findById(req.params.id);
    habit.days[req.params.day] = req.params.value;
        
    await Habit.findByIdAndUpdate(req.params.id, {days: habit.days});
    habit = await Habit.findById(req.params.id);
    
    //recalculating completed and streak data for the habit
    let complete=0;
    let streak =0;
    let curr_streak=0;
    for(i of habit.days){
      if(i === 'Completed')
        complete++;

      if(i === 'Completed'){
        curr_streak++;
      }else{
        if(curr_streak>streak)
          streak = curr_streak;
        curr_streak = 0;
      }
      
    } 
    if(curr_streak > streak)
      streak = curr_streak;
    await Habit.findByIdAndUpdate(req.params.id, {completed: complete, streak: streak});
    return res.redirect('back');
      
  }
  catch(err){
    console.log('Error' + err);
  }
  
}