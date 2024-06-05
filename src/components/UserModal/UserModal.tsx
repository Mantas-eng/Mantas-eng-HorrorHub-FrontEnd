import React from 'react';
import { Modal, Button } from 'react-bootstrap';

interface UserModalProps {
  user: any;
  show: boolean;
  handleClose: () => void;
  handleLogout: () => void;
}

const UserModal: React.FC<UserModalProps> = ({ user, show, handleClose, handleLogout }) => {
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>User Data</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {user && user.username && user.email && (
          <>
            <p>Username: {user.username}</p>
            <p>Email: {user.email}</p>
          </>
        )}
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleLogout}>
          Logout
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default UserModal;
