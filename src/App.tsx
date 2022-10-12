import React, { useState } from "react";

//components
import Footer from "./components/Footer";
import Header from "./components/Header";
import SwitchTheme from "./components/SwitchTheme";
import Routes from "./routes";

//context
import { CVContext } from "./context/CVContext";

//styles
import "./style/appCV.css";

function App() {

  const [isDarkMode, setDarkMode] = useState<boolean>(false);

  return (
    <CVContext.Provider value={{ isDarkMode, setDarkMode }}>
      <Header><SwitchTheme/></Header>
      <div className="pageContainer">
        <Routes />
      </div>
      <Footer><SwitchTheme/></Footer>
    </CVContext.Provider>
  );
}

export default App;
