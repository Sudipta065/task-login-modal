import React, { useState } from "react";
import "../styles/App.scss";
import { Button } from "react-bootstrap";
import LoginModal from "./LoginModal";
import ThemeContext, { themes } from "./theme-context";
const App = () => {
  const [show, setShow] = useState(false);
  const [theme, setTheme] = useState(themes.light);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const toggleTheme = () => {
    theme === themes.light ? setTheme(themes.red) : setTheme(themes.light);
  };

  return (
    <>
      <ThemeContext.Provider value={theme}>
        <div style={theme} className="content">
          <Button variant="primary" onClick={handleShow}>
            Open Login Modal
          </Button>
          <button className="btn-primary btn ml-2" onClick={toggleTheme}>
            Change Theme
          </button>
          <LoginModal show={show} handleClose={handleClose} />
        </div>
      </ThemeContext.Provider>
    </>
  );
};

export default App;
