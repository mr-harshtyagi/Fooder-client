import Navbar from "../components/navbar";
import Appbar from "../components/appbar";
import { useContext, useEffect, useState } from "react";
import CartContext from "../cartcontext";
import { Link } from "react-router-dom";
import SyncLoader from "react-spinners/SyncLoader"

export default function Checkout() {
  const {items,setItems,setTotal} = useContext(CartContext);
  const [orderData, setOrderData] = useState({});
  const [isLoaded ,setIsLoaded] =useState(false);
  useEffect(()=>   
  {
    fetch("https://fooder-app-server.herokuapp.com/checkout", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(items),
    })
      .then((response) => response.json())
      .then((order_data) => {
      setOrderData(order_data) 
      setIsLoaded(true)
      setItems([])
      setTotal(0)

    })
      .catch((err) => console.log(err));
  }
  ,[]) 
  return (
    <div className="padding text-center">
      <Navbar />
      {isLoaded ? (
        <>
          <i
            style={{ fontSize: "6rem", color: "#1AA260" }}
            className="bi bi-check-circle-fill"
          ></i>
          <h1
            style={{ fontSize: "1.5rem", color: "gray", marginBottom: "20px" }}
          >
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
        </>
      ) : (
        <div className="text-center mt-5">
          <SyncLoader color={"#444645"} size={15} />
        </div>
      )}

      <Appbar />
    </div>
  );
}
