const Unidade = require('../models/unidade')
module.exports = {
  async create(req, res) {
    try {
      const { nome,endereco,complemento,cidade,bairro,estado,pk_clinica } = req.body
      const unidade = await Unidade.findOne({ where: { nome } })
      if (unidade) {
        res.status(401).json({ message: "Já existe um usuario com este email" })
      } else {
        const unidade = await Unidade.create({ nome,endereco,complemento,cidade,bairro,estado,pk_clinica })
        res.status(200).json({ unidade })
      }
    } catch (error) {
      res.status(400).json({ error })
    }
  },
  async update(req, res) {
    try {
      const { id } = req.params
      const { nome,endereco,complemento,cidade,bairro,estado,pk_clinica } = req.body
      const unidade = await Unidade.findOne({ where: { id } })
      if (!unidade) {
        res.status(401).json({ message: "Nenhum unidade encontrado" })
      } else {
        const unidade = await Unidade.update({ nome,endereco,complemento,cidade,bairro,estado,pk_clinica }, { where: { id } })
        res.status(200).json({ unidade })
      }
    } catch (error) {
      res.status(400).json({ error })
    }
  },
  async list(req, res) {
    try {
      const unidades = await Unidade.findAll()
      if (!unidades) {
        res.status(401).json({ message: 'Não existe unidade cadastrada' })
      }
      res.status(200).json({ unidades })
    } catch (error) {
      res.status(400).json({ error })
    }
  },
  async delete(req, res) {
    const { id } = req.params
    const unidade = await Unidade.findOne({ where: { id } })
    if (!unidade) {
      res.status(401).json({ message: 'Usuario não encontrado' })
    } else {
      await Unidade.destroy({ where: { id } })
      res.status(200).json({ ok: true })
    }
  }
}
