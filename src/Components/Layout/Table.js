import * as React from 'react';
import { DataGrid, GridToolbarExport } from '@mui/x-data-grid';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import TextField from '@mui/material/TextField';
import ClearIcon from '@mui/icons-material/Clear';
import SearchIcon from '@mui/icons-material/Search';
import { Grid, Button } from '@mui/material';

function escapeRegExp(value) {
  return value.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, '\\$&');
}

function QuickSearchToolbar(props) {
let boton = "";
  if(props.onClickBoton !== undefined){
    boton = <Button variant="contained" size="medium" startIcon={props.dataBotonStartIcon} onClick={props.onClickBoton} sx={{ boxShadow: 'rgb(58 53 65 / 42%) 0px 4px 8px -4px', letterSpacing: '0.3px', padding: "0.46875rem 1.375rem", fontSize: "1rem", margin: "0px 1rem 0.5rem 0px" }}>
    {props.textoBoton}
  </Button>;
  }
  return (

    <Grid container className="css-1xqoed8" sx={{padding: "1.25rem 1.25rem 0.75rem", display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between"}}>
      <GridToolbarExport className="boton_export" />
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          alignItems: "center"
        }}
      >
        <TextField
          variant="outlined" 
          value={props.value}
          onChange={props.onChange}
          placeholder="Search…"
          InputProps={{
            startAdornment: <SearchIcon fontSize="small" />,
            endAdornment: (
              <IconButton
                title="Clear"
                aria-label="Clear"
                size="small"
                style={{ visibility: props.value ? 'visible' : 'hidden' }}
                onClick={props.clearSearch}
              >
                <ClearIcon fontSize="small" />
              </IconButton>
            ),
          }}
          sx={{
            width: {
              xs: 1,
              sm: 'auto',
            },
            m: (theme) => theme.spacing(1, 0.5, 1.5),
            '& .MuiSvgIcon-root': {
              mr: 0.5,
            },
            '& .MuiInput-underline:before': {
              borderBottom: 1,
              borderColor: 'divider',
            },
            margin: "0px 1rem 0.5rem 0px"
          }}
        />


          {boton}

      </Box>




    </Grid>


  );
}


export default function DataTableGrid(props) {

  const [searchText, setSearchText] = React.useState('');
  const [rows, setRows] = React.useState(props.rows);

  const requestSearch = (searchValue) => {
    setSearchText(searchValue);
    const searchRegex = new RegExp(escapeRegExp(searchValue), 'i');
    const filteredRows = props.rows.filter((row) => {
      return Object.keys(row).some((field) => {
        return searchRegex.test(row[field].toString());
      });
    });
    setRows(filteredRows);
  };

  React.useEffect(() => {
    setRows(props.rows);
  }, [props.rows]);


  return (

    <Box style={{ height: 700, width: '100%' }}>
      {/* <DataGrid columns = {props.columns} rows={props.rows} getRowId={props.getRowId} />  */}
      <DataGrid
        components={{ Toolbar: QuickSearchToolbar }}
        rows={rows}
        columns={props.columns}
        getRowId={props.getRowId}
        componentsProps={{
          toolbar: {
            value: searchText,
            onChange: (event) => requestSearch(event.target.value),
            clearSearch: () => requestSearch(''),
            dataBotonStartIcon: props.dataBotonStartIcon,
            onClickBoton: props.onClickBoton, 
            textoBoton: props.textoBoton
          },
        }}
      />
    </Box >
  );
}
