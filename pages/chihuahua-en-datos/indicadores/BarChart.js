import { Bar, Line } from "react-chartjs-2";
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
import { Box, Typography } from "@mui/material";

ChartJS.register(
  CategoryScale,
  LinearScale,
  Title,
  Tooltip,
  Legend,
  BarElement
);

const Graph = ({ data, lastValue, lastYear }) => {
  const sortedData = data.sort((a, b) => a.anio - b.anio);
  const state = {
    labels: sortedData.map((historico) => historico.anio),
    datasets: [
      {
        label: "Valor registrado",
        backgroundColor: 'rgba(8, 32, 62, 1)',
        hoverBackgroundColor: 'rgba(85, 124, 147, 1)',
        borderColor: `${theme.palette.primary.main}`,
        borderWidth: 1,
        data: sortedData.map((historico) => historico.valor),
        barPercentage: 0.8,
        borderRadius: 5,
      },
    ],
  };

  state.labels.push(lastYear);
  state.datasets[0].data.push(lastValue);

  const options = {
    responsive: true,
  };

  return (
    <>
      <Bar
        data={state}
        options={options}
      />
      <Typography variant="caption" mt={1}>
        Gráfica de barras representativa del valor en los últimos años disponibles
      </Typography>
    </>
  );
};

export default Graph;
