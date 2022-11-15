const User = require('../models/user')
module.exports = {
  async craete(req, res) {
    try {
      const { email,first_name,last_name,pass_hash,pass_salt,role,last_login,pk_clinica,facebook,instagram,cargo,tratamento,cpf,cro } = req.body
      const user = await User.findOne({ where: { email } })
      if (user) {
        res.status(401).json({ message: "Já existe um usuario com este email" })
      } else {
        const user = await User.create({ email,first_name,last_name,pass_hash,pass_salt,role,last_login,pk_clinica,facebook,instagram,cargo,tratamento,cpf,cro })
        res.status(200).json({ user })
      }
    } catch (error) {
      res.status(400).json({ error })
    }
  },
  async update(req, res) {
    try {
      const { id } = req.params
      const { email,first_name,last_name,pass_hash,pass_salt,role,last_login,pk_clinica,facebook,instagram,cargo,tratamento,cpf,cro } = req.body
      const user = await User.findOne({ where: { id } })
      if (!user) {
        res.status(401).json({ message: "Nenhum usuario encontrado" })
      } else {
        const user = await User.update({ email,first_name,last_name,pass_hash,pass_salt,role,last_login,pk_clinica,facebook,instagram,cargo,tratamento,cpf,cro }, { where: { id } })
        res.status(200).json({ user })
      }
    } catch (error) {
      res.status(400).json({ error })
    }
  },
  async list(req, res) {
    try {
      const usuarios = await User.findAll()
      if (!usuarios) {
        res.status(401).json({ message: 'Não existe usuario cadastros' })
      }
      res.status(200).json({ usuarios })
    } catch (error) {
      res.status(400).json({ error })
    }
  },
  async delete(req, res) {
    const { id } = req.params
    const user = await User.findOne({ where: { id } })
    if (!user) {
      res.status(401).json({ message: 'Usuario não encontrado' })
    } else {
      await User.destroy({ where: { id } })
      res.status(200).json({ ok: true })
    }
  }
}
