import React, { useState } from "react";

import Perks from "../Perks";
import axios from "axios";

import PhotosUploader from "../PhotosUploader";
import { Navigate, useParams } from "react-router-dom";
import ProfileNav from "../ProfileNav";
import { useEffect } from "react";

export default function NewPlacePage() {
  const { id } = useParams();

  const [title, setTitle] = useState("");
  const [address, setAddress] = useState("");
  const [addedPhotos, setAddedPhotos] = useState([]);
  const [description, setDescription] = useState("");
  const [perks, setPerks] = useState([]);
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [maxGuest, setMaxGuest] = useState(1);
  const [extraInfo, setExtraInfo] = useState("");
  const [price, setPrice] = useState(100);
  const [redirect, setRedirect] = useState(false);
  useEffect(() => {
    if (!id) {
      return;
    }
    axios.get("/places/" + id).then((response) => {
      const { data } = response;
      setTitle(data.title);
      setAddress(data.address);
      setAddedPhotos(data.photos);
      setDescription(data.description);
      setPerks(data.perks);
      setCheckIn(data.checkIn);
      setCheckOut(data.checkOut);
      setMaxGuest(data.maxGuest);
      setExtraInfo(data.extraInfo);
      setPrice(data.price);
    });
  }, []); // ADD ID INTO BRACKETS

  function inputHeader(text) {
    return <h2 className="text-2xl mt-2">{text}</h2>;
  }

  function inputDescription(text) {
    return <p className="text-gray-500 text-sm">{text}</p>;
  }

  function preInput(header, description) {
    return (
      <div className="mb-2">
        {inputHeader(header)}
        {inputDescription(description)}
      </div>
    );
  }

  async function addNewPlace(ev) {
    ev.preventDefault();
    const placeData = {
      title,
      address,
      addedPhotos,
      description,
      perks,
      extraInfo,
      checkIn,
      checkOut,
      maxGuest,
      price,
    };
    if (id) {
      await axios.put("/places", {
        id,
        ...placeData,
      });
    } else {
      await axios.post("/places", {
        ...placeData,
      });
    }

    setRedirect(true);
  }

  if (redirect) {
    return <Navigate to={"/account/places"} />;
  }

  return (
    <div>
      <ProfileNav />
      <form onSubmit={addNewPlace}>
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
        <PhotosUploader addedPhotos={addedPhotos} onChange={setAddedPhotos} />

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

        {preInput("Price", "Price per night")}
        <input
          className="text-gray-500"
          type="number"
          placeholder="your price, type it here"
          value={price}
          onChange={(ev) => setPrice(ev.target.value)}
        />

        {preInput("Extra info", "additional info like house rules, etc")}
        <textarea
          value={extraInfo}
          onChange={(ev) => setExtraInfo(ev.target.value)}
        />

        <button className="primary my-4">Save</button>
      </form>
    </div>
  );
}
