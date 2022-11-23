import React from 'react';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Sidenav from './Components/Sidenav';
import { useState, useEffect } from 'react';
// import Button from 'react-bootstrap/Button';
// import Modal from 'react-bootstrap/Modal';
import { Link } from "react-router-dom";
// import Modal1 from "./Components/Modals/Modal1";
import Api from './Api'
import { useLocation } from 'react-router'


export default function Pacientes() {
    const location = useLocation()

    const getItems = async () => {
        const response = await Api.get('pacientes');
        setPacientes(response.data);
      };
    
    
    useEffect(() => {
        getItems()
    }, []);

    // const [, updateState] = useState();
    // const [showModal1, setShowModal1] = useState(false);
    // const [showModal2, setShowModal2] = useState(false);
    const [pacientes, setPacientes] = useState([]);
    // const forceUpdate = useCallback(() => updateState({}), []);

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
                <section className="content">
                    <button id="btn1" className="btn btn-sm btn-outline-primary" is="dmx-button" value="" type="button"><i className="fa fa-plus"></i></button>
                    <button id="btn2" className="btn btn-sm btn-outline-primary" data-toggle="button" is="dmx-button" value="" type="button"><i className="fa fa-filter"></i></button>
                    <button id="btn3" className="btn btn-sm btn-outline-primary" data-toggle="button" is="dmx-button" value="" type="button"><i className="fa fa-print"></i></button>

                    <table className="blueTable">
                        <thead>
                            <tr>
                                <th className="text-center">Código</th>
                                <th className="text-center">Nome</th>
                                <th className="text-center">Cpf</th>
                                <th className="text-center">Celular</th>
                            </tr>
                        </thead>
                        <tbody>
                        {pacientes.dado?.map((data) => {
                          if (data.id !== ' '){
                          return (<tr>
                              <td><center><Link to="/paciente" state={{ id: data.id }}>{data.id}</Link></center></td>
                              <td><Link to="/paciente" state={{ id: data.id }}>{data.nome}</Link></td>
                              <td><center><Link to="/paciente" state={{ id: data.id }}>{data.cpf}</Link></center></td>
                              <td><center><Link to="/paciente" state={{ id: data.id }}>{data.celular}</Link></center></td>
                          </tr>
                          );
                          }
                          return true;
                        })}
                        </tbody>
                    </table>
                </section>
                {/* /.content */}
            </div>
            <Footer />

        </div>
    )

}
