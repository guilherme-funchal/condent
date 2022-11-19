import React from 'react';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Sidenav from './Components/Sidenav';

export default function Agenda(){ 
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
                                <h1 className="m-0">Agenda</h1>
                            </div>{/* /.col */}
                        </div>{/* /.row */}
                    </div>{/* /.container-fluid */}
                </div>
                {/* /.content-header */}
                {/* Main content */}
                

                {/* /.content */}
            </div>
            <Footer />
    </div>
    )
}