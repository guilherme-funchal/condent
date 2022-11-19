const Tabela = require('../models/fornecedores')
module.exports = {
  async create(req, res) {
    try {
      const { fornecedor,razao_social,cnpj,ie,endereco,bairro,pk_clinica,cidade,whatsapp,email,cep,observacoes } = req.body
      const tabela = await Tabela.findOne({ where: { cnpj } })
      if (tabela) {
        res.status(401).json({ message: "Já existe este dado" })
      } else {
        const tabela = await Tabela.create({ fornecedor,razao_social,cnpj,ie,endereco,bairro,pk_clinica,cidade,whatsapp,email,cep,observacoes })
        res.status(200).json({ tabela })
      }
    } catch (error) {
      res.status(400).json({ error })
    }
  },
  async update(req, res) {
    try {
      const { id } = req.params

      const { fornecedor,razao_social,cnpj,ie,endereco,bairro,pk_clinica,cidade,whatsapp,email,cep,observacoes } = req.body
      const tabela = await Tabela.findOne({ where: { id } })
      if (!tabela) {
        res.status(401).json({ message: "Nenhum dado encontrado" })
      } else {
        const tabela = await Tabela.update({ fornecedor,razao_social,cnpj,ie,endereco,bairro,pk_clinica,cidade,whatsapp,email,cep,observacoes }, { where: { id } })
        res.status(200).json({ tabela })
      }
    } catch (error) {
      res.status(400).json({ error })
    }
  },
  async list(req, res) {
    try {
      const dado = await Tabela.findAll({ order: [['fornecedor', 'ASC']]});
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