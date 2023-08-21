import React from "react";
import { LINK } from "../../config/config";

export default function Pictures({ place, showGallery, hideBar }) {
  return (
    <div className="block rounded-3xl overflow-hidden relative lg:grid lg:grid-cols-[1fr_1fr] lg:gap-2  ">
      {place.photos?.[0] && (
        <img
          src={LINK + "/uploads/" + place.photos?.[0]}
          alt=""
          className="  w-full  object-cover object-center h-96"
        ></img>
      )}

      <div className=" grid-rows-2 grid-cols-2 gap-2 h-96  hidden lg:grid ">
        {place.photos?.slice(1, 5).map((photo) => (
          <img
            key={photo}
            src={LINK + "/uploads/" + photo}
            alt=""
            className="object-cover object-center w-full h-full"
          />
        ))}
      </div>
      <button
        onClick={() => {
          hideBar();
          showGallery();
        }}
        className="py-2 px-4 border border-black rounded absolute bottom-5 right-5 bg-gray-300 hover:-translate-y-4 hover:bg-primary hover:border-white hover:text-white transition-all"
      >
        See all photos
      </button>
    </div>
  );
}
