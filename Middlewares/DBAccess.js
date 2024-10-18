const DBAccess = (req,res,next) =>{
    
    req.usersCollection = req.app.get('usersCollection')
    req.ipCollection = req.app.get('ipCollection')
    req.blockedIPS = req.app.get('blockedIPS')

    next();

}

module.exports = DBAccess;