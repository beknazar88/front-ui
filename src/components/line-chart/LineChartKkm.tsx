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
import { GetKKMRegistrationByMonthFace } from "../../interfaces/dataCardInterface";

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
      text: "ККМ",
    },
  },
};

const LineChartKkm = () => {
  const [lineChart, setLineChart] = useState<GetKKMRegistrationByMonthFace>();

  useEffect(() => {
    async function lineChartEsf() {
      const res = await axios.get(
        "http://10.111.15.123:5085/api/KKM/KkmCountByMonth"
      );
      setLineChart(res.data);
    }

    lineChartEsf();
  }, []);

  const labels: String[] = [];
  lineChart?.map((o) =>
    labels.includes(o.kkmDate) ? null : labels.push(o.kkmDate.slice(0, 7))
  );
  const data = {
    labels: labels,
    datasets: [
      {
        label: "ККМ",
        data: lineChart?.map((obj) => obj.kkmCount),
        borderColor: "rgb(255, 99, 132)",
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
    ],
  };

  return (
    <div>
      <Line options={options} data={data} />
    </div>
  );
};

export default LineChartKkm;
