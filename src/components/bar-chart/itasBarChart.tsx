import React, { useEffect, useState } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import axios from "axios";
import {
  GetDeclarationTinCountInterface,
  GetRevenuesByRayonAggregateFace,
} from "../../interfaces/dataCardInterface";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  indexAxis: "y" as const,
  elements: {
    bar: {
      borderWidth: 2,
    },
  },
  responsive: true,
  interaction: {
    mode: "index" as const,
    intersect: false,
  },
  plugins: {
    legend: {
      position: "right" as const,
    },
    title: {
      display: true,
    },
  },
};

export const ItasBarChart = () => {
  const [barChart, setBarChart] = useState<GetRevenuesByRayonAggregateFace>();

  useEffect(() => {
    async function barChartEdeclaration() {
      const res = await axios.get(
        "http://10.111.15.123:5085/api/ITAS/RevenuesByRayonAggregate"
      );
      setBarChart(res.data);
    }

    barChartEdeclaration();
  }, []);

  const labels: string[] = [];
  barChart?.map((o) =>
    labels.includes(o.rayonName) ? null : labels.push(o.rayonName)
  );
  const data = {
    labels: labels,
    datasets: [
      {
        label: "Факт",
        data: barChart?.map((obj) => obj.totalAmount),
        borderColor: "rgb(255, 99, 132)",
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
      {
        label: "План",
        data: barChart?.map((obj) => obj.planTotalAmount),
        borderColor: "rgb(53, 162, 235)",
        backgroundColor: "rgba(53, 162, 235, 0.5)",
      },
    ],
  };

  return (
    <div>
      <Bar options={options} data={data} />
    </div>
  );
};
