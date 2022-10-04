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
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Divider from "@mui/material/Divider";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";

// Material Kit 2 React examples
import DefaultReviewCard from "components/Cards/ReviewCards/DefaultReviewCard";

// Images
import logoSUS from "assets/images/logos/logoSUS.png";
import logoBelFut from "assets/images/logos/logoBelFut.png";
import logoDiamond from "assets/images/logos/logoDiamond.png";
import logoPref from "assets/images/logos/logoPref.png";
import logoSIPPS from "assets/images/logos/logoSIPPS.png";

function Information() {
  return (
    <MKBox component="section" py={12}>
      <Container>
        <Grid
          container
          item
          xs={12}
          lg={6}
          justifyContent="center"
          sx={{ mx: "auto", textAlign: "center" }}
        >
          <MKTypography variant="h2">Nossos números</MKTypography>
          <MKTypography variant="h2" color="info" textGradient mb={2}>
            Mais de 20.000 atendimentos ao mês.
          </MKTypography>
          <MKTypography variant="body1" color="text" mb={2}>
            Entre esses atendimentos estão incluidos: Colonoscopia, Endoscopia, Ultrassonografia,
            Hemograma completo, Teste COVID-19, entre muitos outros...
          </MKTypography>
        </Grid>
        <Grid container spacing={3} sx={{ mt: 8 }}>
          <Grid item xs={12} md={6} lg={4}>
            <DefaultReviewCard
              color="info"
              name="Kaline Souza"
              date="24/08"
              review="Um ótimo atendimento, as enfermeiras muito atenciosas, prestativas. Do faxineiro até os mais superiores, uma educação sem igual.  Toda a equipe estão de parabéns. Eu só tenho a agradecer, muito obrigada pela super atenção e cuidado que tiveram com a gente."
              rating={5}
            />
          </Grid>
          <Grid item xs={12} md={14} lg={4}>
            <DefaultReviewCard
              color="info"
              name="Jussara Caldas"
              date="20/08"
              review="Estrutura de primeira. Ótimo atendimento em geral , desde o pessoal de apoio, até a triagem, médicos, enfermeiros, técnicos em geral. Estão de parabéns! Eu super recomendo."
              rating={5}
            />
          </Grid>
          <Grid item sx={12} md={6} lg={4}>
            <DefaultReviewCard
              color="info"
              name="Vanessa Costa"
              date="20/09"
              review="Internei minha filha com uma pneumonia muito forte, vindo transferida da upa de Comendador Soares, onde fizeram maior descaso e ao invés de melhorar, só piorava. Com a graça de Deus, no hospital fluminense foi muito bem atendida, recebida e cuidada e teve uma recuperação rápida 🙏
              Muito grata a Deus e a toda a equipe do hospital fluminense, gratidão me define "
              rating={5}
            />
          </Grid>
        </Grid>
        <Divider sx={{ my: 6 }} />
        <Grid container spacing={3} justifyContent="center">
          <Grid item xs={6} md={4} lg={2.5}>
            <MKBox component="img" src={logoSUS} alt="SUS" width="150px" />
          </Grid>
          <Grid item xs={6} md={4} lg={2.5}>
            <MKBox component="img" src={logoPref} alt="Pref" width="150px" />
          </Grid>
          <Grid item xs={6} md={4} lg={2.5}>
            <MKBox component="img" src={logoSIPPS} alt="SIPPS" width="150px" />
          </Grid>
          <Grid item xs={6} md={4} lg={2}>
            <MKBox component="img" src={logoDiamond} alt="Diamond" width="150px" />
          </Grid>
          <Grid item xs={6} md={4} lg={2}>
            <MKBox component="img" src={logoBelFut} alt="BelFut" width="150px" />
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default Information;
