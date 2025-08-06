import "./navbar.scss";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import LanguageOutlinedIcon from "@mui/icons-material/LanguageOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import FullscreenExitOutlinedIcon from "@mui/icons-material/FullscreenExitOutlined";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import ListOutlinedIcon from "@mui/icons-material/ListOutlined";
import { useContext } from "react";
import { DarkModeContext } from "../../Context/darkModeContext.jsx";

const Navbar = () => {

  const {dispatch} = useContext(DarkModeContext);

  
  return (
    <div className="navbar">
      <div className="wrapper">
        <div className="search">
          <input type="text" placeholder="Search..." />
          <SearchOutlinedIcon />
        </div>
        <div className="items">
          <div className="item">
            <LanguageOutlinedIcon />
            English
          </div>
          <div className="item">
            <DarkModeOutlinedIcon onClick={()=> dispatch({type: "TOGGLE"})} style={{cursor: "pointer"}} />
          </div>
          <div className="item">
            <FullscreenExitOutlinedIcon />
          </div>
          <div className="item">
            <NotificationsNoneIcon />
            <div className="counter">1</div>
          </div>
          <div className="item">
            <ChatBubbleOutlineOutlinedIcon />
            <div className="counter">2</div>
          </div>
          <div className="item">
            <ListOutlinedIcon />
          </div>
          <div className="item">
            <img src="https://media.istockphoto.com/id/2172589911/vector/minimalist-human-avatar-versatile-icon-for-online-projects.jpg?s=612x612&w=0&k=20&c=16t4JmxDfGZVOCbUqK9VQ9Nd8YOTnWoLU2ozzbidQ3M=" alt="Img" className="avatar" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
