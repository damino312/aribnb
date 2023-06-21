import axios from "axios";
import React, { createContext, useEffect, useState } from "react";

export const PlaceContext = createContext();

export default function PlaceContextProvider({ children }) {
  const [places, setPlaces] = useState([]);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    axios.get("/places").then((response) => {
      setPlaces(response.data);
      setReady(true);
    });
  }, []);

  return (
    <PlaceContext.Provider value={{ places, setPlaces, ready }}>
      {children}
    </PlaceContext.Provider>
  );
}
