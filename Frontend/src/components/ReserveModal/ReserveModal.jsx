import "./reserveModal.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";
import useFetch from "../../hooks/useFetch";
import { useState, useEffect, useContext } from "react";
import { SearchContext } from "../../Context/SearchContext";
import axios from "axios";
import { useNavigate } from "react-router";
// const ReserveModal = ({ setOpen, hotelId }) => {
//   const { data, loading, error } = useFetch(`/api/hotels/room/${hotelId}`);
//   const [selectedRooms, setSelectedRooms] = useState([]);

//   const selectHandle = (e) => {
//     const checked = e.target.checked;
//     const value = e.target.value;
//     setSelectedRooms(
//       checked
//         ? [...selectedRooms, value]
//         : selectedRooms.filter((item) => item !== value)
//     );
//   };

//   console.log(selectedRooms);

//   return (
//     <div className="reserveModal">
//       <div className="reserveModalContainer">
//         <FontAwesomeIcon
//           icon={faCircleXmark}
//           className="rClose"
//           onClick={() => setOpen(false)}
//         />
//         <span>Select your rooms:</span>

//         {/* {data.map((item) => (
//           <div className="rItem">
//             <div className="rItemInfo">
//               <div className="rTitle">{item.title}</div>
//               <div className="rDesc">{item.desc}</div>
//               <div className="rMax">
//                 Max people: <b>{item.maxPeople}</b>
//               </div>
//               <div className="rPrice">{item.price}</div>
//             </div>
//             {item.roomNumbers.map((roomNumber) => (
//               <div className="room">
//                 <label>{roomNumber.number}</label>
//                 <input
//                   type="checkbox"
//                   value={roomNumber._id}
//                   onChange={selectHandle}
//                 />
//               </div>
//             ))}
//           </div>
//         ))} */}

//         {loading ? (
//           <p>Loading rooms...</p>
//         ) : error ? (
//           <p>Something went wrong.</p>
//         ) : (
//           data?.map((item) => {
//             console.log("Room Numbers:", item.roomNumbers);
//             return (
//               <div className="rItem" key={item._id}>
//                 <div className="rItemInfo">
//                   <div className="rTitle">{item.title}</div>
//                   <div className="rDesc">{item.desc}</div>
//                   <div className="rMax">
//                     Max people: <b>{item.maxPeople}</b>
//                   </div>
//                   <div className="rPrice">{item.price}</div>
//                 </div>
//                 {item.roomNumbers?.map((roomNumber) => (
//                   <div className="room" key={roomNumber._id}>
//                     <label>{roomNumber.number}</label>
//                     <input
//                       type="checkbox"
//                       value={roomNumber._id}
//                       onChange={selectHandle}
//                     />
//                   </div>
//                 ))}
//               </div>
//             );
//           })
//         )}
//       </div>
//     </div>
//   );
// };

// export default ReserveModal;





const ReserveModal = ({ setOpen, hotelId }) => {
  const { data, loading, error } = useFetch(`/api/hotels/room/${hotelId}`);
  const [selectedRooms, setSelectedRooms] = useState([]);
  const {dates} = useContext(SearchContext)



const getDatesInRange = (startDate, endDate) => {
    const start = new Date(startDate);
    const end = new Date(endDate);

    const date = new Date(start.getTime());

    const dates = [];

    while (date <= end) {
      dates.push(new Date(date).getTime());
      date.setDate(date.getDate() + 1);
    }

    return dates;
  };

  const alldates = getDatesInRange(dates[0].startDate, dates[0].endDate);

const isAvailable = (roomNumber) => {
    const isFound = roomNumber.unavailableDates.some((date) =>
      alldates.includes(new Date(date).getTime())
    );

    return !isFound;
  };


  const selectHandle = (e) => {
    const checked = e.target.checked;
    const value = e.target.value;

   setSelectedRooms(
      checked
        ? [...selectedRooms, value]
        : selectedRooms.filter((item) => item !== value)
    );

  };

// console.log("Selected Rooms:", selectedRooms);

// const handleClick = async () => {
//     try {
//       await Promise.all(
//         selectedRooms.map((roomId) => {
//           const res = axios.put(`/api/rooms/availability/${roomId}`, {
//             dates: alldates,
//           });
//           return res.data;
//         })
//       );
//       setOpen(false);
//       navigate("/");
//     } catch (err) {}
//   };

  const navigate = useNavigate();


const handleClick = async () => {
  try {
    await Promise.all(
      selectedRooms.map((roomId) =>
        axios.put(`/api/rooms/availability/${roomId}`, {
          dates: alldates,
        })
      )
    );
    setOpen(false);
    navigate("/");
  } catch (err) {
    console.error("Room booking failed:", err);
  }
};




  return (
    <div className="reserveModal">
      <div className="reserveModalContainer">
        <FontAwesomeIcon
          icon={faCircleXmark}
          className="rClose"
          onClick={() => setOpen(false)}
        />
        <span>Select your rooms:</span>

        {loading ? (
          <p>Loading rooms...</p>
        ) : error ? (
          <p>Something went wrong.</p>
        ) : (
          data?.map((item) => (
            <div className="rItem" key={item._id}>
              <div className="rItemInfo">
                <div className="rTitle">{item.title}</div>
                <div className="rDesc">{item.desc}</div>
                <div className="rMax">
                  Max people: <b>{item.maxPeople}</b>
                </div>
                <div className="rPrice">Price: ${item.price}</div>
              </div>

              {item.roomNumbers?.map((roomNumber) => (
                <div className="room" key={roomNumber._id}>
                  <p>Room Number:</p>
                  <label>{roomNumber.number}</label>
                  <input
                    type="checkbox"
                    value={roomNumber._id}
                    onChange={selectHandle}
                    disabled={!isAvailable(roomNumber)}
                  />
                </div>
              ))}

            </div>
          ))
        )}
        <button className="rButton" onClick={handleClick}>Reserve Now!</button>
      </div>
    </div>
  );
};

export default ReserveModal;