const Tabela = require('../models/orcamentos')
module.exports = {
  async create(req, res) {
    try {
      id = 0
      const { nome, cod_paciente, observacoes, pk_clinica, estado, valor_total, data, cod_tratamento, tipo, desconto, forma_pagamento } = req.body
      const tabela = await Tabela.findOne({ where: { id } })
      if (tabela) {
        res.status(401).json({ message: "Já existe este dado" })
      } else {
        const tabela = await Tabela.create({ nome, cod_paciente, observacoes, pk_clinica, estado, valor_total, data, cod_tratamento, tipo, desconto, forma_pagamento })
        res.status(200).json({ tabela })
      }
    } catch (error) {
      res.status(400).json({ error })
    }
  },
  async update(req, res) {
    try {
      const { id } = req.params

      const { nome, cod_paciente, observacoes, pk_clinica, estado, valor_total, data, cod_tratamento, tipo, desconto, forma_pagamento } = req.body
      const tabela = await Tabela.findOne({ where: { id } })
      if (!tabela) {
        res.status(401).json({ message: "Nenhum dado encontrado" })
      } else {
        const tabela = await Tabela.update({ nome, cod_paciente, observacoes, pk_clinica, estado, valor_total, data, cod_tratamento, tipo, desconto, forma_pagamento }, { where: { id } })
        res.status(200).json({ tabela })
      }
    } catch (error) {
      res.status(400).json({ error })
    }
  },
  async list(req, res) {
    try {
      const dado = await Tabela.findAll({ order: [['nome', 'ASC']]});
      if (!dado) {
        res.status(401).json({ message: 'Não existe dado cadastrada' })
      }
      res.status(200).json({ dado })
    } catch (error) {
      res.status(400).json({ error })
    }
  },
  async find(req, res) {
    try {
      const { cod_paciente } = req.params
      const tabela = await Tabela.findAll({ where: { cod_paciente } })

      if (!tabela) {
        res.status(401).json({ message: 'Não existe dado cadastrada' })
      }
      res.status(200).json({ tabela })
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
