import React from "react";
import { Link } from "react-router-dom";
import { Grid } from "@mui/material";
import { makeStyles } from "@mui/styles";

type Props = {
  title: string;
};

export const AppBreadcrumbs = ({ title }: Props) => {
  const styles = useStyles();
  return (
    <Grid display="flex" alignItems="center" className={styles.boxStyle}>
      <Link to={"/home"} className={styles.textLinks}>
        Главная
      </Link>

      <div className={styles.vl}></div>

      <p>{title}</p>
    </Grid>
  );
};

const useStyles = makeStyles({
  textLinks: {
    textTransform: "none",
    textDecoration: "none",
  },
  boxStyle: {
    margin: "0px 0px 50px 0px",
  },
  vl: {
    borderLeft: "1px solid black",
    height: "20px",
    margin: "0px 10px 0px 10px",
  },
});
