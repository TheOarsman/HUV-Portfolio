import { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Helmet } from "react-helmet";
import "./App.css";
import { Outlet } from "react-router-dom";

function App() {
  const [currentTab, handleTabChange] = useState("about");

  return (
    <>
      <Helmet>
        <title>Heinz Ulrich V's Portfolio | {currentTab} </title>
      </Helmet>
      ;
      <Header
        currentTab={currentTab}
        handleTabChange={handleTabChange}
      ></Header>
      <main>
        <Outlet></Outlet>
      </main>
      <Footer></Footer>
    </>
  );
}

export default App;
