import React from "react";
import MUIDataTable from "mui-datatables";


  export default function DataTable({title,rowsData, columns, options}) {

    return (
      <div style={{ height: 400, width: '100%' }}>
        <MUIDataTable title={title} data={rowsData} columns={columns} options={options} />
      </div>
    );
  }
  

  //Mandar la data como props