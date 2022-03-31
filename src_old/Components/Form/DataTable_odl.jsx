import * as React from 'react';
import {useState, useEffect } from 'react';
import { getUser } from "../Service/index";
import { DataGrid, GridColDef, GridApi, GridCellValue, GridToolbar } from '@mui/x-data-grid';
import Button from "./Button";
const columns: GridColDef[] = [
  { field: 'rut', headerName: 'Run', width: 150,
  renderCell: (params) => {
    const api: GridApi = params.api;
    const thisRow: Record<string, GridCellValue> = {};

    api
      .getAllColumns()
      .filter((c) => c.field !== '__check__' && !!c)
      .forEach(
        (c) => (
          thisRow[c.field] = params.getValue(params.id, c.field)
          
          ),
      );  
    return "aqui va el run ";
  },
 },
  {field: 'dv', headerName: 'dv', width: 150,  status: false,
  traderName: false },
  { field: 'username', headerName: 'Name', width: 150 },
  { field: 'email', headerName: 'Email', width: 300 },
  { field: 'telefono', headerName: 'Telefono', width: 70 },
  { field: 'vigencia', headerName: 'Vigencia', width: 150 },
  {
    field: 'action',
    headerName: 'Action',
    sortable: false,
    renderCell: (params) => {
      const onClick = (e) => {
        e.stopPropagation(); // don't select this row after clicking

        const api: GridApi = params.api;
        const thisRow: Record<string, GridCellValue> = {};

        api
          .getAllColumns()
          .filter((c) => c.field !== '__check__' && !!c)
          .forEach(
            (c) => (thisRow[c.field] = params.getValue(params.id, c.field)),
          );

        return alert(JSON.stringify(thisRow, null, 4));
      };
      return <Button type="button" className="boton" text="Click me!" onClick={onClick}/>;
    },
  }
];

const initialState = {
  "dv": "",
  "email": "",
  "id": "",
  "password": "",
  "roles": "",
  "rut": "",
  "telefono": "",
  "username": "",
  "vigencia": ""
};

let  task_names = [];

export default function DataTable() {
    const [rowsData, setrowsData] = useState(initialState);
    
    useEffect(() => {
        getUser()
        .then((response) => {
          // console.log(typeof(response.data));
         
 
          //   response.data.forEach(function (task) {
          //     console.log("entro");
          //     task.boton = "aqi";
          //     console.log(task);
          //     task_names.push(task);
                
          //   });

          // console.log(task_names);
          // console.log(typeof(task_names));
          console.log(response.data);
          setrowsData(response.data);   
        })
        .catch((error) => {
          console.log(error.message);
        });
      }, []);
  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={rowsData}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
        components={{
          Toolbar: GridToolbar
        }}
      />
    </div>
  );
}
