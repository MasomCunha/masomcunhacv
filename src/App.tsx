import React from "react";

//components
import Footer from "./components/Footer";
import Header from "./components/Header";

import Routes from "./routes";
import "./style/appCV.css";

function App() {
  return (
    <>
      <Header />
      <div className="pageContainer">
        <Routes />
      </div>
      <Footer />
    </>
  );
}

export default App;
