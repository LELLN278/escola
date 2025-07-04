const User = require('../models/User');
const jwt = require('jsonwebtoken');

class TokenController {
  async store(req, res) {
    const { email = '', password = ''} = req.body;

    if(!email || !password){
      return res.status(401).json({
        errors: ['Credenciais Inválidas'],
      });
    }

    const user = await User.findOne({ where: { email } });

    if(!user){
      return res.status(401).json({
        errors: ['Usuário não existe'],
      });
    }

    if(!(await user.passwordIsValid(password))){
      return res.status(401).json({
        errors: ['Senha Inválida'],
      });
    }

    const { id } = user;
    const token = jwt.sign({ id, email }, process.env.TOKEN_PASS, {
      expiresIn: process.env.TOKEN_EXPIRATION,
    })

      return res.json({ token });
  }
}

module.exports = new TokenController();
