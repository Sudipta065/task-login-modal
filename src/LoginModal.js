import { Button, Modal } from "react-bootstrap";
import React from "react";
const LoginModal = (props) => {
  return (
    <div>
      <Modal {...props} onHide={props.handleClose}>
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
          <Button variant="secondary" onClick={props.handleClose}>
            Log In
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default LoginModal;
