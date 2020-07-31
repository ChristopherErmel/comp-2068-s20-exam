// Fill in the missing code

const Index = function ({user}) {

  return (
    <Container className="my-5">
      <header>
        <h1>Tours</h1>
      </header>

      <hr/>

      <div className="content">
        {tours && tours.map((tour, i) => (
          <div key={i} className="card my-3">
            <div className="card-header">
              <h5 className="card-title">
                {tour.title}
              </h5>
            </div>

            <div className="card-body">
              <p className="card-text">
                A {tour.groupSize} {tour.groupSize > 1 ? 'people' : 'person'} group for the "{tour.tourType}" haunted tour on the date of {tour.date}.
              </p>
            </div>

            {user ? (
              <div className="card-footer">
                <Link to={{
                  pathname: "/tours/edit",
                  state: {
                    id: tour._id
                  }
                }}>
                  <i className="fa fa-edit"></i>
                </Link>

                <button type="button" onClick={() => deleteTour(tour)}>
                  <i className="fa fa-trash"></i>
                </button>
              </div>
            ) : null}
          </div>
        ))}
      </div>
    </Container>
  );

};

export default Index;