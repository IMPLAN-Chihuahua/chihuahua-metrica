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
import { Typography } from "@mui/material";
import { Box } from "@mui/system";

ChartJS.register(
  CategoryScale,
  LinearScale,
  Title,
  Tooltip,
  Legend,
  BarElement
);

const Graph = ({ data }) => {

  const state = {
    labels: data.reverse().map((historico) => historico.anio),
    datasets: [
      {
        label: "Valor registrado",
        backgroundColor: `${theme.palette.primary.subtleMain}`,
        hoverBackgroundColor: `${theme.palette.primary.darkerMain}`,
        borderColor: `${theme.palette.primary.main}`,
        borderWidth: 1,
        data: data.reverse().map((historico) => historico.valor),
        barPercentage: 0.6,
        borderRadius: 2,
      },
    ],
  };

  const options = {
    responsive: true,
  };

  return (
    <>
      <Box sx={{textAlign: 'center', width:'auto', height: 'auto'}}>
        <Bar
          data={state}
          options={options}
          width={'auto'}
          height={'165%'}
        />
        <Typography variant="p" sx={{fontSize: '14px', fontWeight: 'bold', color: theme.palette.primary.subtleMain, pt: 10}}>
          Gráfica de barras representativa del valor en los últimos años disponibles
        </Typography>
      </Box>
    </>
  );
};

export default Graph;
