import React, { useState, useEffect, useRef } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import ReactDOM from "react-dom";
import { CSSTransition } from "react-transition-group";
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Input from '@mui/material/Input';


export default function Midias(props) {
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
                    <div className="row">
                        <div>
                            <TextField
                                multiline={true}
                                label="Email"
                                style={{ width: '50%' }}
                                id="email"
                                name="email"
                                fullWidth
                                defaultValue={props.paciente?.email}
                                size="small"
                                onBlur={() => setSaved(false)}
                            />
                            <TextField
                                multiline={true}
                                label="Facebook"
                                style={{ width: '50%' }}
                                id="facebook"
                                name="facebook"
                                fullWidth
                                defaultValue={props.paciente?.facebook}
                                size="small"
                                onBlur={() => setSaved(false)}
                            />
                            <TextField
                                multiline={true}
                                label="instagram"
                                style={{ width: '50%' }}
                                id="instagram"
                                name="instagram"
                                fullWidth
                                defaultValue={props.paciente?.instagram}
                                size="small"
                                onBlur={() => setSaved(false)}
                            />

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