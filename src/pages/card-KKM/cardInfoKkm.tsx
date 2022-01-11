import { Container, Grid } from "@mui/material";
import { ChartInfoCard } from "../../components/chartInfoCard/chartInfoCard";
import styles from "../../components/chartCard/chartCard.module.css";
import { useEffect, useState } from "react";
import {
  GetRegisterKKM,
  GetTotalCheckSumKKM,
} from "../../interfaces/dataCardInterface";
import axios from "axios";
import { ChartInfoRegisterCard } from "../../components/chartInfoCard/chartInfoRegisterCard";
import BasicTable from "../../components/infoTable/infoKkmTable";
import { Layout } from "../../app/Layout";
import { AppBreadcrumbs } from "../../app/breadcrumbs";
import { ChartCard } from "../../components/chartCard/chartCard";
import LineChartKkm from "../../components/line-chart/LineChartKkm";
import { Loading } from "../../components/loading/loading";

function CardInfoKkm() {
  const [data, setData] = useState<GetTotalCheckSumKKM>();
  const [register, setRegister] = useState<GetRegisterKKM>();

  useEffect(() => {
    async function edecData() {
      const res = await axios.get(
        "http://10.111.15.123:5085/api/KKM/GetTotalCheckSum"
      );
      setData(res.data);
    }
    async function registerData() {
      const register = await axios.get(
        "http://10.111.15.123:5085/api/KKM/GetRegKKM"
      );
      setRegister(register.data);
    }
    edecData();
    registerData();
  }, []);

  const sum = data?.sum.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  const count = data?.count.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  const registerCount = register?.count
    .toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  return (
    <Layout className={styles.menuStyle}>
      <Container maxWidth="lg">
        <Grid item xl={12}>
          <AppBreadcrumbs title="ККМ" />
        </Grid>
        <Grid
          container
          direction="row"
          justifyContent="center"
          rowSpacing={8}
          columnSpacing={{ xs: 1, sm: 2, md: 3 }}
        >
          <Grid item xs={12}>
          {data ? (
            <ChartInfoCard
              count={`${count} шт`}
              title="Общая сумма пробитых чеков за 2021год"
              sum={`${sum} сом`}
            />
            ) : (
              <Loading />
            )}
          </Grid>
          <Grid item xs={12}>
            <ChartInfoRegisterCard
              count={`${registerCount} шт`}
              title="Зарегистрированных ККМ за 2021 год"
            />
          </Grid>

          <Grid item xs={12}>
            <ChartCard title="Кол-во зарегистрированных ККМ за 2021год" children={<LineChartKkm/>} />
          </Grid>
          <Grid item xs={8} sx={{pb:8}} lg={12} md={12}>
            <BasicTable />
          </Grid>
        </Grid>
      </Container>
    </Layout>
  );
}

export default CardInfoKkm;
