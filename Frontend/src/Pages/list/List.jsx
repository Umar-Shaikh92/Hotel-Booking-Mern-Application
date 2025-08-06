import { useState } from "react";
import "./list.css";
// import "../../../public/filter-icon.png"
import "../../index.css";
import { Navbar } from "../../components/Navbar/Navbar";
import { Header } from "../../components/Header/Header";
// import { BasicDateRangePicker } from "../../components/Date-Range-Picker/DateRangePicker";
import { Mymap } from "../../components/Map/Map";
import { useLocation } from "react-router";
import { format } from "date-fns";
import { DateRange } from "react-date-range";
import { SearchItem } from "../../components/SearchItem/SearchItem";
import useFetch from "../../hooks/useFetch";

export const List = () => {
  const location = useLocation();
  const [destination, setDestination] = useState(location.state.destination);
  const [dates, setDates] = useState(location.state.dates);
  const [options, setOptions] = useState(location.state.options);
  const [openDate, setOpenDate] = useState(false);
  const [openSidebar, setOpenSidebar] = useState(false);
  const [min, setMin] = useState(undefined);
  const [max, setMax] = useState(undefined);
  const { data, loading, error, reFetch } = useFetch(
    `/api/hotels?city=${destination}&min=${min || 0}&max=${max || 999}`
  );

  const handleClick = () => {
    reFetch();
  };

  return (
    <div>
      <div className={`sidebarDrawer ${openSidebar ? "open" : ""}`}>
        <button
          className="closeSidebarBtn"
          onClick={() => setOpenSidebar(false)}
        >
          {/* <img src="../../../public/cross-icon.png" alt="❌" /> */}
          {/* for deployment image place in dist folder */}
          <img src="../../../dist/cross-icon.png" alt="❌" />
        </button>
        <div className="listSearch">
          <h1 className="lsTitle">Search</h1>
          <div className="lsItem">
            <Mymap mapStyle={{ width: "100%", height: "250px" }} />
          </div>
          <div className="lsItem">
            <label className="destination">Destination</label>
            <input placeholder={destination} type="text" />
          </div>
          <div className="lsItem">
            <label>Check-in-Date</label>
            {/* <BasicDateRangePicker />  mui date range picker */}
            <span onClick={() => setOpenDate(!openDate)}>
              {`${format(dates[0].startDate, "MM/dd/yyyy")} to ${format(
                dates[0].endDate,
                "MM/dd/yyyy"
              )}`}
              ;
            </span>
            {openDate && (
              <DateRange
                onChange={(item) => setDates([item.selection])}
                minDate={new Date()}
                ranges={dates}
              />
            )}
          </div>
          <div className="lsItem">
            <label>Options</label>
            <div className="lsOptionItem">
              <span className="lsOptionText">
                Min price <small>per night</small>
              </span>
              <input
                type="number"
                className="lsOptionInput"
                onChange={(e) => setMin(e.target.value)}
              />
            </div>
            <div className="lsOptionItem">
              <span className="lsOptionText">
                Max price <small>per night</small>
              </span>
              <input
                type="number"
                className="lsOptionInput"
                onChange={(e) => setMax(e.target.value)}
              />
            </div>
            <div className="lsOptionItem">
              <span className="lsOptionText">
                Adult <small>per night</small>
              </span>
              <input
                type="number"
                min={1}
                className="lsOptionInput"
                placeholder={options.adult}
              />
            </div>
            <div className="lsOptionItem">
              <span className="lsOptionText">
                Children <small>per night</small>
              </span>
              <input
                type="number"
                min={0}
                className="lsOptionInput"
                placeholder={options.children}
              />
            </div>
            <div className="lsOptionItem">
              <span className="lsOptionText">
                Room <small>per night</small>
              </span>
              <input
                type="number"
                min={1}
                className="lsOptionInput"
                placeholder={options.rooms}
              />
            </div>
          </div>
          <button onClick={handleClick}>Search</button>
        </div>
      </div>

      <Navbar />
      <Header type="list" />

      <div className="mobileFilter">
        <button
          className="toggleSidebarBtn"
          onClick={() => setOpenSidebar(true)}
        >
          {/* <img src="../../../public/filter-icon.png" alt="" /> Filters */}
          {/* for deployment image place in dist folder */}
          <img src="../../../dist/filter-icon.png" alt="img" /> Filter
        </button>
      </div>

      <div className="listContainer">
        <div className="listWrapper">
          <div className="listSearch sidebarStatic">
            <h1 className="lsTitle">Search</h1>
            <div className="lsItem">
              <Mymap mapStyle={{ width: "100%", height: "250px" }} />
            </div>
            <div className="lsItem">
              <label className="destination">Destination</label>
              <input placeholder={destination} type="text" />
            </div>
            <div className="lsItem">
              <label>Check-in-Date</label>
              {/* <BasicDateRangePicker />  mui date range picker */}
              <span onClick={() => setOpenDate(!openDate)}>
                {`${format(dates[0].startDate, "MM/dd/yyyy")} to ${format(
                  dates[0].endDate,
                  "MM/dd/yyyy"
                )}`}
                ;
              </span>
              {openDate && (
                <DateRange
                  onChange={(item) => setDates([item.selection])}
                  minDate={new Date()}
                  ranges={dates}
                />
              )}
            </div>
            <div className="lsItem">
              <label>Options</label>
              <div className="lsOptionItem">
                <span className="lsOptionText">
                  Min price <small>per night</small>
                </span>
                <input
                  type="number"
                  className="lsOptionInput"
                  onChange={(e) => setMin(e.target.value)}
                />
              </div>
              <div className="lsOptionItem">
                <span className="lsOptionText">
                  Max price <small>per night</small>
                </span>
                <input
                  type="number"
                  className="lsOptionInput"
                  onChange={(e) => setMax(e.target.value)}
                />
              </div>
              <div className="lsOptionItem">
                <span className="lsOptionText">
                  Adult <small>per night</small>
                </span>
                <input
                  type="number"
                  min={1}
                  className="lsOptionInput"
                  placeholder={options.adult}
                />
              </div>
              <div className="lsOptionItem">
                <span className="lsOptionText">
                  Children <small>per night</small>
                </span>
                <input
                  type="number"
                  min={0}
                  className="lsOptionInput"
                  placeholder={options.children}
                />
              </div>
              <div className="lsOptionItem">
                <span className="lsOptionText">
                  Room <small>per night</small>
                </span>
                <input
                  type="number"
                  min={1}
                  className="lsOptionInput"
                  placeholder={options.rooms}
                />
              </div>
            </div>
            <button onClick={handleClick}>Search</button>
          </div>
          <div className="listResult">
            {loading ? (
              "Loading..."
            ) : (
              <>
                {data.map((item) => (
                  <SearchItem item={item} key={item._id} />
                ))}
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
