import React from "react";
import styles from "../chartInfoCard/chartInfo.module.css";
import budgetLogo from "../../assets/img/logos/budget-card-logo.svg";
import { Card, CardContent, Typography } from "@mui/material";

type Props = {
  title: string;
  sum: string;
  count: string;
  policyCount: string;
};

export const PatentCard = (props: Props) => {
  return (
    <Card elevation={2} className={styles.cardStyle}>
      <CardContent>
        <Typography>
          <img alt={"budget-logo"} src={budgetLogo} />
        </Typography>
        <Typography variant="h6" component="div">
          {props.title}
        </Typography>
        <div className={styles.line}></div>
        <Typography variant="body2" color="text.secondary">
          Количество патентов:
        </Typography>
        <Typography variant="h6" component="div">
          {props.count}
        </Typography>
        <div className={styles.line}></div>
        <Typography variant="body2" color="text.secondary">
          Количество полисов:
        </Typography>
        <Typography variant="h6" component="div">
          {props.policyCount}
        </Typography>
        <div className={styles.line}></div>
        <Typography variant="body2" color="text.secondary">
          На сумму:
        </Typography>
        <Typography variant="h6" component="div">
          {props.sum}
        </Typography>
      </CardContent>
    </Card>
  );
};
