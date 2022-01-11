import { Card, CardContent, Typography } from "@mui/material";
import React from "react";
import styles from './chartCard.module.css'
type Props = {
    title: string;
    children: React.ReactNode
    }

export const CaruselCard = ({ title, children }: Props) => {
  return (
    <Card elevation={3} className={styles.cardStyle} sx={{  backgroundColor: 'rgba(59, 166, 179, 0.2)', }}>
      <CardContent>
        <Typography variant="h6" component="div">
          {title}
        </Typography>
        <Typography component="div">
          {children}
        </Typography>
      </CardContent>
    </Card>
  );
};