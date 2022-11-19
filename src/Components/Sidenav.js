import React from 'react'
import { Link } from "react-router-dom";

export default function Child(){    
    return (
        <div>
            {/* Main Sidebar Container */}
            <aside className="main-sidebar sidebar-dark-primary elevation-4 ">
                {/* Brand Logo */}
                <Link to="/" className="brand-link text-left">
                    <img src="dist/img/AdminLTELogo.png" alt="Logo" className="brand-image img-circle elevation-3" style={{ opacity: '.8' }} />
                    <span className="brand-text font-weight-light text-left">Condent 1</span>
                </Link>
                {/* Sidebar */}
                <div className="sidebar">
                    {/* Sidebar user panel (optional) */}
                    <div className="user-panel mt-3 pb-3 mb-3 d-flex">
                        <div className="image">
                            <img src="dist/img/user2-160x160.jpg" className="img-circle elevation-2" alt="User Image" />
                        </div>
                        <div className="info">
                            <a href="#" className="d-block">Nome do usuário</a>
                        </div>
                    </div>
                    <nav className="mt-2">
                        <ul className="nav nav-pills nav-sidebar flex-column text-left" data-widget="treeview"  role="menu" data-accordion="false">
                            {/* Add icons to the links using the .nav-icon class
         with font-awesome or any other icon font library */}
                            <li className="nav-item">
                                <Link to="/" className="nav-link">
                                    <i className="nav-icon fas  fa-bookmark" />
                                    <p>
                                        Inicio
                                    </p>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/Agenda" className="nav-link">
                                    <i className="nav-icon fas  fa-calendar" />
                                    <p>
                                        Agenda
                                    </p>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/Clinica" className="nav-link">
                                    <i className="nav-icon far fa-building" />
                                    <p>
                                        Clinica
                                    </p>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/Pacientes" className="nav-link">
                                    <i className="nav-icon fas  fa-user" />
                                    <p>
                                        Pacientes
                                    </p>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/Cadastros" className="nav-link">
                                    <i className="nav-icon fas  fa-archive" />
                                    <p>
                                        Cadastros
                                    </p>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/Administracao" className="nav-link">
                                    <i className="nav-icon fas  fa-users" />
                                    <p>
                                        Administração
                                    </p>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/Configuracao" className="nav-link">
                                    <i className="nav-icon fas  fa-microchip" />
                                    <p>
                                    Configuração
                                    </p>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/Ajuda" className="nav-link">
                                    <i className="nav-icon fas  fa-question" />
                                    <p>
                                        Ajuda
                                    </p>
                                </Link>
                            </li>
                        </ul>
                    </nav>
                    {/* /.sidebar-menu */}
                </div>
                {/* /.sidebar */}
            </aside>
        </div>
    )
}

