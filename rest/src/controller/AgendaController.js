const Agenda = require('../models/agenda')
module.exports = {
  async create(req, res) {
    try {
      const { cod_paciente,cod_profissional,cod_unidade,pk_clinica,dia,titulo,inicio,fim } = req.body
      const agenda = await Agenda.findOne({ where: { inicio } })
      if (agenda) {
        res.status(401).json({ message: "Já existe este evento" })
      } else {
        const agenda = await Agenda.create({ cod_paciente,cod_profissional,cod_unidade,pk_clinica,dia,titulo,inicio,fim })
        res.status(200).json({ agenda })
      }
    } catch (error) {
      res.status(400).json({ error })
    }
  },
  async update(req, res) {
    try {
      const { id } = req.params
      const { cod_paciente,cod_profissional,cod_unidade,pk_clinica,dia,titulo,inicio,fim } = req.body
      const agenda = await Agenda.findOne({ where: { id } })
      if (!agenda) {
        res.status(401).json({ message: "Nenhum agenda encontrado" })
      } else {
        const agenda = await Agenda.update({ cod_paciente,cod_profissional,cod_unidade,pk_clinica,dia,titulo,inicio,fim }, { where: { id } })
        res.status(200).json({ agenda })
      }
    } catch (error) {
      res.status(400).json({ error })
    }
  },
  async list(req, res) {
    try {
      const agendas = await Agenda.findAll()
      if (!agendas) {
        res.status(401).json({ message: 'Não existe agenda cadastrada' })
      }
      res.status(200).json({ agendas })
    } catch (error) {
      res.status(400).json({ error })
    }
  },
  async delete(req, res) {
    const { id } = req.params
    const agenda = await Agenda.findOne({ where: { id } })
    if (!agenda) {
      res.status(401).json({ message: 'Agenda não encontrado' })
    } else {
      await Agenda.destroy({ where: { id } })
      res.status(200).json({ ok: true })
    }
  }
}