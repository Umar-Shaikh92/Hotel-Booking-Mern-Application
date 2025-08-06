import React from "react";
import "./propertyList.css";
import "../../index.css";
import useFetch from "../../hooks/useFetch";

export const PropertyList = () => {
  const { data, loading, error } = useFetch("/api/hotels/countByType");

  const images = [
    "https://media.istockphoto.com/id/2165635291/photo/luxury-hotel-waiting-area-with-armchairs-elevators-and-plants.jpg?s=612x612&w=0&k=20&c=2lAnRghlt6O1NXWWfxGzex76lkz25w57bQv7_5AHoEg=",
    "https://media.istockphoto.com/id/1293762741/photo/modern-living-room-interior-3d-render.jpg?s=612x612&w=0&k=20&c=iZ561ZIXOtPYGSzqlKUnLrliorreOYVz1pzu8WJmrnc=",
    "https://media.istockphoto.com/id/104731717/photo/luxury-resort.jpg?s=612x612&w=0&k=20&c=cODMSPbYyrn1FHake1xYz9M8r15iOfGz9Aosy9Db7mI=",
    "https://media.istockphoto.com/id/1297687835/photo/close-up-of-small-blue-gray-mobile-home-with-a-front-and-side-porch-with-white-railing.jpg?s=612x612&w=0&k=20&c=GR8xUfG36JKeqeWUE0dvE2GMHpEMxPu_D3h8z_Hu6nA=",
    "https://media.istockphoto.com/id/135565559/photo/photo-of-a-rustic-house-on-the-woods.jpg?s=612x612&w=0&k=20&c=a_dXNd5oF0HpiSoJ015FEz0Jt7p3kWJKkoI1G_7NZ88=",
  ];

return (
    <div className="pList">
      {loading ? (
        "loading"
      ) : (
        <>
          {data &&
            images.map((img,i) => (
              <div className="pListItem" key={i}>
                <img
                  src={img}
                  alt=""
                  className="pListImg"
                />
                <div className="pListTitles">
                  <h1>{data[i]?.type}</h1>
                  <h2>{data[i]?.count} {data[i]?.type}</h2>
                </div>
              </div>
            ))}
        </>
      )}
    </div>
  );










};
