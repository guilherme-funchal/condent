import React from 'react';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Sidenav from './Components/Sidenav';
import { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

import Modal1 from "./Components/modals/Modal1";

export default function Pacientes(){ 

    const [showModal1, setShowModal1] = useState(false);
    const [showModal2, setShowModal2] = useState(false);

    return (
        
        <div>
            
            <Header />
            <Sidenav /> 
{/* Content Wrapper. Contains page content */}
<div className="content-wrapper">
                {/* Content Header (Page header) */}
                <div className="content-header">
                    <div className="container-fluid">
                        <div className="row mb-2">
                            <div className="col-sm-6">
                                <h1 className="m-0">Pacientes</h1>
                                <Button variant="primary" onClick={() => setShowModal1(true)}>
                                    Launch demo modal
                                </Button>
                                <Modal1 title="My Modal1" onClose={() => setShowModal1(false)} show={showModal1}>
                                </Modal1>

                            </div>{/* /.col */}
                        </div>{/* /.row */}
                    </div>{/* /.container-fluid */}
                </div>
                {/* /.content-header */}
                {/* Main content */}
                <section className="content">
                    <div className="container-fluid">
                        {/* Small boxes (Stat box) */}
                        {/* /.row */}
                        {/* Main row */}
                        <div className="row">
                            {/* Left col */}
                            <section className="col-lg-6 connectedSortable">
                                {/* Custom tabs (Charts with tabs)*/}
                                <div className="card">
                                    <div className="card-header">
                                        <h3 className="card-title">
                                            <i className="far fa-help-alt mr-1" />
                                             Pacientes
                                        </h3>
                                    </div>{/* /.card-header */}
                                    <div className="card-body">
                                        <div className="tab-content p-0">
                                            {/* Morris chart - Sales */}
                                            <div className="chart tab-pane active" id="revenue-chart" style={{ position: 'relative', height: 300 }}>
                                                <canvas id="revenue-chart-canvas" height={300} style={{ height: 300 }} />
                                            </div>
                                            <div className="chart tab-pane" id="sales-chart" style={{ position: 'relative', height: 300 }}>
                                                <canvas id="sales-chart-canvas" height={300} style={{ height: 300 }} />
                                            </div>
                                        </div>
                                    </div>{/* /.card-body */}
                                </div>
                            </section>
                            {/* /.Left col */}
                            {/* right col (We are only adding the ID to make the widgets sortable)*/}
                            <section className="col-lg-6 connectedSortable">
                                {/* Custom tabs (Charts with tabs)*/}
                            </section>
                            {/* right col */}
                        </div>
                        {/* /.row (main row) */}
                    </div>{/* /.container-fluid */}
                </section>
                {/* /.content */}
            </div>
            <Footer />

    </div>
    )
    
}
