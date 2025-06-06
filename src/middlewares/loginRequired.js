const jwt = require('jsonwebtoken');
const User = require('../models/User')

module.exports = async (req, res, next) => {
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

    const user = await User.findOne({
      where:{
        id,
        email,
      },
    });

    if(!user){
    return res.status(401).json({
      errors: ['Usuário Inválido'],
    });
    }
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
