import React from "react";
import styles from "../chartInfoCard//chartInfo.module.css";
import budgetLogo from "../../assets/img/logos/budget-card-logo.svg";
import { Card, CardContent, Typography } from "@mui/material";

type Props = {
  title?: string;
  count?: number;
  factVal?: number;
};

export const ItasCard = (props: Props) => {
  return (
    <Card elevation={3} className={styles.cardStyle} sx={{ width: 230, height: 280}}>
      <CardContent>
        <Typography>
          <img alt={"budget-logo"} src={budgetLogo} />
        </Typography>
        <Typography variant="h6" component="div">
          {props.title}
        </Typography>
        <div className={styles.line}></div>
        <Typography variant="body2" color="text.secondary">
          Факт:
        </Typography>
        <Typography variant="h6" component="div">
          {props.factVal}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          План:
        </Typography>
        <Typography variant="h6" component="div">
          {props.count}
        </Typography>
      </CardContent>
    </Card>
  );
};