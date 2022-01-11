import { Container, Grid } from "@mui/material";
import { Menu } from "../../components/menu/menu-card";
import isnakLogo from "../../assets/img/logos/isnak.svg";
import cabinetLogo from "../../assets/img/logos/cabinetNP.svg";
import acbLogo from "../../assets/img/logos/ACB.svg";
import esfLogo from "../../assets/img/logos/ESF.svg";
import patentLogo from "../../assets/img/logos/E-patent.svg";
import kkmLogo from "../../assets/img/logos/KKM.svg";
import mtLogo from "../../assets/img/logos/MT.svg";
import { Layout } from "../../app/Layout";
import styles from "./mainMenu.module.css";

function MainMenu() {
  return (
    <Layout className={styles.menuStyle}>
      <Container maxWidth="lg">
        <Grid
          container
          direction="row"
          rowSpacing={3}
          columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          sx={{pb:8}}
        >
          <Grid item xs={12} sm={6} md={4} lg={3}>
            <Menu
              title="Иснак"
              value="Информационная система налогового администрирования Кыргызстана"
              img={isnakLogo}
              url="/Itas"
            />
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={3}>
            <Menu
              title="Кабинет НП"
              value={`АИС "Личный кабинет налогоплательщика"`}
              img={cabinetLogo}
              url="/Edeclaration"
            />
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={3}>
            <Menu title="ККМ" value="KKM онлайн" img={kkmLogo} url="/KKM" />
          </Grid>

          <Grid item xs={12} sm={6} md={4} lg={3}>
            <Menu title="ЭСФ" value="АИС ЭСФ" img={esfLogo} url="/ESF" />
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={3}>
            <Menu
              title="ACB"
              value={`АИС "Администратор социальных взносов"`}
              img={acbLogo}
              url="/ASV"
            />
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={3}>
            <Menu
              title="Е-патент"
              value={`АИС 
              "Электронный патент"`}
              img={patentLogo}
              url="/Patent"
            />
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={3} >
            <Menu
              title="ГАИС МТ"
              value={`Государственная автомитизированная информационная система "Маркированные товары"`}
              img={mtLogo}
              url="/Gais"
            />
          </Grid>
        </Grid>
      </Container>
    </Layout>
  );
}

export default MainMenu;
