import Chart from "react-apexcharts";

const TotalEarning = () => {
  const options = {
    chart: {
      type: "radialBar",
      height: 350,
    },
    plotOptions: {
      radialBar: {
        hollow: {
          size: "70%",
        },
        dataLabels: {
          name: {
            fontSize: "22px",
          },
          value: {
            fontSize: "16px",
          },
          total: {
            show: true,
            label: "Total Earnings",
            formatter: function () {
              return "70%";
            },
          },
        },
      },
    },
    labels: ["Total Earnings"],
    legend: {
      show: false,
    },
    fill: {
      colors: "#6065F2",
    },
  };

  const series = [70];

  return (
    <div className="p-4 bg-white rounded-lg shadow">
      <h2 className="text-xl font-bold mb-4">Total Earnings</h2>
      <Chart options={options} series={series} type="radialBar" />
    </div>
  );
};

export default TotalEarning;
