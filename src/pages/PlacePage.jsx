import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Pictures from "../components/PlacePage/Pictures";
import ModalDescription from "../components/PlacePage/ModalDescription";
import ModalGallery from "../components/PlacePage/ModalGallery";
import Booking from "../components/PlacePage/Booking";
import ErrorWindow from "../components/commonComponents/ErrorWindow";

export default function PlacePage() {
  const { id } = useParams();
  const [place, setPlace] = useState("");
  const [showDescription, setShowDescription] = useState(false);
  const [showGallery, setShowGallery] = useState(false);
  const [errorBooking, setErrorBooking] = useState(0);


  useEffect(() => {
    if (!id) return;
    axios.get("/places/" + id).then((res) => {
      setPlace(res.data);
    });
  }, []);

  return (
    <div className="relative">
      <div className="mt-8 mb-4">
        <h1 className=" font-bold text-2xl">{place.title}</h1>
        <h2 className="mt-2 underline decoration-1">{place.address}</h2>
      </div>
      <Pictures place={place} showGallery={() => setShowGallery(true)} />
      <div className="flex gap-10 pt-10">
        <div className=" w-3/5 ">
          <div className="border-b-2 border-gray-200 pb-10">
            <h2 className=" text-2xl font-bold mb-6">About this place:</h2>
            <p className=" line-clamp-4">{place.description}</p>
            <button
              className="py-1 mt-2"
              onClick={() => setShowDescription(true)}
            >
              <span className="font-bold text-lg border-b-2 border-black">
                See more
              </span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 inline"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8.25 4.5l7.5 7.5-7.5 7.5"
                />
              </svg>
            </button>
          </div>
          <div className="pt-10 border-b-2 border-gray-200 pb-10">
            <h2 className="text-2xl font-bold mb-6">The place offers:</h2>
            <ul className="grid grid-rows-3 grid-flow-col">
              {place.perks?.slice(0, 6).map((perk) => (
                <li key={perk}>{perk}</li>
              ))}
            </ul>
          </div>
          <div className="pt-10 pb-10">
            <h2 className="text-xl font-bold mb-6">Extra information:</h2>
            <div className=" text-sm text-gray-500">{place.extraInfo}</div>
          </div>
        </div>
        <div className="w-2/5 flex justify-end ">
          <Booking
            price={place.price}
            idPlace={place._id}
            showError={setErrorBooking}
            owner={place.owner}
          />
        </div>
      </div>

      <ModalDescription
        isShown={showDescription}
        closeModalDescription={() => setShowDescription(false)}
        description={place.description}
      />
      <ModalGallery
        images={place.photos}
        isShown={showGallery}
        closeModalGallery={() => setShowGallery(false)}
      />
      <ErrorWindow
        text={
          errorBooking === 1
            ? "You are not logged in"
            : errorBooking === 2
            ? "You are an owner of this place"
            : errorBooking === 3
            ? "Something wrong with the dates"
            : errorBooking === 4
            ? "Already has been booked by you"
            : errorBooking === 5
            ? "You have exceeded the limit"
            : null
        }
        isShown={errorBooking}
        hideError={() => setErrorBooking(0)}
      />
    </div>
  );
}
