import IndexPage from "./pages/IndexPage";
import LoginPage from "./pages/LoginPage";
import ProfilePage from "./pages/ProfilePage";
import PlacesFormPage from "./pages/PlacesFormPage";
import Layout from "./Layout";
import { Routes, Route } from "react-router-dom";
import RegisterPage from "./pages/RegisterPage";
import axios from "axios";
import { UserContextProvider } from "./UserContext";
import PlacesPage from "./pages/PlacesPage";
import PlacePage from "./pages/PlacePage";
import BookingPage from "./pages/BookingPage";
import RequestPage from "./pages/RequestPage";
import RequestHistoryPage from "./pages/RequestHistoryPage";
import PlaceContextProvider from "./PlaceContext";
import { LINK } from "./config/config";

axios.defaults.baseURL = LINK;
axios.defaults.withCredentials = true;

export default function App() {
  return (
    <UserContextProvider>
      <PlaceContextProvider>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<IndexPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/account" element={<ProfilePage />} />
            <Route path="/account/places" element={<PlacesPage />} />
            <Route path="/account/places/new" element={<PlacesFormPage />} />
            <Route path="/account/places/:id" element={<PlacesFormPage />} />
            <Route path="/place/:id" element={<PlacePage />} />
            <Route path="/account/bookings" element={<BookingPage />} />
            <Route path="/account/requests" element={<RequestPage />} />
            <Route
              path="/account/requests/history"
              element={<RequestHistoryPage />}
            />
          </Route>
        </Routes>
      </PlaceContextProvider>
    </UserContextProvider>
  );
}
