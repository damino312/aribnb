import React from "react";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

export default function IndexPage() {
  const [places, setPlaces] = useState([]);
  useEffect(() => {
    axios.get("/places").then((response) => {
      setPlaces(response.data);
    });
  }, []);

  return (
    <div className="mt-8 grid gap-6 grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {places.length > 0 &&
        places.map((place) => (
          <Link to={"/place/" + place._id}>
            <div className="bg-gray-500 rounded-2xl flex">
              {place.photos.length > 0 && (
                <img
                  src={"http://localhost:4000/uploads/" + place.photos[0]}
                  className="rounded-2xl aspect-square"
                />
              )}
            </div>
            <div className="mt-2 flex flex-col">
              <h2 className="text-sm truncate font-bold  ">{place.address}</h2>
              <h3 className=" text-gray-500 ">{place.title}</h3>
              <h3 className="text-gray-500">
                <b className=" text-black">$</b>{" "}
                {place.price?.toLocaleString("en-IN")} night
              </h3>
            </div>
          </Link>
        ))}
    </div>
  );
}
