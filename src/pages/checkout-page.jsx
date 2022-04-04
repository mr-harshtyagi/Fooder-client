import Navbar from "../components/navbar";
import Appbar from "../components/appbar";
import { useContext, useEffect, useState } from "react";
import CartContext from "../cartcontext";
import { Link } from "react-router-dom";

export default function Checkout() {
  const {items} = useContext(CartContext);
  const [orderData, setOrderData] = useState({});
  useEffect(()=>   
  {
    fetch("http://localhost:5000/checkout", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(items),
    })
      .then((response) => response.json())
      .then((order_data) => setOrderData(order_data))
      .catch((err) => console.log(err));
  }
  ,[items]) 
  return (
    <div className="padding text-center">
      <Navbar />
      <i
        style={{ fontSize: "6rem", color: "#1AA260" }}
        className="bi bi-check-circle-fill"
      ></i>
      <h1 style={{ fontSize: "1.5rem", color: "gray", marginBottom: "20px" }}>
        Order successfull{" "}
      </h1>
      <table className="table table-light">
        <thead className="table-secondary">
          <tr>
            <th colSpan={2}>Order Details</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Order ID</td>
            <td>{orderData.order_id}</td>
          </tr>
          <tr>
            <td>Order Total</td>
            <td>₹ {orderData.order_total}</td>
          </tr>
        </tbody>
      </table>

      <Link to={"/"}>
        <button className="btn btn-primary">Home</button>
      </Link>
      <Appbar />
    </div>
  );
}
