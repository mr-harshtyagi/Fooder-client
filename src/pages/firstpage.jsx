import Navbar from "../components/navbar";
import { useNavigate } from "react-router-dom";

export default function FirstPage() {
   let navigate = useNavigate();
  return (
    <div>
      <Navbar />
      <div
        style={{
          textAlign: "center",
          marginTop: "50px",
          paddingLeft: "20px",
          paddingRight: "20px",
        }}
      >
        <button
          onClick={() => {
            navigate("/signup");
          }}
          className="btn btn-lg btn-primary"
        >
          <strong>Sign Up </strong>
        </button>
        <h2 style={{ marginTop: "20px", color: "grey" }}>OR</h2>
        <br />
        <h3>Already Signed up?</h3>
        <button
          onClick={() => {
            navigate("/login");
          }}
          className="btn btn-lg btn-primary mt-3"
        >
          <strong>Login </strong>
        </button>
      </div>
      <p
        style={{ position: "fixed", bottom: 20, width: "100%" }}
        className="text-muted text-center"
      >
        © Fooder
      </p>
    </div>
  );
}
