import * as React from 'react';
import { useState, useEffect } from "react";
import { registerUser, getUser } from "../../Service/index";
import { getRoles, obtenerUsuario, updateUsuario } from "../../Service/index";
import { Dialog, DialogTitle, DialogContentText, DialogContent, DialogActions, Paper, Grid, Button, Box, FormControl, InputLabel, FormHelperText, FormControlLabel, MenuItem, Select, Checkbox, OutlinedInput, FormGroup } from '@mui/material';
import MuiTypography from '@mui/material/Typography';
import AddIcon from '@mui/icons-material/Add';
// project imports

// material-ui
import { useTheme } from '@mui/material/styles';
import {
    Typography,
    Avatar
} from '@mui/material';
import Modal from '@mui/material/Modal';

// third party
import * as Yup from 'yup';
import { useFormik } from 'formik';

// project imports
import useScriptRef from '../../hooks/useScriptRef';
import AnimateButton from '../../ui-component/extended/AnimateButton';
import DataTableGrid from '../../Components/Layout/Table';
import DeleteIcon from '@mui/icons-material/Delete';
import Chip from '@mui/material/Chip';
// import RiAdminFill from "react-icons/ri";
import { RiAdminFill } from "react-icons/ri";
import EditIcon from '@mui/icons-material/Edit';
import { useRut } from "react-rut-formatter";
import { getChipColors } from "../../utils/colors";
import VisibilityIcon from '@mui/icons-material/Visibility';

