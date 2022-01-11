import React from "react";
import { SignInForm } from "./sign-in-form";
import styles from "./sign.module.css";
import { Box, Container, Grid } from "@mui/material";
import { Navbar } from "../../app/Navbar";
import footerLogo from "../../assets/img/logos/footer.svg";
import footerTabLogo from "../../assets/img/logos/footer-tab.svg";
import kgLogo from "../../assets/img/logos/kg.svg";


export const SignIn = () => {
  return (
    <>
      <Navbar />
      <Grid
        container
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <Box
          sx={{
            flexGrow: 6,
            p: 4,
            borderRadius: "65px",
            border: "4px solid #36353D",
            maxWidth: 1500,
          }}
        >
          <Container maxWidth="lg">
            <Grid
              container
              display="flex"
              alignItems="center"
              justifyContent="space-between"
            >
              <Grid item xs lg={4} md={4} sm={3} xl={2}>
                <SignInForm />
              </Grid>
              <Grid
                item
                xs
                md={8}
                lg={8}
                xl={8}
                sx={{ display: { xs: "none", sm: "none", md: "block" } }}
              >
                <div className={styles.txtSpan}>
                  <div>
                    <span>ККМ:</span>20438
                  </div>

                  <div>
                    <span>Пробито чеков:</span>20438
                  </div>
                  <div>
                    <span>Выявлено нарушений:</span>20438
                  </div>
                  <div>
                    <span>Проверка субьектов:</span>20438
                  </div>
                </div>
                <img alt="kg" src={kgLogo} width={900} height={465} />
              </Grid>
            </Grid>
          </Container>
        </Box>
      </Grid>

      <Grid
        item
        xs
        lg={12}
        md={12}
        sx={{ display: { xs: "none", sm: "none", md: "block" } }}
        className={styles.styleFooter}
      >
        <img
          alt="table"
          src={footerTabLogo}
          className={styles.footer_tab}
        />

        <img alt="floor" src={footerLogo} className={styles.footerPhoto} />
      </Grid>
    </>
  );
};
