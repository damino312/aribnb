import React, { useContext, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { UserContext } from "./UserContext";
import { PlaceContext } from "./PlaceContext";
import axios from "axios";

export default function Header() {
  const { user } = useContext(UserContext);
  const [query, setQuery] = useState("");
  const { setPlaces } = useContext(PlaceContext);

  let { pathname } = useLocation(); // To display the search bar only on IndexPage

  function findPlaceByName() {
    axios
      .get("/searchByPlace", { params: { title: query } })
      .then(({ data }) => {
        if (data && data.length > 0) {
          setPlaces(data);
        } else {
          alert("No such a place");
        }
      })
      .catch((error) => {
        console.error("Error during executing request:", error);
      });
  }

  return (
    <header>
      <div className="flex justify-between items-center gap-1 sm:gap-0 ">
        <Link to={"/"} className=" items-center gap-1 flex">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-8 h-8"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z"
            />
          </svg>
          <span className="font-bold text-xl hidden md:inline ">airbnb</span>
        </Link>
        {pathname.length === 1 && (
          <div className="flex items-center border gap-2 border-gray-300 rounded-full px-3 shadow-md shadow-gray-300">
            <input
              type="text"
              value={query}
              onChange={(ev) => setQuery(ev.target.value)}
              className="h-7"
              placeholder="Type the place"
            />
            <button
              onClick={() => findPlaceByName(query)}
              className="bg-primary text-white p-1 my-2 rounded-full items-center text-center"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                />
              </svg>
            </button>
          </div>
        )}

        <div className="flex items-center border gap-2 border-gray-300 rounded-full">
          <Link
            to={user ? "/account" : "/login"}
            className="px-3 py-3 flex gap-2"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-6 h-6 bg-gray-400 rounded-full border border-gray-400"
            >
              <path
                fillRule="evenodd"
                d="M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z"
                clipRule="evenodd"
              />
            </svg>
            {!!user && <div className="hidden sm:block">{user.name}</div>}
          </Link>
        </div>
      </div>
    </header>
  );
}
