// Material UI
import * as React from "react";
import { useState } from "react";
import {
  Alert,
  AlertTitle,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  IconButton,
} from "@mui/material";
import AccessTimeIcon from "@mui/icons-material/AccessTime"; // Ícone de "Voltaremos em breve"
import CloseIcon from "@mui/icons-material/Close"; // Ícone para fechar o modal

function Presentation() {
  const [open, setOpen] = useState(false);

  const abrirModal = () => {
    setOpen(true);
  };

  const fecharModal = () => {
    setOpen(false);
  };

  return (
    <>
      <div className="flex flex-col md:flex-row items-center justify-center min-h-screen bg-gray-900 text-white p-4 space-y-10 md:space-y-0 md:space-x-10">
        {/* Imagem */}

        {/* Texto e botões */}
        <div className="text-center md:text-left space-y-6">
          <div className="flex justify-center md:justify-start mb-6">
            <AccessTimeIcon className="text-blue-500" style={{ fontSize: 48 }} />
          </div>

          <h1 className="text-4xl font-bold">Em Manutenção</h1>

          <p className="text-gray-300 max-w-md">
            Estamos passando por uma manutenção programada. Voltaremos em breve com novidades!
          </p>

          {/* Botão que abre o modal */}
          <div>
            <Button
              variant="contained"
              color="primary"
              onClick={abrirModal}
              className="font-semibold rounded-lg shadow-md z-100"
            >
              Ver Documento de Nada Consta
            </Button>
          </div>

          {/* Nota oficial */}
          <Alert severity="info" className="max-w-md">
            <AlertTitle>Nota Oficial</AlertTitle>
            Nosso sistema está em atualização para melhor atender a todos. Agradecemos a
            compreensão.
          </Alert>
        </div>
      </div>

      {/* Modal usando Material UI */}
      <Dialog
        open={open}
        onClose={fecharModal}
        fullWidth
        maxWidth="md"
        disableEnforceFocus
        disablePortal
      >
        <DialogTitle className="flex justify-between items-center">
          Documento de Nada Consta
          <IconButton onClick={fecharModal}>
            <CloseIcon />
          </IconButton>
        </DialogTitle>
        <DialogContent dividers>
          <iframe
            src="/documento-nada-consta.pdf"
            title="Documento de Nada Consta"
            className="w-full h-[600px] pointer-events-auto"
            style={{ border: "none" }}
          />
        </DialogContent>
      </Dialog>
    </>
  );
}

export default Presentation;
