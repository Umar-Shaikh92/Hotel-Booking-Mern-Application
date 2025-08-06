import React from "react";
import "./feature.css";
import "../../index.css";
import useFetch from "../../hooks/useFetch";

export const Featured = () => {
  const { data, loading, error } = useFetch(
    "/api/hotels/countByCity?cities=berlin,london,madrid"
  );

//   console.log(data);

  return (
    <div className="featured">
      { loading ? (
        "Loading, please wait..."
      ) : 
        <>
          <div className="featuredItem">
            <img
              src="https://media.istockphoto.com/id/951917136/photo/aerial-view-and-skyline-of-madrid-at-dusk-spain-europe.jpg?s=612x612&w=0&k=20&c=h9u9cGj9RPh-nk8dFIThygRZRBxJeTsm6N9id4mes_w="
              className="featuredImg"
            />
            <div className="featuredTitles">
              <h1>Berlin</h1>
              <h2>{data[0]} Properties</h2>
            </div>
          </div>
          <div className="featuredItem">
            <img
              src="https://media.istockphoto.com/id/2202050532/photo/tower-bridge-in-london-at-sunrise.jpg?s=612x612&w=0&k=20&c=yqImdzlslkMTBvjsfE1KFMslDXut3uGJ63PGiBGSMSA="
              className="featuredImg"
            />
            <div className="featuredTitles">
              <h1>London</h1>
              <h2>{data[1]} Properties</h2>
            </div>
          </div>
          <div className="featuredItem">
            <img
              src="https://media.istockphoto.com/id/2204788403/photo/islamabad-pakistan-shah-faisal-mosque.jpg?s=612x612&w=0&k=20&c=jfIslgJ2RskjdcnDJjPJBp043_cW3smmjdat3xkzjy0="
              className="featuredImg"
            />
            <div className="featuredTitles">
              <h1>Madrid</h1>
              <h2>{data[2]} Properties</h2>
            </div>
          </div>{" "}
        </>
      }
    </div>
  );
};
