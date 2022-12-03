import React from 'react';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';


export default function Header(){ 
    const MySwal = withReactContent(Swal);
    const navigate = useNavigate();
    const [error, setError] = useState('');

    function refreshPage() {
        window.location.reload(false);
      }

    async function doSignUpDirect() {
        setError('');
        const { value: wallet } = await Swal.fire({
          title: 'Insira a sua chave',
          icon: 'question',
          input: 'text',
          inputLabel: '',
          inputPlaceholder: 'Entre sua chave privada'
        })
    
        if (wallet) {
          localStorage.setItem('wallet', wallet);
          navigate("/pacientes");
          navigate(0);
        }
      }

    return (
        <div>
            {/* Navbar */}
            <nav className="main-header navbar navbar-expand navbar-dark">
                {/* Left navbar links */}
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <a className="nav-link" data-widget="pushmenu" href="/" role="button"><i className="fas fa-bars" /></a>
                    </li>
                </ul>
                {/* Right navbar links */}
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                        <a className="nav-link" data-widget="control-sidebar" data-slide="true" onClick={doSignUpDirect}>
                          <i className="fa fa-paper-plane fa-1" />
                        </a>

                    </li>
                </ul>
            </nav>
            {/* /.navbar */}
        </div>

    )
}
