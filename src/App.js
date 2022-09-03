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
          <Route exact path="/" element={<Home />} />
          <Route
            exact
            path="/about"
            element={<About setLink={setLink} link={link} />}
          />
          <Route
            exact
            path="/projects"
            element={<Projects setLink={setLink} link={link} />}
          />
          <Route
            exact
            path="/building"
            element={<Building setLink={setLink} link={link} />}
          />
           <Route
            exact
            path="/building/countryhouse"
            element={<CountryHouse setLink={setLink} link={link} />}
          />
          <Route
            exact
            path="/visualization"
            element={<Visualization setLink={setLink} link={link} />}
          />
           <Route
            exact
            path="/contacts"
            element={<Contact setLink={setLink} link={link} />}
          />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
