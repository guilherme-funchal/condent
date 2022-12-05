// import React from 'react';
// import ReactDOM from 'react-dom';
// import * as ReactDOMClient from 'react-dom/client';
import React from 'react';
import ReactDOM from "react-dom/client";
import './index.css';
import App from './App';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Ajuda from './Ajuda';
import Configuracao from './Configuracao';
import Administracao from './Administracao';
import Agenda from './Agenda';
import Pacientes from './Pacientes';
import Paciente from './Paciente';
import Cadastros from './Cadastros';
import Clinica from './Clinica';
import 'bootstrap/dist/css/bootstrap.min.css';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Router forceRefresh={true}>
        <Routes>
          <Route path="/" element={<App />} exact/>
          <Route path="/Ajuda" element={<Ajuda />} exact/>
          <Route path="/Configuracao" element={<Configuracao />} exact/>
          <Route path="/Administracao" element={<Administracao />} exact/>
          <Route path="/Agenda" element={<Agenda />} exact/>
          <Route path="/Pacientes" element={<Pacientes />} exact/>
          <Route path="/Paciente" element={<Paciente />} exact/>
          <Route path="/Cadastros" element={<Cadastros />} exact/>
          <Route path="/Clinica" element={<Clinica />} exact/>
          <Route path="/Configuracao" element={<Configuracao />} exact/>
        </Routes>
    </Router>
    
);


