import Dashboard from "../../components/Dashboard/Dashboard";
import Navbar from "../../components/Navbar/Navbar";
import Sidebar from "../../components/Sidebar/Sidebar";

const Home = () => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1">
        <Navbar />
        <Dashboard />
      </div>
    </div>
  );
};

export default Home;
