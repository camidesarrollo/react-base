import * as React from 'react';
import { useState, useEffect } from "react";
import { registerUser, getUser } from "../../Service/index";
import { getRoles, obtenerUsuario, updateUsuario } from "../../Service/index";
import { AvatarGroup, Slide, IconButton, Card, TextField, CardContent, Dialog, DialogTitle, DialogContentText, DialogContent, DialogActions, Paper, Grid, Button, Box, FormControl, InputLabel, FormHelperText, FormControlLabel, MenuItem, Select, Checkbox, OutlinedInput, FormGroup } from '@mui/material';
import MuiTypography from '@mui/material/Typography';
import AddIcon from '@mui/icons-material/Add';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { getChipColors, getColor } from "../../utils/colors";
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
import { experimentalStyled as styled } from '@mui/material/styles';


function MantenedorPerfil() {


    const chipColor = getChipColors();

    const Transition = React.forwardRef(function Transition(props, ref) {
        return <Slide direction="up" ref={ref} {...props} />;
    });

    const [data, setdataPerfil] = useState({
        id: "",
        name: "",
        vigencia: { id: "", name: '' }
    });

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

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const columns_2 = [
        {
            field: 'name',
            flex: 1,
            align: "center",
            headerAlign: "center"
        },
        {
            field: 'vigencia',
            type: 'object',
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
            description: 'This column has a value getter and is not sortable.',
            sortable: false,
            width: 320,
            align: "center",
            headerAlign: "center",
            renderCell: (params) => (
                <FormControl component="fieldset">
                    <FormGroup aria-label="position" row>
                        <FormControlLabel
                            value="start"
                            control={<Checkbox />}
                            label="Ver"
                            labelPlacement="start"
                        />
                        <FormControlLabel
                            value="start"
                            control={<Checkbox />}
                            label="Crear"
                            labelPlacement="start"
                        />
                        <FormControlLabel
                            value="start"
                            control={<Checkbox />}
                            label="Editar"
                            labelPlacement="start"
                        />
                    </FormGroup>
                </FormControl>
            )
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
        getRoles()
            .then((response) => {

                setdataPerfil(response.data);
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
    }, [rowsData]);

    useEffect(() => {
        console.info("data perfil", data);
    }, [data]);

    useEffect(() => {
        console.log(data);
        for (var i = 0; i < data.length; i++) {
            console.log(data[i]);
        }
        Object.keys(data).map(function (key, index) {
            console.log(data[key]);
        });
    })

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
                    {Object.keys(data).filter((key, index) => index < 5).map((item,key)  => {
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
                                            Total 4 users
                                        </MuiTypography>
                                        <AvatarGroup max={4}>
                                            <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" sx={{ width: "32px", height: "32px" }} />
                                            <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" sx={{ width: "32px", height: "32px" }} />
                                            <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" sx={{ width: "32px", height: "32px" }} />
                                            <Avatar alt="Agnes Walker" src="/static/images/avatar/4.jpg" sx={{ width: "32px", height: "32px" }} />
                                            <Avatar alt="Trevor Henderson" src="/static/images/avatar/5.jpg" sx={{ width: "32px", height: "32px" }} />
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
                                            <Button variant="contained" size="medium" sx={{ margin: "0px 0px 0.75rem" }} onClick={handleClickOpen}>Añadir rol</Button>
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
                fullWidth="true"
            >
                <DialogTitle id="alert-dialog-title">
                    <Typography variant='h6' sx={{ fontSize: "1.25rem", textAlign: "center" }}>
                        <Typography variant='p' sx={{ fontSize: "2.0243rem" }}>Agregar Rol</Typography>
                        <Typography variant='body2' sx={{ fontSize: "0.875rem" }}>Establecer los permisos de los roles</Typography>

                    </Typography>
                </DialogTitle>
                <DialogContent>
                    <Box>
                        <FormControl fullWidth>
                            <TextField id="my-input" label="NOMBRE DEL ROL" variant="outlined" />
                        </FormControl>
                    </Box>
                    <DialogContentText id="alert-dialog-description" sx={{ marginBottom: "1rem" }}>
                        <Typography variant='h6' sx={{ fontSize: "1.25rem" }}>Permisos de rol</Typography>
                    </DialogContentText>
                    <DataTableGrid columns={columns_2} rows={data}></DataTableGrid>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Disagree</Button>
                    <Button onClick={handleClose} autoFocus>
                        Agree
                    </Button>
                </DialogActions>
            </Dialog>
        </>
    );
}

export default MantenedorPerfil;
