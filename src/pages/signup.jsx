import Navbar from "../components/navbar";  
import { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

export default function Signup() {
  const [successful , setSuccessful]= useState(false);
  let navigate = useNavigate();
 
  return (
    <div>
      <Navbar />
      {successful ? (
        <div style={{ textAlign: "center", paddingTop: "40px" }}>
          <div className="text-center" style={{ padding: "0 10px" }}>
            <i
              style={{ fontSize: "6rem", color: "#1AA260" }}
              className="bi bi-check-circle-fill"
            ></i>
            <h1
              style={{
                fontSize: "1.5rem",
                color: "gray",
                marginBottom: "20px",
              }}
            >
              Signed Up successfully{" "}
            </h1>
            <h1 style={{ fontSize: "1.2rem", marginBottom: "20px" }}>
              Please verify your email.{" "}
            </h1>
          </div>
          <br />
          <button
            onClick={() => {
              navigate("/login");
            }}
            className="btn btn-lg btn-primary mt-3"
          >
            <strong>Continue to Login</strong>
          </button>
        </div>
      ) : (
        <div
          style={{
            paddingTop: "30px",
          }}
        >
          <Container>
            <Row>
              <Col xs={1} lg={3} md={3}></Col>
              <Col xs={10} lg={6} md={6}>
                <main className="form-signin">
                  <h1 className="fw-normal text-center">SIGN UP</h1>
                  <br />
                  <form onSubmit={(e)=>{
                    e.preventDefault();
                    setSuccessful(true)

                  }}>
                    <div className="col-md-12">
                      <label
                        htmlFor="validationDefault01"
                        className="form-label"
                      >
                        Email
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="validationDefault01"
                        placeholder="Enter your BITS email"
                        required
                      />
                    </div>
                    <div className="col-md-12 mt-2">
                      <label
                        htmlFor="validationDefault02"
                        className="form-label"
                      >
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
                    <div className="col-md-12 mt-2">
                      <label
                        htmlFor="validationDefault03"
                        className="form-label"
                      >
                        Confirm Password
                      </label>
                      <input
                        type="confirm password"
                        className="form-control"
                        id="validationDefault03"
                        placeholder="Confirm Password"
                        required
                      />
                    </div>
                    <br />
                    <div style={{ textAlign: "center" }}>
                      <button
                      type="submit"
                      className="btn btn-lg btn-primary mt-3"
                      >
                        <strong>Sign Up</strong>
                      </button>
                    </div>
                  </form>
                </main>
              </Col>
              <Col xs={1} lg={3} md={3}></Col>
            </Row>
          </Container>
          <p style={{position :"fixed", bottom :20,width:"100%"}} className="text-muted text-center">© Fooder</p>
        </div>
      )}
    </div>
  );
}

