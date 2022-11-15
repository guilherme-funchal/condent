const Cidade = require('../models/cidade')

module.exports = {
  async create(req, res) {
    try {
      const { nome,cod_estado } = req.body
      const cidade = await Cidade.findOne({ where: { nome } })
      if (cidade) {
        res.status(401).json({ message: "Já existe este evento" })
      } else {
        const cidade = await Cidade.create({ nome,cod_estado })
        res.status(200).json({ cidade })
      }
    } catch (error) {
      res.status(400).json({ error })
    }
  },
  async update(req, res) {
    try {
      const { id } = req.params
      const { nome,cod_estado } = req.body
      const cidade = await Cidade.findOne({ where: { nome } })
      if (!cidade) {
        res.status(401).json({ message: "Nenhum Cidade encontrado" })
      } else {
        const cidade = await Cidade.update({ nome,cod_estado }, { where: { id } })
        res.status(200).json({ cidade })
      }
    } catch (error) {
      res.status(400).json({ error })
    }
  },
  async list(req, res) {
    try {
      const cidades = await Cidade.findAll()
      if (!cidades) {
        res.status(401).json({ message: 'Não existe Cidade cadastrada' })
      }
      res.status(200).json({ cidades })
    } catch (error) {
      res.status(400).json({ error })
    }
  },
  async delete(req, res) {
    const { id } = req.params
    const cidade = await Cidade.findOne({ where: { id } })
    if (!cidade) {
      res.status(401).json({ message: 'Cidade não encontrado' })
    } else {
      await cidade.destroy({ where: { id } })
      res.status(200).json({ ok: true })
    }
  }
}