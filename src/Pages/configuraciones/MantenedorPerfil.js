import * as React from 'react';
import { useState, useEffect, useCallback } from "react";
import { registerUser, getUser } from "../../Service/index";
import { getRoles, guardarPerfil, editarRoles, deleteRol } from "../../Service/index";
import {Snackbar, Alert,  Switch, AvatarGroup, Slide, IconButton, Card, TextField, CardContent, Dialog, DialogTitle, DialogContentText, DialogContent, DialogActions, Paper, Grid, Button, Box, FormControl, InputLabel, FormHelperText, FormControlLabel, MenuItem, Select, Checkbox, OutlinedInput, FormGroup } from '@mui/material';
import MuiTypography from '@mui/material/Typography';
import AddIcon from '@mui/icons-material/Add';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { getChipColors, getColor } from "../../utils/colors";
import debounce from "lodash/debounce";
// project imports

// material-ui
import { useTheme } from '@mui/material/styles';
import {
    Typography,
    Avatar
} from '@mui/material';
import Modal from '@mui/material/Modal';


// project imports
import AnimateButton from '../../ui-component/extended/AnimateButton';
import DataTableGrid from '../../Components/Layout/Table';
import DeleteIcon from '@mui/icons-material/Delete';
import Chip from '@mui/material/Chip';
// import RiAdminFill from "react-icons/ri";
import { RiAdminFill } from "react-icons/ri";
import EditIcon from '@mui/icons-material/Edit';
import { experimentalStyled as styled } from '@mui/material/styles';
import {stringAvatar} from '../../utils/Avatar';

const privilegioUsuario = JSON.parse(window.localStorage.getItem('loginData')).privilegio;

