import * as React from 'react';
import { useState, useEffect, useCallback } from "react";
import { Snackbar, Alert, AlertTitle, Avatar, Typography, Chip, Dialog, DialogTitle, DialogContentText, DialogContent, DialogActions, Paper, Grid, Button, Box, FormControl, InputLabel, FormHelperText, FormControlLabel, MenuItem, Select, Checkbox, OutlinedInput, FormGroup, Modal } from '@mui/material';
import AnimateButton from '../../ui-component/extended/AnimateButton';
import MuiTypography from '@mui/material/Typography';
import { useTheme } from '@mui/material/styles';
import { getChipColors } from "../../utils/colors";
import DataTableGrid from '../../Components/Layout/Table';
import EditIcon from '@mui/icons-material/Edit';
import AddIcon from '@mui/icons-material/Add';
import { registerUser, getUser, getRoles, obtenerUsuario, updateUsuario, deleteUser } from "../../Service/index";
import DeleteIcon from '@mui/icons-material/Delete';
import debounce from "lodash/debounce";
import { prettifyRut, checkRut } from "react-rut-formatter";
import validator from 'validator';
import { generarContrasena } from '../../utils/generarContresena';

function MantenedorUsuario() {

    const theme = useTheme();

    const chipColor = getChipColors();

    const contraseña = generarContrasena();

    const [tituloModal, setTituloModal] = useState("");

    const [open, setOpen] = useState(false);

    const [openSnack, setOpenSnack] = useState(false);

    const [mensaje, setMensaje] = useState("");

    const handleOpen = (id) => {
        setOpen(true)
    };

    const handleClose = () => {
        setTituloModal("");
        setOpen(false)
    };

    const [openDialog, setOpenDialog] = React.useState(false);

    const [DiagRun, setDiagRun] = React.useState("");
    const [DiagRole, setDiagRole] = React.useState("");

    const [data, setdataPerfil] = useState("");

    const [optionSelectPerfil, setSelectPerfil] = useState([{}]);

    const [idEditar, setidEditar] = useState('');

    const handleClickOpen = (run, roles) => {
        setDiagRun(run);
        setDiagRole(roles);
        setOpenDialog(true);
    };

    const handleClickClose = () => {
        setOpenDialog(false);
    };

    const handleClick = () => {
        setOpenSnack(true);
      };

    const handleCloseSnack = () =>{
        setOpenSnack(false);
    }

    const [rowsData, setrowsData] = useState([{
        ap_materno: '',
        ap_paterno: '',
        dv: '',
        email: '',
        id: '',
        password: '',
        roles: [{}],
        rut: '',
        telefono: '',
        username: '',
        vigencia: {},
        nombres: ''
    }]);

    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        boxShadow: 24,
        p: 4,
    };


    const llenarDataTable = () => {
        getUser()
            .then((response) => {
                setrowsData(response.data);

            })
            .catch((error) => {
                console.log(error.message);
            });
    }

    const obtenerPerfil = () => {
        getRoles()
            .then((response) => {
                let data = []

                // data.push(otroValor);
                for (var i = 0; i < response.data.length; i++) {
                    let otroValor = new Object();
                    otroValor.label = response.data[i].name;
                    otroValor.value = response.data[i].id;
                    data.push(otroValor);
                }
                setdataPerfil(data);
                setSelectPerfil(data)
            })
            .catch((error) => {
                console.log(error.message);
            })
    }

    const setidEditarUsuario = (id) => {


        obtenerUsuario(id)
            .then((response) => {

                setidEditar(id);

                let data = response.data;

                inputValue.run = prettifyRut(data.rutFormato);
                inputValue.nombres = data.nombres
                inputValue.ap_paterno = data.ap_paterno
                inputValue.ap_materno = data.ap_materno
                inputValue.email = data.email
                inputValue.telefono = data.telefono
                inputValue.perfil = data.roles[0].name;
                setInputValue(inputValue);
                console.log(data);
                if (data.vigencia.name === "Vigente") {
                    setStateVigencia({ vigencia: true });
                } else {
                    setStateVigencia({ vigencia: false });
                }
                handleOpen();
            })
            .catch((error) => {
                console.log(error.message);
            });
    }

    const limpiarDataUsuario = () => {
        setInputValue({
            run: "",
            nombres: "",
            ap_paterno: "",
            ap_materno: "",
            email: "",
            telefono: "",
            perfil: 0,
            errors: {
                run: "",
                nombres: "",
                ap_paterno: "",
                ap_materno: "",
                email: "",
                telefono: "",
                perfil: 0
            }
        });
        setInputValue(inputValue);
        setStateVigencia({ vigencia: false });
    }

    useEffect(() => {
        obtenerPerfil();
        llenarDataTable();
    }, []);

    const [inputValue, setInputValue] = useState({
        run: "",
        nombres: "",
        ap_paterno: "",
        ap_materno: "",
        email: "",
        telefono: "",
        perfil: 0,
        errors: {
            run: "",
            nombres: "",
            ap_paterno: "",
            ap_materno: "",
            email: "",
            telefono: "",
            perfil: 0
        }
    });

    const sendQuery = (query) => {
        // Call API with query parameter here
        console.log(query);

    };

    // Delay search by 600ms
    const delayedSearch = useCallback(
        debounce((q) => sendQuery(q), 600),
        []
    );

    const validarForm = (name, value) => {
        let errors = inputValue.errors;
        switch (name) {
            case 'run':
                errors.run =
                    value.length === 0
                        ? 'Debe ingresar su RUN!'
                        : checkRut(value) === false ? 'RUN ingresado es incorrecto!'
                            : ''
                break;
            case 'nombres':
                errors.nombres =
                    value.length === 0
                        ? 'Debe ingresar su nombre!'
                        : '';
                break;
            case 'ap_paterno':
                errors.ap_paterno =
                    value.length === 0
                        ? 'Debe ingresar su primer apellido!'
                        : '';
                break;
            case 'ap_materno':
                errors.ap_materno =
                    value.length === 0
                        ? 'Debe ingresar su segundo apellido!'
                        : '';
                break;
            case 'email':
                errors.email =
                    value.length === 0
                        ? 'Debe ingresar su email!'
                        : validator.isEmail(value) === false ? 'El email no es valido!'
                            : '';
                break;
            case 'telefono':
                errors.telefono =
                    value.length === 0
                        ? 'Debe ingresar su telefono!'
                        : '';
                break;
            case 'perfil':
                errors.perfil =
                    value === 0
                        ? 'Debe ingresar su perfil!'
                        : '';
                break;
            default:
                break;
        }
    }


    const handleChange = (event) => {

        // Input will be changed immidiately
        setInputValue({
            ...inputValue,
            [event.target.name]: event.target.value
        });

        // Search will only be called when user stops typing 
        delayedSearch({
            ...inputValue,
            [event.target.name]: event.target.value
        });


        validarForm(event.target.name, event.target.value);


    };

    const [stateVigencia, setStateVigencia] = React.useState({
        vigencia: false,
    });

    const handleChangeChecked = (event) => {
        setStateVigencia({
            ...stateVigencia,
            [event.target.name]: event.target.checked,
        });
    };

    const onBlur = (event) => {
        validarForm(event.target.name, event.target.value);
        console.log(inputValue);
    }

    const validarFormSubmit = () => {
        console.log(inputValue.ap_paterno.length);
        inputValue.errors.run =
            inputValue.run.length === 0
                ? 'Debe ingresar su RUN!'
                : checkRut(inputValue.run) === false ? 'RUN ingresado es incorrecto!'
                    : '';
        inputValue.errors.nombres =
            inputValue.nombres.length === 0
                ? 'Debe ingresar su nombre!'
                : '';

        inputValue.errors.ap_paterno =
            inputValue.ap_paterno.length === 0
                ? 'Debe ingresar su primer apellido!'
                : '';

        inputValue.errors.ap_materno =
            inputValue.ap_materno.length === 0
                ? 'Debe ingresar su segundo apellido!'
                : '';


        inputValue.errors.email =
            inputValue.email.length === 0
                ? 'Debe ingresar su email!'
                : validator.isEmail(inputValue.email) === false ? 'El email no es valido!'
                    : '';

        inputValue.errors.telefono =
            inputValue.telefono.length === 0
                ? 'Debe ingresar su telefono!'
                : '';

        inputValue.errors.perfil =
            inputValue.perfil === 0
                ? 'Debe ingresar su perfil!'
                : '';

    }

    const handleSubmit = () => {
        validarFormSubmit();
        console.log(inputValue);
        if (inputValue.errors.run.length === 0 || inputValue.errors.nombres.length === 0 || inputValue.errors.ap_paterno.length === 0 || inputValue.errors.ap_materno.length === 0 || inputValue.errors.email.length === 0 || inputValue.errors.telefono.length === 0 || inputValue.errors.perfil.length === 0) {
            if (tituloModal === "Agregar usuario") {
                guardarUsuario();
            } else {
                editarUsuario();
            }
        }
    }

    const guardarUsuario = () => {

        inputValue.role = [inputValue.perfil];
        if (stateVigencia.vigencia === true) {
            inputValue.vigencia = ['Vigente'];
        } else {
            inputValue.vigencia = ['No vigente'];
        }
        var fname = inputValue.nombres.substring(0, 1).toLowerCase();

        var lname = inputValue.ap_materno.toLowerCase();
        inputValue.username = fname + lname;
        inputValue.password = contraseña;
        inputValue.rut = inputValue.run.split(".").join("").split("-")[0];
        inputValue.dv = inputValue.run.split(".").join("").split("-")[1];

        registerUser(inputValue)
            .then((response) => {
                llenarDataTable();
                limpiarDataUsuario();
                handleClose();
                //   cambiarEstadoModal1(!estadoModal1);
                //   limpiarDataUsuario();
            })
            .catch((error) => {
                console.log(error.message);
            });
    };

    const editarUsuario = () => {
        inputValue.role = [inputValue.perfil];
        if (stateVigencia.vigencia === true) {
            inputValue.vigencia = ['Vigente'];
        } else {
            inputValue.vigencia = ['No vigente'];
        }

        inputValue.rut = inputValue.run.split(".").join("").split("-")[0];
        inputValue.dv = inputValue.run.split(".").join("").split("-")[1];

        updateUsuario(idEditar, inputValue)
            .then((response) => {
               
                llenarDataTable();
                limpiarDataUsuario();
                handleClose();
            })
            .catch((error) => {
                console.log(error.message);
            });
    }

    const eliminarUsuario = () => {
        console.log(idEditar);
        deleteUser(idEditar)
            .then((response) => {
                handleClick();
                setMensaje(response.data.message)
                llenarDataTable();
                limpiarDataUsuario();
                handleClickClose();
            })
            .catch((error) => {
                console.log(error.message);
            });
    }
    const columns = [
        {
            field: 'rut',
            headerName: 'Run',
            type: 'number',
            flex: 1,
            align: "center",
            headerAlign: "center",
            renderCell: (params) => {
                const formatted = prettifyRut(params.row.rut + "-" + params.row.dv);
                return formatted;
            }
        },
        {
            field: 'User',
            headerName: 'User',
            description: 'This column has a value getter and is not sortable.',
            sortable: false,
            flex: 1,
            align: "left",
            headerAlign: "center",
            renderCell: (params) =>
                <Box className="css-70qvj9">
                    <Avatar sx={{ fontWeight: 'light', marginRight: "0.75rem", width: "30px", height: "30px", fontSize: "0.875rem" }}>N</Avatar>
                    <Box className="css-p38jk0">
                        <Typography variant="a" sx={{ fontWeight: 600 }}>
                            {params.row.username}
                        </Typography>
                        <Typography variant="a" sx={{ fontWeight: 400, fontSize: '0.75rem' }}>
                            @{params.row.username}
                        </Typography>
                    </Box>
                </Box>
            // `${params.row.username || ''} ${params.row.ap_paterno || ''} ${params.row.ap_materno}`,
        },
        {
            field: 'Nombre_Completo',
            headerName: 'Nombre Completo',
            description: 'This column has a value getter and is not sortable.',
            sortable: false,
            flex: 1,
            align: "center",
            headerAlign: "center",
            renderCell: (params) =>
                `${params.row.nombres || ''} ${params.row.ap_paterno || ''} ${params.row.ap_materno}`,
        },
        {
            field: 'email',
            headerName: 'Email',
            flex: 1,
            align: "center",
            headerAlign: "center",
        },
        {
            field: 'telefono',
            headerName: 'Telefono',
            flex: 1,
            align: "center",
            headerAlign: "center",
        },
        {
            field: 'roles',
            headerName: 'Roles',
            description: 'This column has a value getter and is not sortable.',
            sortable: false,
            flex: 1,
            align: "center",
            headerAlign: "center",
            renderCell: (params) => {
                let data = []
                let k = -1;
                params.formattedValue.forEach((element, index) => {
                    if (element.id < chipColor.length - 1) {
                        k = element.id;
                        if (k === 1) {
                            k = k + 1;
                        }
                    } else {
                        if (k >= chipColor.length - 1) {
                            k = 0;
                        } else {
                            k++;
                        }
                    }

                    data.push(<Chip key={index} label={element.name} variant="filled" color="success" size="small" skin="light" className="css-1kb0wuq" sx={{ color: chipColor[k].color, backgroundColor: chipColor[k].backgroundColor }} />)


                });

                return data;
            }
        },
        {
            field: 'vigencia',
            headerName: 'Status',
            description: 'This column has a value getter and is not sortable.',
            sortable: false,
            flex: 1,
            align: "center",
            headerAlign: "center",
            renderCell: (params) => (
                params.value.name === 'Vigente' ?
                    <Chip label={params.value.name} variant="filled" color="success" size="small" skin="light" className="css-1kb0wuq" sx={{ color: chipColor[1].color, backgroundColor: chipColor[1].backgroundColor }} />
                    :
                    <Chip label={params.value.name} variant="filled Secondary" color="secondary" size="small" className="css-jho0db" sx={{ color: chipColor[0].color, backgroundColor: chipColor[0].backgroundColor }} />


            )
        },
        {
            field: 'acciones',
            headerName: 'acciones',
            description: 'This column has a value getter and is not sortable.',
            sortable: false,
            flex: 1,
            align: "center",
            headerAlign: "center",
            renderCell: (params) => (

                <div >
                    <Button variant="outlined" startIcon={<EditIcon />} onClick={() => { setidEditarUsuario(params.row.id); setTituloModal("Editar usuario") }} sx={{ marginRight: '5px' }} />
                    <Button variant="outlined" color="error" onClick={() => { handleClickOpen(params.row.rut + "-" + params.row.dv, params.row.roles[0].name); setidEditar(params.row.id); }} startIcon={<DeleteIcon />} />
                    {/* <Button variant="outlined" color="warning" startIcon={ <VisibilityIcon />} /> */}

                </div>
            )
        },
    ];
    return (
        <>
            {/* <Paper className="css-e8p490">
                <Box sx={{ p: 2 }}>
                    <Grid container className="css-b09laf">
                        <Grid item sx={{ paddingTop: 1, paddingLeft: 1 }} >
                            <MuiTypography variant="h2">
                                Mantenedor Usuario
                            </MuiTypography>
                        </Grid>
                    </Grid>
                </Box>
            </Paper> */}
            <Paper className="css-e8p490">
                <Box sx={{ p: 2 }}>
                    <DataTableGrid columns={columns} rows={rowsData} dataBotonStartIcon={<AddIcon />} onClickBoton={() => { handleOpen(); setTituloModal("Agregar usuario") }} textoBoton="Add usuario"></DataTableGrid>
                </Box>
            </Paper>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Grid container >
                        <Box sx={{ display: "flex", alignItems: "center", padding: "0.75rem 1rem", justifyContent: "space-between", width: "100%" }}>
                            <MuiTypography variant="h3" >
                                {tituloModal}
                            </MuiTypography>
                            <Button onClick={() => { handleClose(); limpiarDataUsuario(); }}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-x" viewBox="0 0 16 16">
                                    <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
                                </svg>
                            </Button>
                        </Box>
                        <FormControl fullWidth sx={{ ...theme.typography.customInput, margin: "0px 0px 1.5rem" }}>
                            <InputLabel htmlFor="outlined-adornment-run-usuario">Run</InputLabel>
                            <OutlinedInput
                                id="outlined-adornment-run-usuario"
                                type="text"
                                value={inputValue.run || ''}
                                name="run"
                                onBlur={(event) => {
                                    const formatted = prettifyRut(inputValue.run);
                                    setInputValue({
                                        ...inputValue,
                                        [event.target.name]: formatted
                                    });
                                }}
                                label="Run"
                                inputProps={{}} noValidate
                                placeholder="Ej. 20.667.876-2"
                                onChange={handleChange}
                            />

                            {inputValue.errors.run.length > 0 && (
                                <FormHelperText error id="standard-weight-helper-text-run-usuario">
                                    {inputValue.errors.run || ''}
                                </FormHelperText>
                            )}
                        </FormControl>
                        <FormControl fullWidth sx={{ ...theme.typography.customInput, margin: "0px 0px 1.5rem" }}>
                            <InputLabel htmlFor="outlined-adornment-nombres-usuario">Nombres</InputLabel>
                            <OutlinedInput
                                id="outlined-adornment-nombres-usuario"
                                type="text"
                                value={inputValue.nombres || ''}
                                name="nombres"
                                onChange={handleChange}
                                onBlur={onBlur}
                                label="Nombres"
                                inputProps={{}}
                                noValidate
                            />
                            {inputValue.errors.nombres.length > 0 && (
                                <FormHelperText error id="standard-weight-helper-text-nombres-usuario">
                                    {inputValue.errors.nombres || ''}
                                </FormHelperText>
                            )}
                        </FormControl>
                        <FormControl fullWidth sx={{ ...theme.typography.customInput, margin: "0px 0px 1.5rem" }}>
                            <InputLabel htmlFor="outlined-adornment-ap_paterno-usuario">Apellido Paterno</InputLabel>
                            <OutlinedInput
                                id="outlined-adornment-ap_paterno-usuario"
                                type="text"
                                value={inputValue.ap_paterno || ''}
                                name="ap_paterno"
                                onBlur={onBlur}
                                onChange={handleChange}
                                label="Apellido Paterno"
                                inputProps={{}}
                                noValidate
                            />
                            {inputValue.errors.ap_paterno.length > 0 && (
                                <FormHelperText error id="standard-weight-helper-text-ap_paterno-usuario">
                                    {inputValue.errors.ap_paterno || ""}
                                </FormHelperText>
                            )}
                        </FormControl>
                        <FormControl fullWidth sx={{ ...theme.typography.customInput, margin: "0px 0px 1.5rem" }}>
                            <InputLabel htmlFor="outlined-adornment-ap_materno-usuario">Apellido Materno</InputLabel>
                            <OutlinedInput
                                id="outlined-adornment-ap_materno-usuario"
                                type="text"
                                value={inputValue.ap_materno || ''}
                                name="ap_materno"
                                onBlur={onBlur}
                                onChange={handleChange}
                                label="Apellido Materno"
                                inputProps={{}}
                                noValidate
                            />
                            {inputValue.errors.ap_materno.length > 0 && (
                                <FormHelperText error id="standard-weight-helper-text-ap_paterno-usuario">
                                    {inputValue.errors.ap_materno || ""}
                                </FormHelperText>
                            )}
                        </FormControl>
                        <FormControl fullWidth sx={{ ...theme.typography.customInput, margin: "0px 0px 1.5rem" }}>
                            <InputLabel htmlFor="outlined-adornment-email-usuario">Email</InputLabel>
                            <OutlinedInput
                                id="outlined-adornment-email-usuario"
                                type="text"
                                value={inputValue.email || ''}
                                name="email"
                                onBlur={onBlur}
                                onChange={handleChange}
                                label="Email"
                                inputProps={{}}
                                noValidate
                            />
                            {inputValue.errors.email.length > 0 && (
                                <FormHelperText error id="standard-weight-helper-text-email-usuario">
                                    {inputValue.errors.email || ""}
                                </FormHelperText>
                            )}
                        </FormControl>
                        <FormControl fullWidth sx={{ ...theme.typography.customInput, margin: "0px 0px 1.5rem" }}>
                            <InputLabel htmlFor="outlined-adornment-telefono-usuario">Telefono</InputLabel>
                            <OutlinedInput
                                id="outlined-adornment-telefono-usuario"
                                type="text"
                                value={inputValue.telefono || ''}
                                name="telefono"
                                onBlur={onBlur}
                                onChange={handleChange}
                                label="telefono"
                                inputProps={{}}
                                noValidate
                            />
                            {inputValue.errors.telefono.length > 0 && (
                                <FormHelperText error id="standard-weight-helper-text-telefono-usuario">
                                    {inputValue.errors.telefono || ""}
                                </FormHelperText>
                            )}
                        </FormControl>
                        <FormControl fullWidth>
                            <InputLabel id="demo-simple-select-label">Perfil</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={inputValue.perfil || "0"}
                                label="perfil"
                                onChange={handleChange}
                                name="perfil"
                            >
                                <MenuItem value="0" key={0}>Seleccione Perfil</MenuItem>
                                {optionSelectPerfil.map((item, index) => (
                                    <MenuItem value={item.label} key={index}>{item.label}</MenuItem>
                                ))}

                            </Select>
                        </FormControl>
                        <FormGroup>
                            <FormControlLabel control={<Checkbox name="vigencia" checked={stateVigencia.vigencia || false} onChange={handleChangeChecked} />} label="Vigencia" />
                        </FormGroup>
                        <Box sx={{ mt: 2 }}>
                            <AnimateButton>
                                <Button
                                    disableElevation
                                    fullWidth
                                    size="large"
                                    type="submit"
                                    variant="contained"
                                    color="secondary"
                                    onClick={() => { handleSubmit() }}
                                >
                                    {tituloModal}
                                </Button>
                            </AnimateButton>
                        </Box>
                    </Grid>
                </Box>
            </Modal>
            <Dialog
                open={openDialog}
                onClose={handleClickClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title" sx={{ textAlign: "center", fontWeight: "bold", fontSize: "20px" }}>
                    {"Eliminar Usuario"}
                </DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description" sx={{ color: "black", textAlign: "center" }}>
                        ¿Esta usted seguro de querer eliminar el usuario con <InputLabel sx={{ fontWeight: "bold" }}>RUN: {DiagRun} - {DiagRole}?</InputLabel>
                    
                    </DialogContentText>
                    <aside className="callout warning">
                            <b> Espera, espera un minuto.☝🏾</b>
                            Estas seguro que deseas realizar esta operación, al eliminar un usuario no podra volver a recuperarlo.
                        </aside>
                </DialogContent>
                <DialogActions sx={{ textAlign: "center", alignItems: "center", display: "block", justifyContent: "center" }}>
                    <Button variant="contained" onClick={handleClickClose}>Cancelar</Button>
                    <Button variant="contained" color="error" endIcon={<DeleteIcon />} autoFocus onClick={eliminarUsuario}>Eliminar usuario</Button>
                </DialogActions>
            </Dialog>
            <Snackbar open={openSnack} autoHideDuration={6000} onClose={handleCloseSnack} anchorOrigin={{
                vertical: 'top',
                horizontal: 'center',
            }}>
                <Alert onClose={handleCloseSnack} severity="success" sx={{ width: '100%' }}>
                    {mensaje}
                </Alert>
            </Snackbar>
        </>
    )
}
export default MantenedorUsuario;
