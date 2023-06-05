import "./App.css";
import IndexPage from "./pages/IndexPage";
import LoginPage from "./pages/LoginPage";
import ProfilePage from "./pages/ProfilePage";
import NewPlacePage from "./pages/NewPlacePage";
import Layout from "./Layout";
import { Routes, Route } from "react-router-dom";
import RegisterPage from "./pages/RegisterPage";
import axios from "axios";
import { UserContext, UserContextProvider } from "./UserContext";
import PlacesPage from "./pages/PlacesPage";

axios.defaults.baseURL = "http://localhost:4000";
axios.defaults.withCredentials = true;

export default function App() {
  return (
    <UserContextProvider>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<IndexPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/account" element={<ProfilePage />} />
          <Route path="/account/places" element={<PlacesPage />} />
          <Route path="/account/places/new" element={<NewPlacePage />}></Route>
        </Route>
      </Routes>
    </UserContextProvider>
  );
}
