import "./searchItem.css";
import { Link } from "react-router";

export const SearchItem = ({ item }) => {
  return (
    <div className="searchItem">
      <img
        src={item.photos[0]}
        // src="https://media.istockphoto.com/id/104731717/photo/luxury-resort.jpg?s=612x612&w=0&k=20&c=cODMSPbYyrn1FHake1xYz9M8r15iOfGz9Aosy9Db7mI="
        alt=""
        className="siImg"
      />
      <div className="siDesc">
        <h1 className="siTitle">{item.name}</h1>
        <span className="siDistance">{item.distance}m from center</span>
        <span className="siTaxiOp">Free Airport Taxi</span>
        <span className="siSubtitle">
          Studio Apartment with Air conditioning
        </span>
        <span className="siFeatures">
          {item.desc}
          {/* Entire studio • 1 bathroom • 21m² 1 full bed */}
        </span>
        <span className="siCancelOp">Free Cancellation</span>
        <span className="siCancelOpSubtitle">
          You can cancel later, so lock in this great price today!
        </span>
      </div>
      <div className="siDetails">
        {item.rating && (
          <div className="siRating">
            <span>Excellent</span>
            <button>{item.rating}</button>
          </div>
        )}
        <div className="siDetailTexts">
          <span className="siPrice">${item.cheapestPrice}</span>
          <span className="siTaxOp">Include Taxes & Fees</span>
          <Link to={`/hotels/${item._id}`}>
            <button className="siCheckButton">See Availability</button>
          </Link>
        </div>
      </div>
    </div>
  );
};