function MantenedorPerfil() {

    
    let [disabledActualizar, setDisabledActualizar] = useState(true);

    let [disabledCrear, setDisabledCrear] = useState(true);

    const chipColor = getChipColors();

    const Transition = React.forwardRef(function Transition(props, ref) {
        return <Slide direction="up" ref={ref} {...props} />;
    });

    const [data, setdataPerfil] = useState([{
        id: "",
        name: "",
        vigencia: { id: "", name: '' },
        usuarios: { nombres: ''}
    }]);

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

    const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
        ...theme.typography.body2,
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    }));

    const [open, setOpen] = React.useState(false);

    const [formulario, setFormulario] = useState([]);

    const [rol, setRol] = useState({
        id: "",
        name: ""
    });

    const [rolEliminar, setRolEliminar] = useState({
        id: "",
        name: ""
    })
    const [openDialog, setOpenDialog] = React.useState(false);

    // Declaración de una variable de estado que llamaremos "count"
    const [count, setCount] = useState(0);

    const [openSnack, setOpenSnack] = useState(false);

    const handleClick = () => {
        setOpenSnack(true);
    };

    const handleCloseSnack = () => {
        setOpenSnack(false);
        
        limpiarDataEliminar();
    }

    const [severity, setSeverity] = useState("");

    const [mensaje, setMensaje] = useState("");


    const handleClickClose = () => {
        setOpenDialog(false);
    };

    const handleClickOpenEliminar = (roles) => {
        console.log(roles);
        rolEliminar.id = roles.id;
        rolEliminar.name = roles.name;
        setRolEliminar(rolEliminar);
        console.log(rolEliminar);
        setOpenDialog(true);
    };


    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleChangeChecked = (event) => {

        let objetc = new Object();

        const value = event.target.type === 'checkbox' ? event.target.checked : event.target.value;
        const name = event.target.name;

        const id = parseInt(name.split("_")[1]);

        var index = formulario.findIndex(e => e.id === id);


        if (name.split("_")[0] === "crear") {
            formulario[index].privilegios.crear = value;
        } else if (name.split("_")[0] === "editar") {
            formulario[index].privilegios.actualizar = value;
        } else {
            formulario[index].privilegios.ver = value;
        }

        setCount(count + 1);
    };

    const setDataRol = (id, name) => {
        setRol({
            id: id,
            name: name
        });


    }

    const handleChangeSwitch = (event) => {
        const value = event.target.type === 'checkbox' ? event.target.checked : event.target.value;
        const name = event.target.name;

        const id = parseInt(name.split("_")[1]);

        var index = formulario.findIndex(e => e.id === id);

        if (event.target.checked === true) {
            formulario[index].vigencia = ["Vigente"];
        } else {
            formulario[index].vigencia = ["No vigente"];
        }

        setCount(count + 1);

    }

    const handleChangeRol = (event) => {
        const value = event.target.type === 'checkbox' ? event.target.checked : event.target.value;
        const name = event.target.name;
        if (value === "") {
            rol.id = "";
            rol.name = value;
            setRol(rol);

        }
        setRol({
            ...rol,
            [event.target.name]: event.target.value
        });

        // Search will only be called when user stops typing 
        delayedSearch({
            ...rol,
            [event.target.name]: event.target.value
        });


        setCount(count + 1);

    }

    const delayedSearch = useCallback(
        debounce((q) => sendQuery(q), 600),
        []
    );

    const sendQuery = (query) => {
        // Call API with query parameter here
        console.log(query);

    };

    const columns_2 = [
        {
            field: 'name',
            flex: 1,
            align: "center",
            headerAlign: "center"
        },
        {
            field: 'privilegios',
            description: 'This column has a value getter and is not sortable.',
            sortable: false,
            width: 320,
            align: "center",
            headerAlign: "center",
            renderCell: (params) => {
                var index = formulario.findIndex(e => e.id === params.row.id);

                return (<FormControl component="fieldset">
                    <FormGroup aria-label="position" row>
                        <FormControlLabel
                            value="ver"
                            control={<Checkbox checked={formulario[index].privilegios.ver} onChange={handleChangeChecked} />}
                            label="Ver"
                            labelPlacement="start"
                            name={"ver_" + params.row.id}
                        />
                        <FormControlLabel
                            value="crear"
                            control={<Checkbox checked={formulario[index].privilegios.crear} onChange={handleChangeChecked} />}
                            label="Crear"
                            labelPlacement="start"
                            name={"crear_" + params.row.id}
                        />
                        <FormControlLabel
                            value="editar"
                            control={<Checkbox checked={formulario[index].privilegios.actualizar} onChange={handleChangeChecked} />}
                            label="Editar"
                            labelPlacement="start"
                            name={"editar_" + params.row.id}
                        />
                    </FormGroup>
                </FormControl>);
            }


        },
        {
            field: 'vigencia',
            description: 'This column has a value getter and is not sortable.',
            sortable: false,
            width: 320,
            align: "center",
            headerAlign: "center",
            renderCell: (params) => {
                var index = formulario.findIndex(e => e.id === params.row.id);
                let checked = false;
                if (formulario[index].vigencia[0] === "Vigente") {
                    checked = true;
                }
                return <Switch
                    checked={checked}
                    name={"vigencia_" + params.row.id}
                    onChange={handleChangeSwitch}
                    inputProps={{ 'aria-label': 'controlled' }} />
            }

        },
        {
            field: 'acciones',
            description: 'This column has a value getter and is not sortable.',
            sortable: false,
            width: 320,
            align: "center",
            headerAlign: "center",
            renderCell: (params) => {
                return <div >
                    <Button variant="outlined" startIcon={<EditIcon />} onClick={() => { setDataRol(params.row.id, params.row.name) }} sx={{ marginRight: '5px' }} />
                    <Button variant="outlined" color="error" onClick={() => { handleClickOpenEliminar(params.row) }} startIcon={<DeleteIcon />} />
                    {/* <Button variant="outlined" color="warning" startIcon={ <VisibilityIcon />} /> */}

                </div>
            }

        }
    ];

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
        let arrayData = [];

        getRoles()
            .then((response) => {
                setdataPerfil(response.data);
                // console.log(response.data);
                Object.keys(response.data).map((valor, key) => {
                    let nameVigencia = response.data[key].vigencia.name
                    response.data[key].vigencia = [nameVigencia];


                })
                setFormulario(response.data);
            })
            .catch((error) => {
                console.log(error.message);
            })
    }

    useEffect(() => {
        obtenerPerfil();
        llenarDataTable();

        if (privilegioUsuario.actualizar === true) {
            setDisabledActualizar(false);
        }

        if (privilegioUsuario.crear === true) {
            setDisabledCrear(false);
        }

    }, []);

    useEffect(() =>{
        Object.keys(data).filter((key, index) => index < 5).map((valor, key) => {
            console.log(data[key]);
                Object.keys(data[key].usuarios).filter((key_2, index_2) => index_2 < 5).map((valor_2, key_2) => {
                    console.log(data[key].usuarios[key_2].nombres);
                })

        });
    })

    useEffect(() => {
        console.log(formulario);
    }, [setFormulario])

    const columns = [
        {
            field: 'rut',
            headerName: 'Run',
            type: 'number',
            flex: 1,
            align: "center",
            headerAlign: "center",
            valueGetter: (params) =>
                `${params.row.rut}  - ${params.row.dv}`,
        },
        {
            field: 'User',
            headerName: 'User',
            description: 'This column has a value getter and is not sortable.',
            sortable: false,
            flex: 1,
            align: "center",
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
            renderCell: (params) => (
                params.value[0].name === 'Administrador' ?

                    <Box>
                        <RiAdminFill className="css-zjx26z" />
                        <Typography variant="p" className="css-x6zmnr">
                            {params.value[0].name}
                        </Typography>
                    </Box>

                    :
                    <Box>
                        <RiAdminFill className="css-zjx26z" />
                        <Typography variant="p" className="css-x6zmnr">
                            {params.value[0].name}
                        </Typography>
                    </Box>
            )
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
                    <VisibilityIcon />
                </div>
            )
        },
    ];


    const guardarRol = () => {

        if (rol.id === "" && rol.name !== "") {
            rol.vigencia = ['Vigente'];
            console.log(rol);
            guardarPerfil(rol)
                .then((response) => {
                    if(response.data.code === 200){
                        setSeverity('success');
                        llenarDataTable();
                        obtenerPerfil();
                        limpiarData();
                    }else{
                        setSeverity('error');
                    }
    
                    setMensaje(response.data.message);
    
                    handleClick();
                })
                .catch((error) => {
                    console.log(error.message);
                });
        }
        if (count > 0) {
            editarRoles(formulario)
                .then((response) => {
                    if(response.data.code === 200){
                        setSeverity('success');
                        llenarDataTable();
                        obtenerPerfil();
                        limpiarData();
                    }else{
                        setSeverity('error');
                    }
    
                    setMensaje(response.data.message);
    
                    handleClick();
                })
                .catch((error) => {
                    console.log(error.message);
                });
        }
        // if(rol.name != "" && rol.id != ""){

        // }

        // editarRoles(formulario)
        //     .then((response) => {
        //         console.log(response);
        //     })
        //     .catch((error) => {
        //         console.log(error.message);
        //     });
    }


    const limpiarDataEliminar = () => {
        setRolEliminar({
            id: "",
            name: ""
        });
    }
    const eliminarPerfil = () => {

        deleteRol(rolEliminar.id)
            .then((response) => {
                handleClickClose();

                if(response.data.code === 200){
                    setSeverity('success');
                    llenarDataTable();
                    obtenerPerfil();
                }else{
                    setSeverity('error');
                }

                setMensaje(response.data.message);

                handleClick();

                limpiarDataEliminar();

            })
            .catch((error) => {
                console.log(error.message);
            });
    }

    const limpiarData = () => {
        setCount(0);
        obtenerPerfil();
        llenarDataTable();
        setRol({
            id: "",
            name: ""
        });
    }
    return (
        <>
            <Paper className="css-e8p490">
                <Box sx={{ p: 2 }}>
                    <Grid container className="css-b09laf">
                        <Grid item sx={{ paddingTop: 1, paddingLeft: 1 }} >
                            <MuiTypography variant="h2">
                                Lista Roles
                            </MuiTypography>
                            <MuiTypography variant="body2">
                                Un rol proporciona acceso a menús y funciones predefinidas para que, dependiendo del rol asignado, un administrador pueda tener acceso a lo que necesita
                            </MuiTypography>
                        </Grid>
                    </Grid>
                </Box>
            </Paper>
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                    {Object.keys(data).filter((key, index) => index < 5).map((valor, key) => {
                        return <Grid item xs={4} sm={4} md={4} key={key}>
                            <Item>
                                <CardContent>
                                    <Box
                                        sx={{
                                            marginBottom: "0.75rem",
                                            display: "flex",
                                            // -webkitBoxPack: "justify",
                                            justifyContent: "space-between",
                                            // -webkitBoxAlign: "center",
                                            alignItems: "center",
                                        }
                                        }
                                    >
                                        <MuiTypography variant="body2">
                                            Total {data[key].usuarios.length} usuarios
                                        </MuiTypography>
                                        <AvatarGroup max={4}>
                                            {
                                                Object.keys(data[key].usuarios).filter((key, index_2) => index_2 < 5).map((valor, key_2) => {
                                                    return <Avatar {...stringAvatar(data[key].usuarios[key_2].nombres)} sx={{ width: "32px", height: "32px" }} />
                                                })
                                            }
                                        </AvatarGroup>
                                    </Box>
                                    <Box>
                                        <MuiTypography variant="h6" sx={{ textAlign: "initial", fontSize: "1.25rem" }}>
                                            {data[key].name}
                                        </MuiTypography>
                                    </Box>
                                    <Box
                                        sx={{
                                            marginBottom: "0.75rem",
                                            display: "flex",
                                            // -webkitBoxPack: "justify",
                                            justifyContent: "space-between",
                                            // -webkitBoxAlign: "center",
                                            alignItems: "center",
                                        }
                                        }
                                    >
                                        <MuiTypography variant="body2" sx={{ cursor: "pointer", color: "#5e35b1" }}>
                                            Editar Roles
                                        </MuiTypography>
                                        <IconButton color="primary" aria-label="upload picture" component="span">
                                            <ContentCopyIcon />
                                        </IconButton>
                                    </Box>
                                </CardContent>

                            </Item>
                        </Grid>
                    })
                    }

                    <Grid item xs={4} sm={4} md={4}>
                        <Item>
                            <CardContent>
                                <Box
                                    sx={{
                                        marginBottom: "0.75rem",
                                        display: "flex",
                                        // -webkitBoxPack: "justify",
                                        justifyContent: "space-between",
                                        // -webkitBoxAlign: "center",
                                        alignItems: "center",
                                    }
                                    }
                                >
                                    <Box>
                                        <img width="65" height="110" alt="add-role" src="https://demos.themeselection.com/marketplace/materio-mui-react-nextjs-admin-template/demo-3/images/cards/pose_m1.png" />
                                    </Box>
                                    {/* <IconButton color="primary" aria-label="upload picture" component="span">
                                        <ContentCopyIcon />
                                    </IconButton> */}
                                    <CardContent sx={{ padding: "1.25rem" }}>
                                        <Box sx={{ textAlign: "right", display: "flex", flexDirection: "column" }}>
                                            <Button variant="contained" size="medium" sx={{ margin: "0px 0px 0.75rem" }} onClick={handleClickOpen} disabled={disabledCrear}>Añadir rol</Button>
                                            <Typography variant='p'>Añadir rol, si no existe.</Typography>
                                        </Box>

                                    </CardContent>
                                </Box>
                            </CardContent>

                        </Item>
                    </Grid>
                </Grid>
            </Box>
            <Box sx={{ paddingTop: "1.5rem", paddingBottom: "1.5rem" }}>
                <Grid container className="css-b09laf">
                    <Grid item sx={{ paddingTop: 1, paddingLeft: 1 }} >
                        <MuiTypography variant="h2">
                            Total de usuarios con sus funciones
                        </MuiTypography>
                        <MuiTypography variant="body2">
                            Encuentre todas las cuentas de administrador de su empresa y sus funciones asociadas.
                        </MuiTypography>
                    </Grid>
                </Grid>
            </Box>

            <Paper className="css-e8p490">
                <Box sx={{ p: 2 }}>
                    <DataTableGrid columns={columns} rows={rowsData}></DataTableGrid>

                </Box>
            </Paper>
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
                maxWidth="lg"
                fullWidth={true}

            >
                <DialogTitle id="alert-dialog-title">
                    <Box sx={{ display: "flex", alignItems: "end", padding: "0.75rem 1rem", justifyContent: "end", width: "100%" }}>

                        <Button onClick={() => { handleClose() }}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-x" viewBox="0 0 16 16">
                                <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
                            </svg>
                        </Button>
                    </Box>
                    <Typography variant='h6' sx={{ fontSize: "1.25rem", textAlign: "center" }}>
                        <Typography variant='p' sx={{ fontSize: "2.0243rem" }}>Agregar Rol</Typography>
                        <Typography variant='body2' sx={{ fontSize: "0.875rem" }}>Establecer los permisos de los roles</Typography>

                    </Typography>

                </DialogTitle>
                <DialogContent>
                    <Box>

                        <FormControl fullWidth>
                            <TextField id="my-input" label="NOMBRE DEL ROL" variant="outlined" value={rol.name} onChange={handleChangeRol} name="name" />
                        </FormControl>
                    </Box>
                    <DialogContentText id="alert-dialog-description" sx={{ marginBottom: "1rem" }}>
                        <Typography variant='h6' sx={{ fontSize: "1.25rem" }}>Permisos de rol</Typography>
                    </DialogContentText>
                    <DataTableGrid columns={columns_2} rows={data}></DataTableGrid>
                </DialogContent>
                <DialogActions>
                    <AnimateButton><Button className="fill" onClick={() => { guardarRol(); }} >Submit</Button></AnimateButton>
                    <AnimateButton><Button className="fill" onClick={() => { limpiarData(); }}>Limpiar Data</Button></AnimateButton>
                </DialogActions>
            </Dialog>
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
                        ¿Esta usted seguro de querer eliminar el perfil: <InputLabel sx={{ fontWeight: "bold" }}>{rolEliminar.name}</InputLabel>

                    </DialogContentText>
                    <aside className="callout warning">
                        <b> Espera, espera un minuto.☝🏾</b>
                        Estas seguro que deseas realizar esta operación, al eliminar el perfil no podra volver a recuperarlo.
                    </aside>
                </DialogContent>
                <DialogActions sx={{ textAlign: "center", alignItems: "center", display: "block", justifyContent: "center" }}>
                    <Button variant="contained" onClick={handleClickClose}>Cancelar</Button>
                    <Button variant="contained" color="error" endIcon={<DeleteIcon />} autoFocus onClick={eliminarPerfil}>Eliminar perfil</Button>
                </DialogActions>
            </Dialog>
            <Snackbar open={openSnack} autoHideDuration={6000} onClose={handleCloseSnack} anchorOrigin={{
                vertical: 'top',
                horizontal: 'center',
            }}>
                <Alert onClose={handleCloseSnack} severity={severity} sx={{ width: '100%' }}>
                    {mensaje}
                </Alert>
            </Snackbar>
        </>
    );
}

export default MantenedorPerfil;
