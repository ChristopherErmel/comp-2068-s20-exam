// Fill in the missing code
import React, { useState } from "react";
import { Container, Form } from "react-bootstrap";
import Axios from "axios";
import { Redirect } from "react-router-dom";

const New = function () {
  const [inputs, setInputs] = useState({
    title: "",
    tourType: `I'm too young to die`,
    groupSize: 0,
    date: "",
  });

  const [redirect, setRedirect] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const resp = await Axios.post(`/api/tours`, inputs);
    if (resp.status === 200) {
      setRedirect(true);
    }
  };

  const handleInputChange = async (event) => {
    event.persist();

    const { name, value } = event.target;

    setInputs((inputs) => ({
      ...inputs,
      [name]: value,
    }));
  };

  if (redirect) return <Redirect to="/tours" />;

  const tourTypes = [
    `I'm too young to die`,
    `Hurt me plenty`,
    `Ultra-violence`,
    `Nightmare`,
    `Ultra-nightmare`,
  ];

  return (
    <Container className="my-5">
      <header>
        <h1>New Tour</h1>
      </header>

      <hr />

      <div>
        <Form onSubmit={handleSubmit}>
          <Form.Group>
            <Form.Label>Title:</Form.Label>
            <Form.Control
              name="title"
              onChange={handleInputChange}
              value={inputs.title}
            />
          </Form.Group>

          <Form.Group>
            <Form.Label>Tour Type:</Form.Label>
            <Form.Control
              as="select"
              name="tourType"
              onChange={handleInputChange}
              defaultValue={inputs.tourType}
            >
              {tourTypes.map((type, i) => (
                <option key={i} value={type}>
                  {type}
                </option>
              ))}
            </Form.Control>
          </Form.Group>

          <Form.Group>
            <Form.Label>Group Size:</Form.Label>
            <Form.Control
              type="number"
              name="groupSize"
              step="1"
              min="1"
              max="10"
              onChange={handleInputChange}
              value={inputs.groupSize}
            />
          </Form.Group>

          <Form.Group>
            <Form.Label>Date:</Form.Label>
            <Form.Control
              type="date"
              name="date"
              onChange={handleInputChange}
              value={inputs.date}
            />
          </Form.Group>

          <Form.Group>
            <button type="submit" className="btn btn-primary">
              Create
            </button>
          </Form.Group>
        </Form>
      </div>
    </Container>
  );
};

export default New;
