import React, { useState } from "react";
//hooks
import { useAppDispatch } from "./hooks/useAppDispatch";
import { useAppSelector } from "./hooks/useAppSelector";
//components
import Footer from "./components/Footer";
import Header from "./components/Header";
import SwitchTheme from "./components/SwitchTheme";
import Routes from "./routes";
//context
import { CVContext } from "./context/CVContext";
//actions
import { login } from "./redux/actions/authActions";
//style
import "./style/app.css";


function App() {

  const dispatch = useAppDispatch();
  const isLogged = useAppSelector((state) => state.auth.isLogged)

  const [isDarkMode, setDarkMode] = useState<boolean>(false);

  const logout = () => {
    dispatch(login(false))
  }

  return (
    <CVContext.Provider value={{ isDarkMode, setDarkMode }}>
      <Header isLogged={isLogged} logout={logout}><SwitchTheme/></Header>
      <div className="pageContainer">
        <Routes />
      </div>
      <Footer><SwitchTheme/></Footer>
    </CVContext.Provider>
  );
}

export default App;
