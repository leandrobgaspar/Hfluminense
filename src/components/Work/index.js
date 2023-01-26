/*
=========================================================
* Material Kit 2 React - v2.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-kit-react
* Copyright 2021 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// @mui material components
import * as React from "react";
import Grid from "@mui/material/Grid";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKInput from "components/MKInput";
import MKButton from "components/MKButton";
import MKTypography from "components/MKTypography";
import axios from "axios";

function ContactUs() {
  const [campos, setCampos] = React.useState({
    name: "",
    email: "",
    message: "",
    anexo: "",
  });

  function handleInputChange(event) {
    if (event.target.name === "anexo") campos[event.target.name] = event.target.files[0];
    else campos[event.target.name] = event.target.value;
    setCampos(campos);
  }

  function send() {
    const formData = new FormData();
    Object.keys(campos).forEach((key) => formData.append(key, campos[key]));
    axios
      .post("http://localhost:3030/send", formData, {
        headers: {
          "Content-Type": `multipart/form-data; boundary=${formData.boundary}`,
        },
      })
      .then((response) => {
        console.log(response.data);
        alert("Email enviado com sucesso!");
      });
  }

  function handleFormSubmit(event) {
    event.preventDefault();
    console.log(campos);
    send(campos);
  }

  return (
    <>
      <Grid container spacing={3} alignItems="center">
        <Grid
          item
          xs={12}
          sm={10}
          md={7}
          lg={6}
          xl={4}
          ml={{ xs: "auto", lg: 2 }}
          mr={{ xs: "auto", lg: 2 }}
        >
          <MKBox
            bgColor="white"
            borderRadius="xl"
            shadow="lg"
            display="flex"
            flexDirection="column"
            justifyContent="center"
            mt={{ xs: 20, sm: 18, md: 20 }}
            mb={{ xs: 20, sm: 18, md: 20 }}
          >
            <MKBox
              variant="gradient"
              bgColor="info"
              coloredShadow="info"
              borderRadius="lg"
              p={2}
              mx={2}
              mt={-3}
            >
              <MKTypography variant="h3" color="white">
                Trabalhe conosco
              </MKTypography>
            </MKBox>
            <MKBox p={3}>
              <MKTypography variant="body2" color="text" mb={3}>
                Para informações, entre em contato conosco, mande um email para
                sac@hospitalfluminense.com.br ou preencha o formulário abaixo.
              </MKTypography>
              <MKBox width="100%" component="form" onSubmit={handleFormSubmit} autocomplete="off">
                <Grid container spacing={3}>
                  <Grid item xs={12} md={6}>
                    <MKInput
                      variant="outlined"
                      label="Nome Completo"
                      InputLabelProps={{ shrink: true }}
                      fullWidth
                      onChange={handleInputChange}
                      name="nome"
                      id="nome"
                    />
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <MKInput
                      type="email"
                      variant="outlined"
                      label="E-mail"
                      InputLabelProps={{ shrink: true }}
                      fullWidth
                      onChange={handleInputChange}
                      name="email"
                      id="email"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <MKInput
                      variant="outlined"
                      label="Mensagem"
                      placeholder="Escreva aqui sua Mensagem com no máximo 250 caracteres."
                      InputLabelProps={{ shrink: true }}
                      multiline
                      fullWidth
                      rows={6}
                      onChange={handleInputChange}
                      name="mensagem"
                      id="mensagem"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <MKInput
                      variant="outlined"
                      justifyContent="center"
                      label="Upload de arquivos"
                      InputLabelProps={{ shrink: true }}
                      fullWidth
                      type="file"
                      onChange={handleInputChange}
                      name="anexo"
                      id="anexo"
                    />
                  </Grid>
                </Grid>
                <Grid container item justifyContent="center" xs={12} mt={5} mb={2}>
                  <MKButton type="submit" variant="gradient" color="info">
                    Enviar
                  </MKButton>
                </Grid>
              </MKBox>
            </MKBox>
          </MKBox>
        </Grid>
      </Grid>
    </>
  );
}

export default ContactUs;
