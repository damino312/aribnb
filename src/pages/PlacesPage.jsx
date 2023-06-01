import React, { useState } from "react";
import Perks from "../Perks";
import axios from "axios";

export default function PlacesPage() {
  const [title, setTitle] = useState("");
  const [address, setAddress] = useState("");
  const [addedPhotos, setAddedPhotos] = useState([]);
  const [photoLink, setPhotoLink] = useState("");
  const [description, setDescription] = useState("");
  const [perks, setPerks] = useState([]);
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [maxGuest, setMaxGuest] = useState(1);
  const [extraInfo, setExtraInfo] = useState("");

  function inputHeader(text) {
    return <h2 className="text-2xl mt-2">{text}</h2>;
  }

  function inputDescription(text) {
    return <p className="text-gray-500 text-sm">{text}</p>;
  }

  function preInput(header, description) {
    return (
      <>
        {inputHeader(header)}
        {inputDescription(description)}
      </>
    );
  }
  async function addPhotoLink(ev) {
    ev.preventDefault();
    const { data: fileName } = await axios.post("/upload-by-link", {
      link: photoLink,
    });
    setAddedPhotos((prev) => {
      return [...prev, fileName];
    });
    setPhotoLink("");
  }

  return (
    <div>
      <form>
        {preInput("Title", "name somehow your place")}

        <input
          className="text-gray-500"
          type="text"
          placeholder="title, for example: My trash pit"
          value={title}
          onChange={(ev) => setTitle(ev.target.value)}
        />

        {preInput("Address", "An address of a location")}

        <input
          className="text-gray-500"
          type="text"
          placeholder="address, type it here"
          value={address}
          onChange={(ev) => setAddress(ev.target.value)}
        />

        {preInput("Photos", "Photos of your place")}
        <div className="flex gap-2">
          <input
            className="text-gray-500"
            type="text"
            placeholder="put here a link of a photo"
            value={photoLink}
            onChange={(ev) => setPhotoLink(ev.target.value)}
          />
          <button
            onClick={addPhotoLink}
            className="bg-gray-200 px-4 rounded-2xl"
          >
            Add&nbsp;photo
          </button>
        </div>
        <div className="mt-2 gap-2 grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6  ">
          {addedPhotos.length > 0 &&
            addedPhotos.map((link) => (
              <div>
                <img
                  className="rounded-2xl h-28  "
                  src={"http://localhost:4000/uploads/" + link}
                ></img>
              </div>
            ))}
          <button className="border bg-transparent rounded-2xl items-center text-lg flex justify-center gap-2 ">
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
                d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5"
              />
            </svg>
            Upload
          </button>
        </div>

        {preInput("Description", "Description of the place")}

        <textarea
          value={description}
          onChange={(ev) => setDescription(ev.target.value)}
        />

        {preInput("Perks", "select all perks that fit")}
        <div className="grid gap-2 grid-cols-2 md:grid-cols-3 lg:grid-cols-6">
          <Perks selected={perks} onChange={setPerks} />
        </div>

        {preInput(
          "Check in & out times",
          "provide information about check in and out times, don't forget to have some extra time for cleaning the place between guests"
        )}
        <div className="grid gap-2 sm:grid-cols-1 md:grid-cols-3 ">
          <div>
            <p className="text-sm ">Check in time</p>
            <input
              type="text"
              className="text-gray-500 "
              placeholder="14"
              value={checkIn}
              onChange={(ev) => setCheckIn(ev.target.value)}
            />
          </div>
          <div>
            <p className="text-sm">Check in time</p>
            <input
              type="text"
              className="text-gray-500 "
              placeholder="11"
              value={checkOut}
              onChange={(ev) => setCheckOut(ev.target.value)}
            />
          </div>
          <div>
            <p className="text-sm">Max guests</p>
            <input
              type="text"
              className="text-gray-500 "
              placeholder="4"
              value={maxGuest}
              onChange={(ev) => setMaxGuest(ev.target.value)}
            />
          </div>
        </div>

        {preInput("Extra info", "additional info like house rules, etc")}
        <textarea
          value={extraInfo}
          onChange={(ev) => setExtraInfo(ev.target.value)}
        />
      </form>
    </div>
  );
}
