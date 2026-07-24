import "./sass/App.scss";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Home";
import Error from "./Error";
import Site from "./Site";
export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index path="/" element={<Home />} />
          <Route index path="/app" element={<Site />} />
          <Route path={"*"} element={<Error />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
