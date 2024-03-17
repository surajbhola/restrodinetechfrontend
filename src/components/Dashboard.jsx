import "./dashboard.scss";
import TopNavBar from "./TopNavBar.jsx";
import topNavBar from "./TopNavBar.jsx";
import { Outlet } from "react-router-dom";
import DashboardCustomizeOutlinedIcon from '@mui/icons-material/DashboardCustomizeOutlined';
import { useNavigate } from "react-router-dom";
import MenuBookTwoToneIcon from '@mui/icons-material/MenuBookTwoTone';
import FastfoodIcon from '@mui/icons-material/Fastfood';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
const Dashboard = (Children) => {
  const navigate = useNavigate();
  const menuButtonHandler = (e, str) => {
    console.log(str);
    e.preventDefault();
    navigate(str);
  };
  return (
    <div className="dashboard">
      <TopNavBar></TopNavBar>
      <div className="dashboardPage">
        <div className="menu">
          <div className="menuOptionOuter">
            <button onClick={(e) => menuButtonHandler(e, "/dashboard")}>
              <div className="menuOption">
                <div className="selectedOption"></div>
                <DashboardCustomizeOutlinedIcon style={{color:'#9e63ad'}} className="menuIcons"></DashboardCustomizeOutlinedIcon>
                <h3>Dashboard</h3>
              </div>
            </button>
          </div>
          <div className="menuOptionOuter">
            <button onClick={(e) => menuButtonHandler(e, "/dashboard/addmenu")}>
              <div className="menuOption">
                <div className="selectedOption"></div>
                <MenuBookTwoToneIcon style={{color:'#9e63ad'}} className="menuIcons"></MenuBookTwoToneIcon>
        
                <h3>Add Menu</h3>
              </div>
            </button>
          </div>
          <div className="menuOptionOuter">
            <button>
              <div className="menuOption">
                <div className="selectedOption"></div>
                <FastfoodIcon style={{color:'#9e63ad'}} className="menuIcons"></FastfoodIcon>
                <h3>Orders</h3>
              </div>
            </button>
          </div>
          <div className="menuOptionOuter">
            <button>
              <div className="menuOption">
                <div className="selectedOption"></div>
                <SupportAgentIcon style={{color:'#9e63ad'}}  className="menuIcons"></SupportAgentIcon>
                <h3>Service Request</h3>
              </div>
            </button>
          </div>
        </div>
        <div className="page">
          <Outlet></Outlet>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
