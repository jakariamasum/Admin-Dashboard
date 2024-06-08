import { FaHome } from "react-icons/fa";
import { FaAnglesRight } from "react-icons/fa6";
import Card from "../../components/Card/Card";
import SellerTable from "../../components/SellerTable/SellerTable";
import ProductList from "../../components/ProductList/ProductList";
import GoalOverview from "../../components/GoalOverview/GoalOverview";
import RecentActivity from "../../components/RecentActivity/RecentActivity";
import OrderStatistics from "../../components/OrderStatistics/OrderStatistics";

const Dashboard = () => {
  return (
    <div className="p-5">
      <div className="flex flex-col lg:flex-row justify-between">
        <h1 className="text-3xl font-bold mb-5">Ecommerce</h1>
        <span className="flex gap-1 items-center">
          <FaHome />
          Dashboard
          <FaAnglesRight /> Ecommerce
        </span>
      </div>

      <div className="grid gap-4 grid-cols-1 lg:grid-cols-4 mt-10">
        <div className="lg:col-span-3">
          <div className="grid gap-5 lg:grid-cols-3">
            <Card
              bgText="Profit"
              price="$8,55,462"
              percentage="21.57%"
              bgColor="#5D62F2"
              mainColor="#5D62F2"
            />
            <Card
              bgText="Profit"
              price="$8,55,462"
              percentage="21.57%"
              bgColor="#5D62F2"
              mainColor="#61AE41"
            />
            <Card
              bgText="Profit"
              price="$8,55,462"
              percentage="21.57%"
              bgColor="#5D62F2"
              mainColor="#61AE41"
            />
          </div>
          <SellerTable />
        </div>
        <ProductList />
      </div>
      <div className="grid gap-4 grid-cols-1 lg:grid-cols-3 mt-10">
        <GoalOverview />
        <RecentActivity />
        <OrderStatistics />
      </div>
    </div>
  );
};

export default Dashboard;
