import { Line } from "react-chartjs-2";
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
import { Box } from "@mui/system";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const Graph = ({ data }) => {
  const state = {
    labels: data.map((historico) => historico.anio),
    datasets: [
      {
        label: "Valores registrados",
        fill: false,
        lineTension: 0.5,
        backgroundColor: "rgba(75,192,192,0.4)",
        borderColor: "rgba(0,0,0,1)",
        borderWidth: 3,
        data: data.map((historico) => historico.valor),
      },
    ],
  };

  console.log(state.datasets);
  return (
    <>
      <Box sx={{ width: "35%", height: "20%" }}>
        <Line
          data={state}
          width={100}
          height={100}
          options={{
            title: {
              display: true,
              text: "Datos históricos de indicador X",
              fontSize: 20,
            },
            legend: {
              display: false,
            },
            maintainAspectRatio: false,
          }}
        />
      </Box>
    </>
  );
};

export default Graph;
