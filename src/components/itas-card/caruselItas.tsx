import * as React from "react";
import Box from "@mui/material/Box";
import { ItasCard } from "./itasCard";
import { GetItasDtoInterface } from "../../interfaces/dataCardInterface";
import axios from "axios";
import { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { makeStyles } from "@mui/styles";
import { Grid } from "@mui/material";

export const CaruselItas = () => {
  const styles = useStyles();
  const [itas, setItas] = useState<GetItasDtoInterface>();

  useEffect(() => {
    async function itasData() {
      const register = await axios.get(
        "http://10.111.15.123:5085/api/ITAS/IncomeInfoHeadOffice"
      );
      setItas(register.data);
    }
    itasData();
  }, []);

  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    speed: 500,
    slidesToShow: 3,
  };

  return (
    <Box sx={{  p: 6, flexGrow: 1}}>
      <Grid container direction="row" item xs={12} lg={12} sm={12} md={12}>
        <Slider {...settings} className={styles.boxSlider}>
          {itas?.map((step) => (
            <div key={step.factVal}>
              <ItasCard
                title={step.ugnsName}
                factVal={step.factVal}
                count={step.forecastVal}
              />
            </div>
          ))}
        </Slider>
      </Grid>
    </Box>
  );
};

const useStyles = makeStyles({
  boxSlider: {
    maxWidth: "100%",
  },
});

export default CaruselItas;
