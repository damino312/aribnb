import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ProfileNav from "../components/commonComponents/ProfileNav";

export default function PlacesPage() {
  const [places, setPlaces] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);

  function fetchData() {
    try {
      axios.get("/user-places").then(({ data }) => {
        setPlaces(data);
      });
    } catch (error) {
      console.error(error);
    }
  }

  async function handleDelete(ev, id) {
    ev.preventDefault();
    try {
      console.log(await axios.delete(`/places/${id}`));
      fetchData();
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <div>
      <ProfileNav />
      <div className="text-center max-w-5xl mx-auto my-3">
        <Link
          to={"/account/places/new"}
          className="bg-primary flex gap-2 justify-center rounded-2xl text-white max-w-sm py-2 mx-auto"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <span>Add a new place</span>
        </Link>
        {places.length > 0 &&
          places.map((place) => (
            <Link
              to={"/account/places/" + place._id}
              className="flex border mt-3 p-3 gap-2 relative group group-hover:bg-gray-300 "
              key={place._id}
            >
              <div className="w-32 h-32 bg-gray-300 shrink-0">
                {place.photos.length > 0 && (
                  <img
                    src={"http://localhost:4000/uploads/" + place.photos[0]}
                    alt=""
                    className="h-full w-full object-cover"
                  ></img>
                )}
              </div>
              <div className="flex justify-between w-full group-hover:gap-2">
                <div className="h-32 w-full">
                  <h2 className="text-xl text-center mb-1 ">{place.title}</h2>
                  <p className="text-left text-sm line-clamp-5 ">
                    {place.description}
                  </p>
                </div>
                <button
                  className="bg-primary text-white px-2 hidden group-hover:block invisible group-hover:visible"
                  onClick={(ev) => handleDelete(ev, place._id)}
                >
                  Delete
                </button>
              </div>
            </Link>
          ))}
      </div>
    </div>
  );
}
