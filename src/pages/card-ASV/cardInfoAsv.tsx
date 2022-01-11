import { Container, Grid } from "@mui/material";
import styles from "../../components/chartCard/chartCard.module.css";
import budgetLogo from "../../assets/img/logos/edc-log-y.svg";
import budgetLogoGreen from "../../assets/img/logos/edec-log-green.svg";
import budgetLogoBlue from "../../assets/img/logos/edec-log-blue.svg";
import { SocFondDto } from "../../interfaces/dataCardInterface";
import { useEffect, useState } from "react";
import axios from "axios";
import { AppBreadcrumbs } from "../../app/breadcrumbs";
import { Layout } from "../../app/Layout";
import { AsvCard } from "../../components/asv-card/asvCard";
import { Loading } from "../../components/loading/loading";

function AsvInfoCard() {
  const [socFond, setSocFond] = useState<SocFondDto>();

  useEffect(() => {
    async function socFondData() {
      const register = await axios.get(
        "http://10.111.15.123:5085/api/SocFond/SocFondAggregateInfo"
      );
      setSocFond(register.data);
    }
    socFondData();
  }, []);

  const paysheetCount = socFond?.paysheetCount
    .toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  const paysheetSum = socFond?.paysheetSum
    .toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  const policyCount = socFond?.policyCount
    .toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  const policySum = socFond?.policySum
    .toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  const farmCount = socFond?.farmCount
    .toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  const farmSum = socFond?.farmSum
    .toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  return (
    <Layout className={styles.menuStyle}>
      <Container maxWidth="lg">
        <Grid item xl={12}>
          <AppBreadcrumbs title="ASV" />
        </Grid>
        <Grid container rowSpacing={3} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <Grid item xs={12} sm={6} md={6} lg={4}>
            {socFond ? (
              <AsvCard
                title="Расчетные ведомости"
                count={`${paysheetCount}шт`}
                color="#F5EED8"
                sum={`${paysheetSum}сом`}
                img={budgetLogo}
              />
            ) : (
              <Loading />
            )}
          </Grid>

          <Grid item xs={12} sm={6} md={6} lg={4}>
            {socFond ? (
              <AsvCard
                title="Страховые полисы"
                count={`${policyCount} шт`}
                color="#CDE9DC"
                img={budgetLogoGreen}
                sum={`${policySum}сом`}
              />
            ) : (
              <Loading />
            )}
          </Grid>
          <Grid item xs={12} sm={6} md={6} lg={4}>
            {socFond ? (
              <AsvCard
                title="КФХ"
                count={`${farmCount} шт`}
                color="#CEE5F5"
                img={budgetLogoBlue}
                sum={`${farmSum}сом`}
              />
            ) : (
              <Loading />
            )}
          </Grid>
        </Grid>
      </Container>
    </Layout>
  );
}
export default AsvInfoCard;
