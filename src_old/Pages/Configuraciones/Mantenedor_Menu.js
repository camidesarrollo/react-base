// import React, { useState, useLayoutEffect, useEffect, useContext } from "react";
// import Tree from "../../Components/Tree/Tree";
// import Page from '../../Components/Pages';
// import {
//     Card,
//     CardBody,
//     Col,
//     Row
// } from 'reactstrap';
// // import { Form } from 'react-bootstrap';
// import SelectMulti from "../../Components/Form/SelectMulti";
// import Select from "../../Components/Form/Select";
// import { UserContext } from '../../Context/UserContext';
// import { getRoles } from "../../Service/index";
// import makeAnimated from "react-select/animated";
// import {Switch, FormGroup, FormControlLabel} from '@mui/material';

// const Mantenedor_Menu = (props) => {

//     const { handleMenu, sideBarData } = useContext(UserContext);



//     const handleClick = (node) => {
//         console.log(node);
//         // if (node.node.type === "menu") {
//         //     objet_tipo_menu.value = 1;
//         //     objet_tipo_menu.label = "Menu";

//         //     object_menu.titulo = node.node.menu_title;
//         //     object_menu.icono = node.node.menu_icon;
//         //     object_menu.descripcion = node.node.descripcion;
//         //     object_menu.url = node.node.menu_path;
//         //     object_menu.argumentos = node.node.argumentos;

//         //     objet_tipo_perfil.value = node.node.roles[0].id;
//         //     objet_tipo_perfil.label = node.node.roles[0].name;

//         //     setState({ value: objet_tipo_menu })
//         //     setDataMenu(object_menu);
//         //     // setStateSelectPerfil(objet_tipo_perfil);
//         //     // if (node.node.vigencia.id === 1) {
//         //     //     setDataVigencia(true);
//         //     // } else {
//         //     //     setDataVigencia(false);
//         //     // }

//         // } else if (node.node.type === "submenu") {

//         // }
//     };

//     const handleMenuRename = (id, type) => {
//         console.log("Editar TreeMenu");
//         console.log(id);
//         // setIsOpen(true);
//         // setEditing(true); 

//     };


//     const handleUpdate = (state) => {
//         localStorage.setItem(
//             "tree",
//             JSON.stringify(state, function (key, value) {
//                 if (key === "parentNode" || key === "id") {
//                     return null;
//                 }
//                 return value;
//             })
//         );
//     };

//     useLayoutEffect(() => {
//         try {
//             let savedStructure = JSON.parse(localStorage.getItem("tree"));
//             if (savedStructure) {
//                 // setData(savedStructure);
//             }
//         } catch (err) {
//             console.log(err);
//         }
//     }, []);



//     let objet_tipo_menu = new Object();


//     const [object_menu, SetObjetMenu] = useState([{ titulo: "", icono: "", descripcion: "", url: "", argumentos: "" }]);

//     const [dataMenu, setDataMenu] = useState({
//         icono: "",
//         titulo: "",
//         descripcion: "",
//         url: "",
//         argumentos: ""
//     })

//     const [SelectdataTipoMenu, setState] = useState([{ value: "0", label: "Seleccione Menu" }]);

//     const [selectPerfil, setStateSelectPerfil] = useState([{ value: "0", label: "Seleccione Perfil" }])

//     let objet_tipo_perfil = new Object();

//     // const handleClick = (node) => {
//     //     console.log(node);
//     //     if (node.node.type === "menu") {
//     //         objet_tipo_menu.value = 1;
//     //         objet_tipo_menu.label = "Menu";

//     //         object_menu.titulo = node.node.menu_title;
//     //         object_menu.icono = node.node.menu_icon;
//     //         object_menu.descripcion = node.node.descripcion;
//     //         object_menu.url = node.node.menu_path;
//     //         object_menu.argumentos = node.node.argumentos;

//     //         objet_tipo_perfil.value = node.node.roles[0].id;
//     //         objet_tipo_perfil.label = node.node.roles[0].name;

//     //         setState({ value: objet_tipo_menu })
//     //         setDataMenu(object_menu);
//     //         // setStateSelectPerfil(objet_tipo_perfil);
//     //         // if (node.node.vigencia.id === 1) {
//     //         //     setDataVigencia(true);
//     //         // } else {
//     //         //     setDataVigencia(false);
//     //         // }

//     //     } else if (node.node.type === "submenu") {

//     //     }
//     // };

//     const tipoMenuOption = [
//         { value: "0", label: "Seleccione Menu" },
//         { value: "1", label: "Menu" },
//         { value: "2", label: "SubMenu" }
//     ];



//     const handleChangeSelect = (value) => {
//         setState({ value: value })
//     }

//     const [menuOpen, setMenuOpen] = React.useState(undefined);

//     const onMenuOpen = () => {
//         if (menuOpen !== undefined) setMenuOpen(undefined);
//     };

//     let [dataPerfil, setDataPerfil] = useState([]);



//     useEffect(() => {
//         let data = [];
//         let isMounted = true;

//         getRoles()
//             .then((response) => {

//                 for (var i = 0; i < response.data.length; i++) {
//                     let otroValor = new Object();
//                     otroValor.label = response.data[i].name;
//                     otroValor.value = response.data[i].id;
//                     data.push(otroValor);
//                 }

//                 if (isMounted) {
//                     setDataPerfil(data);
//                 }

//             })
//             .catch((error) => {
//                 console.log(error.message);
//             })

//         return () => {
//             isMounted = false;
//         };


//     }, [setDataPerfil])

//     const onOptionChange = (selectedOptions) => {
//         // if (colourOptions !== null) {
//         //     if (colourOptions.length === selectedOptions.length) {
//         //         setMenuOpen(false);
//         //     }
//         // }
//     };


