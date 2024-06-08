import { FaDollarSign, FaHome } from "react-icons/fa";
import { FaAnglesRight, FaBasketShopping } from "react-icons/fa6";
import { FaRegUser } from "react-icons/fa";
import SellerTable from "../../components/SellerTable/SellerTable";
import ProductList from "../../components/ProductList/ProductList";
import GoalOverview from "../../components/GoalOverview/GoalOverview";
import RecentActivity from "../../components/RecentActivity/RecentActivity";
import OrderStatistics from "../../components/OrderStatistics/OrderStatistics";
import { FiArrowUpRight } from "react-icons/fi";

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
            <div className="bg-white relative p-4 rounded-[20px] flex flex-col gap-3 shadow">
              <h3
                className={`text-lg font-semibold w-fit text-[#7579F4] hover:bg-[#EEEFFE]`}
              >
                Our tot<span className={`bg-[#EEEFFE]`}>al Profit</span>
              </h3>
              <p className="text-2xl font-bold">$8,55,462</p>
              <p className=" flex items-center gap-1">
                <FiArrowUpRight
                  fontSize={20}
                  fontWeight={800}
                  className={`text-[#7579F4] bg-[#EEEFFE] p-1 rounded-full`}
                />{" "}
                <span className={`text-[#7579F4] font-bold`}>21.57%</span> More
                Than Last Month
              </p>
              <FaDollarSign
                fill="white"
                size={40}
                className={`bg-[#7579F4] rounded-full p-3 right-1 bottom-2 absolute`}
              />
            </div>
            <div className="bg-white relative p-4 rounded-[20px] flex flex-col gap-3 shadow">
              <h3
                className={`text-lg font-semibold w-fit text-[#4EA9D5] hover:bg-[#EDF6FB]`}
              >
                Our tot<span className={`bg-[#EDF6FB]`}>al Visitor</span>
              </h3>
              <p className="text-2xl font-bold">813K</p>
              <p className=" flex items-center gap-1">
                <FiArrowUpRight
                  fontSize={20}
                  fontWeight={800}
                  className={`text-[#4EA9D6] bg-[#EDF6FB] p-1 rounded-full`}
                />{" "}
                <span className={`text-[#4EA9D6] font-bold`}>21.57%</span> More
                Than Last Month
              </p>
              <FaRegUser
                fill="white"
                size={40}
                className={`bg-[#4EA9D5] rounded-full p-3 right-1 bottom-2 absolute`}
              />
            </div>
            <div className="bg-white relative p-4 rounded-[20px] flex flex-col gap-3 shadow">
              <h3
                className={`text-lg font-semibold w-fit text-[#61AE41] hover:bg-[#EFF7EC]`}
              >
                Our tot<span className={`bg-[#EFF7EC]`}>al Sold</span>
              </h3>
              <p className="text-2xl font-bold">2,45,462</p>
              <p className=" flex items-center gap-1">
                <FiArrowUpRight
                  fontSize={20}
                  fontWeight={800}
                  className={`text-[#61AE41] bg-[#EFF7EC] p-1 rounded-full`}
                />{" "}
                <span className={`text-[#61AE41] font-bold`}>21.57%</span> Look
                Pretty Good
              </p>
              <FaBasketShopping
                fill="white"
                size={40}
                className={`bg-[#61AE41] rounded-full p-3 right-1 bottom-2 absolute`}
              />
            </div>
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
