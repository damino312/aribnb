import React from "react";

export default function Pictures({ place, showGallery }) {
  return (
    <div className="grid gap-2 grid-cols-[1fr_1fr] rounded-3xl overflow-hidden  ">
      {place.photos?.[0] && (
        <img
          src={"http://localhost:4000/uploads/" + place.photos?.[0]}
          alt=""
          className="  w-full  object-cover object-center h-96       "
        ></img>
      )}    

      <div className="grid grid-rows-2 grid-cols-2 gap-2 h-96 relative ">
        {place.photos?.slice(1, 5).map((photo) => (
          <img
            key={photo}
            src={"http://localhost:4000/uploads/" + photo}
            alt=""
            className="object-cover object-center w-full h-full"
          />
        ))}
        <button
          onClick={showGallery}
          className="py-2 px-4 border rounded absolute bottom-5 right-5 bg-gray-300 hover:-translate-y-4 hover:bg-primary hover:text-white transition-all"
        >
          See all photos
        </button>
      </div>
    </div>
  );
}
