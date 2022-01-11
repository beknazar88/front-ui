import { Container, Grid } from "@mui/material";
import styles from "../../components/chartCard/chartCard.module.css";
import { PatentDto } from "../../interfaces/dataCardInterface";
import { useEffect, useState } from "react";
import axios from "axios";
import { AppBreadcrumbs } from "../../app/breadcrumbs";
import { Layout } from "../../app/Layout";
import { PatentCard } from "../../components/patent-card/patentCard";
import { Loading } from "../../components/loading/loading";

function PatentInfoCard() {
  const [patent, setPatent] = useState<PatentDto>();

  useEffect(() => {
    async function patentData() {
      const register = await axios.get(
        "http://10.111.15.123:5085/api/Patent/PatentAggregateInfo"
      );
      setPatent(register.data);
    }
    patentData();
  }, []);

  const patentCount = patent?.patentCount
    .toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  const policyCount = patent?.policyCount
    .toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  const paymentSum = patent?.paymentSum
    .toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  return (
    <Layout className={styles.menuStyle}>
      <Container maxWidth="lg">
        <Grid item xl={12}>
          <AppBreadcrumbs title="Патент" />
        </Grid>
        <Grid container rowSpacing={8} sx={{ pb: 6 }}>
          <Grid item xs={12} sm={6} md={6} lg={12}>
            {patent ? (
              <PatentCard
                title="Электронные патенты/полисы за 2021 год"
                count={`${patentCount}шт`}
                policyCount={`${policyCount}шт`}
                sum={`${paymentSum}сом`}
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
export default PatentInfoCard;
