import Appointments from "../../components/Appointment/Appointment";
import EarningChart from "../../components/EarningChart/EarningChart";
import Investment from "../../components/Investment/Investment";
import Revenue from "../../components/Revenue/Revenue";
import NewsUpdate from "../../components/NewsUpdate/NewsUpdate";
import Welcome from "../../components/Welcome/Welcome";
import UserCountry from "../../components/UserCountry/UserCountry";
import UserByDevice from "../../components/UserByDevice/UserByDevice";

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Welcome />
        <Appointments />
        <UserByDevice />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
        <EarningChart />
        <Revenue />
        <Investment />
      </div>
      <div className="mt-4 grid gap-2 md:grid-cols-2">
        <UserCountry />
        <NewsUpdate />
      </div>
    </div>
  );
};

export default Dashboard;
