// Material UI
import * as React from "react";
import { AppBar, Box, Toolbar } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";

// Components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
import MKSocialButton from "components/MKSocialButton";
import FilledInfoCard from "components/Cards/InfoCards/FilledInfoCard";
import BuiltByDevelopers from "components/BuiltByDevelopers";
// Sections
import Information from "pages/Presentation/sections/Information";
import Testimonials from "pages/Presentation/sections/Testimonials";
import Contato from "pages/Presentation/sections/Contato";
import Galery from "pages/Presentation/sections/Galery";

// Images
import bgImage from "assets/images/bg-presentation.jpg";
import logoHF from "assets/images/logoHF.png";
import AnchorLink from "react-anchor-link-smooth-scroll";
import MKButton from "components/MKButton";
import Trabalhe from "./sections/Trabalhe";

function Presentation() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };
  return (
    
    <>
      <AppBar position="fixed" variant="gradient" color="info">
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="/"
              sx={{
                mr: 2,
                display: { xs: "none", md: "flex" },
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
              }}
            >
              <MKBox component="img" src={logoHF} alt="SUS" width="50px" edge="start" href="/" />
            </Typography>
            <Box sx={{ flexGrow: 1, display: { xs: "block", md: "none" } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: "block", md: "none" },
                }}
              >
                <MenuItem display="column" onClick={handleCloseNavMenu}>
                  <AnchorLink href="#Parceiros" color="none">
                    <MKTypography
                      variant="button"
                      fontWeight="bold"
                      mx={1}
                      display="flex"
                      justifyContent="space-between"
                      alignItems="center"
                      textTransform="capitalize"
                      p={1}
                      sx={({ palette: { grey, dark }, borders: { borderRadius } }) => ({
                        borderRadius: borderRadius.md,
                        cursor: "pointer",
                        transition: "all 300ms linear",

                        "&:hover": {
                          backgroundColor: grey[200],
                          color: dark.main,

                          "& *": {
                            color: dark.main,
                          },
                        },
                      })}
                    >
                      Parceiros
                    </MKTypography>
                  </AnchorLink>
                </MenuItem>
                <MenuItem display="column" onClick={handleCloseNavMenu}>
                  <AnchorLink
                    href="#Sobre"
                    color="none"
                    mt={10}
                    display="flex"
                    justifyContent="right"
                  >
                    <MKTypography
                      variant="button"
                      fontWeight="bold"
                      mx={1}
                      display="flex"
                      justifyContent="space-between"
                      alignItems="center"
                      textTransform="capitalize"
                      p={1}
                      sx={({ palette: { grey, dark }, borders: { borderRadius } }) => ({
                        borderRadius: borderRadius.md,
                        cursor: "pointer",
                        transition: "all 300ms linear",

                        "&:hover": {
                          backgroundColor: grey[200],
                          color: dark.main,

                          "& *": {
                            color: dark.main,
                          },
                        },
                      })}
                    >
                      Sobre
                    </MKTypography>
                  </AnchorLink>
                </MenuItem>
                <MenuItem display="column" onClick={handleCloseNavMenu}>
                  <AnchorLink href="#Avaliacoes">
                    <MKTypography
                      variant="button"
                      fontWeight="bold"
                      mx={1}
                      display="flex"
                      justifyContent="space-between"
                      alignItems="center"
                      textTransform="capitalize"
                      p={1}
                      sx={({ palette: { grey, dark }, borders: { borderRadius } }) => ({
                        borderRadius: borderRadius.md,
                        cursor: "pointer",
                        transition: "all 300ms linear",

                        "&:hover": {
                          backgroundColor: grey[200],
                          color: dark.main,

                          "& *": {
                            color: dark.main,
                          },
                        },
                      })}
                    >
                      Avaliações
                    </MKTypography>
                  </AnchorLink>
                </MenuItem>
                <MenuItem display="flex" onClick={handleCloseNavMenu}>
                  <AnchorLink href="#Galeria" color="none" display="flex" justifyContent="right">
                    <MKTypography
                      variant="button"
                      fontWeight="bold"
                      mx={1}
                      display="flex"
                      justifyContent="space-between"
                      alignItems="center"
                      textTransform="capitalize"
                      p={1}
                      sx={({ palette: { grey, dark }, borders: { borderRadius } }) => ({
                        borderRadius: borderRadius.md,
                        cursor: "pointer",
                        transition: "all 300ms linear",

                        "&:hover": {
                          backgroundColor: grey[200],
                          color: dark.main,

                          "& *": {
                            color: dark.main,
                          },
                        },
                      })}
                    >
                      Galeria
                    </MKTypography>
                  </AnchorLink>
                </MenuItem>
              </Menu>
            </Box>
            <Typography
              variant="h5"
              noWrap
              component="a"
              href=""
              sx={{
                mr: 2,
                display: { xs: "flex", md: "none" },
                flexGrow: 1,
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
              }}
            >
              <MKBox component="img" src={logoHF} width="50px" edge="start" href="/" />
            </Typography>

            <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
              <AnchorLink href="#Parceiros" color="none">
                <MKTypography
                  variant="button"
                  fontWeight="bold"
                  p={1}
                  color="white"
                  display="flex"
                  justifyContent="space-between"
                  alignItems="center"
                  textTransform="capitalize"
                  sx={({ palette: { grey, dark }, borders: { borderRadius } }) => ({
                    borderRadius: borderRadius.md,
                    cursor: "pointer",
                    transition: "all 300ms linear",

                    "&:hover": {
                      backgroundColor: grey[200],
                      color: dark.main,

                      "& *": {
                        color: dark.main,
                      },
                    },
                  })}
                >
                  Parceiros
                </MKTypography>
              </AnchorLink>
              <AnchorLink href="#Sobre" color="none">
                <MKTypography
                  variant="button"
                  fontWeight="bold"
                  p={1}
                  display="flex"
                  justifyContent="space-between"
                  alignItems="center"
                  textTransform="capitalize"
                  color="white"
                  sx={({ palette: { grey, dark }, borders: { borderRadius } }) => ({
                    borderRadius: borderRadius.md,
                    cursor: "pointer",
                    transition: "all 300ms linear",

                    "&:hover": {
                      backgroundColor: grey[200],
                      color: dark.main,

                      "& *": {
                        color: dark.main,
                      },
                    },
                  })}
                >
                  Sobre
                </MKTypography>
              </AnchorLink>
              <AnchorLink href="#Avaliacoes" color="none">
                <MKTypography
                  variant="button"
                  fontWeight="bold"
                  p={1}
                  display="flex"
                  justifyContent="space-between"
                  alignItems="center"
                  textTransform="capitalize"
                  color="white"
                  sx={({ palette: { grey, dark }, borders: { borderRadius } }) => ({
                    borderRadius: borderRadius.md,
                    cursor: "pointer",
                    transition: "all 300ms linear",

                    "&:hover": {
                      backgroundColor: grey[200],
                      color: dark.main,

                      "& *": {
                        color: dark.main,
                      },
                    },
                  })}
                >
                  Avaliações
                </MKTypography>
              </AnchorLink>
              <AnchorLink href="#Galeria" color="none">
                <MKTypography
                  variant="button"
                  fontWeight="bold"
                  p={1}
                  display="flex"
                  justifyContent="space-between"
                  alignItems="center"
                  textTransform="capitalize"
                  color="white"
                  sx={({ palette: { grey, dark }, borders: { borderRadius } }) => ({
                    borderRadius: borderRadius.md,
                    cursor: "pointer",
                    transition: "all 300ms linear",

                    "&:hover": {
                      backgroundColor: grey[200],
                      color: dark.main,

                      "& *": {
                        color: dark.main,
                      },
                    },
                  })}
                >
                  Galeria
                </MKTypography>
              </AnchorLink>
            </Box>
            <MKButton
              type="submit"
              href="#Trabalhe"
              variant="gradient"
              color="info"
              sx={{ mr: 2 }}
              mx={0}
            >
              Trabalhe Conosco
            </MKButton>
            <MKButton type="submit" href="#Contato" variant="gradient" color="info" mx={0}>
              Contato
            </MKButton>
          </Toolbar>
        </Container>
      </AppBar>
      <MKBox
        minHeight="75vh"
        width="100%"
        sx={{
          backgroundImage: `url(${bgImage})`,
          backgroundSize: "cover",
          backgroundPosition: "top",
          display: "grid",
          placeItems: "center",
        }}
      >
        <Container>
          <Grid container item xs={12} lg={7} justifyContent="center" mx="auto">
            <MKTypography
              variant="h1"
              color="white"
              mt={-6}
              mb={1}
              display="flex"
              sx={({ breakpoints, typography: { size } }) => ({
                [breakpoints.down("md")]: {
                  fontSize: size["3xl"],
                },
              })}
            >
              Hospital Fluminense{" "}
            </MKTypography>
            <MKTypography
              variant="body1"
              color="white"
              textAlign="center"
              px={{ xs: 6, lg: 12 }}
              mt={1}
            >
              Quando o público e o privado se unem o SUS se torna possível!
            </MKTypography>
          </Grid>
        </Container>
      </MKBox>
      <Card
        sx={{
          p: 2,
          mx: { xs: 2, lg: 3 },
          mt: -8,
          mb: 4,
          backgroundColor: ({ palette: { white }, functions: { rgba } }) => rgba(white.main, 0.8),
          backdropFilter: "saturate(200%) blur(30px)",
          boxShadow: ({ boxShadows: { xxl } }) => xxl,
        }}
      >
        <section id="Parceiros">
          <Information />
        </section>
        <Container sx={{ mt: 6 }}>
          <section id="Sobre">
            <BuiltByDevelopers />
          </section>
        </Container>
        <Container>
          <Grid container spacing={3}>
            <Grid item xs={12} lg={4}>
              <FilledInfoCard
                variant="gradient"
                color="info"
                icon="flag"
                title="Agendamento para Exames"
                description="O agendamento para fazer exames de ultrassom é feito através do Complexo Regulador do Município de Belford Roxo..."
                action={{
                  type: "external",
                  route: "https://www.instagram.com/p/ChnG0Akp1-W/",
                  label: "Saiba Mais...",
                }}
              />
            </Grid>
            <Grid item xs={10} lg={4}>
              <FilledInfoCard
                variant="gradient"
                color="info"
                icon="precision_manufacturing"
                title="Novidades"
                description="Fique por dentro de todas as novidades em nossa página, inclusive sobre a nova ala cirúrgica que está em planejamento..."
                action={{
                  type: "external",
                  route: "https://www.instagram.com/hfluminense/",
                  label: "Saiba Mais...",
                }}
              />
            </Grid>
            <Grid item xs={12} lg={4}>
              <FilledInfoCard
                variant="gradient"
                color="info"
                icon="apps"
                title="Equipe"
                description="Nossa equipe está de prontidão 24 horas, e com o melhor treinamento, para que possam realizar um atendimento perfeito..."
                action={{
                  type: "external",
                  route: "https://www.instagram.com/p/Ca0TTXePMwk/",
                  label: "Saiba Mais...",
                }}
              />
            </Grid>
          </Grid>
        </Container>
        <section id="Avaliacoes">
          <Testimonials />
        </section>
        <section id="Galeria">
          <Galery />
        </section>
        <section id="Contato">
          <Contato />
        </section>
        <section id="Trabalhe">
          <Trabalhe />
        </section>
        <MKBox pt={18} pb={6}>
          <Container>
            <Grid container spacing={3}>
              <Grid item xs={12} lg={5} ml="auto" sx={{ textAlign: { xs: "center", lg: "left" } }}>
                <MKTypography variant="h4" fontWeight="bold" mb={0.5}>
                  Siga-nos em nossas redes sociais!
                </MKTypography>
                <MKTypography variant="body1" color="text">
                  fique por dentro de todas as noticias
                </MKTypography>
              </Grid>
              <Grid
                item
                xs={12}
                lg={5}
                my={{ xs: 5, lg: "auto" }}
                mr={{ xs: 0, lg: "auto" }}
                sx={{ textAlign: { xs: "center", lg: "right" } }}
              >
                <MKSocialButton
                  component="a"
                  href="https://www.facebook.com/hfluminense"
                  target="_blank"
                  color="facebook"
                  sx={{ mr: 1 }}
                >
                  <i className="fab fa-facebook" />
                  &nbsp;Facebook
                </MKSocialButton>
                <MKSocialButton
                  component="a"
                  href="https://www.instagram.com/hfluminense/"
                  target="_blank"
                  color="instagram"
                >
                  <i className="fab fa-instagram" />
                  &nbsp;Instagram
                </MKSocialButton>
              </Grid>
            </Grid>
          </Container>
        </MKBox>
      </Card>
    </>
  );
}

export default Presentation;
