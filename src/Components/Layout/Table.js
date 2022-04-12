import * as React from 'react';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';

export default function DataTableGrid(props) {
  return (

    <div style={{ height: 400, width: '100%' }}>
      <DataGrid columns = {props.columns} rows={props.rows} getRowId={props.getRowId} /> 
    </div>
  );
}
// components={{ Toolbar: GridToolbar }}