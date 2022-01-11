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
import { GetESFRegistrationByMonthFace } from "../../interfaces/dataCardInterface";

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
      text: "ЭСФ",
    },
  },
};

const LineChart = () => {
  const [lineChart, setLineChart] = useState<GetESFRegistrationByMonthFace>();

  useEffect(() => {
    async function lineChartEsf() {
      const res = await axios.get(
        "http://10.111.15.123:5085/api/ESF/GetESFRegistrationByMonth"
      );
      setLineChart(res.data);
    }

    lineChartEsf();
  }, []);

  const labels: String[] = [];
  lineChart?.map((o) =>
    labels.includes(o.date) ? null : labels.push(o.date.slice(0, 7))
  );
  const data = {
    labels: labels,
    datasets: [
      {
        label: "Количество новых зарегистрированных НП",
        data: lineChart?.map((obj) => obj.count),
        fill: true,
        borderColor: 'rgb(53, 162, 235)',
        backgroundColor: 'rgba(53, 162, 235, 0.5)',
      },
    ],
  };

  return (
    <div>
      <Line options={options} data={data} />
    </div>
  );
};

export default LineChart;
