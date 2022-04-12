import React, { useState, useLayoutEffect, useEffect } from "react";
import DataTableGrid from '../../Components/Layout/Table';
import { useSelector } from 'react-redux';
import { getRoles, guardarMenu, editarMenu } from "../../Service/index";
import { Alert, AlertTitle, Chip, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, fabClasses, FormGroup, Grid, Link } from '@mui/material';
import MuiTypography from '@mui/material/Typography';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import {
    Box,
    Button,
    Checkbox,
    Divider,
    FormControlLabel,
    FormHelperText,
    IconButton,
    InputAdornment,
    OutlinedInput,
    Stack,
    Typography,
    useMediaQuery, Paper
} from '@mui/material';
// project imports
import SubCard from '../../ui-component/cards/SubCard';
import MainCard from '../../ui-component/cards/MainCard';
import SecondaryAction from '../../ui-component/cards/CardSecondaryAction';
import { gridSpacing } from '../../store/constant';
import Tree from "../../Components/Tree/Tree";
import TreeMenu from "../../Components/TreeMenu/TreeMenu"

import useScriptRef from '../../hooks/useScriptRef';
import AnimateButton from '../../ui-component/extended/AnimateButton';
import { useTheme } from '@mui/material/styles';

import { getMenuId, getAllMenu, getAllMenuTable, getSubMenuByMenu, eliminarMenu } from "../../Service/index";
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

import { getChipColors } from "../../utils/colors";


const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
    PaperProps: {
        style: {
            maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
            width: 250,
        },
    },
};

const names = [
    'Oliver Hansen',
    'Van Henry',
    'April Tucker',
    'Ralph Hubbard',
    'Omar Alexander',
    'Carlos Abbott',
    'Miriam Wagner',
    'Bradley Wilkerson',
    'Virginia Andrews',
    'Kelly Snyder',
];

const structure = [
    {
        type: "folder",
        name: "client",
        files: [
            {
                type: "folder",
                name: "ui",
                files: [
                    { type: "file", name: "Toggle.js" },
                    { type: "file", name: "Button.js" },
                    { type: "file", name: "Button.style.js" }
                ]
            },
            {
                type: "folder",
                name: "components",
                files: [
                    { type: "file", name: "Tree.js" },
                    { type: "file", name: "Tree.style.js" }
                ]
            },
            { type: "file", name: "setup.js" },
            { type: "file", name: "setupTests.js" }
        ]
    },
    {
        type: "folder",
        name: "packages",
        files: [
            {
                type: "file",
                name: "main.js"
            }
        ]
    },
    { type: "file", name: "index.js" },
    {
        type: "folder",
        name: "packages",
        files: [
            {
                type: "file",
                name: "main.js"
            }
        ]
    },
    {
        type: "folder",
        name: "packages",
        files: [
            {
                type: "file",
                name: "main.js"
            }
        ]
    },
    {
        type: "folder",
        name: "packages",
        files: [
            {
                type: "file",
                name: "main.js"
            }
        ]
    },
    {
        type: "folder",
        name: "packages",
        files: [
            {
                type: "file",
                name: "main.js"
            }
        ]
    }
];

function getStyles(name, personName, theme) {
    return {
        fontWeight:
            personName.indexOf(name) === -1
                ? theme.typography.fontWeightRegular
                : theme.typography.fontWeightMedium,
    };
}


