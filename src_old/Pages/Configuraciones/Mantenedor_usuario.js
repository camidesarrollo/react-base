import * as React from 'react';
import DataTable from '../../Components/DataTable'
import Title from '../../Components/Form/Title';
import { useState, useEffect } from "react";
import Modal from '../../Components/Form/Modal';
import Input from '../../Components/Form/Input';
import Select from '../../Components/Form/Select';
import { registerUser, getUser } from "../../Service/index";
import { getRoles, obtenerUsuario, updateUsuario } from "../../Service/index";
import Button from "../../Components/Form/Button";
import Checkbox from "../../Components/Form/Checkbox";


function MantenedorUsuario() {

  //Variables

  const handleChangeSelect = (value) => {
    setState({ value: value })
  }
  const initialSelectData = {
    value: ""
  }
  const [SelectdataPerfil, setState] = useState(initialSelectData);

  const [checked, setChecked] = useState(false);

  const handleChangeCheckbox = () => {
    setChecked(!checked);
  };



  const initialState = [{
    username: "",
    password: "",
    email: "",
    role: [],
    run: "",
    telefono: "",
    vigencia: "",
    ap_paterno: "",
    ap_materno: ""

  }];

  const SelectPerfil = [{

  }];

  const [rowsData, setrowsData] = useState(initialState);
  const [optionSelectPerfil, setSelectPerfil] = useState(SelectPerfil);

  const varUsuario = {
    username: "",
    ap_paterno: "",
    ap_materno: "",
    password: "",
    email: "",
    role: [],
    telefono: "",
    vigencia: [],
    rut: "",
    dv: "",
    rutFormato: "",
    id: ""
  }

  const [dataUsuario, setDataUsuario] = useState(varUsuario);

  const dataPerfil = "";

  const titulotabla = "Listado Usuario";

  const options = {
    filter: true,
    display: true,
    filterType: 'dropdown',
    responsive: 'standard',
    selectableRows: 'none',
    fixedHeader: false
  };

  const [estadoModal1, cambiarEstadoModal1] = useState(false);

  const [data, setdataPerfil] = useState(dataPerfil);

  const guardarUsuario = () => {
    if (dataUsuario.id !== "") {
      delete dataUsuario.password;
      if (checked) {
        dataUsuario.vigencia = ["Vigente"];
      } else {
        dataUsuario.vigencia = ["No vigente"];
      }
      dataUsuario.role = [];
      dataUsuario.role.push(SelectdataPerfil.value.label);
      updateUsuario(dataUsuario.id, dataUsuario)
        .then((response) => {
          llenarDataTable();
        })
        .catch((error) => {
          console.log(error.message);
        });
    } else {
      dataUsuario.rut = dataUsuario.rutFormato.split("-")[0];
      dataUsuario.dv = dataUsuario.rutFormato.split("-")[1];
      delete dataUsuario.rutFromato;
      dataUsuario.password = generarContraseña();
      if (checked) {
        dataUsuario.vigencia = ["Vigente"];
      } else {
        dataUsuario.vigencia = ["No vigente"];
      }
      dataUsuario.role = [];
      dataUsuario.role.push(SelectdataPerfil.value.label);
      registerUser(dataUsuario)
        .then((response) => {

          llenarDataTable();
          cambiarEstadoModal1(!estadoModal1);
          limpiarDataUsuario();
        })
        .catch((error) => {
          console.log(error.message);
        });
    }

  };

  const columns = [
    {
      name: "id",
      options: {
        filter: true,
        display: false,
      }
    },
    {
      name: "username",
      options: {
        filter: false,
        display: false,
      }
    },
    {
      name: "rut",
      options: {
        filter: true,
        customBodyRender: (value, tableMeta, updateValue) => {
          return (
            value + "-" + tableMeta.tableData[tableMeta.rowIndex][3]
          );
        },
      }
    },
    {
      name: "dv",
      options: {
        filter: true,
        display: false,
      }
    },
    {
      name: "username",
      options: {
        filter: true,
        display: true,
        customBodyRender: (value, tableMeta, updateValue) => {
          return (
            value + " " + tableMeta.tableData[tableMeta.rowIndex][5] + " " + tableMeta.tableData[tableMeta.rowIndex][6]
          );
        },
      }
    },
    {
      name: "ap_paterno",
      options: {
        filter: true,
        display: false,
      }
    },
    {
      name: "ap_materno",
      options: {
        filter: true,
        display: false,
      }
    },
    {
      name: "email",
      options: {
        filter: true,
        display: true,
      }
    },
    {
      name: "telefono",
      options: {
        filter: true,
        display: true,
      }
    },
    {
      name: "vigencia",
      options: {
        filter: true,
        customBodyRender: (value, tableMeta, updateValue) => {

          return (
            tableMeta.tableData[tableMeta.rowIndex][9].name
          );

        }
      }
    },
    {
      name: "accion",
      options: {
        filter: true,
        customBodyRender: (value, tableMeta, updateValue) => {
          return (
            <div>
              <Button type="button" className="btn btn-primar bg-grey-light hover:bg-grey text-grey-darkest font-normal inline-flex items-center bg-blue-600
                                      border-blue-600
                                      border-solid
                                      border-4
                                      rounded-l
                                      border-box
                                      text-white
                                      cursor-pointer
                                      text-sm
                                      overflow-visible
                                      py-[12px]
                                      px-[16px]
                                      text-center
                                      normal-case
                                      select-none
                                      touch-manipulation
                                      w-fit
                                      font-Merriweather-Sans"   onClick={() => editarUsuari(tableMeta.tableData[tableMeta.rowIndex][0])} text="Editar usuario" />
            </div>

          );

        }
      }
    }
  ];

  const credentialChange = (event) => {
    const { name, value } = event.target;
    setDataUsuario({ ...dataUsuario, [name]: value });

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
    }

    return contraseña;
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

  const editarUsuari = (id) => {
    cambiarEstadoModal1(!estadoModal1);
    obtenerUsuario(id)
      .then((response) => {
        setDataUsuario(response.data);
        if (response.data.vigencia.id === 1) {
          setChecked(true);
        } else {
          setChecked(false);
        }
        let objet_perfil = new Object();
        objet_perfil.value = response.data.roles.id;
        objet_perfil.label = response.data.roles.name;
        setState({ value: objet_perfil })

      })
      .catch((error) => {
        console.log(error.message);
      });

  }

  useEffect(() => {
    console.info("ROWSDATAPERFIL", optionSelectPerfil);
  }, [optionSelectPerfil]); //funciona solamente cuando la variable cambie 

  useEffect(() => {
    console.info("ROWSDATAUSUARIO", dataUsuario);
  }, [dataUsuario]); //funciona solamente cuando la variable cambie 


  const limpiarDataUsuario = () => {
    setDataUsuario(varUsuario);
    setChecked(false);
    setState({ value: "" })
  }

  const llenarDataTable = () => {
    getUser()
      .then((response) => {
        setrowsData(response.data);

      })
      .catch((error) => {
        console.log(error.message);
      });
  }

  useEffect(() => {
    obtenerPerfil();
    llenarDataTable();
  }, []);



  useEffect(() => {
    console.log(SelectdataPerfil);
  }, [SelectdataPerfil])
  return (

    <main className="block min-h[68vh] py-[30px] px-[30px] w-full rounded-none m-0 bg-[#F9F9F9]">
      <div className='w-full my-auto p-0'>
        <div className='flex flex-row flex-wrap'>
          <div className='max-w-full w-full py-4'>
            <div className='bg-white rounded-none h-calc-100-30 mb-7'>
              <div className="py-6 px-8">
                <div className="flex justify-between items-center mb-0">
                  <Title className='font-Merriweather-Sans font-semibold text-xl' text="Administrar Usuarios" />
                  <div className="border-box flex">
                    <Button type="button" className="btn btn-primar bg-grey-light hover:bg-grey text-grey-darkest font-normal inline-flex items-center bg-blue-600
                                        border-blue-600
                                        border-solid
                                        border-4
                                        rounded-l
                                        border-box
                                        text-white
                                        cursor-pointer
                                        text-sm
                                        overflow-visible
                                        py-[12px]
                                        px-[16px]
                                        text-center
                                        normal-case
                                        select-none
                                        touch-manipulation
                                        w-fit
                                        font-Merriweather-Sans"   onClick={() => cambiarEstadoModal1(!estadoModal1)} text="Agregar Usuario" />

                    <Modal
                      estado={estadoModal1}
                      cambiarEstado={cambiarEstadoModal1} limpiarData={limpiarDataUsuario}
                      titulo="Agregar Usuario"
                      mostrarHeader={true}
                      mostrarOverlay={true}
                      posicionModal={'center'}
                      padding={'20px'}
                    >
                      <div>
                        <div className="modal-body">
                          <div className="flex flex-row">
                            {/* <label className="lblAdd w-36 py-1.5 mb-0 text-base">RUN:</label> */}
                            <div className="col-sm-5">
                              {/* <Input type="input" className="mb-3 w-30 block p-x py-1.5 px-3 text-base font-normal text-slate-600 bg-white bg-clip-padding border border-solid border-gray-400 rounded-md" id="run" name="run" placeholder="Ej. 20.667.876-2" autocomplete="off"/>  */}
                            </div>
                          </div>
                          <div className="flex flex-row">
                            <label className="lblAdd w-36 py-1.5 mb-0 text-base">Run:</label>
                            <div className="col-sm-3">
                              <Input type="input" className="mb-3 w-30 block p-x py-1.5 px-3 text-base font-normal text-slate-600 bg-white bg-clip-padding border border-solid border-gray-400 rounded-md" id="rutFormato" name="rutFormato" placeholder="Ej. 20.667.876-2" autocomplete="off" onChange={credentialChange} value={dataUsuario.rutFormato || ""} />
                            </div>
                          </div>
                          <div className="flex flex-row">
                            <label className="lblAdd w-36 py-1.5 mb-0 text-base">Nombres:</label>
                            <div className="col-sm-3">
                              <Input type="input" className="mb-3 w-30 block p-x py-1.5 px-3 text-base font-normal text-slate-600 bg-white bg-clip-padding border border-solid border-gray-400 rounded-md" id="username" name="username" placeholder="Nombre" autocomplete="off" onChange={credentialChange} value={dataUsuario.username} />
                            </div>
                          </div>
                          <div className="flex flex-row">
                            <label className="lblAdd w-36 py-1.5 mb-0 text-base">Apellido 1:</label>
                            <div className="col-sm-3">
                              <Input type="input" className="mb-3 w-30 block p-x py-1.5 px-3 text-base font-normal text-slate-600 bg-white bg-clip-padding border border-solid border-gray-400 rounded-md" id="ap_paterno" name="ap_paterno" placeholder="Apellido 1" autocomplete="off" onChange={credentialChange} value={dataUsuario.ap_paterno} />
                            </div>
                          </div>
                          <div className="flex flex-row">
                            <label className="lblAdd w-36 py-1.5 mb-0 text-base">Apellido 2:</label>
                            <div className="col-sm-3">
                              <Input type="input" className="mb-3 w-30 block p-x py-1.5 px-3 text-base font-normal text-slate-600 bg-white bg-clip-padding border border-solid border-gray-400 rounded-md" id="ap_materno" name="ap_materno" placeholder="Apellido 2" autocomplete="off" onChange={credentialChange} value={dataUsuario.ap_materno} />
                            </div>
                          </div>
                          <div className="flex flex-row">
                            <label className="lblAdd w-36 py-1.5 mb-0 text-base">Teléfono:</label>
                            <div className="col-sm-3">
                              <Input type="input" className="mb-3 w-30 block p-x py-1.5 px-3 text-base font-normal text-slate-600 bg-white bg-clip-padding border border-solid border-gray-400 rounded-md" id="telefono" name="telefono" placeholder="Telefono" autocomplete="off" onChange={credentialChange} value={dataUsuario.telefono} />
                            </div>
                          </div>
                          <div className="flex flex-row">
                            <label className="lblAdd w-36 py-1.5 mb-0 text-base">Mail:</label>
                            <div className="col-sm-3">
                              <Input type="input" className="mb-3 w-30 block p-x py-1.5 px-3 text-base font-normal text-slate-600 bg-white bg-clip-padding border border-solid border-gray-400 rounded-md" id="email" name="email" placeholder="xxx@xxx.com" autocomplete="off" onChange={credentialChange} value={dataUsuario.email} />

                            </div>
                          </div>
                          <div className="flex flex-row">
                            <label className="lblAdd w-36 py-1.5 mb-0 text-base">Perfil:</label>
                            <div className="col-sm-3">
                              <Select options={optionSelectPerfil}
                                onChange={value => handleChangeSelect(value)}
                                value={SelectdataPerfil.value}
                              />
                            </div>
                          </div>
                          <div className="flex flex-row">
                            <label className="lblAdd w-36 py-1.5 mb-0 text-base">Vigente</label>
                            <div className="col-sm-5">
                              <Checkbox
                                value={checked}
                                onChange={handleChangeCheckbox}
                              />
                            </div>
                          </div>
                        </div>
                        <div className='flex items-center justify-end p-4 '>
                          <button type="button" className="py-2 px-3 bg-blue-500 text-white text-sm font-semibold rounded-md shadow focus:outline-none" id="botonGuardar" onClick={guardarUsuario}>Guardar usuario</button>
                        </div>
                      </div>
                    </Modal>
                  </div>
                </div>
              </div>
              <div className='pt-5 px-8 pb-6'>
                <div className='mb-8'>
                  <DataTable title={titulotabla} rowsData={rowsData} columns={columns} options={options} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default MantenedorUsuario;