function MantenedorUsuario() {
    const chipColor = getChipColors();

    const { isValid, rut, updateRut } = useRut();


    const [initialValues, setValues] = useState({
        run: '',
        nombres: '',
        ap_paterno: '',
        ap_materno: '',
        email: '',
        telefono: '',
        perfil: "0",
        vigenciaCheck: false
    });


    const [estadoModal1, cambiarEstadoModal1] = useState(false);

    const editarUsuario = (values) => {
        console.log(values);
        values.role = [];
        values.role.push(values.perfil);
        console.log(values);
        values.vigencia = [];
        if (values.vigenciaCheck) {
            values.vigencia.push('Vigente');
        } else {
            values.vigencia.push('No vigente');
        }
        console.log(values);
        values.rut = values.run.split("-")[0];
        values.dv = values.run.split("-")[1];
        updateUsuario(idEditar, values)
            .then((response) => {
                llenarDataTable();
                limpiarDataUsuario();
                handleClose();
            })
            .catch((error) => {
                console.log(error.message);
            });
    }

    const limpiarDataUsuario = () => {
        formik.resetForm({
            values: {
                ap_materno: "", ap_paterno: "", nombres: "", run: "", email: "", telefono: "",
                perfil: "", vigencia: false
            }

        });
        setidEditar("");
    }

    const [perfil, setperfil] = useState('');

    const handleChangeSelect = (event) => {
        setperfil(event.target.value);
    };

    const scriptedRef = useScriptRef();

    const theme = useTheme();

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

    const llenarDataTable = () => {
        getUser()
            .then((response) => {
                setrowsData(response.data);

            })
            .catch((error) => {
                console.log(error.message);
            });
    }

    const titulotabla = "Listado Usuario";

    const options = {
        filter: true,
        display: true,
        filterType: 'dropdown',
        responsive: 'standard',
        selectableRows: 'none',
        fixedHeader: false
    };

    const [data, setdataPerfil] = useState("");

    const [optionSelectPerfil, setSelectPerfil] = useState([{}]);

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


    useEffect(() => {
        obtenerPerfil();
        llenarDataTable();
    }, []);

    useEffect(() => {
        console.log(rowsData);
    }, [setrowsData]);

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
                <Chip label={params.value.name} variant="filled" color="success" size="small" skin="light" className="css-1kb0wuq" sx={{ color: chipColor[1].color, backgroundColor: chipColor[1].backgroundColor }}                    />
                :
                <Chip label={params.value.name} variant="filled Secondary" color="secondary" size="small" className="css-jho0db" sx={{ color: chipColor[0].color, backgroundColor: chipColor[0].backgroundColor }}/>


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
                    <Button variant="outlined" startIcon={<EditIcon />} onClick={() => { handleOpen(); setidEditarUsuario(params.row.id); }} sx={{ marginRight: '5px' }} />
                    <Button variant="outlined" color="error" onClick={() => { handleClickOpen(params.row.rut + "-" + params.row.dv, params.row.roles[0].name) }} startIcon={<DeleteIcon />} />
                    {/* <Button variant="outlined" color="warning" startIcon={ <VisibilityIcon />} /> */}
                   
                </div>
            )
        },
    ];
    const [idEditar, setidEditar] = useState('');

    const setidEditarUsuario = (id) => {
        initialValues.ap_materno = "";
        setidEditar(id);
        obtenerUsuario(id)
            .then((response) => {
                console.log(response);
                formik.resetForm({
                    values: { ap_materno: response.data.ap_materno, ap_paterno: response.data.ap_paterno, nombres: response.data.nombres, run: response.data.rutFormato, email: response.data.email, telefono: response.data.telefono, perfil: response.data.roles[0].name }
                });
                if (response.data.vigencia.name === "Vigente") {
                    formik.resetForm({
                        values: { ap_materno: response.data.ap_materno, ap_paterno: response.data.ap_paterno, nombres: response.data.nombres, run: response.data.rutFormato, email: response.data.email, telefono: response.data.telefono, perfil: response.data.roles[0].name, vigencia: true }
                    });

                } else {
                    formik.resetForm({
                        values: { ap_materno: response.data.ap_materno, ap_paterno: response.data.ap_paterno, nombres: response.data.nombres, run: response.data.rutFormato, email: response.data.email, telefono: response.data.telefono, perfil: response.data.roles[0].name, vigencia: false }
                    });
                }

            })
            .catch((error) => {
                console.log(error.message);
            });
    }
    const rows = [
        {
            ap_materno: "villaseca",
            ap_paterno: "zaragoza",
            dv: 6,
            email: "camila.zaragoza@gmail.com",
            id: 1,
            password: "$2a$10$XjvjOYDU0GA83s8HKo5NueTHYUe0NjUITNlWs0dfi3vTDGI9jmGre",
            roles: [{ id: 1, name: "Administrador" }],
            rut: 19566808,
            telefono: "951108675",
            username: "camila_paz",
            vigencia: { id: 1, name: 'Vigente' },
        },
    ];


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

    const generarContraseña = () => {
        var abecedario = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", ".", "-", "_", "$", "&", "#", "@"];
        let contraseña = "";

        var numero = 10;
        let numeroAleatorio;

        // paso 2 - escribir x caracteres

        for (var i = 0; i < numero; i++) {
            numeroAleatorio = parseInt(Math.random() * abecedario.length);
            contraseña += numeroAleatorio;
            contraseña += abecedario[parseInt(Math.random() * abecedario.length)];
        }

        return contraseña;
    }

    const guardarUsuario = (values) => {

        values.role = [];
        values.role.push(values.perfil);
        console.log(values);
        values.vigencia = [];
        if (values.vigenciaCheck) {
            values.vigencia.push('Vigente');
        } else {
            values.vigencia.push('No vigente');
        }
        var fname = values.nombres.substring(0, 1).toLowerCase();

        var lname = values.ap_materno.toLowerCase();
        values.username = fname + lname;
        values.password = generarContraseña();
        values.rut = values.run.split("-")[0];
        values.dv = values.run.split("-")[1];
        registerUser(values)
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

    const [checked, setChecked] = React.useState(true);

    // const { Formik } = Formik;

    const schema = Yup.object().shape({
        run: Yup.string().required('Debe ser un RUN válido'),
        nombres: Yup.string().required('Debe ser su NOMBRE válido'),
        ap_paterno: Yup.string().required('Debe ser su APELLIDO PATERNO válido'),
        ap_materno: Yup.string().required('Debe ser su APELLIDO MATERNO válido'),
        email: Yup.string().email('Debe ser un correo electrónico válido').max(255).required('El correo electrónico es obligatorio'),
        telefono: Yup.string().required('Debe ser un TELEFONO válido'),
        perfil: Yup.string().required('Debe ser un PERFIL válido')
    });

    const formik = useFormik({
        initialValues,
        validationSchema: schema,
        // enableReinitialize: true,
        onSubmit: (values, { setErrors, setStatus, setSubmitting }) => {
            try {
                console.log(values);
                if (values.ap_materno !== "" && values.ap_paterno !== "" && values.email !== "" && values.nombres !== "" &&
                    values.perfil !== "" && values.run !== "" && values.telefono !== "") {
                    setStatus({ success: true });
                    setSubmitting(false);
                    if (idEditar !== "") {
                        editarUsuario(values);
                    } else {
                        guardarUsuario(values);
                    }
                }
            } catch (err) {
                console.error(err);
                if (scriptedRef.current) {
                    setStatus({ success: false });
                    setErrors({ submit: err.message });
                    setSubmitting(false);
                }
            }
        }
    })

    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const [openDialog, setOpenDialog] = React.useState(false);

    const [DiagRun, setDiagRun] = React.useState("");
    const [DiagRole, setDiagRole] = React.useState("");
    const handleClickOpen = (run, roles) => {
        setDiagRun(run);
        setDiagRole(roles);
        setOpenDialog(true);
    };

    const handleClickClose = () => {
        setOpenDialog(false);
    };

    return (
        <>
            <Paper className="css-e8p490">
                <Box sx={{ p: 2 }}>
                    <Grid container className="css-b09laf">
                        <Grid item sx={{ paddingTop: 1, paddingLeft: 1 }} >
                            <MuiTypography variant="h2">
                                Mantenedor Usuario
                            </MuiTypography>
                        </Grid>
                    </Grid>
                </Box>
            </Paper>
            <Paper className="css-e8p490">
                <Box sx={{ p: 2 }}>
                    <Grid container className="css-1xqoed8" >
                        <MuiTypography variant="h3" >
                            Usuarios
                        </MuiTypography>

                        <Button variant="contained" size="medium" startIcon={<AddIcon />} onClick={handleOpen} sx={{ boxShadow: 'rgb(58 53 65 / 42%) 0px 4px 8px -4px', letterSpacing: '0.3px' }}>
                            Agregar Usuario
                        </Button>

                    </Grid>
                    <DataTableGrid columns={columns} rows={rowsData} data={rowsData}></DataTableGrid>

                </Box>
            </Paper>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Grid container className="css-1xqoed8" >
                        <MuiTypography variant="h3" >
                            Agregar Usuario
                        </MuiTypography>

                        <Button onClick={() => { handleClose(); limpiarDataUsuario(); }}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-x" viewBox="0 0 16 16">
                                <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
                            </svg>
                        </Button>

                    </Grid>
                    <form noValidate onSubmit={formik.handleSubmit}>
                        <FormControl fullWidth error={Boolean(formik.touched.run && formik.errors.run)} sx={{ ...theme.typography.customInput }}>
                            <InputLabel htmlFor="outlined-adornment-run-usuario">Run</InputLabel>
                            <OutlinedInput
                                id="outlined-adornment-run-usuario"
                                type="text"
                                value={formik.values.run || ''}
                                name="run"
                                onBlur={formik.handleBlur}
                                onChange={formik.handleChange}
                                label="Run"
                                inputProps={{}}
                            />
                            {formik.touched.run && formik.errors.run && (
                                <FormHelperText error id="standard-weight-helper-text-run-usuario">
                                    {formik.errors.run || ''}
                                </FormHelperText>
                            )}
                        </FormControl>
                        <FormControl fullWidth error={Boolean(formik.touched.nombres && formik.errors.nombres)} sx={{ ...theme.typography.customInput }}>
                            <InputLabel htmlFor="outlined-adornment-nombres-usuario">Nombres</InputLabel>
                            <OutlinedInput
                                id="outlined-adornment-nombres-usuario"
                                type="text"
                                value={formik.values.nombres || ''}
                                name="nombres"
                                onBlur={formik.handleBlur}
                                onChange={formik.handleChange}
                                label="Nombres"
                                inputProps={{}}
                            />
                            {formik.touched.nombres && formik.errors.nombres && (
                                <FormHelperText error id="standard-weight-helper-text-nombres-usuario">
                                    {formik.errors.nombres || ''}
                                </FormHelperText>
                            )}
                        </FormControl>
                        <FormControl fullWidth error={Boolean(formik.touched.ap_paterno && formik.errors.ap_paterno)} sx={{ ...theme.typography.customInput }}>
                            <InputLabel htmlFor="outlined-adornment-ap_paterno-usuario">Apellido Paterno</InputLabel>
                            <OutlinedInput
                                id="outlined-adornment-ap_paterno-usuario"
                                type="text"
                                value={formik.values.ap_paterno || ''}
                                name="ap_paterno"
                                onBlur={formik.handleBlur}
                                onChange={formik.handleChange}
                                label="Apellido Paterno"
                                inputProps={{}}
                            />
                            {formik.touched.ap_paterno && formik.errors.ap_paterno && (
                                <FormHelperText error id="standard-weight-helper-text-ap_paterno-usuario">
                                    {formik.errors.ap_paterno}
                                </FormHelperText>
                            )}
                        </FormControl>
                        <FormControl fullWidth error={Boolean(formik.touched.ap_materno && formik.errors.ap_materno)} sx={{ ...theme.typography.customInput }}>
                            <InputLabel htmlFor="outlined-adornment-ap_materno-usuario">Apellido Materno</InputLabel>
                            <OutlinedInput
                                id="outlined-adornment-ap_materno-usuario"
                                type="text"
                                value={formik.values.ap_materno || ''}
                                name="ap_materno"
                                onBlur={formik.handleBlur}
                                onChange={formik.handleChange}
                                label="Apellido Materno"
                                inputProps={{}}
                            />
                            {formik.touched.ap_materno && formik.errors.ap_materno && (
                                <FormHelperText error id="standard-weight-helper-text-ap_materno-usuario">
                                    {formik.errors.ap_materno}
                                </FormHelperText>
                            )}
                        </FormControl>
                        <FormControl fullWidth error={Boolean(formik.touched.email && formik.errors.email)} sx={{ ...theme.typography.customInput }}>
                            <InputLabel htmlFor="outlined-adornment-email-usuario">Email</InputLabel>
                            <OutlinedInput
                                id="outlined-adornment-email-usuario"
                                type="email"
                                value={formik.values.email || ''}
                                name="email"
                                onBlur={formik.handleBlur}
                                onChange={formik.handleChange}
                                label="Email"
                                inputProps={{}}
                            />
                            {formik.touched.email && formik.errors.email && (
                                <FormHelperText error id="standard-weight-helper-text-email-usuario">
                                    {formik.errors.email}
                                </FormHelperText>
                            )}
                        </FormControl>
                        <FormControl fullWidth error={Boolean(formik.touched.telefono && formik.errors.telefono)} sx={{ ...theme.typography.customInput }}>
                            <InputLabel htmlFor="outlined-adornment-telefono-usuario">telefono</InputLabel>
                            <OutlinedInput
                                id="outlined-adornment-telefono-usuario"
                                type="text"
                                value={formik.values.telefono || ''}
                                name="telefono"
                                onBlur={formik.handleBlur}
                                onChange={formik.handleChange}
                                label="Ohone"
                                inputProps={{}}
                            />
                            {formik.touched.telefono && formik.errors.telefono && (
                                <FormHelperText error id="standard-weight-helper-text-telefono-usuario">
                                    {formik.errors.telefono}
                                </FormHelperText>
                            )}
                        </FormControl>
                        <FormControl fullWidth>
                            <InputLabel id="demo-simple-select-label">Perfil</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={formik.values.perfil || "0"}
                                label="perfil"
                                onChange={formik.handleChange}
                                name="perfil"
                            >
                                <MenuItem value="0" key={0}>Seleccione Perfil</MenuItem>
                                {optionSelectPerfil.map((item) => (
                                    <MenuItem value={item.label} key={item.value}>{item.label}</MenuItem>
                                ))}

                            </Select>
                        </FormControl>
                        <FormGroup>
                            <FormControlLabel control={<Checkbox checked={formik.values.vigencia || false} onChange={(ev, checked) => { formik.setFieldValue('vigencia', checked); }} />} label="Vigencia" name="vigenciaCheck" />
                        </FormGroup>
                        <Box sx={{ mt: 2 }}>
                            <AnimateButton>
                                <Button
                                    disableElevation
                                    disabled={formik.isSubmitting}
                                    fullWidth
                                    size="large"
                                    type="submit"
                                    variant="contained"
                                    color="secondary"
                                >
                                    Sign in
                                </Button>
                            </AnimateButton>
                        </Box>
                    </form>
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
                        <aside class="callout warning">
                            <b> Espera, espera un minuto.☝🏾</b>
                            Estas seguro que deseas realizar esta operación, al eliminar un usuario no podra volver a recuperarlo. 
                        </aside>
                    </DialogContentText>
                </DialogContent>
                <DialogActions sx={{textAlign: "center",alignItems: "center", display: "block",justifyContent: "center"}}>
                    <Button variant="contained" onClick={handleClickClose}>Cancelar</Button>
                    <Button variant="contained" color="error" endIcon={<DeleteIcon />} autoFocus>Eliminar usuario</Button>
                </DialogActions>
            </Dialog>

        </>
    );
}

export default MantenedorUsuario;
