const Tabela = require('../models/pacientes')
module.exports = {
  async create(req, res) {
    try {
      const { nome,sexo,cpf,documento,endereco,complemento,bairro,cidade,telefone1,telefone2,celular,foto,pk_clinica,email,facebook,instagram,data_nasc,cep,profissao } = req.body
      const tabela = await Tabela.findOne({ where: { cpf } })
      if (tabela) {
        res.status(401).json({ message: "Já existe este dado" })
      } else {
        const tabela = await Tabela.create({ nome,sexo,cpf,documento,endereco,complemento,bairro,cidade,telefone1,telefone2,celular,foto,pk_clinica,email,facebook,instagram,data_nasc,cep,profissao })
        res.status(200).json({ tabela })
      }
    } catch (error) {
      res.status(400).json({ error })
    }
  },
  async update(req, res) {
    try {
      const { id } = req.params

      const { nome,sexo,cpf,documento,endereco,complemento,bairro,cidade,telefone1,telefone2,celular,foto,pk_clinica,email,facebook,instagram,data_nasc,cep,profissao } = req.body
      const tabela = await Tabela.findOne({ where: { id } })
      if (!tabela) {
        res.status(401).json({ message: "Nenhum dado encontrado" })
      } else {
        const tabela = await Tabela.update({ nome,sexo,cpf,documento,endereco,complemento,bairro,cidade,telefone1,telefone2,celular,foto,pk_clinica,email,facebook,instagram,data_nasc,cep,profissao }, { where: { id } })
        res.status(200).json({ tabela })
      }
    } catch (error) {
      res.status(400).json({ error })
    }
  },
  async find(req, res) {
    try {
      const { id } = req.params
      const tabela = await Tabela.findOne({ where: { id } })

      if (!tabela) {
        res.status(401).json({ message: 'Não existe dado cadastrada' })
      }
      res.status(200).json({ tabela })
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