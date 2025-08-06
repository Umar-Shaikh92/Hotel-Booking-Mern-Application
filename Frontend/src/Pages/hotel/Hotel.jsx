import "./hotel.css";
import { Navbar } from "../../components/Navbar/Navbar";
import { Header } from "../../components/Header/Header";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleXmark,
  faChevronRight,
  faChevronLeft,
  faLocation,
} from "@fortawesome/free-solid-svg-icons";
import { MailList } from "../../components/MailList/MailList";
import { Footer } from "../../components/Footer/Footer";
import { useContext, useState } from "react";
import useFetch from "../../hooks/useFetch";
import { useLocation, useNavigate } from "react-router";
import { SearchContext } from "../../Context/SearchContext";
import { AuthContext } from "../../Context/AuthContext";
import ReserveModal from "../../components/ReserveModal/ReserveModal";

export const Hotel = () => {
  const [slideNumber, setSlideNumber] = useState(0);
  const [openSlider, setOpenSlider] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const location = useLocation();
  const id = location.pathname.split("/")[2];
  const { data, loading, error } = useFetch(`/api/hotels/find/${id}`);



  // const photos = [
  //   {
  //     src: "https://media.istockphoto.com/id/2160552278/photo/elevated-with-wall-texture-mirror-shoe-cabinet-in-modern-entry-space.jpg?s=612x612&w=0&k=20&c=7uY7Hd28lXnRlWt_HZ5SSfyQeTfu4FSYvp3ZUFDBjCU=",
  //   },
  //   {
  //     src: "https://media.istockphoto.com/id/1266155634/photo/luxurious-and-elegant-bedroom-interiors.jpg?s=612x612&w=0&k=20&c=5O3Lz-WyJv7GYh09rvf66nif1dUsibl01wrt9KrZaSs=",
  //   },
  //   {
  //     src: "https://media.istockphoto.com/id/1437762451/photo/modern-bathroom-interior-with-water-heater-shower-toilet-and-mirror.jpg?s=612x612&w=0&k=20&c=HG_RA6werV-aa89M5euDCc3kbpoer0xWvBKqsONxw6g=",
  //   },
  //   {
  //     src: "https://media.istockphoto.com/id/1360531640/photo/hospital-patient-reception-desk.jpg?s=612x612&w=0&k=20&c=SXrZ5JoWyBCYj7M9L8rpG7tg8Mf5WR0I_vvAa2hLjhY=",
  //   },
  //   {
  //     src: "https://media.istockphoto.com/id/2191829498/photo/wabi-sabi-style-living-room-with-sofa-wicker-chairs-coffee-table-potted-plant-and-parquet.jpg?s=612x612&w=0&k=20&c=eB-HpdGVrS3RvMQpKroW2uKbQshISpkP6eklkl5tOIg=",
  //   },
  //   {
  //     src: "https://media.istockphoto.com/id/1313916715/photo/white-and-light-wood-modern-scandinavian-kitchen-with-large-dining-table-and-chairs-large.jpg?s=612x612&w=0&k=20&c=PF4J72C72YuZv7GFrPBYQz8KZPME-zh7vGEjOHXtjHY=",
  //   },
  // ];

  const { dates, options } = useContext(SearchContext);

  const MILLISECONDS_PER_DAY = 1000 * 60 * 60 * 24;
  function dayDifference(date1, date2) {
    const timeDiff = Math.abs(date2.getTime() - date1.getTime());
    const diffDays = Math.ceil(timeDiff / MILLISECONDS_PER_DAY);
    return diffDays;
  }

  // const days = dayDifference(dates[0].endDate, dates[0].startDate);
  const days =
    dates && dates[0]?.startDate && dates[0]?.endDate
      ? dayDifference(dates[0].endDate, dates[0].startDate)
      : 0;

  const handleOpen = (i) => {
    setSlideNumber(i);
    setOpenSlider(true);
  };

  const navigate = useNavigate();
  
  const { user } = useContext(AuthContext);
  const bookHandle = () => {
    if (user) {
      setOpenModal(true);
    } else {
      navigate("/login");
    }
  };

  const moveSliderHandle = (direction) => {
    let newSliderNumber;

    if (direction === "l") {
      newSliderNumber = slideNumber === 0 ? 5 : slideNumber - 1;
    } else {
      newSliderNumber = slideNumber === 5 ? 0 : slideNumber + 1;
    }

    setSlideNumber(newSliderNumber);
  };

  return (
    <div>
      <Navbar />
      <Header type="list" />
      {loading ? (
        "Loading..."
      ) : (
        <div className="hotelContainer">
          {openSlider && (
            <div className="slider">
              <FontAwesomeIcon
                icon={faCircleXmark}
                className="close"
                onClick={() => setOpenSlider(false)}
              />
              <FontAwesomeIcon
                icon={faChevronLeft}
                className="arrow"
                onClick={() => moveSliderHandle("l")}
              />
              <div className="sliderWrapper">
                <img
                  src={data.photos[slideNumber]}
                  alt=""
                  className="sliderImg"
                />
              </div>
              <FontAwesomeIcon
                icon={faChevronRight}
                className="arrow"
                onClick={() => moveSliderHandle("r")}
              />
            </div>
          )}

          <div className="hotelWrapper">
            <button className="bookNow">Reserve or Book Now!</button>
            <h1 className="hotelTitle">{data.name}</h1>
            <div className="hotelAddress">
              <FontAwesomeIcon icon={faLocation} />
              <span>{data.address}</span>
            </div>
            <span className="hotelDistance">
              Excellent Locationv - {data.distance}m from center
            </span>
            <span className="hotelPriceHighlight">
              Book a stay over ${data.cheapestPrice} at this property and get a
              free airport taxi
            </span>
            <div className="hotelImages">
              {data.photos?.map((photos, i) => (
                <div className="hotelImgWrapper">
                  <img
                    onClick={() => handleOpen(i)}
                    src={photos}
                    alt=""
                    className="hotelImg"
                  />
                </div>
              ))}
            </div>
            <div className="hotelDetails">
              <div className="hotelDetailsTexts">
                <h1 className="hotelTitle">{data.title}</h1>
                <p className="hotelDesc">{data.desc}</p>
              </div>
              <div className="hotelDetailsPrice">
                <h1>Perfect for a {days}-nights stay!</h1>
                <span>
                  Located in the real heart of Krakow, this property has an
                  excellent location score of 9.8!
                </span>
                <h2>
                  {/* <b>${days * data.cheapestPrice * options.room}</b> ({days} nights) */}
                  <b>
                    ${days * (data?.cheapestPrice || 0) * (options?.room || 1)}
                  </b>{" "}
                  ({days} nights)
                </h2>
                <button onClick={bookHandle}>Reserve or Book Now!</button>
              </div>
            </div>
          </div>
          <MailList />
          <Footer />
        </div>
      )}
      {openModal && <ReserveModal setOpen={setOpenModal} hotelId={id} />}
    </div>
  );
};
