import React, { useState } from "react";
import "./styles/App.scss";
import { Button } from "react-bootstrap";
import LoginModal from "./LoginModal";

const App = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <div className="content">
        <Button variant="primary" onClick={handleShow}>
          Open Login Modal
        </Button>
      </div>
      <LoginModal show={show} handleClose={handleClose} />
    </>
  );
};

export default App;
