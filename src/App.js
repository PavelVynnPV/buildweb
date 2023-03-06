import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { About } from "./components/About";
import { Contact } from "./components/Contact";
import { Home } from "./components/Home";
import Footer from "./components/Home/Footer";
import { Building, CountryHouse, Visualization } from "./components/MainBuilding";
import { Navbar } from "./components/Navbar";
import { Projects } from "./components/Projects";

function App() {
  const [link, setLink] = useState();

  return (
    <>
      <BrowserRouter>
        <Navbar link={link} />
        <Routes>
          <Route exact path="/buildweb" element={<Home />} />
          <Route
            exact
            path="/buildweb/about"
            element={<About setLink={setLink} link={link} />}
          />
          <Route
            exact
            path="/buildweb/projects"
            element={<Projects setLink={setLink} link={link} />}
          />
          <Route
            exact
            path="/buildweb/building"
            element={<Building setLink={setLink} link={link} />}
          />
           <Route
            exact
            path="/buildweb/building/countryhouse"
            element={<CountryHouse setLink={setLink} link={link} />}
          />
          <Route
            exact
            path="/buildweb/visualization"
            element={<Visualization setLink={setLink} link={link} />}
          />
           <Route
            exact
            path="/buildweb/contacts"
            element={<Contact setLink={setLink} link={link} />}
          />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
