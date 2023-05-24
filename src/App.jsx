import "./App.css";
import IndexPage from "./pages/IndexPage";
import { Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <Routes>
      <Route index element={<IndexPage />}></Route>
    </Routes>
  );
}
