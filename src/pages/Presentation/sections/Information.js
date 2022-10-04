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

// Material Kit 2 React components
import MKBox from "components/MKBox";

// Material Kit 2 React examples
import RotatingCard from "components/Cards/RotatingCard";
import RotatingCardFront from "components/Cards/RotatingCard/RotatingCardFront";
import RotatingCardBack from "components/Cards/RotatingCard/RotatingCardBack";

// Images
import bgSUSFront from "assets/images/bgSUSFront.png";
import bgSUSBack from "assets/images/bgSUSBack.png";
import bgPrefFront from "assets/images/bgPrefFront.png";
import bgPrefBack from "assets/images/bgPrefBack.png";
import bgDiamondFront from "assets/images/bgDiamondFront.png";
import bgDiamondBack from "assets/images/bgDiamondBack.jpeg";

function Information() {
  return (
    <MKBox component="section" py={6} my={6}>
      <Container>
        <Grid container item xs={11} spacing={3} alignItems="center" sx={{ mx: "auto" }}>
          <Grid item xs={12} lg={4} sx={{ mx: "auto" }}>
            <RotatingCard>
              <RotatingCardFront
                image={bgDiamondFront}
                icon="touch_app"
                title={
                  <>
                    DIAMOND
                    <br />
                    Certificadora
                  </>
                }
                description="A Diamond é uma empresa Certificadora e Qualidade em Saúde, que tem o prazer de trabalhar em nosso hospital desde 2021."
              />
              <RotatingCardBack
                image={bgDiamondBack}
                title="Saiba Mais"
                description="Para saber mais sobre a Diamond, clique no botão abaixo, para ir diretamente para o site institucional."
                action={{
                  type: "internal",
                  route: "/",
                  label: "SAIBA MAIS",
                }}
              />
            </RotatingCard>
          </Grid>
          <Grid item xs={12} lg={4} sx={{ mx: "auto", mt: "5vh" }}>
            <RotatingCard>
              <RotatingCardFront
                image={bgPrefFront}
                icon="touch_app"
                title={
                  <>
                    PREFEITURA
                    <br />
                    BELFORD ROXO
                  </>
                }
                description="A Prefeitura do Município de Belford Roxo, é a nossa grande apoiadora nessa luta, parceria que da certo desde 2018, juntos somos mais fortes."
              />
              <RotatingCardBack
                image={bgPrefBack}
                title="Prefeitura de Belford Roxo"
                description="A grande apoiadora do Hospital Fluminense, os trabalhos em conjutos fez com que fossemos referência em altas durante a pandemia do COVID-19."
                action={{
                  type: "external",
                  route: "https://prefeituradebelfordroxo.rj.gov.br/",
                  label: "Saiba Mais",
                }}
              />
            </RotatingCard>
          </Grid>
          <Grid item xs={12} lg={4} sx={{ mx: "auto" }}>
            <RotatingCard>
              <RotatingCardFront
                image={bgSUSFront}
                icon="touch_app"
                title={
                  <>
                    Sistema
                    <br />
                    Único de Saúde
                  </>
                }
                description="O Hospital Fluminense, é um Hospital conveniado pelo SUS(Sistema Único de Saúde), assim conseguimos sempre fazer mais pela população."
              />
              <RotatingCardBack
                image={bgSUSBack}
                title="SUS"
                description="É de suma importância ter um apoio público tão grande, pois quando o público e o privado se unem o SUS se torna possível."
                action={{
                  type: "external",
                  route: "https://www.saude.rj.gov.br/",
                  label: "Saiba Mais",
                }}
              />
            </RotatingCard>
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default Information;
