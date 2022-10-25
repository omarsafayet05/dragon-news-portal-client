import React, { useContext, useRef, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { AuthContext } from "../../../AuthProvider/AuthProvider";

const Profile = () => {
  const { user } = useContext(AuthContext);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(photoURLRef.current.value);
  };

  const [name, setName] = useState(user.displayName);
  const photoURLRef = useRef(user.photoURL);

  const handleNameChange = (event) => {
    setName(event.target.value);
  };
  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control
          readOnly
          defaultValue={user?.email}
          type="email"
          placeholder="Enter email"
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Your Name</Form.Label>
        <Form.Control
          onChange={handleNameChange}
          defaultValue={name}
          type="text"
          placeholder="Your name"
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>PhotoURL</Form.Label>
        <Form.Control
          ref={photoURLRef}
          defaultValue={user?.photoURL}
          type="text"
          placeholder="PhotoURL"
        />
      </Form.Group>

      <Button variant="primary" type="submit">
        Login
      </Button>
      <Form.Text className="text-danger"></Form.Text>
    </Form>
  );
};

export default Profile;
