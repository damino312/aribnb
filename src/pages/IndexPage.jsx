import React from "react";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import Pagination from "../components/commonComponents/Pagination";
import { useContext } from "react";
import { PlaceContext } from "../PlaceContext";

export default function IndexPage() {
  const [currentPlaces, setCurrentPlaces] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const { places, ready } = useContext(PlaceContext);

  const placesPerPage = 8;
  const lastCountryIndex = currentPage * placesPerPage;
  const firstCountryIndex = lastCountryIndex - placesPerPage;
  const totalPages = Math.ceil(places.length / placesPerPage);

  useEffect(() => {
    setCurrentPlaces(places.slice(firstCountryIndex, lastCountryIndex));
  }, [places, firstCountryIndex, lastCountryIndex]);

  return !ready ? (
    <div>Loading...</div>
  ) : (
    <div className="flex flex-col justify-between min-h-full flex-1">
      <div className="mt-8 grid gap-6 grid-cols-2 md:grid-cols-3 lg:grid-cols-4 flex-1">
        {currentPlaces.length > 0 &&
          currentPlaces.map((place) => (
            <Link to={"/place/" + place._id} key={place._id}>
              <div className="bg-gray-500 rounded-2xl flex">
                {place.photos.length > 0 && (
                  <img
                    src={"http://localhost:4000/uploads/" + place.photos[0]}
                    className="rounded-2xl aspect-square "
                  />
                )}
              </div>
              <div className="mt-2 flex flex-col">
                <h2 className="text-sm truncate font-bold">{place.address}</h2>
                <h3 className="text-gray-500">{place.title}</h3>
                <h3 className="text-gray-500">
                  <b className="text-black">$</b>{" "}
                  {place.price?.toLocaleString("en-IN")} night
                </h3>
              </div>
            </Link>
          ))}
      </div>
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        setCurrentPage={setCurrentPage}
      />
    </div>
  );
}
