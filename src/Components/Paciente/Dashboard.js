import React, { useState, useEffect, useRef } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import ReactDOM from "react-dom";
import { CSSTransition } from "react-transition-group";
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Input from '@mui/material/Input';

export default function Dashboard(props) {

    console.log(props);
    return (
        <div className="card-body">
            <div className="row">

                <div className="widget-user-header bg-warning">
                    <div className="widget-user-image">
                        <img className="img-circle elevation-2" src="dist/img/user7-128x128.jpg" alt="User Avatar"></img>
                    </div>

                    <h3 className="widget-user-username">{props.paciente?.nome}</h3>
                    <h5 className="widget-user-desc">{props.paciente?.celular}</h5>
                    <h5 className="widget-user-desc">{props.paciente?.email}</h5>
                </div>
                <div className="card-footer p-0">
                    <ul className="nav flex-column">
                        <li className="nav-item">
                            <a href="#" className="nav-link">
                                Tratamentos <span className="float-right badge bg-primary">{props.tratamentos.length}</span>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a href="#" className="nav-link">
                                Orçamentos <span className="float-right badge bg-info">{props.orcamentos.length}</span>
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
    )
}