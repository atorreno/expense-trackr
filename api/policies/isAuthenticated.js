module.exports = function(req, res, next) {
   if (req.isAuthenticated()) { 
   		if (req.user.username == 'atorreno' || req.user.username == 'cathytorreno'){
   			return next();	
   		} else {
   			return res.forbidden('Access denied.');
   		}
        
    }
    else{
        return res.redirect('/login');
    }
};