import { Container, Grid } from "@mui/material";
import { EdeclarationCard } from "../../components/edeclarationCard/edeclarationCard";
import styles from "../../components/chartCard/chartCard.module.css";
import budgetLogo from "../../assets/img/logos/edc-log-y.svg";
import budgetLogoGreen from "../../assets/img/logos/edec-log-green.svg";
import budgetLogoBlue from "../../assets/img/logos/edec-log-blue.svg";
import { EdeclarationDto } from "../../interfaces/dataCardInterface";
import { useEffect, useState } from "react";
import axios from "axios";
import { ChartCard } from "../../components/chartCard/chartCard";
import { BarChartEdeclaration } from "../../components/bar-chart/barChartEdeclaration";
import { AppBreadcrumbs } from "../../app/breadcrumbs";
import { Layout } from "../../app/Layout";
import { Loading } from "../../components/loading/loading";

function Edeclaration() {
  const [data0, setData0] = useState<EdeclarationDto>();
  const [data1, setData1] = useState<EdeclarationDto>();
  const [data2, setData2] = useState<EdeclarationDto>();

  useEffect(() => {
    async function edeclarationData() {
      const register = await axios.get(
        "http://10.111.15.123:5085/api/Edeclaration"
      );
      setData0(register.data[0]);
      setData1(register.data[1]);
      setData2(register.data[2]);
    }
    edeclarationData();
  }, []);

  const count = data0?.count.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  const count1 = data1?.count.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  return (
    <Layout className={styles.menuStyle}>
      <Container maxWidth="lg">
        <Grid item xl={12}>
          <AppBreadcrumbs title="Edeclaration" />
        </Grid>
        <Grid container rowSpacing={8} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <Grid item xl={4} lg={4} md={5} sm={6}>
            {data0 ? (
              <EdeclarationCard
                title={data0?.name}
                count={`${count} шт`}
                color="#F5EED8"
                img={budgetLogo}
              />
            ) : (
              <Loading />
            )}
          </Grid>

          <Grid item xl={4} lg={4} md={5} sm={6}>
            {data1 ? (
              <EdeclarationCard
                title={data1?.name}
                count={`${count1} шт`}
                color="#CDE9DC"
                img={budgetLogoGreen}
              />
            ) : (
              <Loading />
            )}
          </Grid>
          <Grid item xl={4} lg={4} md={5} sm={6}>
            {data2 ? (
              <EdeclarationCard
                title={data2?.name}
                count={`${data2?.count} шт`}
                color="#CEE5F5"
                img={budgetLogoBlue}
              />
            ) : (
              <Loading />
            )}
          </Grid>
          <Grid item xl={12} lg={12} md={12} sm={12} sx={{ pb: 8 }}>
            <ChartCard
              title="Кол-во сданных в электронном виде отчетов за год"
              children={<BarChartEdeclaration />}
            />
          </Grid>
        </Grid>
      </Container>
    </Layout>
  );
}
export default Edeclaration;
