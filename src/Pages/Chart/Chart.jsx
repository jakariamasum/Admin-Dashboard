import { FaHome } from "react-icons/fa";
import ChartCard from "../../components/ChartCard/ChartCard";
import { FaAnglesRight } from "react-icons/fa6";
import MarketingExpenses from "../../components/MarketingExpenses/MarketingExpenses";
import TotalEarning from "../../components/TotalEarning/TotalEarnig";

const Chart = () => {
  const categories = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  const saleData = [30, 40, 28, 40, 33, 45, 32, 42, 30, 51, 35, 50];

  const projectsData = [
    500, 800, 600, 1000, 900, 600, 1000, 950, 750, 900, 800, 600,
  ];

  const productsData = [
    100, 200, 400, 100, 600, 200, 300, 400, 200, 400, 300, 600,
  ];

  return (
    <div className="p-5">
      <div className="flex flex-col lg:flex-row justify-between">
        <h1 className="text-3xl font-bold mb-5">Chart</h1>
        <span className="flex gap-1 items-center">
          <FaHome />
          <FaAnglesRight />
          Widgets
          <FaAnglesRight /> Chart
        </span>
      </div>
      <div className="grid lg:grid-cols-3 gap-5">
        <ChartCard
          title="Sales"
          mainColor="#666AF2"
          startColor="#9FA2F7"
          endcolor="#E1E2FD"
          percentage={90}
          seriesData={saleData}
          categories={categories}
        />
        <ChartCard
          title="Projects"
          mainColor="#EEB82F"
          startColor="#FDF6E2"
          endcolor="#F6D88D"
          percentage={30}
          seriesData={projectsData}
          categories={categories}
        />
        <ChartCard
          title="Products"
          mainColor="#61AE41"
          startColor="#E2F0DD"
          endcolor="#9DCC89"
          percentage={68}
          seriesData={productsData}
          categories={categories}
        />
      </div>
      <div
        className="grid lg:grid-cols-3
       gap-4 mt-10"
      >
        <div className="lg:col-span-2">
          <MarketingExpenses />
        </div>
        <TotalEarning />
      </div>
    </div>
  );
};

export default Chart;
