import React from "react";
import smartLogo from "../assets/img/logos/smart-logo.svg";
import { Button, Container, Grid } from "@mui/material";
import { Link } from "react-router-dom";
import { useAppDispatch } from "../hooks/use-hooks";
import { useAuth } from "../hooks/use-auth";
import { removeUser } from "../store/slice/userSlice";
import { makeStyles } from "@mui/styles";
import GnsLogo from "../assets/img/logos/logoGNS.svg";

export const Navbar = () => {
  const dispatch = useAppDispatch();
  const { isAuth } = useAuth();
  const styles = useStyles();

  return (
    <div className={styles.header}>
      <Container maxWidth="lg">
        <Grid container direction="row" justifyContent="space-between">
          <Grid alignItems="center" display="flex">
            <Link to="/home">
              {" "}
              <img src={GnsLogo} alt="logo" />
            </Link>
            <Grid sx={{ display: { xs: "none", sm: "none", md: "block" } }}>
              <Grid display="flex" alignItems="center">
                <div className={styles.txtStyle}>
                  Государственная Налогавая Служба
                  <br />
                  Кыргызской Республики
                </div>
                <div className={styles.vl}></div>
                <div>
                  <img alt={"smart-logo"} src={smartLogo} />
                </div>
              </Grid>
            </Grid>
          </Grid>
          <Grid alignItems="center" display="flex">
            {isAuth && (
              <>
                <Button
                  size="small"
                  variant="outlined"
                  onClick={() => dispatch(removeUser())}
                >
                  Выйти
                </Button>
              </>
            )}
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

const useStyles = makeStyles({
  header: {
    color: "#3BA6B3",
    boxShadow: "0px 2px 10px rgb(0 0 0 / 5%)",
    marginBottom: "50px",
    background: "white",
  },
  txtStyle: {
    fontWeight: "bold",
    fontSize: "18px",
    lineHeight: "normal",
    color: "black",
    padding: "15px",
    textAlign: "start",
    "& span": {
      color: "#3BA6B3",
    },
  },
  vl: {
    borderLeft: "2px solid #D7D8DA",
    height: "35px",
    margin: "0px 25px 0px 25px",
  },
});
