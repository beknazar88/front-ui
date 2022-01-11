import { Card, CardActions, CardContent, Paper, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import styles from "./menu.module.css";

type Props = {
  title: string;
  value: string;
  url: string;
  img: string;
};

export const Menu = ({ title, url, value, img }: Props) => {
  return (
    <Card  className={styles.boxStyle} elevation={1}  sx={{ width: 230, height: 250}}>
      <div>
        <Typography>
          <img src={img} alt="logo" />
        </Typography>
        <Typography variant="h6" component="div" className={styles.boxTxt}>
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {value}
        </Typography>
        <div className={styles.line}></div>
        <div>
        <Link to={url} className={styles.styleButton}>
          Подробнее
        </Link>
        </div>
 
      </div>
    </Card>
  );
};
