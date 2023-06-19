import React, { useState } from "react";
import { useEffect } from "react";

export default function ErrorWindow({ text, isShown, hideError }) {
  const [hide, setHide] = useState(false);

  useEffect(() => {
    setHide(isShown === 0 ? false : true);
  }, [isShown]);

  useEffect(() => {
    if (isShown !== 0) {
      // two setTimeout for the smooth animation of disapearing of the error otherwise the text will disapear before the window is hidden
      setTimeout(() => {
        setHide(false);
        setTimeout(() => {
          hideError();
        }, 500);
      }, 1500);
    }
  }, [isShown]);

  return (
    <div
      className={
        "bg-primary h-24 w-64 fixed bottom-0 right-0 flex justify-center items-center rounded-tl-2xl transition-opacity duration-500" +
        (hide ? " opacity-100" : " opacity-0 pointer-events-none")
      }
    >
      <p className="text-white text-lg">{text || "error"}</p>
    </div>
  );
}
