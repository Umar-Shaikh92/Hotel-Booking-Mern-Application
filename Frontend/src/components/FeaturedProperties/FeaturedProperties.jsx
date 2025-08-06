import React from "react";
import "./featuredProperties.css";
import "../../index.css";
import useFetch from "../../hooks/useFetch";

export const FeaturedProperties = () => {
  const { data, loading, error } = useFetch(
    "/api/hotels?featured=true&limit=4"
  );

  return (
    <div className="fp">
      {loading ? (
        "Loading... Please Wait"
      ) : (
        <>
          {data.map((item) => (
            <div className="fpItem" key={item._id}>
              <img
                src={
                  item.photos[0] ||
                  "https://media.istockphoto.com/id/1147544807/vector/thumbnail-image-vector-graphic.jpg?s=612x612&w=0&k=20&c=rnCKVbdxqkjlcs3xH87-9gocETqpspHFXu5dIGB4wuM="
                }
                alt=""
                className="fpImg"
              />
              <span className="fpName">{item.name}</span>
              <span className="fpCity">{item.city}</span>
              <span className="fpPrice">
                Starting from ${item.cheapestPrice}
              </span>
              {item.rating && (
                <div className="fpRating">
                  <button>{item.rating}</button>
                  <span>Excellent</span>
                </div>
              )}
            </div>
          ))}

          {/* https://media.istockphoto.com/id/2169200951/photo/modern-bedroom-interior-with-bed-side-table-armchair-and-bookshelf.jpg?s=612x612&w=0&k=20&c=8yBjbY0iatSggSR99CouBvtZzLJtszRWLr1J0jxGaBw= */}

          {/* <div className="fpItem">
        <img src="https://media.istockphoto.com/id/690187712/photo/modern-white-living-room-with-dining-table.jpg?s=612x612&w=0&k=20&c=wVal87-bZ6-QBiGcqz6ED_Xmm35x43VmAuy5ac_b9UU=" alt="" className="fpImg"/>
        <span className="fpName">Maritime Arti Hotel</span>
        <span className="fpCity">London</span>
        <span className="fpPrice">Starting from $145</span>
        <div className="fpRating">
          <button>8.9</button>
          <span>Excellent</span>
        </div>
      </div>
      <div className="fpItem">
        <img src="https://media.istockphoto.com/id/1370825295/photo/modern-hotel-room-with-double-bed-night-tables-tv-set-and-cityscape-from-the-window.jpg?s=612x612&w=0&k=20&c=QMXz9HJVhU-8MtBYyeJxtqLz90j7r0SrR6FTWniPkgc=" alt="" className="fpImg"/>
        <span className="fpName">Ibis Hotel Paris</span>
        <span className="fpCity">Paris</span>
        <span className="fpPrice">Starting from $100</span>
        <div className="fpRating">
          <button>8.9</button>
          <span>Excellent</span>
        </div>
      </div>
      <div className="fpItem">
        <img src="https://media.istockphoto.com/id/2185470292/photo/chic-villa-terrace-with-rattan-furniture-and-breathtaking-sea-view-in-antalya.jpg?s=612x612&w=0&k=20&c=2hTWVx3uYKcAi0FMxU_f_NnpP7UT7vg3Q7ZuWfOHrNE=" alt="" className="fpImg"/>
        <span className="fpName">Aparthotel Hampton</span>
        <span className="fpCity">Rome</span>
        <span className="fpPrice">Starting from $150</span>
        <div className="fpRating">
          <button>8.9</button>
          <span>Excellent</span>
        </div>
      </div> */}
        </>
      )}
    </div>
  );
};
