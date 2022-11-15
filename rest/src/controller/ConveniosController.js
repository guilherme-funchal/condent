const Tabela = require('../models/convenios')
module.exports = {
  async create(req, res) {
    try {
      id = 0
      const { operadora,codigo_cred,tabela,valor,observacoes,pk_clinica } = req.body
      const table = await Tabela.findOne({ where: { id } })

      if (table) {
        res.status(401).json({ message: "Já existe este dado" })
      } else {
        const table  = await Tabela.create({ operadora,codigo_cred,tabela,valor,observacoes,pk_clinica })
        res.status(200).json({ table  })
      }
    } catch (error) {
      res.status(400).json({ error })
    }
  },
  async update(req, res) {
    try {
      const { id } = req.params

      const { operadora,codigo_cred,tabela,valor,observacoes,pk_clinica } = req.body

      const table = await Tabela.findOne({ where: { id } })
      if (!table) {
        res.status(401).json({ message: "Nenhum dado encontrado" })
      } else {
        const table = await Tabela.update({ operadora,codigo_cred,tabela,valor,observacoes,pk_clinica }, { where: { id } })
        res.status(200).json({ table  })
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