import React from 'react';
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";

const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    pt: 2,
    px: 4,
    pb: 3,
    width: "100%",
    pointerEvents: "auto",
    backgroundColor: "#fff",
    backgroundClip: "padding-box",
    border: "1px solid rgba(0, 0, 0, 0.2)",
    borderRadius: "0.3rem",
    outline: 0
  };
  

const ComponetModal = (props)=>{
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };
    return (
        <div>
        <button type={props.type}
          className={props.className}  onClick={handleOpen}>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
          </svg>
          {props.text}

        </button>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="parent-modal-title"
          aria-describedby="parent-modal-description"
        >
          <Box sx={{ ...style, width: 400 }}>
            <div className="flex items-start justify-center p-4 rounded-t-md">
                <div className="mx-0 my-auto">
                    <h5 className="text-lg" id="titulo_modal">Agregar Usuario</h5>
                </div>
            </div>
            <div className="modal-body">
                <div className="flex-row">
                    <label className="lblAdd w-36 py-1.5 mb-0 text-base">RUN:</label>
                    <div className="col-sm-5">
                      
                    </div>
                </div>
                <div className="flex-row">
                    <label className="lblAdd w-36 py-1.5 mb-0 text-base">Nombres:</label>
                    <div className="col-sm-3">
                  
                    </div>
                </div>
                <div className="flex-row">
                    <label className="lblAdd w-36 py-1.5 mb-0 text-base">Apellido 1:</label>
                    <div className="col-sm-3">
                   
                    </div>
                </div>
                <div className="flex-row">
                    <label className="lblAdd w-36 py-1.5 mb-0 text-base">Apellido 2:</label>
                    <div className="col-sm-3">
               
                    </div>
                </div>
                <div className="flex-row">
                    <label className="lblAdd w-36 py-1.5 mb-0 text-base">Teléfono:</label>
                    <div className="col-sm-3">
                   
                    </div>
                </div>
                <div className="flex-row">
                    <label className="lblAdd w-36 py-1.5 mb-0 text-base">Mail:</label>
                    <div className="col-sm-3">
                  
                    </div>
                </div>
                <div className="flex-row">
                    <label className="lblAdd w-36 py-1.5 mb-0 text-base">Perfil:</label>
                    <div className="col-sm-3">
                    </div>
                </div>
                <div className="flex-row">
                    <label className="lblAdd w-36 py-1.5 mb-0 text-base ">Clave Provisoria</label>

                    <div className="input-group col-sm-6">
                        
                    </div>
                </div>
                <div className="flex-row">
                    <label className="lblAdd w-36 py-1.5 mb-0 text-base">Vigente</label>
                    <div className="col-sm-5">
                        
                    </div>
                </div>
            </div>
          </Box>
        </Modal>
      </div>
    )

}

export default ComponetModal;