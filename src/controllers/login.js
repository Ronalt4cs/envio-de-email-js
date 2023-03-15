const transport = require('../email')
const { compilerHtml } = require('../utils/compilerHTML')

const user = {
  name: 'nome do usuário para teste',
  email: 'email_do_usuário@email.com',
  password: 'senha'
}

const login = async (req, res) => {
  const { email, password } = req.body

  if (email !== user.email) {
    return res.status(400).json({ mensagem: 'Email ou senha inválidos. Tente novamente' })
  }
  if (password !== user.password) {
    return res.status(400).json({ mensagem: 'Email ou senha inválidos. Tente novamente' })
  }

  const htmlStr = await compilerHtml('./src/templates/login.html', { username: user.name })

  transport.sendMail({
    from: `${process.env.EMAIL_NAME} <${process.env.EMAIL_FROM}>`,
    to: `${user.name} <${user.email}>`,
    subject: "Tentativa de login",
    html: htmlStr
  }
  )

  return res.status(200).json({ mensagem: 'Login efetuado com sucesso!' })
}


module.exports = login