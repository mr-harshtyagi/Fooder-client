import Navbar from "../components/navbar";
import { Col, Container, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

export default function Login() {
   let navigate = useNavigate();
 
  return (
    <div>
      <Navbar />

      <div
        style={{
          paddingTop: "40px",
        }}
      >
        <Container>
          <Row>
            <Col xs={1} lg={3} md={3}></Col>
            <Col xs={10} lg={6} md={6}>
              <main className="form-signin">
                <h1 className="fw-normal text-center">LOGIN</h1>
                <br />
                <form onSubmit={(e)=>{
                  e.preventDefault(); // form submit k baad refresh nhi hone deta
                  navigate("/")}}>
                  <div className="col-md-12">
                    <label htmlFor="validationDefault01" className="form-label">
                      Email
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="validationDefault01"
                      placeholder="Enter your BITS email ID"
                      required
                    />
                  </div>
                  <div className="col-md-12 mt-2">
                    <label htmlFor="validationDefault02" className="form-label">
                      Password
                    </label>
                    <input
                      type="password"
                      className="form-control"
                      id="validationDefault02"
                      placeholder="Enter Password"
                      required
                    />
                  </div>
                  <br />
                  <div style={{textAlign:"center"}}>
                    <button type="submit" className="btn btn-lg btn-primary mt-3">
                      <strong>Login </strong>
                    </button>
                  </div>
                </form>
              </main>
            </Col>

            <Col xs={1} lg={3} md={3}></Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}

