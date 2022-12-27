const jwt = require("jsonwebtoken");
const { JWTPRIVATEKEY } = require('../config/jwt.config')

const verifyToken = (req, res, next) =>  {
  const authenticateToken = req.headers.authorization
  const token = authenticateToken.split(' ')[1]
  const privateKey = JWTPRIVATEKEY
  if (token == null) return res.sendStatus(401)

  jwt.verify(token, privateKey, {algorithms: "RS256"}, (err, user) => {
    if (err) return res.sendStatus(403)
    req.user = user
    next()
  })
}

module.exports = verifyToken


