import { Card, CardContent, Typography } from "@mui/material";
import React from "react";
import styles from '../edeclarationCard/edeclarationCard.module.css'

type Props = {
    title?: string;
    count?: string;
    color: string;
    img: string;
}

export const EdeclarationCard = ({title, count, color, img}: Props) => {
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
          Выдано:
        </Typography>
        <Typography variant="h6" component="div">
          {count}
        </Typography>
      </CardContent>
    </Card>
)
}