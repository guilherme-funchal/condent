import React, { useState, useEffect, useRef } from 'react';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Sidenav from './Components/Sidenav';
import ReactDOM from "react-dom";
import { CSSTransition } from "react-transition-group";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { Link, useLocation } from "react-router-dom";
import Api from './Api';
import { Controller, useForm } from "react-hook-form";
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import { useNavigate } from 'react-router-dom';
import Table from './Components/Tables/Table';

export default function Paciente() {

    const navigate = useNavigate();
    const column_orcamento = [
        { heading: 'Codigo', value: 'id' },
        { heading: 'Nome', value: 'nome' },
        { heading: 'Valor Total', value: 'valor_total' },
        { heading: 'Data', value: 'data' },
        { heading: 'Estado', value: 'estado' },
      ]
    
      const column_tratamento = [
        { heading: 'Codigo', value: 'id' },
        { heading: 'Descrição', value: 'descricao' },
        { heading: 'Situação', value: 'situacao' },
        { heading: 'Data inicio', value: 'data_inicio' },
        { heading: 'Data fim', value: 'data_fim' },
        { heading: 'Valor total', value: 'valor_total' },
        { heading: 'Saldo', value: 'saldo' },
      ]  
    

    async function editUser() {
        const response = await Api.put('pacientes/' + paciente.id, paciente);

        if (response.status === 200) {
            await Sucesso.fire({
                icon: 'success',
                title: 'Usuário atualizado'
            });
        } else {
            await Falha.fire({
                icon: 'error',
                title: 'Usuário não atualizado'
            });
        }
    }

    async function delUser() {

        (async () => {
            const { value: text } = await Swal.fire({
                title: 'Excluir usuário?',
                icon: 'question',
                showDenyButton: true,
                showCancelButton: false,
                confirmButtonText: 'Sim',
                denyButtonText: 'Não',
                customClass: {
                    actions: 'my-actions',
                    cancelButton: 'order-1 right-gap',
                    confirmButton: 'order-2',
                    denyButton: 'order-3',
                }
            }).then((result) => {
                if (result.isConfirmed) {

                    var response = Api.delete('pacientes/' + paciente.id);
                    Sucesso.fire({
                        icon: 'success',
                        title: 'Usuário foi excluído'
                    });
                    navigate("/pacientes");
                    navigate(0);

                } else if (result.isDenied) {
                    Falha.fire({
                        icon: 'error',
                        title: 'Usuário não excluído'
                    });
                }
            })
        })()
    }

    const handlesubmit = () => {
        form.current.reset(); //this will reset all the inputs in the form
    }

    function resetForm() {
        document.getElementById("form").reset();
    }

    const [inputs, setInputs] = useState({});
    const [validated, setValidated] = useState(false);
    const [selected, setSelected] = useState('yes');
    const [item, setItems] = useState([]);
    const Sucesso = Swal.mixin({
        toast: true,
        position: 'center',
        iconColor: 'green',
        customClass: {
            popup: 'colored-toast'
        },
        showConfirmButton: false,
        timer: 2500,
        timerProgressBar: true
    });

    const Falha = Swal.mixin({
        toast: true,
        position: 'center',
        iconColor: 'falha',
        customClass: {
            popup: 'colored-toast'
        },
        showConfirmButton: false,
        timer: 2500,
        timerProgressBar: true
    });

    const MySwal = withReactContent(Swal);
    const form = useRef(null);

    const {
        control,
        handleSubmit,
        formState: { errors },
    } = useForm({
    });



    const getPaciente = async (id) => {
        const response = await Api.get('pacientes/' + id);
        setPaciente(response.data.tabela);
    };

    const getOrcamentos = async (cod_paciente) => {
        const response = await Api.get('orcamentos/' + cod_paciente);
        setOrcamentos(response.data.tabela);
        console.log("Orca->",response.data.tabela);
    };

    const getTratamentos = async (cod_paciente) => {
        const response = await Api.get('tratamentos/' + cod_paciente);
        setTratamentos(response.data.tabela);
        console.log("Total Trat->", tratamentos.lenght);
    };

    useEffect(() => {
        getPaciente(location.state.id);
        getOrcamentos(location.state.id);
        getTratamentos(location.state.id);
    }, []);

    let location = useLocation();

    const [paciente, setPaciente] = useState([]);
    const [orcamentos, setOrcamentos] = useState([]);
    const [tratamentos, setTratamentos] = useState([]);
    const [totalTratamentos, setTotalTratamentos] = useState([]);
    const [totalOrcamentos, setTotalOrcamentos] = useState([]);

    return (

        <div>

            <Header />
            <Sidenav />
            {/* Content Wrapper. Contains page content */}
            <div className="content-wrapper">
                {/* Content Header (Page header) */}
                <div className="content-header">
                    <div className="container-fluid">
                        <div className="row mb-1">
                            <div className="col-sm-8">
                                <h1 className="m-0">Pacientes</h1>
                            </div>{/* /.col */}
                        </div>{/* /.row */}
                    </div>{/* /.container-fluid */}
                </div>
                {/* /.content-header */}
                {/* Main content */}
                <div className='row'>
                    <div className='row'>

                    </div>
                </div>
                <div className="row">
                    <div className="col-12 col-sm-6">
                        <div className="card card-primary card-tabs">
                            <div className="card-header p-0 pt-1">
                                <ul className="nav nav-tabs" id="custom-tabs-one-tab" role="tablist">
                                    <li className="nav-item">
                                        <a className="nav-link active" id="custom-tabs-one-dashboard-tab" data-toggle="pill" href="#custom-tabs-one-dashboard" role="tab" aria-controls="custom-tabs-one-dashboard" aria-selected="true">Dashboard</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" id="custom-tabs-one-home-tab" data-toggle="pill" href="#custom-tabs-one-home" role="tab" aria-controls="custom-tabs-one-home" aria-selected="false">Basico</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" id="custom-tabs-one-profile-tab" data-toggle="pill" href="#custom-tabs-one-profile" role="tab" aria-controls="custom-tabs-one-profile" aria-selected="false">Contatos</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" id="custom-tabs-one-messages-tab" data-toggle="pill" href="#custom-tabs-one-messages" role="tab" aria-controls="custom-tabs-one-messages" aria-selected="false">Midias sociais</a>
                                    </li>
                                </ul>
                            </div>
                            <div className="card-body">
                                <form noValidate onSubmit={handleSubmit()}>
                                    <div className="tab-content" id="custom-tabs-one-tabContent">
                                        <div className="tab-pane fade show active" id="custom-tabs-one-dashboard" role="tabpanel" aria-labelledby="custom-tabs-one-dashboard-tab">
                                            <div>
                                                <div className="card-body">
                                                    <div className="row">

                                                        <div className="widget-user-header bg-warning">
                                                            <div className="widget-user-image">
                                                                <img className="img-circle elevation-2" src="dist/img/user7-128x128.jpg" alt="User Avatar"></img>
                                                            </div>

                                                            <h3 className="widget-user-username">{paciente?.nome}</h3>
                                                            <h5 className="widget-user-desc">{paciente?.celular}</h5>
                                                            <h5 className="widget-user-desc">{paciente?.email}</h5>
                                                        </div>
                                                        <div className="card-footer p-0">
                                                            <ul className="nav flex-column">
                                                                <li className="nav-item">
                                                                    <a href="#" className="nav-link">
                                                                        Tratamentos <span className="float-right badge bg-primary">{tratamentos.length}</span>
                                                                    </a>
                                                                </li>
                                                                <li className="nav-item">
                                                                    <a href="#" className="nav-link">
                                                                        Orçamentos <span className="float-right badge bg-info">{orcamentos.length}</span>
                                                                    </a>
                                                                </li>
                                                                <li className="nav-item">
                                                                    <a href="#" className="nav-link">
                                                                        Ficha financeira<span className="float-right badge bg-success">12</span>
                                                                    </a>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="tab-pane fade" id="custom-tabs-one-home" role="tabpanel" aria-labelledby="custom-tabs-one-home-tab">

                                            <div>
                                                <div className="card-body">

                                                    <div className="row">
                                                        <div className="col-8">
                                                            <label htmlFor="exampleInputEmail1">Nome</label>
                                                            <input type="hidden" name="id" value={paciente?.id} />
                                                            <input type="text" className="form-control" name="nome" id="nome" placeholder="Nome" onChange={(e) => paciente.nome = e.target.value} defaultValue={paciente?.nome} />
                                                        </div>
                                                        <div className="col-4">
                                                            <label>Sexo</label><br></br>
                                                            <select name="sexo" id="sexo" onChange={(e) => paciente.sexo = e.target.value}>
                                                                <option value="f">Feminino</option>
                                                                <option value="m">Masculino</option>
                                                            </select>
                                                        </div>
                                                    </div>
                                                    <div className="row">
                                                        <div className="col">
                                                            <label htmlFor="exampleInputEmail1">CPF</label>
                                                            <input type="text" className="form-control" name="cpf" id="cpf" onChange={(e) => paciente.cpf = e.target.value} defaultValue={paciente?.cpf} />
                                                        </div>
                                                        <div className="col">
                                                            <label htmlFor="exampleInputEmail1">RG</label>
                                                            <input type="text" className="form-control" name="documento" id="documento" onChange={(e) => paciente.documento = e.target.value} defaultValue={paciente?.documento} />
                                                        </div>
                                                    </div>
                                                    <div className="row">
                                                        <div className="col">
                                                            <label htmlFor="exampleInputEmail1">Endereço</label>
                                                            <input type="text" className="form-control" name="endereco" id="endereco" defaultValue={paciente?.endereco} onChange={(e) => paciente.endereco = e.target.value} />
                                                        </div>
                                                        <div className="col">
                                                            <label htmlFor="exampleInputEmail1">Complemento</label>
                                                            <input type="text" className="form-control" name="complemento" id="complemento" defaultValue={paciente?.complemento} onChange={(e) => paciente.complemento = e.target.value} />
                                                        </div>
                                                    </div>
                                                    <div className="row">
                                                        <div className="col">
                                                            <label htmlFor="exampleInputEmail1">Bairro</label>
                                                            <input type="text" className="form-control" name="bairro" id="bairro" defaultValue={paciente?.bairro} onChange={(e) => paciente.bairro = e.target.value} />
                                                        </div>
                                                        <div className="col">
                                                            <label htmlFor="exampleInputEmail1">Cidade</label>
                                                            <input type="text" className="form-control" name="cidade" id="cidade" defaultValue={paciente?.cidade} onChange={(e) => paciente.cidade = e.target.value} />
                                                        </div>
                                                    </div>
                                                    <div className="row">
                                                        <div className="col">
                                                            <label htmlFor="exampleInputEmail1">CEP</label>
                                                            <input type="text" className="form-control" name="cep" id="cep" defaultValue={paciente?.cep} onChange={(e) => paciente.cep = e.target.value} />
                                                        </div>
                                                        <div className="col">
                                                            <label htmlFor="exampleInputEmail1">Profissão</label>
                                                            <input type="text" className="form-control" name="profissao" id="profissao" defaultValue={paciente?.profissao} onChange={(e) => paciente.profissao = e.target.value} />
                                                        </div>
                                                    </div>
                                                    <div className="row">
                                                        <div className="col">
                                                            <label htmlFor="exampleInputEmail1">Foto</label>
                                                            <input type="file" className="form-control" name="foto" id="foto" defaultValue={paciente?.foto} onChange={(e) => paciente.foto = e.target.value} />
                                                        </div>
                                                    </div>
                                                    <div className="row">
                                                        <div className="col">
                                                            <label htmlFor="exampleInputEmail1">Data aniversário</label>
                                                            <input type="text" className="form-control" name="data_nasc" id="data_nasc" defaultValue={paciente?.data_nasc} onChange={(e) => paciente.data_nasc = e.target.value} />
                                                        </div>
                                                    </div>

                                                </div>
                                                <div className="card-footer">
                                                    <button type="submit" className="btn btn-danger" onClick={() => delUser()}>Excluir</button>

                                                    <button type="submit" className="btn btn-primary" onClick={() => editUser()}>Salvar</button>
                                                </div>
                                            </div>

                                        </div>
                                        <div className="tab-pane fade" id="custom-tabs-one-profile" role="tabpanel" aria-labelledby="custom-tabs-one-profile-tab">
                                            <div>
                                                <div className="card-body">
                                                    <div className="row">
                                                        <div className="col">
                                                            <label htmlFor="exampleInputEmail1">Celular</label>
                                                            <input type="text" className="form-control" name="celular" id="celular" defaultValue={paciente?.celular} onChange={(e) => paciente.celular = e.target.value} />

                                                        </div>
                                                        <div className="col">
                                                            <label htmlFor="exampleInputEmail1">Comum</label>
                                                            <input type="text" className="form-control" name="telefone1" id="telefone1" defaultValue={paciente?.telefone1} onChange={(e) => paciente.telefone1 = e.target.value} />
                                                        </div>
                                                    </div>
                                                    <div className="row">
                                                        <div className="col">
                                                            <label htmlFor="exampleInputEmail1">Email</label>
                                                            <input type="text" className="form-control" name="email" id="email" defaultValue={paciente?.email} onChange={(e) => paciente.email = e.target.value} />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="tab-pane fade" id="custom-tabs-one-messages" role="tabpanel" aria-labelledby="custom-tabs-one-messages-tab">
                                            <div>
                                                <div className="card-body">
                                                    <div className="row">
                                                        <div className="col">
                                                            <label htmlFor="exampleInputEmail1">Facebook</label>
                                                            <input type="text" className="form-control" name="facebook" id="facebook" defaultValue={paciente?.facebook} onChange={(e) => paciente.facebook = e.target.value} />
                                                        </div>
                                                        <div className="col">
                                                            <label htmlFor="exampleInputEmail1">Instagram</label>
                                                            <input type="text" className="form-control" name="instagram" id="instagram" defaultValue={paciente?.instagram} onChange={(e) => paciente.instagram = e.target.value} />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-sm-6">
                        <div className="card card-primary card-tabs">
                            <div className="card-header p-0 pt-1">
                                <ul className="nav nav-tabs" id="custom-tabs-two-tab" role="tablist">
                                    <li className="nav-item">
                                        <a className="nav-link active" id="custom-tabs-two-home-tab" data-toggle="pill" href="#custom-tabs-two-home" role="tab" aria-controls="custom-tabs-two-home" aria-selected="true">Orçamentos</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" id="custom-tabs-two-trat-tab" data-toggle="pill" href="#custom-tabs-two-trat" role="tab" aria-controls="custom-tabs-two-trat" aria-selected="false">Tratamentos</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" id="custom-tabs-two-fin-tab" data-toggle="pill" href="#custom-tabs-two-fin" role="tab" aria-controls="custom-tabs-two-fin" aria-selected="false">Financeiro</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" id="custom-tabs-two-file-tab" data-toggle="pill" href="#custom-tabs-two-file" role="tab" aria-controls="custom-tabs-two-file" aria-selected="false">Arquivos</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" id="custom-tabs-two-agenda-tab" data-toggle="pill" href="#custom-tabs-two-agenda" role="tab" aria-controls="custom-tabs-two-agenda" aria-selected="false">Agenda</a>
                                    </li>
                                </ul>
                            </div>
                            <div className="card-body">
                                <div className="tab-content" id="custom-tabs-two-tabContent">
                                    <div className="tab-pane fade show active" id="custom-tabs-two-home" role="tabpanel" aria-labelledby="custom-tabs-two-home-tab">
                                        <div>Orçamentos</div>
                                        <button id="btn4" className="btn btn-outline-primary btn-sm" is="dmx-button" value="" type="button">
                                            <i></i>
                                            <i className="fa fa-plus"></i>
                                        </button>
                                        <div className="table-responsive">

                                        <Table data={orcamentos} column={column_orcamento} />
                                        </div>
                                    </div>

                                    <div className="tab-pane fade" id="custom-tabs-two-trat" role="tabpanel" aria-labelledby="custom-tabs-two-trat-tab">
                                        <div className="table-responsive">
                                            <div>Tratamentos</div>
                                            <button id="btn4" className="btn btn-outline-primary btn-sm" is="dmx-button" value="" type="button">
                                                <i></i>
                                                <i className="fa fa-plus"></i>
                                            </button>
                                            <Table data={tratamentos} column={column_tratamento} />
                                            {/* <table className="table table-striped table-bordered table-hover table-sm">
                                                <thead>
                                                    <tr>
                                                        <th className="text-center font-weight-bold">Código</th>
                                                        <th className="text-center font-weight-bold">Nome do tratamento</th>
                                                        <th className="text-center font-weight-bold">Valor total</th>
                                                        <th className="text-center font-weight-bold">Data</th>
                                                        <th className="text-center font-weight-bold">Estado</th>

                                                    </tr>
                                                </thead>
                                                <tbody is="dmx-repeat" dmx-generator="bs4table" id="tableRepeat1">
                                                    <tr>
                                                        <td className="text-center">82</td>
                                                        <td>Novo tratamento</td>
                                                        <td className="text-center">R$ </td>
                                                        <td className="text-center">15/11/2022</td>
                                                        <td className="text-center">Criação</td>

                                                    </tr>

                                                    <tr>
                                                        <td className="text-center">83</td>
                                                        <td>Novo tratamento</td>
                                                        <td className="text-center">R$ </td>
                                                        <td className="text-center">15/11/2022</td>
                                                        <td className="text-center">Criação</td>

                                                    </tr>
                                                </tbody>
                                            </table> */}
                                            {/* <div className="col-sm-12">
                                                <div>Itens</div>
                                                <button id="btn4" className="btn btn-outline-primary btn-sm" is="dmx-button" value="" type="button">
                                                    <i></i>
                                                    <i className="fa fa-plus"></i>
                                                </button>
                                                <div className="table-responsive">
                                                    <table className="table table-striped table-bordered table-hover table-sm">
                                                        <thead>
                                                            <tr>
                                                                <th className="small text-center font-weight-bold">Item&nbsp;</th>

                                                                <th className="small text-center font-weight-bold">Situação</th>
                                                                <th className="small text-center font-weight-bold">Data inicio</th>
                                                                <th className="small text-center font-weight-bold">Data final</th>


                                                                <th className="text-center small font-weight-bold">Valor</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody is="dmx-repeat" dmx-generator="bs4table" id="tableRepeat5">
                                                            <tr className="small">
                                                                <td className="text-center">Implante</td>
                                                                <td className="text-center">Em andamento</td>
                                                                <td className="text-center">30/06/2022</td>
                                                                <td className="text-center">01/07/2022</td>


                                                                <td className="text-center">R$ 1000,00</td>
                                                            </tr>

                                                            <tr className="small">
                                                                <td className="text-center">teste</td>
                                                                <td className="text-center">Em andamento</td>
                                                                <td className="text-center">30/06/2022</td>
                                                                <td className="text-center">30/06/2022</td>


                                                                <td className="text-center">R$ 100,00</td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div> */}
                                        </div>
                                    </div>
                                    <div className="tab-pane fade" id="custom-tabs-two-fin" role="tabpanel" aria-labelledby="custom-tabs-two-fin-tab">
                                        <div className="table-responsive">
                                            <table className="table table-striped table-bordered table-hover table-sm">
                                                <thead>
                                                    <tr>
                                                        <th className="text-center font-weight-bold small">Código</th>
                                                        <th className="text-center font-weight-bold small">Descrição</th>
                                                        <th className="text-center font-weight-bold small">Situação</th>
                                                        <th className="text-center font-weight-bold small">Data inicio&nbsp;</th>
                                                        <th className="text-center font-weight-bold small">Data fim</th>
                                                        <th className="text-center font-weight-bold small">Valor total</th>
                                                        <th className="text-center font-weight-bold small">Valor pago</th>
                                                        <th className="text-center font-weight-bold small">Valor Faturar</th>
                                                        <th className="text-center font-weight-bold small">Saldo</th>
                                                    </tr>
                                                </thead>
                                                <tbody is="dmx-repeat" dmx-generator="bs4table" id="tableRepeat1">
                                                    <tr className="small">
                                                        <td className="text-center">40</td>
                                                        <td className="text-left">Novo tratamento</td>
                                                        <td className="text-center">Inicio</td>
                                                        <td className="text-center">09/04/2022</td>
                                                        <td className="text-center"></td>
                                                        <td className="text-center">R$ 100,00</td>
                                                        <td className="text-center">R$ </td>
                                                        <td className="text-center">R$ </td>
                                                        <td className="text-center text-danger font-weight-bold">R$ 100.00</td>
                                                    </tr>

                                                    <tr className="small">
                                                        <td className="text-center">52</td>
                                                        <td className="text-left">Novo tratamento</td>
                                                        <td className="text-center">Inicio</td>
                                                        <td className="text-center">30/06/2022</td>
                                                        <td className="text-center"></td>
                                                        <td className="text-center">R$ 1100,00</td>
                                                        <td className="text-center">R$ 0,00</td>
                                                        <td className="text-center">R$ 0,00</td>
                                                        <td className="text-center text-danger font-weight-bold">R$ 1100.00</td>
                                                    </tr>

                                                    <tr className="small">
                                                        <td className="text-center">55</td>
                                                        <td className="text-left">Novo </td>
                                                        <td className="text-center">Inicio</td>
                                                        <td className="text-center">01/07/2022</td>
                                                        <td className="text-center"></td>
                                                        <td className="text-center">R$ 100,00</td>
                                                        <td className="text-center">R$ 0,00</td>
                                                        <td className="text-center">R$ 0,00</td>
                                                        <td className="text-center text-danger font-weight-bold">R$ 100.00</td>
                                                    </tr>

                                                    <tr className="small">
                                                        <td className="text-center">76</td>
                                                        <td className="text-left">Novo tratamento</td>
                                                        <td className="text-center">Inicio</td>
                                                        <td className="text-center">22/07/2022</td>
                                                        <td className="text-center"></td>
                                                        <td className="text-center">R$ 0,00</td>
                                                        <td className="text-center">R$ 0,00</td>
                                                        <td className="text-center">R$ 0,00</td>
                                                        <td className="text-center text-danger font-weight-bold">R$ 0.00</td>
                                                    </tr>
                                                </tbody>
                                                <tfoot>
                                                    <tr>
                                                        <td className="text-right font-weight-bold fw-bold text-end small" colSpan="5">Valores Totais</td>
                                                        <td className="text-center small">R$ 1300.00</td>
                                                        <td className="text-center small">R$ 0,00</td>
                                                        <td className="text-center small">R$ 0.00</td>
                                                        <td className="text-center small">R$ 1300.00</td>
                                                    </tr>
                                                </tfoot>
                                            </table>

                                        </div>
                                    </div>
                                    <div className="tab-pane fade" id="custom-tabs-two-file" role="tabpanel" aria-labelledby="custom-tabs-two-file-tab">
                                        <div className="table-responsive">
                                            <table className="table table-striped table-bordered table-hover table-sm">
                                                <thead>
                                                    <tr>
                                                        <th className="text-center small font-weight-bold">Arquivo</th>
                                                        <th className="text-center small font-weight-bold">Descricao</th>
                                                        <th className="text-center small font-weight-bold">Operação</th>
                                                    </tr>
                                                </thead>
                                                <tbody is="dmx-repeat" dmx-generator="bs4table" id="tableRepeat2">
                                                    <tr>
                                                        <td className="small">
                                                            <a target="_blank" is="dmx-link" href="/uploads/1/40/Documento_sem_titulo_1.pdf">Documento1.pdf</a>
                                                        </td>
                                                        <td className="text-center small"></td>
                                                        <td className="text-center small">
                                                            <button id="btn3" className="btn btn-sm btn-danger small" is="dmx-button" value="" type="button"><i className="fa fa-trash"></i>
                                                            </button>
                                                        </td>
                                                    </tr>

                                                    <tr>
                                                        <td className="small">
                                                            <a target="_blank" is="dmx-link" href="/uploads/1/40/Documento_sem_titulo_1.pdf">Documento2.pdf</a>
                                                        </td>
                                                        <td className="text-center small"></td>
                                                        <td className="text-center small">
                                                            <button id="btn3" className="btn btn-sm btn-danger small" is="dmx-button" value="" type="button"><i className="fa fa-trash"></i>
                                                            </button>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                    <div className="tab-pane fade" id="custom-tabs-two-agenda" role="tabpanel" aria-labelledby="custom-tabs-two-agenda-tab">

                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
                {/* /.content */}
            </div>
            <Footer />

        </div>
    )
}