import React, { createContext, useContext, useState } from "react";
import { UserContext } from "../UserContext";
import { Navigate, useParams } from "react-router-dom";
import ProfileNav from "../ProfileNav";

import axios from "axios";
import PlacesPage from "./PlacesPage";

export default function ProfilePage() {
  const { user, ready, setUser, setReady } = useContext(UserContext);
  const [redirect, setRedirect] = useState(false);

  let { subpage } = useParams();

  if (subpage === undefined) {
    subpage = "profile";
  }

  async function logout() {
    await axios.post("/logout");
    
    setUser(null); // чтобы убрать данные юзера
    setReady(true);
  }

  if (!ready) {
    return "Loading...";
  }

  if (!user && ready && !redirect) {
    setRedirect(true);
  }

  if (redirect) {
    return <Navigate to={"/"} />;
  }

  return (
    <div>
      <ProfileNav />
      {subpage === "profile" && (
        <div className="text-center max-w-lg mx-auto my-3">
          Logged in as {user?.name} ({user?.email}) <br />
          <button onClick={logout} className="primary max-w-sm mt-2">
            Logout
          </button>
        </div>
      )}
      {subpage === "places" && <PlacesPage />}
    </div>
  );
}
