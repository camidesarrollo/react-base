import React from "react";
import MUIDataTable from "mui-datatables";


  export default function DataTable({titulo, rowsData, columns, options}) {
    return (
      <div style={{ height: 400, width: '100%' }}>
        <MUIDataTable title={titulo} data={rowsData} columns={columns} options={options} />
      </div>
    );
  }
  

  //Mandar la data como props