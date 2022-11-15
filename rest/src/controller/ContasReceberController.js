const Tabela = require('../models/contas_receber')
module.exports = {
  async create(req, res) {
    try {
      id = 0
      const { valor,historico,pk_clinica,data,pk_plano_pagamento,estado } = req.body
      const tabela = await Tabela.findOne({ where: { id } })

      console.log('aqui...')

      if (tabela) {
        res.status(401).json({ message: "Já existe este dado" })
      } else {
        const tabela = await Tabela.create({ valor,historico,pk_clinica,data,pk_plano_pagamento,estado })
        res.status(200).json({ tabela })
      }
    } catch (error) {
      res.status(400).json({ error })
    }
  },
  async update(req, res) {
    try {
      const { id } = req.params

      const { valor,historico,pk_clinica,data,pk_plano_pagamento,estado } = req.body

      const tabela = await Tabela.findOne({ where: { id } })
      if (!tabela) {
        res.status(401).json({ message: "Nenhum dado encontrado" })
      } else {
        const tabela = await Tabela.update({ valor,historico,pk_clinica,data,pk_plano_pagamento,estado}, { where: { id } })
        res.status(200).json({ tabela })
      }
    } catch (error) {
      res.status(400).json({ error })
    }
  },
  async list(req, res) {
    try {
      const dado = await Tabela.findAll()
      if (!dado) {
        res.status(401).json({ message: 'Não existe dado cadastrada' })
      }
      res.status(200).json({ dado })
    } catch (error) {
      res.status(400).json({ error })
    }
  },
  async delete(req, res) {
    const { id } = req.params
    
    const dado = await Tabela.findOne({ where: { id } })
    console.log(dado)

    if (!dado) {
      res.status(401).json({ message: 'Dado não encontrado' })
    } else {
      await Tabela.destroy({ where: { id } })
      res.status(200).json({ ok: true })
    }
  }
}