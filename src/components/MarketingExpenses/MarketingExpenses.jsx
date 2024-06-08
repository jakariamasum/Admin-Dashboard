import Chart from "react-apexcharts";

const MarketingExpenses = () => {
  const marketingExpenses = [
    {
      month: "Jan",
      expense1: 1000,
      expense2: 1500,
      expense3: 1200,
    },
    {
      month: "Feb",
      expense1: 1200,
      expense2: 1300,
      expense3: 1100,
    },
    {
      month: "Mar",
      expense1: 1300,
      expense2: 1400,
      expense3: 1250,
    },
    {
      month: "Apr",
      expense1: 1100,
      expense2: 1200,
      expense3: 1000,
    },
    {
      month: "May",
      expense1: 900,
      expense2: 1100,
      expense3: 950,
    },
    {
      month: "Jun",
      expense1: 1000,
      expense2: 1300,
      expense3: 1200,
    },
    {
      month: "Jul",
      expense1: 1200,
      expense2: 1400,
      expense3: 1300,
    },
    {
      month: "Aug",
      expense1: 1300,
      expense2: 1500,
      expense3: 1400,
    },
    {
      month: "Sep",
      expense1: 1100,
      expense2: 1200,
      expense3: 1050,
    },
    {
      month: "Oct",
      expense1: 1000,
      expense2: 1100,
      expense3: 1000,
    },
    {
      month: "Nov",
      expense1: 950,
      expense2: 1000,
      expense3: 900,
    },
    {
      month: "Dec",
      expense1: 1200,
      expense2: 1300,
      expense3: 1200,
    },
  ];

  const categories = marketingExpenses.map((expense) => expense.month);
  const expense1Data = marketingExpenses.map((expense) => expense.expense1);
  const expense2Data = marketingExpenses.map((expense) => expense.expense2);
  const expense3Data = marketingExpenses.map((expense) => expense.expense3);

  const options = {
    chart: {
      type: "bar",
      height: 350,
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: "30%",
        endingShape: "rounded",
      },
    },
    dataLabels: {
      enabled: false,
    },
    xaxis: {
      categories: categories,
    },
    yaxis: {
      title: {
        text: "Expenses ($)",
      },
    },
    fill: {
      opacity: 1,
      colors: ["#6469F2", "#F2C75C", "#58BD2E"],
    },
    tooltip: {
      y: {
        formatter: function (val) {
          return "$" + val;
        },
      },
    },
    legend: {
      position: "top",
    },
  };

  const series = [
    {
      name: "Net profit",
      data: expense1Data,
      color: "#6469F2",
    },
    {
      name: "Revenue",
      data: expense2Data,
      color: "#F2C75C",
    },
    {
      name: "Free Clash Flow",
      data: expense3Data,
      color: "#58BD2E",
    },
  ];

  return (
    <div className="p-4 bg-white rounded-lg shadow">
      <h2 className="text-xl font-bold mb-4">Marketing Expenses</h2>
      <Chart options={options} series={series} type="bar" height={350} />
    </div>
  );
};

export default MarketingExpenses;
