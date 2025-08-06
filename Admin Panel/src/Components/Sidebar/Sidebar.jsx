import "./sidebar.scss";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import StoreIcon from "@mui/icons-material/Store";
import PaymentIcon from "@mui/icons-material/Payment";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import QueryStatsIcon from "@mui/icons-material/QueryStats";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import HealthAndSafetyIcon from "@mui/icons-material/HealthAndSafety";
import PsychologyIcon from "@mui/icons-material/Psychology";
import SettingsIcon from "@mui/icons-material/Settings";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";
import BedroomChildOutlinedIcon from '@mui/icons-material/BedroomChildOutlined';
import { Link } from "react-router";
import { useContext } from "react";
import { DarkModeContext } from "../../Context/darkModeContext.jsx";

const Sidebar = () => {
  const { dispatch } = useContext(DarkModeContext);

  return (
    <div className="sidebar">
      <div className="top">
        <Link to="/" style={{ textDecoration: "none" }}>
          <span className="logo">Umar Admin</span>
        </Link>
      </div>
      <hr />
      <div className="center">
        <ul>
          <p className="title">MAIN</p>
          <li>
            <span>
              <DashboardIcon className="icon" />
              Dashboard
            </span>
          </li>
          <p className="title">LISTS</p>
          <Link to="/users" style={{ textDecoration: "none" }}>
            <li>
              <span>
                <PersonOutlineOutlinedIcon className="icon" />
                Users
              </span>
            </li>
          </Link>
          <Link to="/hotels" style={{ textDecoration: "none" }}>
            <li>
              <span>
                <StoreIcon className="icon" />
                Hotels
              </span>
            </li>
          </Link>
          <Link to="/rooms" style={{ textDecoration: "none" }}>
            <li>
              <span>
                <BedroomChildOutlinedIcon className="icon" />
                Rooms
              </span>
            </li>
          </Link>
          <li>
            <span>
              <LocalShippingIcon className="icon" />
              Delivery
            </span>
          </li>
          <p className="title">USEFUL</p>
          <li>
            <span>
              <QueryStatsIcon className="icon" />
              Stats
            </span>
          </li>
          <li>
            <span>
              <NotificationsNoneIcon className="icon" />
              Notifications
            </span>
          </li>
          <p className="title">SERVICE</p>
          <li>
            <span>
              <HealthAndSafetyIcon className="icon" />
              System Health
            </span>
          </li>
          <li>
            <span>
              <PsychologyIcon className="icon" />
              Logs
            </span>
          </li>
          <li>
            <span>
              <SettingsIcon className="icon" />
              Settings
            </span>
          </li>
          <p className="title">USER</p>
          <li>
            <span>
              <AccountCircleOutlinedIcon className="icon" />
              Profile
            </span>
          </li>
          <li>
            <span>
              <LogoutOutlinedIcon className="icon" />
              Logout
            </span>
          </li>
        </ul>
      </div>
      <div className="bottom">
        <div
          className="colorOption"
          onClick={() => dispatch({ type: "LIGHT" })}
        ></div>
        <div
          className="colorOption"
          onClick={() => dispatch({ type: "DARK" })}
        ></div>
      </div>
    </div>
  );
};

export default Sidebar;
