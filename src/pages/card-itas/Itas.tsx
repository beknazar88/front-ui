import DataCard from "../../components/dataCard/DataCard";
import { BudgetTypeDto } from "../../interfaces/dataCardInterface";
import { Layout } from "../../app/Layout";
import { Container, Grid } from "@mui/material";
import { AppBreadcrumbs } from "../../app/breadcrumbs";
import styles from "../../components/chartCard/chartCard.module.css";
import CaruselItas from "../../components/itas-card/caruselItas";
import { ChartCard } from "../../components/chartCard/chartCard";
import { ItasBarChart } from "../../components/bar-chart/itasBarChart";
import { useEffect, useState } from "react";
import axios from "axios";
import { CaruselCard } from "../../components/chartCard/caruselCard";
import LineChartItas from "../../components/line-chart/LineChartItas";
import budgetLogo from "../../assets/img/logos/edc-log-y.svg";

import budgetLogoBlue from "../../assets/img/logos/edec-log-blue.svg";
import budgetRed from "../../assets/img/logos/budgetRed.svg";
import budgetViolet from "../../assets/img/logos/budgetViolet.svg";

function Itas() {
  const [budgetItas, setBugetItas] = useState<BudgetTypeDto>();
  const [budgetItas2, setBugetItas2] = useState<BudgetTypeDto>();
  const [budgetItas3, setBugetItas3] = useState<BudgetTypeDto>();
  const [budgetItas4, setBugetItas4] = useState<BudgetTypeDto>();

  useEffect(() => {
    async function budgetItasData() {
      const register = await axios.get(
        `http://10.111.15.123:5085/api/ITAS/IncomeInfoAggregate?budgetType=${1}`
      );
      setBugetItas(register.data);
    }
    async function budgetItasData2() {
      const register = await axios.get(
        `http://10.111.15.123:5085/api/ITAS/IncomeInfoAggregate?budgetType=${2}`
      );
      setBugetItas2(register.data);
    }
    async function budgetItasData3() {
      const register = await axios.get(
        `http://10.111.15.123:5085/api/ITAS/IncomeInfoAggregate?budgetType=${3}`
      );
      setBugetItas3(register.data);
    }
    async function budgetItasData4() {
      const register = await axios.get(
        `http://10.111.15.123:5085/api/ITAS/IncomeInfoAggregate?budgetType=${4}`
      );
      setBugetItas4(register.data);
    }
    budgetItasData();
    budgetItasData2();
    budgetItasData3();
    budgetItasData4();
  }, []);

  const factVal = budgetItas?.factVal
    .toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  const factVal2 = budgetItas2?.factVal
    .toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  const factVal3 = budgetItas3?.factVal
    .toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  const factVal4 = budgetItas4?.factVal
    .toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, ",");

  const forecastVal = budgetItas?.forecastVal
    .toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  const forecastVal2 = budgetItas2?.forecastVal
    .toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  const forecastVal3 = budgetItas3?.forecastVal
    .toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  const forecastVal4 = budgetItas4?.forecastVal
    .toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, ",");

  return (
    <Layout className={styles.menuStyle}>
      <Container maxWidth="lg">
        <Grid item xl={12}>
          <AppBreadcrumbs title="Itas" />
        </Grid>
        <Grid
          container
          direction="row"
          rowSpacing={8}
          columnSpacing={{ xs: 1, sm: 2, md: 3 }}
        >
          <Grid item xs={12} lg={3} md={4} sm={6}>
            <DataCard
              budgetType={budgetItas?.budgetType}
              forecastVal={`Прогноз: ${forecastVal} сом`}
              factVal={factVal}
              fulfillmentPercentage={`${budgetItas?.fulfillmentPercentage}% за последний месяц`}
              img={budgetLogoBlue}
            />
          </Grid>
          <Grid item xs={12} lg={3} md={4} sm={6}>
            <DataCard
              budgetType={budgetItas2?.budgetType}
              forecastVal={`Прогноз: ${forecastVal2} сом`}
              factVal={factVal2}
              fulfillmentPercentage={`${budgetItas2?.fulfillmentPercentage}% за последний месяц`}
              img={budgetRed}
            />
          </Grid>
          <Grid item xs={12} lg={3} md={4} sm={6}>
            <DataCard
              budgetType={budgetItas3?.budgetType}
              forecastVal={`Прогноз: ${forecastVal3} сом`}
              factVal={factVal3}
              fulfillmentPercentage={`${budgetItas3?.fulfillmentPercentage}% за последний месяц`}
              img={budgetViolet}
            />
          </Grid>
          <Grid item xs={12} lg={3} md={4} sm={6}>
            <DataCard
              budgetType={budgetItas4?.budgetType}
              forecastVal={`Прогноз: ${forecastVal4} сом`}
              factVal={factVal4}
              fulfillmentPercentage={`${budgetItas4?.fulfillmentPercentage}% за последний месяц`}
              img={budgetLogo}
            />
          </Grid>
          <Grid item xs={12} lg={12}>
            <ChartCard
              title="Отчет о фактическом исполнении государственного бюджета по областям и районам"
              children={<ItasBarChart />}
            />
          </Grid>
          <Grid item xs={12} lg={12} >
            <CaruselCard
              title="Отчет о фактическом исполнении государственного бюджета - ЦА"
              children={<CaruselItas />}
            />
          </Grid>
          <Grid item xs={12} lg={12} sx={{pb:8}} >
            <ChartCard title="Количество ИНН по годам, в разрезе юридических и физических лиц" children={ <LineChartItas/>}/>
      
          </Grid>
        </Grid>
      </Container>
    </Layout>
  );
}

export default Itas;
