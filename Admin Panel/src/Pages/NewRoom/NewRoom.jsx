import "./newRoom.scss";
import Sidebar from "../../Components/Sidebar/Sidebar";
import Navbar from "../../Components/Navbar/Navbar";
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";
import { useState } from "react";
import { roomInputs } from "../../formSource.js";
import useFetch from "../../Hooks/useFetch";
import axios from "axios";

const NewRoom = () => {
  const [info, setInfo] = useState({});
  const [hotelId, setHotelId] = useState(undefined);
  const [rooms, setRooms] = useState([]);

  const { data, loading, error } = useFetch("/api/hotels");

  const handleChange = (e) => {
    setInfo((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  // const handleClick = async (e) => {
  //   e.preventDefault();
  //   const roomNumbers = rooms.split(",").map((room) => ({ number: room }));
  //   // console.log(roomNumbers);
  //   try {
  //     await axios.post(`/api/rooms/${hotelId}`, { info, roomNumbers });
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };


  const handleClick = async (e) => {
  e.preventDefault();

  // convert "101,102" => ["101", "102"] => [{ number: "101" }, { number: "102" }]
  const roomNumbers = rooms
    .split(",")
    .map((room) => ({ number: room.trim() }));

  try {
    await axios.post(`/api/rooms/${hotelId}`, {
      ...info,
      roomNumbers,
    });
  } catch (error) {
    console.log("Error creating room:", error);
  }
};


  return (
    <div className="newRoom">
      <Sidebar />
      <div className="newContainer">
        <Navbar />
        <div className="top">
          <h1>Add New Rooms</h1>
        </div>
        <div className="bottom">
          
          <div className="right">
            <form>
             
              {roomInputs.map((input) => (
                <div className="formInput" key={input.id}>
                  <label>{input.label}</label>
                  <input
                    id={input.id}
                    type={input.type}
                    placeholder={input.placeholder}
                    onChange={handleChange}
                  />
                </div>
              ))}
              <div className="formInput">
                <label>Rooms</label>
                <textarea
                  onChange={(e) => setRooms(e.target.value)}
                  placeholder="Give comma between room numbers..."
                ></textarea>
              </div>
              <div className="formInput">
                <label>Choose a Hotel</label>
                <select
                  id="hotelId"
                  onChange={(e) => setHotelId(e.target.value)}
                >
                  {loading
                    ? "loading"
                    : data &&
                      data.map((hotel) => (
                        <option value={hotel._id} key={hotel._id}>
                          {hotel.name}
                        </option>
                      ))}
                </select>
              </div>
              <button onClick={handleClick}>Send</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewRoom;
