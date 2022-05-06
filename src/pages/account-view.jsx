import Navbar from "../components/navbar";
import SimpleBottomNavigation from "../components/bottomnavigation";
import { useNavigate } from "react-router-dom";

export default function AccountView() {
  let navigate = useNavigate();
  return (
    <div>
      <Navbar />
      <div
        style={{
          textAlign: "center",
          marginTop: "20px",
          paddingLeft: "20px",
          paddingRight: "20px",
        }}
      >
        <i
          style={{ fontSize: "5rem", color: "grey" }}
          className="bi bi-person-circle"
        ></i>
        <h2 style={{ fontWeight: "700" }}>Mr. Harsh Tyagi</h2>
        <h5 style={{ fontWeight: "400", color: "grey" }}>
          f20202068@goa.bits-pilani.ac.in
        </h5>
        <hr />
        <div
          style={{
            textAlign: "left",
            marginTop: "30px",
          }}
        >
          <div
            onClick={() => {
              navigate("/orderstatus");
            }}
            style={{
              backgroundColor: "#E9D5DA",
              borderRadius: "10px",
              padding: "20px 10px",
              fontSize: "1.6rem",
              fontWeight: "600",
              marginBottom: "20px",
            }}
          >
            <i className="bi bi-pin-map m-3"></i>Track Order
            <div
              style={{
                height: "15px",
                width: "15px",
                backgroundColor: "#4E944F",
                display: "inline",
                position: "absolute",
                marginLeft: "10px",
                marginTop: "15px",
                borderRadius: "50%",
              }}
            ></div>
          </div>
          <div
            onClick={() => {
              navigate("/orderhistory");
            }}
            style={{
              backgroundColor: "#E9D5DA",
              borderRadius: "10px",
              padding: "20px 10px",
              fontSize: "1.6rem",
              fontWeight: "600",
            }}
          >
            <i className="bi bi-list-ul m-3"></i>Order History
          </div>
        </div>
        <button className="btn btn-danger mt-5">
          <strong>LOGOUT </strong>
        </button>
      </div>
      <SimpleBottomNavigation />
    </div>
  );
}
