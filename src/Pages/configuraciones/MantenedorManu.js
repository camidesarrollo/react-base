import React, { useState, useLayoutEffect, useEffect } from "react";
import {
    Paper, Grid, FormControl, InputLabel, Select, MenuItem, OutlinedInput, Box, Chip, FormGroup, FormControlLabel, Checkbox, Button, Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions, Snackbar, Alert
} from '@mui/material';
import MainCard from '../../ui-component/cards/MainCard';
import TreeMenu from "../../Components/TreeMenu/TreeMenu";
import { gridSpacing } from '../../store/constant';
import { getMenuId, getAllMenu, getAllMenuTable, getSubMenuByMenu, eliminarMenu, editarMenu } from "../../Service/index";
import { getChipColors } from "../../utils/colors";
import { useTheme } from '@mui/material/styles';
import { getRoles, guardarMenu } from "../../Service/index";
import AnimateButton from '../../ui-component/extended/AnimateButton';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import DataTableGrid from '../../Components/Layout/Table';

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

    let i = -1;
    let j = -1;

    const chipColor = getChipColors();

    let [data, setData] = useState([]);

    let [disabledActualizar, setDisabledActualizar] = useState(true);

    let [disabledCrear, setDisabledCrear] = useState(true);

    const [formulario, setFormulario] = useState({
        tipo: "-1",
        tipo_menu: "0",
        menu_title: "",
        descripcion: "",
        formulario: "",
        argumentos: "",
        menu_path: "",
        vigencia: false
    })

    const [idMenu, setDiagId] = React.useState("");

    let [dataTable, setDataTable] = useState([]);



    const [perfilSelect, setperfilSelect] = useState([]);

    const [perfil, setperfil] = useState([]);

    const [subMenu, setSubMenu] = useState(false);

    const [subMenuData, setSubMenuData] = useState([]);

    const [idEditar, setIdEditar] = useState("");

    const [titleMenu, setDiagTitle] = React.useState("");

    const [openDialog, setOpenDialog] = React.useState(false);

    const [openSnack, setOpenSnack] = useState(false);

    const [mensaje, setMensaje] = useState("");

    const [visibleMenu, setVisibleMenu] = useState(false);

    const [severity, setSeverity] = useState("");

    const handleClickClose = () => {
        setOpenDialog(false);
    };

    const handleCloseSnack = () => {
        setOpenSnack(false);
    }

    const handleOpenSnack = () => {
        setOpenSnack(true);
    }

    const [optionSelectPerfil, setSelectPerfil] = useState([{}]);

    const handleClickOpen = (titulo, id) => {
        setDiagTitle(titulo);
        setDiagId(id);
        setOpenDialog(true);
    };

    const llenarTree = () => {
        getAllMenu()
            .then((response) => {
                setData(response.data);
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
                    data.push(response.data[i].name);
                }
                setperfil(data);
            })
            .catch((error) => {
                console.log(error.message);
            })
    }

    const privilegioUsuario = JSON.parse(window.localStorage.getItem('loginData'));

    useLayoutEffect(() => {
        llenarTree();
        llenarDataTable();
        obtenerPerfil();
        if (privilegioUsuario.privilegio.actualizar === true) {
            setDisabledActualizar(false);
        }

        if (privilegioUsuario.privilegio.crear === true) {
            setDisabledCrear(false);
        }

    }, []);

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

    const handleClick = (node) => {
        console.log(node);
    };

    const handleChangeSelect = (event) => {

        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
        console.log(name);


        if (name === "tipo") {

            if (value === "1") {
                setVisibleMenu(true);
            } else {
                setVisibleMenu(false);
                formulario.tipo_menu = 0;
            }
        }

        setFormulario({
            ...formulario,
            [name]: value
        });
    };

    const handleInputChange = (event) => {
        if (event.target.name === "menu_title") {
            generarPath(event.target.value);
        }
        setFormulario({
            ...formulario,
            [event.target.name]: event.target.value
        })
    }

    const generarPath = (titulo) => {
        let menu_title = titulo.toLowerCase();
        let result = menu_title.indexOf(" ");
        let resultado = "";

        if (result > 0) {
            resultado = "/" + menu_title.replace(" ", "_");
        } else {
            resultado = "/" + menu_title;
        }

        formulario.menu_path = resultado;
    }

    const handleChange = (event) => {
        const {
            target: { value },
        } = event;

        setperfilSelect(
            // On autofill we get a stringified value.
            typeof value === 'string' ? value.split(',') : value,
        );
    };

    const handleMenuRename = (id, type) => {

        getMenuId(id)
            .then((response) => {
                limpiarData();
                setIdEditar(id);

                let vigencia = false;
                if (response.data.vigencia.id === 1) {
                    vigencia = true;
                }

                let tipo_menu = "";
                let tipo = "-1";

                if (response.data.padre != null) {
                    tipo_menu = response.data.padre.menu_id;
                    tipo = 1;
                    setVisibleMenu(true);
                } else {
                    tipo = 0;
                    setVisibleMenu(false);
                }

                if (response.data.submenu.length > 0) {
                    setSubMenu(true);
                    setSubMenuData(response.data.submenu);

                } else {
                    setSubMenu(false);
                }
                setFormulario({ menu_title: response.data.menu_title, tipo_menu: tipo_menu, descripcion: response.data.descripcion, menu_path: response.data.menu_path, argumentos: response.data.argumentos, tipo: tipo, vigencia: vigencia })


                let dataSelect = []
                for (var i = 0; i < response.data.roles.length; i++) {
                    var role = response.data.roles[i];
                    dataSelect.push(role.name)
                }
                setperfilSelect(
                    // On autofill we get a stringified value.
                    typeof dataSelect === 'string' ? dataSelect.split(',') : dataSelect,
                );
            })
            .catch((error) => {
                console.log(error.message);
            });


    };

    const handleChangeVigencia = (event) => {

        const value = event.target.type === 'checkbox' ? event.target.checked : event.target.value;
        const name = event.target.name;

        setFormulario({
            ...formulario,
            [name]: value
        });
    };

    const llenarDataTable = () => {
        getAllMenuTable()
            .then((response) => {
                setDataTable(response.data);
            })
            .catch((error) => {
                console.log(error.message);
            });
    }

    const editar = () => {
        if (formulario.vigencia === true) {
            formulario.vigencia = ['Vigente'];
        } else {
            formulario.vigencia = ['No vigente'];

        }
        formulario.role = perfilSelect;
        formulario.menu_id = idEditar;
        console.log(formulario);

        if(formulario.tipo_menu === ""){
            formulario.tipo_menu = formulario.tipo;
        }
        

        editarMenu(formulario)
            .then((response) => {
                if (response.data.code === 200) {
                    setMensaje(response.data.message);
                    llenarTree();
                    handleOpenSnack();
                    llenarDataTable();
                    limpiarData();
                    setSeverity("success");
                } else {
                    setMensaje(response.data.message);
                    setSeverity("error");
                    handleOpenSnack();
                }
            })
            .catch((error) => {
                console.log(error.message);
            });
    }

    const guardar = () => {

        if (formulario.vigencia === true) {
            formulario.vigencia = ['Vigente'];
        } else {
            formulario.vigencia = ['No vigente'];

        }
        formulario.role = perfilSelect;

        guardarMenu(formulario).then((response) => {

            if (response.data.code === 200) {
                setSeverity("success");
                setMensaje(response.data.message);
                llenarTree();
                handleOpenSnack();
                llenarDataTable();
                limpiarData();
            } else {
                setMensaje(response.data.message);
                setSeverity("error");
                handleOpenSnack();
            }



        }).catch((error) => {
            console.log(error.message);
        });
        console.log(formulario);
    }


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

    const handleClickEliminarMenu = (id) => {
        console.log(id);
        eliminarMenu(id)
            .then((response) => {

                if (response.data.code === 200) {
                    handleClickClose();
                    setMensaje(response.data.message);
                    llenarTree();
                    handleOpenSnack();
                    llenarDataTable();
                    limpiarData();
                    setSeverity("success");
                } else {
                    setMensaje(response.data.message);
                    setSeverity("error");
                    handleOpenSnack();
                }
            })
            .catch((error) => {
                console.log(error);
                handleClickClose();
                alert("No es posible eliminar menu, debido a que contiene SUBMENUS ASOCIADOS");
            });
    }


    const columns = [
        {
            field: 'menu_title',
            headerName: 'Titulo',
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
            renderCell: (params) => {
                let disabledActualizar = true;
                if (privilegioUsuario.privilegio.actualizar === true) {
                    disabledActualizar = false;
                }
                return <div >
                    <Button variant="outlined" startIcon={<EditIcon />} onClick={() => { handleMenuRename(params.row.menu_id); }} sx={{ marginRight: '5px' }} disabled={disabledActualizar} />
                    <Button variant="outlined" color="error" onClick={() => { handleClickOpen(params.row.menu_title, params.row.menu_id) }} startIcon={<DeleteIcon />} disabled={disabledActualizar} />
                </div>
            }
        },
    ];


    return (
        <>
            <Paper className="css-e8p490">
                <Grid container spacing={gridSpacing}>
                    <Grid item xs={12} sm={6}>
                        <MainCard title="Opciones">
                            <Grid container direction="column" spacing={1}>
                                <TreeMenu data={data} onUpdate={handleUpdateTreeMenu} onNodeClick={handleClick} />
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
                                        <FormControl fullWidth sx={{ m: 1, width: 500 }}>
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
                                        {visibleMenu === true &&
                                            <FormControl fullWidth sx={{ m: 1, width: 500 }}>
                                                <InputLabel id="demo-simple-select-label">Menu</InputLabel>
                                                <Select
                                                    labelId="demo-simple-select-label"
                                                    id="demo-simple-select"
                                                    value={formulario.tipo_menu}
                                                    label=""
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
                                        <FormControl fullWidth sx={{ m: 1, width: 500 }}>
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

                                        <FormControl fullWidth sx={{ m: 1, width: 500 }}>
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
                                        <FormControl fullWidth sx={{ m: 1, width: 500 }}>
                                            <InputLabel htmlFor="outlined-adornment-email-login">Url</InputLabel>
                                            <OutlinedInput
                                                id="outlined-adornment-email-login"
                                                type="text"
                                                value={formulario.menu_path}
                                                name="menu_path"
                                                label="Url"
                                                onChange={handleInputChange}
                                                disabled={true}
                                            />
                                        </FormControl>
                                        <FormControl sx={{ m: 1, width: 500 }}>
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
                                        <Box>
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
                                        </Box>
                                        <FormGroup>
                                            <FormControlLabel control={<Checkbox checked={formulario.vigencia} onChange={handleChangeVigencia} />} label="Vigencia" name="vigencia" />
                                        </FormGroup>
                                        <Box sx={{ textAlign: "center", alignItems: "center", display: "flex", justifyContent: "center" }}>
                                            {
                                                idEditar !== "" ? (<AnimateButton><Button className="fill " onClick={() => { editar(); }} disabled={disabledActualizar}>Ediar</Button></AnimateButton>)
                                                    :
                                                    (<AnimateButton><Button className="fill" onClick={() => { guardar(); }} disabled={disabledCrear}>Agregar</Button></AnimateButton>)
                                            }
                                            <AnimateButton><Button className="fill" onClick={() => { limpiarData(); }}>Limpiar Data</Button></AnimateButton>


                                        </Box>
                                    </form>
                                </Grid>

                            </Grid>

                        </MainCard>
                    </Grid>
                </Grid>
            </Paper>
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
            <Snackbar open={openSnack} autoHideDuration={6000} onClose={handleCloseSnack} anchorOrigin={{
                vertical: 'top',
                horizontal: 'center',
            }}>
                <Alert onClose={handleCloseSnack} severity={severity} sx={{ width: '100%' }}>
                    {mensaje}
                </Alert>
            </Snackbar>
        </>
    )
}
export default Mantenedor_Menu;
