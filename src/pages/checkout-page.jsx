import Navbar from "../components/navbar";
import { useContext, useEffect, useState } from "react";
import CartContext from "../cartcontext";
import { Link } from "react-router-dom";
import SyncLoader from "react-spinners/SyncLoader"
import axios from 'axios'
import SimpleBottomNavigation from "../components/bottomnavigation";

export default function Checkout() {
  const {items,setItems,setTotal} = useContext(CartContext);
  const [orderData, setOrderData] = useState({});
  const [isLoaded ,setIsLoaded] =useState(false);
  useEffect(()=>   
  {
    axios
      .post("https://fooder-app-server.herokuapp.com/checkout", {
        items: items,
        time: new Date().toString(),
      })
      .then(function (response) {
      setOrderData(response.data) 
      setIsLoaded(true)
      setItems([])
      setTotal(0);
      })
      .catch(function (error) {
        console.log(error);
      });
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

      <SimpleBottomNavigation/>
    </div>
  );
}
