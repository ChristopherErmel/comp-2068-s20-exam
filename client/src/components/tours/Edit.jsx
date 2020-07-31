// Fill in the missing code

const Edit = function (props) {

  return (
    <Container className="my-5">
      <header>
        <h1>Edit Tour</h1>
      </header>

      <hr/>

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
                <option key={i} value={type}>{type}</option>
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
            <button type="submit" className="btn btn-primary">Update</button>
          </Form.Group>
        </Form>
      </div>
    </Container>
  );
};

export default Edit;