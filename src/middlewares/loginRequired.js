const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
  const { authorization } = req.headers;

  if(!authorization) {
    return res.status(401).json({
      errors: ['Login Required'],
    });
  }

  const [, token] = authorization.split(' ');

  try {
    const dados = jwt.verify(token, process.env.TOKEN_PASS);
    const { id, email } = dados;
    req.userId = id;
    req.userEmail = email;
    return next();
  // eslint-disable-next-line no-unused-vars
  }catch(e) {
    return res.status(401).json({
      errors: ['Token Expirado ou Inválido'],
    });
  }
}
