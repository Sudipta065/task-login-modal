import { Button, Modal } from "react-bootstrap";
import React, { useContext } from "react";
import ThemeContext from "./theme-context";
const LoginModal = (props) => {
  const theme = useContext(ThemeContext);
  return (
    <div>
      <Modal style={theme} {...props} onHide={props.handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Login Form</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form>
            <div className="form-group">
              <label htmlFor="username">Username</label>
              <input
                className="form-control"
                id="username"
                type="text"
                placeholder="Enter Username"
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                className="form-control"
                id="password"
                type="password"
                placeholder="Enter Password"
              />
            </div>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button style={theme} variant="secondary" onClick={props.handleClose}>
            Log In
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default LoginModal;
