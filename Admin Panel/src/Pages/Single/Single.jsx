import "./single.scss";
import Sidebar from "../../Components/Sidebar/Sidebar";
import Navbar from "../../Components/Navbar/Navbar";
import Chart from "../../Components/Chart/Chart";
import List from "../../Components/Table/Table";

const Single = () => {
  return (
    <div className="single">
      <Sidebar />

      <div className="singleContainer">
        <Navbar />
        <div className="top">
          <div className="left">
            <div className="editButton">Edit</div>
            <h1 className="title">Information</h1>
            <div className="item">
              <img
                src="../../../umar.jfif"
                alt="user-img"
                className="itemImg"
              />
              <div className="details">
                <h1 className="itemTitle">Umar Shaikh</h1>
                <div className="detailItem">
                  <span className="itemKey">Email:</span>
                  <span className="itemValue">umar@92mail.com</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Phone:</span>
                  <span className="itemValue">+92 4892184791</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Address:</span>
                  <span className="itemValue">
                    Liaquatabad block 8, Karachi
                  </span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Country:</span>
                  <span className="itemValue">Pakistan</span>
                </div>
              </div>
            </div>
          </div>
          <div className="right">
            <Chart aspect={ 3 / 1 } />
          </div>
        </div>
        <div className="bottom">
          <h1 className="title">Last Transactions</h1>
<List />
        </div>
      </div>
    </div>
  );
};
export default Single;
