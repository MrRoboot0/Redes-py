import ApexCharts from "apexcharts";

const radialChartOptions = {
  chart: {
    height: 350,
    type: "radialBar",
  },
  series: [70],
  labels: ["Progress"],
};

const chart = new ApexCharts(
  document.getElementById("#radialchart"),
  radialChartOptions
);

chart.render();
