import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  Title,
  Tooltip,
  Legend,
  BarElement,
} from "chart.js";
import theme from "styles/theme";
import { Typography } from "@mui/material";

ChartJS.register(
  CategoryScale,
  LinearScale,
  Title,
  Tooltip,
  Legend,
  BarElement
);

const Graph = ({ data, lastValue, lastYear }) => {
  const sortedData = [...data].sort((a, b) => a.anio - b.anio);

  const hasLastYear = sortedData.some((item) => item.anio === lastYear);

  const labels = sortedData.map((historico) => historico.anio);
  const values = sortedData.map((historico) => historico.valor);

  if (!hasLastYear) {
    labels.push(lastYear);
    values.push(lastValue);
  }

  const state = {
    labels: labels,
    datasets: [
      {
        label: "Valor registrado",
        backgroundColor: 'rgba(8, 32, 62, 1)',
        hoverBackgroundColor: 'rgba(85, 124, 147, 1)',
        borderColor: `${theme.palette.primary.main}`,
        borderWidth: 1,
        data: values,
        barPercentage: 0.8,
        borderRadius: 5,
        maxBarThickness: 50, // <-- Evita que las barras se hagan gigantes en monitores anchos
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false, // <-- Ocultamos el cuadrito negro superior
      },
    },
    scales: {
      x: {
        grid: {
          display: false, // <-- Quitamos las líneas verticales del fondo
        },
      },
      y: {
        beginAtZero: true,
        border: {
          display: false, // <-- Quitamos la línea negra sólida del eje Y
        },
        grid: {
          color: 'rgba(0, 0, 0, 0.05)', // <-- Hacemos las horizontales muy tenues
        },
      }
    }
  };

  return (
    <>
      <Bar data={state} options={options} />
      <Typography
        variant="caption"
        mt={1}
        color="text.secondary"
        fontStyle="italic"
        display="block"
      >
        Gráfica de barras representativa del valor en los últimos años disponibles
      </Typography>
    </>
  );
};

export default Graph;