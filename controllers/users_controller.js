module.exports.profile = function(req, res){
  return res.end('<h1>User Profile</h1>');
}

// render sign out page
module.exports.signUp = function(req, res) {
  return res.render('user_sign_up', {
    title: "HabitTracker | sign up"
  })
}

// Render sign in page
module.exports.signIn = function(req, res) {
  return res.render('user_sign_in', {
    title: "HabitTracker | sign in"
  })
}

// get the sign up data 
module.exports.create = function(req, res) {

}

// Sign in and create a session for the user
module.exports.createSession = function(req, res) {

}