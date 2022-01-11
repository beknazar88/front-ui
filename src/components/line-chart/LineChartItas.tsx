import React, { useEffect, useState } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import axios from "axios";
import {
  GetItasTinsByYearInterface,
  GetKKMRegistrationByMonthFace,
} from "../../interfaces/dataCardInterface";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  interaction: {
    mode: "index" as const,
    intersect: false,
  },
  plugins: {
    title: {
      display: true,
    },
  },
};

const LineChartItas = () => {
  const [lineChart, setLineChart] = useState<GetItasTinsByYearInterface>();
  const [lineChart1, setLineChart1] = useState<GetItasTinsByYearInterface>();

  useEffect(() => {
    async function lineChartEsf() {
      const res = await axios.get(
        "http://10.111.15.123:5085/api/ITAS/TinsByYear"
      );
      setLineChart(res.data[0].tinsByYear);
      setLineChart1(res.data[1].tinsByYear);
    }

    lineChartEsf();
  }, []);

  const slice = lineChart?.slice(15);
  const slice1 = lineChart1?.slice(19);
  const labels: Number[] = [];
  lineChart?.map((o) => (labels.includes(o.year) ? null : labels.push(o.year)));
  const labels1: Number[] = [];
  lineChart1?.map((o) =>
    labels1.includes(o.year) ? null : labels1.push(o.year)
  );
  const data = {
    labels: labels.slice(15),
    labels1: labels1.slice(19),
    datasets: [
      {
        label: "Юридическое лицо",
        data: slice?.map((obj) => obj.tinCount),
        borderColor: "rgb(255, 99, 132)",
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
      {
        label: "Физическое лицо",
        data: slice1?.map((obj) => obj.tinCount),
        borderColor: "rgb(53, 162, 235)",
        backgroundColor: "rgba(53, 162, 235, 0.5)",
      },
    ],
  };

  return (
    <div>
      <Line options={options} data={data} />
    </div>
  );
};

export default LineChartItas;
