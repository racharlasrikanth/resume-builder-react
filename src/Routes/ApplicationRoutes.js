import React from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "../components/Navbar";
import GoogleResume from "../Templates/GoogleResume";
import Styleguide from "../Styleguide";

const ApplicationRoutes = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/style-guide" element={<Styleguide />}></Route>
        <Route path="/google-resume" element={<GoogleResume />}></Route>
      </Routes>
    </>
  );
};

export default ApplicationRoutes;