//     const animatedComponents = makeAnimated();

//     const [checkVigencia, setDataVigencia] = useState(true);

//     const handleChange = () => {
//         setDataVigencia(!checkVigencia);
//         console.log(checkVigencia);
//     }

//     return (
//         <Page
//             className="MantenedorMenuPage"
//             title="Mantenedor Menu"
//             breadcrumbs={[{ name: 'Mantenedor Menu', active: true }]}
//         >
//             {/* <Row>
//                 <Col md={6} sm={6} xs={12} className="mb-3">
//                     <Card className="flex-row pt-4" style={{ marginBottom: '30px' }}>
//                         <CardBody style={{ padding: '5px 30px 25px' }}>
//                             <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '25px' }}>
//                                 <h4 style={{ fontSize: '20px' }}>Opciones (Modulo\Grupo\Opción)</h4>
//                             </div>
//                             <div className="mt-3 mb-3">
//                                 <Tree data={sideBarData.menu} onUpdate={handleUpdate} onNodeClick={handleClick} handleMenuRename={handleMenuRename} />
//                             </div>

//                             <div className="col-md-12 bg-light" style={{ textAlign: 'right' }}>
//                                 <button className="fill">Add Root</button>
//                                 <button className="close">Add Child</button>
//                             </div>
//                         </CardBody>
//                     </Card>
//                 </Col>
//                 <Col md={6} sm={6} xs={12} className="mb-3">
//                     <Card className="flex-row pt-4" style={{ marginBottom: '30px' }}>
//                         <CardBody style={{ padding: '5px 30px 25px' }}>
//                             <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '25px' }}>
//                                 <h4 style={{ fontSize: '20px' }}>Diseño</h4>
//                             </div>
//                             <Form>
//                                 <Form.Group as={Row} className="mb-3" controlId="formTipoMenu">
//                                     <Form.Label column sm="2">
//                                         Tipo
//                                     </Form.Label>
//                                     <Col sm="10">
//                                         <Select options={tipoMenuOption}
//                                             onChange={value => handleChangeSelect(value)}
//                                             value={SelectdataTipoMenu.value}
//                                         />
//                                     </Col>
//                                 </Form.Group>
//                                 <Form.Group as={Row} className="mb-3" controlId="formIconoMenu">
//                                     <Form.Label column sm="2">
//                                         Icono
//                                     </Form.Label>
//                                     <Col sm="10">
//                                         <Form.Control type="text" placeholder="Ingrese el icono" defaultValue={dataMenu.icono} name="icono" />
//                                     </Col>
//                                 </Form.Group>
//                                 <Form.Group as={Row} className="mb-3" controlId="formTituloMenu">
//                                     <Form.Label column sm="2">
//                                         Titúlo
//                                     </Form.Label>
//                                     <Col sm="10">
//                                         <Form.Control type="text" placeholder="Ingrese el titulo" defaultValue={dataMenu.titulo} name="titulo" />
//                                     </Col>
//                                 </Form.Group>

//                                 <Form.Group as={Row} className="mb-3" controlId="formDescripcionMenu">
//                                     <Form.Label column sm="2">
//                                         Descripción
//                                     </Form.Label>
//                                     <Col sm="10">
//                                         <Form.Control type="text" placeholder="Ingrese la descripción" defaultValue={dataMenu.descripcion} name="descripcion" />
//                                     </Col>
//                                 </Form.Group>

//                                 <Form.Group as={Row} className="mb-3" controlId="formUrlMenu">
//                                     <Form.Label column sm="2">
//                                         Url
//                                     </Form.Label>
//                                     <Col sm="10">
//                                         <Form.Control type="text" placeholder="Ingrese la url" defaultValue={dataMenu.url} name="url" />
//                                     </Col>
//                                 </Form.Group>

//                                 <Form.Group as={Row} className="mb-3" controlId="formArgumentosMenu">
//                                     <Form.Label column sm="2">
//                                         Argumentos
//                                     </Form.Label>
//                                     <Col sm="10">
//                                         <Form.Control type="text" placeholder="Ingrese los argumentos" defaultValue={dataMenu.argumentos} name="argumento" />
//                                     </Col>
//                                 </Form.Group>
//                                 <Form.Group as={Row} className="mb-3" controlId="formPerfilMenu">
//                                     <Form.Label column sm="2">
//                                         Perfil
//                                     </Form.Label>
//                                     <Col sm="10">
//                                         <SelectMulti
//                                             isMulti
//                                             menuIsOpen={menuOpen}
//                                             name="dataPerfil"
//                                             options={dataPerfil}
//                                             className="basic-multi-select"
//                                             classNamePrefix="select"
//                                             closeMenuOnSelect={false}
//                                             onChange={onOptionChange}
//                                             onMenuOpen={onMenuOpen}
//                                             components={animatedComponents}
//                                             value={objet_tipo_perfil.value}
//                                         />
//                                     </Col>
//                                 </Form.Group>
//                                 <Form.Group as={Row} className="mb-3" controlId="formPerfilMenu">
//                                     <Form.Label column sm="2">
//                                         Vigencia
//                                     </Form.Label>
//                                     <Col sm="2">
//                                     <FormGroup>
//                                         <FormControlLabel control={<Switch defaultChecked onChange={handleChange} value={checkVigencia}/>} />
//                                     </FormGroup>
//                                     </Col>
//                                 </Form.Group>

//                             </Form>
//                         </CardBody>
//                     </Card>
//                 </Col>
//             </Row> */}
//         </Page>


//     )

// }

// export default Mantenedor_Menu;