const Mantenedor_Menu = (props) => {

    const theme = useTheme();
    const scriptedRef = useScriptRef();
    const matchDownSM = useMediaQuery(theme.breakpoints.down('md'));
    const customization = useSelector((state) => state.customization);

    let [data, setData] = useState([]);
    let [dataTable, setDataTable] = useState([]);


    const [perfil, setperfil] = useState([]);
    const [perfilSelect, setperfilSelect] = useState([]);

    const [personName, setPersonName] = React.useState([]);

    const handleChange = (event) => {
        const {
            target: { value },
        } = event;

        setperfilSelect(
            // On autofill we get a stringified value.
            typeof value === 'string' ? value.split(',') : value,
        );
    };

    const obtenerPerfil = () => {
        getRoles()
            .then((response) => {
                let data = []

                // data.push(otroValor);
                for (var i = 0; i < response.data.length; i++) {
                    data.push(response.data[i].name);
                }
                setperfil(data);
            })
            .catch((error) => {
                console.log(error.message);
            })
    }


    const handleClick = (node) => {
        console.log(node);
    };
    const handleUpdate = (state) => {
        localStorage.setItem(
            "tree",
            JSON.stringify(state, function (key, value) {
                if (key === "parentNode" || key === "id") {
                    return null;
                }
                return value;
            })
        );
    };

    const handleUpdateTreeMenu = (state) => {
        localStorage.setItem(
            "menuData",
            JSON.stringify(state, function (key, value) {
                if (key === "parentNode" || key === "id") {
                    return null;
                }
                return value;
            })
        );
    };

    useLayoutEffect(() => {
        llenarTree();
        llenarDataTable();
        obtenerPerfil();
    }, []);

    let dataMenu2 = [{
        argumentos: "",
        descripcion: "",
        menu_icon: "",
        menu_id: "",
        menu_path: "",
        menu_title: "",
        roles: null,
        submenu: [],
        tipo: "",
        tipo_menu: 0,
        vigencia: { id: 1, name: 'Vigente' }
    }];
    const llenarTree = () => {
        getAllMenu()
            .then((response) => {
                dataMenu2 = response.data;
                setData(response.data);
            })
            .catch((error) => {
                console.log(error.message);
            });
    }

    const llenarDataTable = () => {
        getAllMenuTable()
            .then((response) => {
                setDataTable(response.data);
            })
            .catch((error) => {
                console.log(error.message);
            });
    }

    const [subMenu, setSubMenu] = useState(false);
    const [subMenuData, setSubMenuData] = useState([]);
    const [idEditar, setIdEditar] = useState([]);

    const columns = [
        {
            field: 'menu_title',
            headerName: 'Titulo',
            flex: 1,
            align: "center",
            headerAlign: "center"
        },
        {
            field: 'menu_icon',
            headerName: 'Icono',
            flex: 1,
            align: "center",
            headerAlign: "center"
        },
        {
            field: 'descripcion',
            headerName: 'Descripción',
            flex: 1,
            align: "center",
            headerAlign: "center"
        },
        {
            field: 'menu_path',
            headerName: 'URL',
            flex: 1,
            align: "center",
            headerAlign: "center"
        },
        {
            field: 'argumentos',
            headerName: 'Argumentos',
            flex: 1,
            align: "center",
            headerAlign: "center"
        },
        {
            field: 'tipo_menu',
            headerName: 'Tipo',
            description: 'This column has a value getter and is not sortable.',
            sortable: true,
            flex: 1,
            align: "center",
            headerAlign: "center",
            renderCell: (params) => (

                params.value === 0 ?
                    "Modulo"
                    : "Pagina"
            )
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
                params.formattedValue.forEach(element => {
                    if (k >= chipColor.length - 1) {
                        k = 0;
                    } else {
                        k++;
                    }

                    data.push(<Chip label={element.name} key={element.id} variant="filled" color="success" size="small" skin="light" className="css-1kb0wuq" sx={{ color: chipColor[k].color, backgroundColor: chipColor[k].backgroundColor }} />)


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
                    <Button variant="outlined" startIcon={<EditIcon />} onClick={() => { handleMenuRename(params.row.menu_id); }} sx={{ marginRight: '5px' }} />
                    <Button variant="outlined" color="error" onClick={() => { handleClickOpen(params.row.menu_title, params.row.menu_id) }} startIcon={<DeleteIcon />} />
                </div>
            )
        },
    ];

    const [openDialog, setOpenDialog] = React.useState(false);

    const handleClickClose = () => {
        setOpenDialog(false);
    };

    const [titleMenu, setDiagTitle] = React.useState("");
    const [idMenu, setDiagId] = React.useState("");

    const handleClickOpen = (titulo, id) => {
        setDiagTitle(titulo);
        setDiagId(id);
        setOpenDialog(true);
    };

    const [open, setOpen] = React.useState(true);

    const [dataToastr, setDataToastr] = useState({
        setOpen: false,
        title: "",
        data: "",
        severity: ""
    });
    const handleClickEliminarMenu = (id) => {
        console.log(id);
        eliminarMenu(id)
            .then((response) => {
                if (response.status === 200) {
                    // let data = {
                    //     setOpen: true,
                    //     title: "Success",
                    //     data: response.data,
                    //     severity: "succes"
                    // }
                    // setDataToastr(data)
                    handleClickClose();
                    alert(response.data);
                    llenarTree();
                    llenarDataTable();

                }
            })
            .catch((error) => {
                console.log(error);
                // let data = {setOpen: true,
                //     title: "Warning",
                //     data: "No es posible eliminar menu, debido a que contiene SUBMENUS ASOCIADOS",
                //     severity: "warning"}
                //     setDataToastr(data);
                handleClickClose();
                alert("No es posible eliminar menu, debido a que contiene SUBMENUS ASOCIADOS");
            });
    }

    const chipColor = getChipColors();

    let i = -1;
    let j = -1;

    const limpiarData = () => {
        // formik.resetForm({
        //     values: { menu_title: "", descripcion: "", url: "", argumentos: "", tipo: "", vigencia: false }
        // });
        setFormulario({
            tipo: "-1",
            tipo_menu: "-1",
            menu_title: "",
            descripcion: "",
            formulario: "",
            argumentos: "",
            menu_path: "",
            vigencia: false
        })
        setIdEditar("");
        setperfilSelect([]);
        setSubMenu(false);
        setSubMenuData([]);
    }


    const [formulario, setFormulario] = useState({
        tipo: "-1",
        tipo_menu: "-1",
        menu_title: "",
        descripcion: "",
        formulario: "",
        argumentos: "",
        menu_path: "",
        vigencia: false
    })

    const handleChangeSelect = (event) => {
     
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
        console.log(name);
        setFormulario({
            ...formulario,
            [name]: value
        });
    };
    const handleChangeVigencia = (event) => {

        const value = event.target.type === 'checkbox' ? event.target.checked : event.target.value;
        const name = event.target.name;

        setFormulario({ ...formulario,
            [name]: value });
    };

    useEffect(() => {
        const timeOutId = setTimeout(() => setFormulario(formulario), 500);
        return () => clearTimeout(timeOutId);
      }, [formulario]);

    const editarMenu = () => {
        console.log(formulario)
    }

    const handleMenuRename = (id, type) => {
        getMenuId(id)
            .then((response) => {

                getSubMenuByMenu(id)
                    .then((response_menu) => {
                        if (response_menu.data.length > 0) {
                            setSubMenu(true);
                            setSubMenuData(response_menu.data);

                        } else {
                            console.log("entramos aca");
                            setSubMenu(false);
                            setSubMenuData([]);
                        }

                        let dataSelect = []
                        for (var i = 0; i < response.data.roles.length; i++) {
                            var role = response.data.roles[i];
                            dataSelect.push(role.name)
                        }
                        setperfilSelect(
                            // On autofill we get a stringified value.
                            typeof dataSelect === 'string' ? dataSelect.split(',') : dataSelect,
                        );
                        let vigencia = false;

                        if (response.data.vigencia.id == 1) {
                            vigencia = true;
                        }

                        setIdEditar(response.data.menu_id);
                        if (response_menu.data.length === 0) {
                            setFormulario({ menu_title: response.data.menu_title, descripcion: response.data.descripcion, menu_path: response.data.menu_path, argumentos: response.data.argumentos, tipo: "1", vigencia: vigencia })
                        } else {
                            setFormulario({ menu_title: response.data.menu_title, descripcion: response.data.descripcion, menu_path: response.data.menu_path, argumentos: response.data.argumentos, tipo: "0", vigencia: vigencia })
                        }
                    })
                    .catch((error) => {
                        console.log(error.message);
                    });




            })
            .catch((error) => {
                console.log(error.message);
            });
        // setIsOpen(true);
        // setEditing(true); 

    };

    const handleInputChange = (event) => {
        // console.log(event.target.name)
        // console.log(event.target.value)
        setFormulario({
            ...formulario,
            [event.target.name]: event.target.value
        })
    }

    const guardar = () => {
    
        if(formulario.vigencia  === true){
            formulario.vigencia  = ['Vigente'];
        }else{
            formulario.vigencia = ['No vigente'];
            
        }
        formulario.role = perfilSelect; 
        console.log(formulario); 
        guardarMenu(formulario).then((response) => {

          console.log(response);
        }).catch((error) => {
            console.log(error.message);
        });
        console.log(formulario);
    }

    const editar = () => {
        if(formulario.vigencia  === true){
            formulario.vigencia  = ['Vigente'];
        }else{
            formulario.vigencia = ['No vigente'];
            
        }
        formulario.role = perfilSelect; 
        formulario.id_menu = idMenu; 
        editarMenu(formulario).then((response) => {

            console.log(response);
          }).catch((error) => {
              console.log(error.message);
          });
    }
    return (
        <>
            <Paper className="css-e8p490">
                <Box sx={{ p: 2 }}>
                    <Grid container className="css-b09laf">
                        <Grid item sx={{ paddingTop: 1, paddingLeft: 1 }} >
                            <MuiTypography variant="h2">
                                Mantenedor Menu
                            </MuiTypography>
                        </Grid>
                    </Grid>
                </Box>
            </Paper>
            <Paper sx={{ background: "none", border: "none" }}>
                <Grid container spacing={gridSpacing}>
                    <Grid item xs={12} sm={6}>
                        <MainCard title="Opciones">
                            <Grid container direction="column" spacing={1}>
                                {/* <Tree data={dataMenu2} onUpdate={handleUpdate} onNodeClick={handleClick} handleMenuRename={handleMenuRename} /> */}
                                <TreeMenu data={data} onUpdate={handleUpdateTreeMenu} onNodeClick={handleClick} handleMenuRename={handleMenuRename} />
                                {/* <Tree data={data}  onUpdate={handleUpdate} onNodeClick={handleClick} /> */}
                            </Grid>
                        </MainCard>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <MainCard title="Diseño">
                            <Grid
                                container
                                spacing={0}
                                direction="column"
                                alignItems="center"
                                justifyContent="center"
                            >

                                <Grid container direction="column" spacing={1}>

                                    <form>
                                        <FormControl fullWidth sx={{ m: 1, width: 700 }}>
                                            <InputLabel id="demo-simple-select-label">Tipo</InputLabel>
                                            <Select
                                                labelId="demo-simple-select-label"
                                                id="demo-simple-select"
                                                value={formulario.tipo}
                                                label="tipo"
                                                onChange={handleChangeSelect}
                                                name="tipo"
                                            >
                                                <MenuItem value="-1" key={0}>Seleccione Tipo</MenuItem>
                                                <MenuItem value="0" key={1}>Menu</MenuItem>
                                                <MenuItem value="1" key={2}>SubMenu</MenuItem>

                                            </Select>
                                        </FormControl>
                                        {formulario.tipo === "1" && idMenu === "" &&
                                            <FormControl fullWidth sx={{ m: 1, width: 700 }}>
                                                <InputLabel id="demo-simple-select-label">Menu</InputLabel>
                                                <Select
                                                    labelId="demo-simple-select-label"
                                                    id="demo-simple-select"
                                                    value={formulario.tipo_menu}
                                                    label="tipo_menu"
                                                    onChange={handleChangeSelect}
                                                    name="tipo_menu"
                                                >
                                                    <MenuItem value="0" key={0}>Seleccione Menu</MenuItem>

                                                    {dataTable.map((item, index) => {
                                                        return <MenuItem value={item.menu_id} key={index}>{item.menu_title}</MenuItem>;

                                                    })}
                                                </Select>
                                            </FormControl>
                                        }
                                        <FormControl fullWidth sx={{ m: 1, width: 700 }}>
                                            <InputLabel htmlFor="outlined-adornment-title-menu">Titulo</InputLabel>
                                            <OutlinedInput
                                                id="outlined-adornment-title-menu"
                                                type="text"
                                                value={formulario.menu_title}
                                                name="menu_title"
                                                label="Titulo"
                                                onChange={handleInputChange}
                                            />
                                        </FormControl>

                                        <FormControl fullWidth sx={{ m: 1, width: 700 }}>
                                            <InputLabel htmlFor="outlined-adornment-email-login">Descripción</InputLabel>
                                            <OutlinedInput
                                                id="outlined-adornment-email-login"
                                                type="text"
                                                value={formulario.descripcion}
                                                name="descripcion"
                                                label="Discripción"
                                                onChange={handleInputChange}
                                            />
                                        </FormControl>
                                        <FormControl fullWidth sx={{ m: 1, width: 700 }}>
                                            <InputLabel htmlFor="outlined-adornment-email-login">Url</InputLabel>
                                            <OutlinedInput
                                                id="outlined-adornment-email-login"
                                                type="text"
                                                value={formulario.menu_path}
                                                name="menu_path"
                                                label="Url"
                                                onChange={handleInputChange}
                                            />
                                        </FormControl>
                                        <FormControl fullWidth sx={{ m: 1, width: 700 }}>
                                            <InputLabel htmlFor="outlined-adornment-email-login">Argumentos</InputLabel>
                                            <OutlinedInput
                                                id="outlined-adornment-email-login"
                                                type="text"
                                                value={formulario.argumentos}
                                                name="argumentos"
                                                label="Argumentos"
                                                onChange={handleInputChange}
                                            />

                                        </FormControl>
                                        <FormControl sx={{ m: 1, width: 700 }}>
                                            <InputLabel id="demo-multiple-perfil-label">Perfil</InputLabel>
                                            <Select
                                                labelId="demo-multiple-perfil-label"
                                                id="demo-multiple-perfil"
                                                multiple
                                                value={perfilSelect}
                                                onChange={handleChange}
                                                input={<OutlinedInput id="select-multiple-perfil" label="perfil" />}
                                                renderValue={(selected) => (
                                                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                                                        {selected.map((value) => {
                                                            if (j >= chipColor.length - 1) {
                                                                j = 0;
                                                            } else {
                                                                j++;
                                                            }
                                                            return <Chip key={value} label={value} variant="filled" size="small" skin="light" className="css-1kb0wuq" sx={{ color: chipColor[j].color, backgroundColor: chipColor[j].backgroundColor }} />
                                                        })}
                                                    </Box>
                                                )}
                                                MenuProps={MenuProps}
                                            >
                                                {perfil.map((name) => (
                                                    <MenuItem
                                                        key={name}
                                                        value={name}
                                                        style={getStyles(name, perfilSelect, theme)}
                                                    >
                                                        {name}
                                                    </MenuItem>
                                                ))}
                                            </Select>
                                        </FormControl>
                                        {subMenu ? (
                                            "SubMenus: "
                                        ) : (
                                            ""
                                        )}
                                        {

                                            subMenuData.map((item, index) => {
                                                if (i >= chipColor.length - 1) {
                                                    i = 0;
                                                } else {
                                                    i++;
                                                }
                                                return <Chip key={index} label={item.menu_title} onClick={() => { handleMenuRename(item.menu_id); }} variant="filled" size="small" skin="light" className="css-1kb0wuq" sx={{ color: chipColor[i].color, backgroundColor: chipColor[i].backgroundColor }} />;

                                            })

                                        }
                                        <FormGroup>
                                            <FormControlLabel control={<Checkbox checked={formulario.vigencia} onChange={handleChangeVigencia} />} label="Vigencia" name="vigencia" />
                                        </FormGroup>
                                        <Box sx={{ textAlign: "center", alignItems: "center", display: "flex", justifyContent: "center" }}>
                                            {
                                                idEditar != "" ? (<AnimateButton><Button className="fill " onClick={() => { editar(); }}>Ediar</Button></AnimateButton>)
                                                    :
                                                    (<AnimateButton><Button className="fill"  onClick={() => { guardar(); }}>Agregar</Button></AnimateButton>)
                                            }
                                            <AnimateButton><Button className="fill" onClick={() => { limpiarData(); }}>Limpiar Data</Button></AnimateButton>


                                        </Box>
                                    </form>
                                </Grid>

                            </Grid>

                        </MainCard>
                    </Grid>

                </Grid >
            </Paper >
            <Paper className="css-e8p490" sx={{ marginTop: "20px" }}>
                <Box sx={{ p: 2 }}>
                    <Grid container className="css-1xqoed8" >
                        <DataTableGrid columns={columns} rows={dataTable} data={dataTable} getRowId={(r) => r.menu_id}></DataTableGrid>

                    </Grid>


                </Box>
            </Paper>
            <Dialog
                open={openDialog}
                onClose={handleClickClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title" sx={{ textAlign: "center", fontWeight: "bold", fontSize: "20px" }}>
                    {"Eliminar Menu"}
                </DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description" sx={{ color: "black", textAlign: "center" }}>
                        ¿Esta usted seguro de querer eliminar el siguiente menu : <InputLabel sx={{ fontWeight: "bold" }}>{titleMenu}</InputLabel>
                        <aside class="callout warning">
                            <b> Espera, espera un minuto.☝🏾</b>
                            Estas seguro que deseas realizar esta operación, al eliminar menu no podra volver a recuperarlo.
                        </aside>
                    </DialogContentText>
                </DialogContent>
                <DialogActions sx={{ textAlign: "center", alignItems: "center", display: "block", justifyContent: "center" }}>
                    <Button variant="contained" onClick={handleClickClose}>Cancelar</Button>
                    <Button variant="contained" color="error" onClick={() => { handleClickEliminarMenu(idMenu) }} endIcon={<DeleteIcon />} autoFocus>Eliminar menu</Button>
                </DialogActions>
            </Dialog>
            {/* <AlertToastr  setOpen={dataToastr.setOpen} severity={dataToastr.severity} title={dataToastr.title} data ={dataToastr.data} /> */}
        </>

    )

}

export default Mantenedor_Menu;

