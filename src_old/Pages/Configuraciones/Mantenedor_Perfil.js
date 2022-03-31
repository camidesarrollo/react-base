import * as React from 'react';
import { useState, useEffect } from "react";
import Page from '../../Components/Pages';
import DataTable from '../../Components/DataTable';
// import {
//     Col,
//     Row,
//   } from 'reactstrap';
  import Button from '../../Components/Form/Button';
  import {getRoles, guardarPerfil, getRole, editarRole} from "../../Service/index";
function MantenedorPerfil() {

    const titulotabla="Registro de Perfiles";

    const roles = [{
    }];

    const data = [
      {
          "id": "",
          "name": "",
          "vigencia": ""
      }
    ];

    const [dataRow, setDataTableRow] = useState(data);
    
    const [dataPerfil, setDataPerfil] = useState(roles);

    const [estadoModal1, cambiarEstadoModal1] = useState(false);

    const [checked, setChecked] = useState(false);

    const handleChangeCheckbox = () => {
      setChecked(!checked);
    };

    
    const limpiarData = () =>{
      setDataPerfil(roles);
      setChecked(false);
    }

    const guardar_Perfil = () =>{
      if(dataPerfil.id !== "" && dataPerfil.id !== undefined ){
        if(checked){
          dataPerfil.vigencia = ["Vigente"];
        }else{
          dataPerfil.vigencia = ["No vigente"];
        }

        editarRole(dataPerfil.id, dataPerfil)
        .then((response) =>{
          llenarDataTable();
          limpiarData();
          cambiarEstadoModal1(!estadoModal1)
        })
        .catch((error) => {
  
        })
      }else{
        console.log("Guarda Perfil");
        if(checked){
          dataPerfil.vigencia = ["Vigente"];
        }else{
          dataPerfil.vigencia = ["No vigente"];
        }
        guardarPerfil(dataPerfil)
        .then((response) =>{
          llenarDataTable();
          limpiarData();
          cambiarEstadoModal1(!estadoModal1);
        })
        .catch((error) => {
  
        })
      }

    }


    const credentialChange = (event) => {
        const { name, value } = event.target;
        setDataPerfil({ ...dataPerfil, [name]: value });
        
      };

    const llenarDataTable = () =>{
        getRoles()
        .then((response) =>{
            setDataTableRow(data);
            setDataTableRow(response.data);
        })
        .catch((error)=>{
          console.log(error.message);
        })
    }

    const editarPerfil = (id) => {
      cambiarEstadoModal1(!estadoModal1);
      getRole(id)
      .then((response) =>{
        setDataPerfil(response.data);
        if(response.data.vigencia.id === 1){
          setChecked(true);
        }else{
          setChecked(false);
        }
      })
      .catch((error)=>{
        console.log(error.message);
      })
    }

    const options = {
        filter: true,
        display: true,
        filterType: 'dropdown',
        responsive: 'standard',
        selectableRows: 'none',
        fixedHeader: false
    };

    useEffect(() => {
        llenarDataTable(); 
    }, []);
      
      const columns = [
        { name: 'id', label: 'Id' },
        { name: 'name', label: 'Tipo Perfil' },
        { name: 'vigencia',
        options: {
          filter: true,
          customBodyRender: (value, tableMeta, updateValue) => {
            return (
              value.name                                      
            );
    
          }
        } },
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
                                            font-Merriweather-Sans"   onClick={() => editarPerfil(tableMeta.tableData[tableMeta.rowIndex][0])} text="Editar perfil"/>
                </div>
                                                       
              );
      
            }
          }
        }
      ];
      

      
    return (
        <Page
            className="DashboardPage"
            title="Dashboard"
            breadcrumbs={[{ name: 'Dashboard', active: true }]}
        >
            {/* <Row>
                <Col lg={12}>
                    <DataTable title="Registro de Perfiles" rowsData={dataRow} columns={columns} options={options}/>
                </Col>
            </Row> */}
        </Page>


    );
}

export default MantenedorPerfil;
