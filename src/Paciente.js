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

import Modal1 from "./Components/Modals/Modal1";

export default function Paciente() {

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
        console.log("Excluir", paciente.id);

            const {value: text} = await Swal.fire({
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

                const {response: text} = Api?.delete('pacientes/' + paciente.id);

                if (response.status === 200) {
                    Sucesso.fire({
                        icon: 'success',
                        title: 'Usuário foi excluído'
                    });
                } else {
                    Falha.fire({
                        icon: 'error',
                        title: 'Usuário não foi excluído'
                    });
                }
            } else if (result.isDenied) {
                    Falha.fire({
                    icon: 'error',
                    title: 'Usuário não excluído'
                });
            }
        })  
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



    useEffect(() => {
        getPaciente(location.state.id)
    }, []);

    let location = useLocation();

    const [paciente, setPaciente] = useState([]);


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
                <div class='row'>
                    <div class='row'>

                    </div>
                </div>
                <div class="row">
                    <div class="col-12 col-sm-6">
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

                                                        <div class="widget-user-header bg-warning">
                                                            <div class="widget-user-image">
                                                                <img class="img-circle elevation-2" src="dist/img/user7-128x128.jpg" alt="User Avatar"></img>
                                                            </div>

                                                            <h3 class="widget-user-username">{paciente?.nome}</h3>
                                                            <h5 class="widget-user-desc">{paciente?.celular}</h5>
                                                            <h5 class="widget-user-desc">{paciente?.email}</h5>
                                                        </div>
                                                        <div class="card-footer p-0">
                                                            <ul class="nav flex-column">
                                                                <li class="nav-item">
                                                                    <a href="#" class="nav-link">
                                                                        Tratamentos <span class="float-right badge bg-primary">31</span>
                                                                    </a>
                                                                </li>
                                                                <li class="nav-item">
                                                                    <a href="#" class="nav-link">
                                                                        Orçamentos <span class="float-right badge bg-info">5</span>
                                                                    </a>
                                                                </li>
                                                                <li class="nav-item">
                                                                    <a href="#" class="nav-link">
                                                                        Ficha financeira<span class="float-right badge bg-success">12</span>
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
                                                            <select name="sexo" id="sexo" defaultInputValue={paciente?.sexo} onChange={(e) => paciente.sexo = e.target.value}>
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
                    <div class="col-12 col-sm-6">
                        <div class="card card-primary card-tabs">
                            <div class="card-header p-0 pt-1">
                                <ul class="nav nav-tabs" id="custom-tabs-two-tab" role="tablist">
                                    <li class="nav-item">
                                        <a class="nav-link active" id="custom-tabs-two-home-tab" data-toggle="pill" href="#custom-tabs-two-home" role="tab" aria-controls="custom-tabs-two-home" aria-selected="true">Orçamentos</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link" id="custom-tabs-two-trat-tab" data-toggle="pill" href="#custom-tabs-two-trat" role="tab" aria-controls="custom-tabs-two-trat" aria-selected="false">Tratamentos</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link" id="custom-tabs-two-fin-tab" data-toggle="pill" href="#custom-tabs-two-fin" role="tab" aria-controls="custom-tabs-two-fin" aria-selected="false">Financeiro</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link" id="custom-tabs-two-file-tab" data-toggle="pill" href="#custom-tabs-two-file" role="tab" aria-controls="custom-tabs-two-file" aria-selected="false">Arquivos</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link" id="custom-tabs-two-agenda-tab" data-toggle="pill" href="#custom-tabs-two-agenda" role="tab" aria-controls="custom-tabs-two-agenda" aria-selected="false">Agenda</a>
                                    </li>
                                </ul>
                            </div>
                            <div class="card-body">
                                <div class="tab-content" id="custom-tabs-two-tabContent">
                                    <div class="tab-pane fade show active" id="custom-tabs-two-home" role="tabpanel" aria-labelledby="custom-tabs-two-home-tab">
                                        <div>Orçamentos</div>
                                        <button id="btn4" class="btn btn-outline-primary btn-sm" is="dmx-button" value="" type="button">
                                            <i></i>
                                            <i class="fa fa-plus"></i>
                                        </button>
                                        <div class="table-responsive">
                                            <table class="table table-striped table-bordered table-hover table-sm">
                                                <thead>
                                                    <tr>
                                                        <th class="text-center font-weight-bold">Código</th>
                                                        <th class="text-center font-weight-bold">Nome do tratamento</th>
                                                        <th class="text-center font-weight-bold">Valor total</th>
                                                        <th class="text-center font-weight-bold">Data</th>
                                                        <th class="text-center font-weight-bold">Estado</th>

                                                    </tr>
                                                </thead>
                                                <tbody is="dmx-repeat" dmx-generator="bs4table" id="tableRepeat1">
                                                    <tr>
                                                        <td class="text-center">82</td>
                                                        <td>Novo tratamento</td>
                                                        <td class="text-center">R$ </td>
                                                        <td class="text-center">15/11/2022</td>
                                                        <td class="text-center">Criação</td>

                                                    </tr>

                                                    <tr>
                                                        <td class="text-center">83</td>
                                                        <td>Novo tratamento</td>
                                                        <td class="text-center">R$ </td>
                                                        <td class="text-center">15/11/2022</td>
                                                        <td class="text-center">Criação</td>

                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                        <div>Itens</div>
                                        <button id="btn4" class="btn btn-outline-primary btn-sm" is="dmx-button" value="" type="button">
                                            <i></i>
                                            <i class="fa fa-plus"></i>
                                        </button>
                                        <div class="table-responsive">
                                            <table class="table table-striped table-bordered table-hover table-sm">
                                                <thead>
                                                    <tr>
                                                        <th class="small text-center font-weight-bold">Item&nbsp;</th>

                                                        <th class="small text-center font-weight-bold">Situação</th>
                                                        <th class="small text-center font-weight-bold">Data inicio</th>
                                                        <th class="small text-center font-weight-bold">Data final</th>


                                                        <th class="text-center small font-weight-bold">Valor</th>
                                                    </tr>
                                                </thead>
                                                <tbody is="dmx-repeat" dmx-generator="bs4table" id="tableRepeat5">
                                                    <tr class="small">
                                                        <td class="text-center">Implante</td>
                                                        <td class="text-center">Em andamento</td>
                                                        <td class="text-center">30/06/2022</td>
                                                        <td class="text-center">01/07/2022</td>


                                                        <td class="text-center">R$ 1000,00</td>
                                                    </tr>

                                                    <tr class="small">
                                                        <td class="text-center">teste</td>
                                                        <td class="text-center">Em andamento</td>
                                                        <td class="text-center">30/06/2022</td>
                                                        <td class="text-center">30/06/2022</td>


                                                        <td class="text-center">R$ 100,00</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>

                                    <div class="tab-pane fade" id="custom-tabs-two-trat" role="tabpanel" aria-labelledby="custom-tabs-two-trat-tab">
                                        <div class="table-responsive">
                                            <div>Tratamentos</div>
                                            <button id="btn4" class="btn btn-outline-primary btn-sm" is="dmx-button" value="" type="button">
                                                <i></i>
                                                <i class="fa fa-plus"></i>
                                            </button>
                                            <table class="table table-striped table-bordered table-hover table-sm">
                                                <thead>
                                                    <tr>
                                                        <th class="text-center font-weight-bold">Código</th>
                                                        <th class="text-center font-weight-bold">Nome do tratamento</th>
                                                        <th class="text-center font-weight-bold">Valor total</th>
                                                        <th class="text-center font-weight-bold">Data</th>
                                                        <th class="text-center font-weight-bold">Estado</th>

                                                    </tr>
                                                </thead>
                                                <tbody is="dmx-repeat" dmx-generator="bs4table" id="tableRepeat1">
                                                    <tr>
                                                        <td class="text-center">82</td>
                                                        <td>Novo tratamento</td>
                                                        <td class="text-center">R$ </td>
                                                        <td class="text-center">15/11/2022</td>
                                                        <td class="text-center">Criação</td>

                                                    </tr>

                                                    <tr>
                                                        <td class="text-center">83</td>
                                                        <td>Novo tratamento</td>
                                                        <td class="text-center">R$ </td>
                                                        <td class="text-center">15/11/2022</td>
                                                        <td class="text-center">Criação</td>

                                                    </tr>
                                                </tbody>
                                            </table>
                                            <div class="col-sm-12">
                                                <div>Itens</div>
                                                <button id="btn4" class="btn btn-outline-primary btn-sm" is="dmx-button" value="" type="button">
                                                    <i></i>
                                                    <i class="fa fa-plus"></i>
                                                </button>
                                                <div class="table-responsive">
                                                    <table class="table table-striped table-bordered table-hover table-sm">
                                                        <thead>
                                                            <tr>
                                                                <th class="small text-center font-weight-bold">Item&nbsp;</th>

                                                                <th class="small text-center font-weight-bold">Situação</th>
                                                                <th class="small text-center font-weight-bold">Data inicio</th>
                                                                <th class="small text-center font-weight-bold">Data final</th>


                                                                <th class="text-center small font-weight-bold">Valor</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody is="dmx-repeat" dmx-generator="bs4table" id="tableRepeat5">
                                                            <tr class="small">
                                                                <td class="text-center">Implante</td>
                                                                <td class="text-center">Em andamento</td>
                                                                <td class="text-center">30/06/2022</td>
                                                                <td class="text-center">01/07/2022</td>


                                                                <td class="text-center">R$ 1000,00</td>
                                                            </tr>

                                                            <tr class="small">
                                                                <td class="text-center">teste</td>
                                                                <td class="text-center">Em andamento</td>
                                                                <td class="text-center">30/06/2022</td>
                                                                <td class="text-center">30/06/2022</td>


                                                                <td class="text-center">R$ 100,00</td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="tab-pane fade" id="custom-tabs-two-fin" role="tabpanel" aria-labelledby="custom-tabs-two-fin-tab">
                                        <div class="table-responsive">
                                            <table class="table table-striped table-bordered table-hover table-sm">
                                                <thead>
                                                    <tr>
                                                        <th class="text-center font-weight-bold small">Código</th>
                                                        <th class="text-center font-weight-bold small">Descrição</th>
                                                        <th class="text-center font-weight-bold small">Situação</th>
                                                        <th class="text-center font-weight-bold small">Data inicio&nbsp;</th>
                                                        <th class="text-center font-weight-bold small">Data fim</th>
                                                        <th class="text-center font-weight-bold small">Valor total</th>
                                                        <th class="text-center font-weight-bold small">Valor pago</th>
                                                        <th class="text-center font-weight-bold small">Valor Faturar</th>
                                                        <th class="text-center font-weight-bold small">Saldo</th>
                                                    </tr>
                                                </thead>
                                                <tbody is="dmx-repeat" dmx-generator="bs4table" id="tableRepeat1">
                                                    <tr class="small">
                                                        <td class="text-center">40</td>
                                                        <td class="text-left">Novo tratamento</td>
                                                        <td class="text-center">Inicio</td>
                                                        <td class="text-center">09/04/2022</td>
                                                        <td class="text-center"></td>
                                                        <td class="text-center">R$ 100,00</td>
                                                        <td class="text-center">R$ </td>
                                                        <td class="text-center">R$ </td>
                                                        <td class="text-center text-danger font-weight-bold">R$ 100.00</td>
                                                    </tr>

                                                    <tr class="small">
                                                        <td class="text-center">52</td>
                                                        <td class="text-left">Novo tratamento</td>
                                                        <td class="text-center">Inicio</td>
                                                        <td class="text-center">30/06/2022</td>
                                                        <td class="text-center"></td>
                                                        <td class="text-center">R$ 1100,00</td>
                                                        <td class="text-center">R$ 0,00</td>
                                                        <td class="text-center">R$ 0,00</td>
                                                        <td class="text-center text-danger font-weight-bold">R$ 1100.00</td>
                                                    </tr>

                                                    <tr class="small">
                                                        <td class="text-center">55</td>
                                                        <td class="text-left">Novo </td>
                                                        <td class="text-center">Inicio</td>
                                                        <td class="text-center">01/07/2022</td>
                                                        <td class="text-center"></td>
                                                        <td class="text-center">R$ 100,00</td>
                                                        <td class="text-center">R$ 0,00</td>
                                                        <td class="text-center">R$ 0,00</td>
                                                        <td class="text-center text-danger font-weight-bold">R$ 100.00</td>
                                                    </tr>

                                                    <tr class="small">
                                                        <td class="text-center">76</td>
                                                        <td class="text-left">Novo tratamento</td>
                                                        <td class="text-center">Inicio</td>
                                                        <td class="text-center">22/07/2022</td>
                                                        <td class="text-center"></td>
                                                        <td class="text-center">R$ 0,00</td>
                                                        <td class="text-center">R$ 0,00</td>
                                                        <td class="text-center">R$ 0,00</td>
                                                        <td class="text-center text-danger font-weight-bold">R$ 0.00</td>
                                                    </tr>
                                                </tbody>
                                                <tfoot>
                                                    <tr>
                                                        <td class="text-right font-weight-bold fw-bold text-end small" colspan="5">Valores Totais</td>
                                                        <td class="text-center small">R$ 1300.00</td>
                                                        <td class="text-center small">R$ 0,00</td>
                                                        <td class="text-center small">R$ 0.00</td>
                                                        <td class="text-center small">R$ 1300.00</td>
                                                    </tr>
                                                </tfoot>
                                            </table>

                                        </div>
                                    </div>
                                    <div class="tab-pane fade" id="custom-tabs-two-file" role="tabpanel" aria-labelledby="custom-tabs-two-file-tab">
                                        <div class="table-responsive">
                                            <table class="table table-striped table-bordered table-hover table-sm">
                                                <thead>
                                                    <tr>
                                                        <th class="text-center small font-weight-bold">Arquivo</th>
                                                        <th class="text-center small font-weight-bold">Descricao</th>
                                                        <th class="text-center small font-weight-bold">Operação</th>
                                                    </tr>
                                                </thead>
                                                <tbody is="dmx-repeat" dmx-generator="bs4table" id="tableRepeat2">
                                                    <tr>
                                                        <td class="small">
                                                            <a target="_blank" is="dmx-link" href="/uploads/1/40/Documento_sem_titulo_1.pdf">Documento1.pdf</a>
                                                        </td>
                                                        <td class="text-center small"></td>
                                                        <td class="text-center small">
                                                            <button id="btn3" class="btn btn-sm btn-danger small" is="dmx-button" value="" type="button"><i class="fa fa-trash"></i>
                                                            </button>
                                                        </td>
                                                    </tr>

                                                    <tr>
                                                        <td class="small">
                                                            <a target="_blank" is="dmx-link" href="/uploads/1/40/Documento_sem_titulo_1.pdf">Documento2.pdf</a>
                                                        </td>
                                                        <td class="text-center small"></td>
                                                        <td class="text-center small">
                                                            <button id="btn3" class="btn btn-sm btn-danger small" is="dmx-button" value="" type="button"><i class="fa fa-trash"></i>
                                                            </button>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                    <div class="tab-pane fade" id="custom-tabs-two-agenda" role="tabpanel" aria-labelledby="custom-tabs-two-agenda-tab">

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