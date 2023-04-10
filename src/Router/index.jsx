import { Routes, Route } from "react-router-dom";
import Home from "../Pages/Home/Home";

const index = () => {
  return (
    // for pages routes
    <>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </main>
    </>
  );
};

export default index;
