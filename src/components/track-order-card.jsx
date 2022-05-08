// for making this order component , use dish for knowledge and reference

import { useNavigate } from "react-router-dom";

export default function TrackOrderCard(props) {
  let navigate=useNavigate();
  return (
    <div
      className="shadow p-3 mb-3 bg-body rounded"
      style={{
        padding: "10px",
        textAlign: "left",
        width: "100%",
    
      }}
    >
      <h2 style={{ fontSize: "1.4rem", float: "right", color: "grey" }}>
        {props.resName}
      </h2>
      <h2 style={{ fontSize: "1rem" }}>
        Order No.
        <span style={{ color: "#4E944F", fontWeight: "700" }}>
          {" "}
          #{props.orderId}
        </span>
      </h2>
      <h2 style={{ fontSize: "1.2rem" }}>Items (2)</h2>
      <h3 style={{ fontSize: "0.8rem", fontWeight: "400", color: "grey" }}>
        Pizza , Burger
      </h3>
      <hr />
      <button onClick={()=> {navigate("/trackorder")}} style={{float:"right"}} className="btn btn-success">Track Order</button>
      <h2 style={{ fontSize: "1rem" }}>
        Order placed on <span style={{ color: "#4E944F" }}>{props.date}</span>
      </h2>
      <h2 style={{ fontSize: "1rem" }}>
        for Amount
        <span style={{ color: "#4E944F", fontWeight: "700" }}>
          {" "}
          Rs. {props.total}
        </span>
      </h2>
    </div>
  );
}
