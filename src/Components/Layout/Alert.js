import React from "react";
import CloseIcon from '@mui/icons-material/Close';
import IconButton from '@mui/material/IconButton';
import { Alert, AlertTitle, Paper, Box } from "@mui/material";

export default function AlertToastr(props) {
    console.info("AlertToastr", props);
    const [open, setOpen] = React.useState(props.setOpen);
    return (
        <Alert
        action={
            <IconButton
                aria-label="close"
                color="inherit"
                size="small"
                onClick={() => {
                    setOpen(open);
                }}
            >
                <CloseIcon fontSize="inherit" />
            </IconButton>
        }
        severity={props.severity}
        sx={{ mb: 2 }}
    >
        <AlertTitle>{props.title}</AlertTitle>
        {props.data}
    </Alert>
    
    );
}


  //Mandar la data como props

