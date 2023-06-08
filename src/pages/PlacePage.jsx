import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function PlacePage() {
  const { id } = useParams();
  const [placeData, setPlaceData] = useState("");
  useEffect(() => {
    if (!id) return;
    axios.get("/places/" + id).then((res) => {
      setPlaceData(res.data);
    });
  }, []);

  return (
    <div>
      <div className="mt-8">
        <h1 className=" font-bold text-2xl">{placeData.title}</h1>
        <h2 className="mt-2 underline decoration-1">{placeData.address}</h2>
      </div>
    </div>
  );
}
