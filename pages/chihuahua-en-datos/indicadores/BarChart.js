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
import { useEffect } from "react";

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
        backgroundColor: ['#D12D6A', '#C62C6B', '#BC2B6B', '#B12A6C', '#A6296C', '#9C286D', '#91276E', '#86256E', '#7B246F', '#712370', '#662270'].reverse(),
        hoverBackgroundColor: ['#D12D6A', '#C62C6B', '#BC2B6B', '#B12A6C', '#A6296C', '#9C286D', '#91276E', '#86256E', '#7B246F', '#712370', '#662270'],
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
      <Box sx={{ textAlign: 'center', width: 'auto', height: 'auto' }}>
        <Bar
          data={state}
          options={options}
          width={'auto'}
          height={'165%'}
        />
        <Box sx={{ mt: 1 }}>
          <Typography variant="caption">
            Gráfica de barras representativa del valor en los últimos años disponibles
          </Typography>
        </Box>
      </Box>
    </>
  );
};

export default Graph;
