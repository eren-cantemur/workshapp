const {RouteRoles} = require('../lib/routeRoles') 
const {JWTPRIVATEKEY} = require('../config/jwt.config')
const jwt = require('jsonwebtoken')
const verifyRole = (req, res, next, path, id) => {
    const authenticateToken = req.headers.authorization
    const token = authenticateToken.split(' ')[1]
    
    const decoded = jwt.verify(token, JWTPRIVATEKEY, {algorithms: "RS256"})

    if (!RouteRoles[path][id].includes(decoded.role)){
        return res.status(403).send({message:"user type not allowed to do this operation."})
    }

    next()
}

module.exports = verifyRole