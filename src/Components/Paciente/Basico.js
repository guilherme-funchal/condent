import React, { useState, useEffect, useRef } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import ReactDOM from "react-dom";
import { CSSTransition } from "react-transition-group";
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Input from '@mui/material/Input';

export default function Basico(props) {

    const [saved, setSaved] = useState(true);
    return (
        <div>
            <div className="card-body">
                <Box
                    // sx={{
                    //     display: 'flex',
                    //     alignItems: 'center',
                    //     '& > :not(style)': { m: 2 },
                    // }}
                    sx={{
                        '& .MuiTextField-root': { m: 1, width: '25ch' },
                    }}
                >
                    <div className="card-body">
                        <div className="row">
                            <div>
                                <FormControl fullWidth sx={{ m: 1 }} variant="standard"></FormControl>
                                <TextField
                                    style={{ width: '98%' }}
                                    multiline={true}
                                    label="Nome"
                                    id="nome"
                                    name="nome"
                                    defaultValue={props.paciente?.nome}
                                    size="small"
                                    onBlur={() => setSaved(false)}
                                />
                                {/* <TextField
                multiline={true}
                label="Data nascimento"
                id="data_nasc"
                name="data_nasc"
                fullWidth
                defaultValue={props.paciente?.data_nasc}
                size="small"
                onBlur={() => setSaved(false)}
            /> */}
                            </div>
                        </div>
                        <div className="row">
                            <div>
                                <TextField
                                    multiline={true}
                                    label="cpf"
                                    id="cpf"
                                    name="cpf"
                                    fullWidth
                                    defaultValue={props.paciente?.cpf}
                                    size="small"
                                    onBlur={() => setSaved(false)}
                                />
                                <TextField
                                    multiline={true}
                                    label="documento"
                                    id="documento"
                                    name="documento"
                                    fullWidth
                                    defaultValue={props.paciente?.documento}
                                    size="small"
                                    onBlur={() => setSaved(false)}
                                />
                                <TextField
                                    multiline={true}
                                    label="Sexo"
                                    id="sexo"
                                    name="sexo"
                                    fullWidth
                                    defaultValue={props.paciente?.sexo}
                                    size="small"
                                    onBlur={() => setSaved(false)}
                                />
                            </div>
                        </div>
                        <div className="row">
                            <div>
                                <TextField
                                    multiline={true}
                                    style={{ width: '65%' }}
                                    label="Endereço"
                                    id="endereco"
                                    name="endereco"
                                    fullWidth
                                    defaultValue={props.paciente?.endereco}
                                    size="small"
                                    onBlur={() => setSaved(false)}
                                />
                                <TextField
                                    multiline={true}
                                    style={{ width: '30%' }}
                                    label="Complemento"
                                    id="complemento"
                                    name="complemento"
                                    fullWidth
                                    defaultValue={props.paciente?.complemento}
                                    size="small"
                                    onBlur={() => setSaved(false)}
                                />
                            </div>
                        </div>
                        <div className="row">
                            <div>
                                <TextField
                                    multiline={true}
                                    label="Bairro"
                                    id="bairro"
                                    name="bairro"
                                    fullWidth
                                    defaultValue={props.paciente?.bairro}
                                    size="small"
                                    onBlur={() => setSaved(false)}
                                />
                                <TextField
                                    multiline={true}
                                    label="Estado"
                                    id="estado"
                                    name="estado"
                                    fullWidth
                                    defaultValue={props.paciente?.estado}
                                    size="small"
                                    onBlur={() => setSaved(false)}
                                />
                                <TextField
                                    multiline={true}
                                    label="Cidade"
                                    id="Cidade"
                                    name="Cidade"
                                    fullWidth
                                    defaultValue={props.paciente?.data_cadastro}
                                    size="small"
                                    onBlur={() => setSaved(false)}
                                />
                            </div>
                        </div>
                        <div className="row">
                            <div>
                                <TextField
                                    multiline={true}
                                    label="CEP"
                                    id="cep"
                                    name="cep"
                                    fullWidth
                                    defaultValue={props.paciente?.cep}
                                    size="small"
                                    onBlur={() => setSaved(false)}
                                />
                                <TextField
                                    multiline={true}
                                    label="Data nascimento"
                                    id="data_nasc"
                                    name="data_nasc"
                                    fullWidth
                                    defaultValue={props.paciente?.data_nasc}
                                    size="small"
                                    onBlur={() => setSaved(false)}
                                />
                                <TextField
                                    multiline={true}
                                    label="Data cadastro"
                                    id="data_cadastro"
                                    name="data_cadastro"
                                    fullWidth
                                    defaultValue={props.paciente?.data_cadastro}
                                    size="small"
                                    onBlur={() => setSaved(false)}
                                />
                            </div>
                        </div>
                    </div>
                </Box>
            </div>
            <div className="card-footer">
                <button type="submit" className="btn btn-danger" onClick="">Excluir</button>

                <button type="submit" className="btn btn-primary" onClick="">Salvar</button>
            </div>
        </div>
    )
}