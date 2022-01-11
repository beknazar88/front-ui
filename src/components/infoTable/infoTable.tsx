import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Grid, Typography } from "@mui/material";
import styles from "../../components/chartInfoCard/chartInfo.module.css";

type Props = {
  title: string;
  row: JSX.Element[] | undefined;
};

export const InfoTableEsf = ({ ...props }: Props) => {
  return (
    <TableContainer
      component={Paper}
      elevation={3}
      className={styles.styleTable}
      sx={{ p: 6, maxWidth: 1054 }}
    >
      <Grid sx={{ pb: 3 }}>
        <Typography variant="h4" component="div" sx={{ pb: 4 }}>
          Топ-10
        </Typography>
        <Typography variant="h6" component="div">
          {props.title}
        </Typography>
      </Grid>

      <hr />
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Номер ЭСФ</TableCell>
            <TableCell align="right">Сумма</TableCell>
            <TableCell align="right">Дата выписки</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>{props.row}</TableBody>
      </Table>
    </TableContainer>
  );
};

export default InfoTableEsf;
