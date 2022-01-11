import { Container, Grid } from "@mui/material";
import styles from "../../components/chartCard/chartCard.module.css";
import { AppBreadcrumbs } from "../../app/breadcrumbs";
import { Layout } from "../../app/Layout";
import { ChartCard } from "../../components/chartCard/chartCard";

function GaisInfoCard() {
  return (
    <Layout className={styles.menuStyle}>
      <Container maxWidth="lg">
        <Grid item xl={12}>
          <AppBreadcrumbs title="Gais" />
        </Grid>
        <Grid container rowSpacing={3} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <Grid item xs={12} sm={6} md={6} lg={4}>
            <ChartCard title="Нeт данных" />
          </Grid>
        </Grid>
      </Container>
    </Layout>
  );
}
export default GaisInfoCard;
