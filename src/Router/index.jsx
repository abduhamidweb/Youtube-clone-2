import { Routes, Route } from "react-router-dom";
import Home from "../Pages/Home/Home";
import Soon from "../Pages/Soon/Soon";

const index = () => {
  return (
    // for pages routes
    <>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="*" element={<Soon />} />
        </Routes>
      </main>
    </>
  );
};

export default index;
