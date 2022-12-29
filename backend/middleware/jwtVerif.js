const jwt = require("jsonwebtoken");
const { JWTPRIVATEKEY } = require('../config/jwt.config')

const verifyToken = (req, res, next) =>  {
  const authenticateToken = req.headers.authorization
  const token = authenticateToken.split(' ')[1]
  const privateKey = JWTPRIVATEKEY
  if (token == null) {
    res.status(401).send({
      type: "Error",
      message: "Token required.",
    });
  }

  jwt.verify(token, privateKey, {algorithms: "RS256"}, (err, user) => {
    if (err) {
      res.status(403).send({
        type: "Error",
        message: "Unvalid Token.",
      });
    }
    req.user = user
    next()
  })
}

module.exports = verifyToken


