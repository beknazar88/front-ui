import { Card, CardContent, Typography } from "@mui/material";
import React from "react";
import styles from '../edeclarationCard/edeclarationCard.module.css'

type Props = {
    title?: string;
    count?: string;
    sum?: string;
    color: string;
    img: string;
}

export const AsvCard = ({title, count, color, img, sum}: Props) => {
return(
    <Card  elevation={2} sx={{ width: 350, height: 300}}  style={{background: `${color}`}}>
      <CardContent>
        <Typography>
          <img alt={"budget-logo"} src={img} />
        </Typography>
        <Typography variant="h6" component="div">
          {title}
        </Typography>
        <div className={styles.line}></div>
        <Typography variant="body2" color="text.secondary">
          Количество:
        </Typography>
        <Typography variant="h6" component="div">
          {count}
        </Typography>
        <div className={styles.line}></div>
        <Typography variant="body2" color="text.secondary">
          Количество:
        </Typography>
        <Typography variant="h6" component="div">
          {sum}
        </Typography>
      </CardContent>
    </Card>
)
}