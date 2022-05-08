import Navbar from "../components/navbar";
import SimpleBottomNavigation from "../components/bottomnavigation";
import { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";

export default function TrackOrder() {
  const [fontSize, setFontSize] = useState("1.2rem"); // 1rem
  const [fontWeight, setFontWeight] = useState("600"); //400
  const [color, setColor] = useState("green"); //grey
  const [icon, setIcon] = useState("bi bi-check-circle-fill"); //bi bi-circle-fill
  const [subtotal, setSubtotal] = useState(0);
  const [charges, setCharges] = useState(0);
  const [grandTotal, setGrandTotal] = useState(0);
  const data = [
    {item_name: "Pizza",price: 100,},
    {item_name: "Juice",price: 100,},
    {item_name: "Burger", price: 100 },
    {item_name: "Noodles", price: 120 },
  ];
const [items, setItems] = useState(data);
useEffect(()=>{
  let total =0;
  items.forEach((item)=>{
    total+=item.price;
  })
  setSubtotal(total);
  setCharges((0.02*total).toFixed(2))
  setGrandTotal((1.02*total).toFixed(2))
},[])

  return (
    <div>
      <Navbar />
      <div style={{ padding: "10px", marginTop: "10px" }}>
        <div style={{textAlign:"center"}}>
          <h1 style={{ marginBottom: "20px", fontSize: "1.7rem" }}>
            --Order Status--
          </h1>
        </div>
        <div
          className="mt-1"
          style={{
            backgroundColor: "#E9D5DA",
            padding: "10px",
            borderRadius: "10px",
            fontWeight: "900",
          }}
        >
          <h4
            style={{
              fontSize: "1.5rem",
              fontWeight: "800",
            }}
          >
            Estimated Time Left ~{" "}
          </h4>
          <h4
            style={{
              fontSize: "2rem",
              color: "#4E944F", //#F55353 -red #4E944F-green
              fontWeight: "900",
            }}
          >
            10 mins
          </h4>
        </div>
        <div
          className="shadow p-3 mb-3 bg-body rounded"
          style={{
            padding: "10px",
            textAlign: "left",
            width: "100%",
          }}
        >
          <h2 style={{ fontSize: "1.2rem" }}>
            <i
              style={{ marginRight: "10px", color: "green" }}
              className="bi bi-check-circle-fill"
            ></i>
            Order Placed
          </h2>
          <h2 style={{ fontSize: "1.2rem" }}>
            <i
              style={{ marginRight: "10px", color: "green" }}
              className="bi bi-check-circle-fill"
            ></i>
            Order Accepted
          </h2>
          <h2 style={{ fontSize: "1.2rem" }}>
            <i
              style={{ marginRight: "10px", color: "green" }}
              className="bi bi-check-circle-fill"
            ></i>
            Being Baked
          </h2>
          <h2 style={{ fontSize: `${fontSize}`, fontWeight: `${fontWeight}` }}>
            <i
              style={{ marginRight: "10px", color: `${color}` }}
              className={icon}
            ></i>
            Order Completed
          </h2>
        </div>
      </div>

      {/* Receipt div */}

      <div style={{ padding: "10px" }}>
        <div
          className="shadow p-3 mb-3 bg-body rounded"
          style={{
            padding: "10px",
            textAlign: "left",
            width: "100%",
          }}
        >
          <h2 style={{ fontSize: "1.2rem", fontWeight: "700" }}>
            Order No. #1000001
          </h2>
          <h4 style={{ fontSize: "1rem", fontWeight: "400" }}>
            09:10 AM | Payment Mode : UPI | 2 Items
          </h4>
          <Table>
            <thead>
              <tr>
                <th>Item Name</th>
                <th>Total</th>
              </tr>
            </thead>
            <tbody>
              {items.map((item, index) => {
                if (index === items.length - 1) {
                  return (
                    <tr
                      style={{
                        borderBottom: "dashed",
                        borderColor: "grey",
                        borderBottomWidth: "2px",
                      }}
                    >
                      <td>{item.item_name}</td>
                      <td>₹ {item.price}</td>
                    </tr>
                  );
                } else {
                  return (
                    <tr style={{ borderColor: "white" }}>
                      <td>{item.item_name}</td>
                      <td>₹ {item.price}</td>
                    </tr>
                  );
                }
              })}
              <tr style={{ fontWeight: "600", borderColor: "white" }}>
                <td>Sub Total</td>
                <td>₹ {subtotal}</td>
              </tr>
              <tr style={{ fontWeight: "600", borderColor: "white" }}>
                <td>Taxes & Charges</td>
                <td>₹ {charges}</td>
              </tr>
              <tr
                style={{
                  fontWeight: "700",
                  borderBottom: "solid",
                  borderColor: "grey",
                }}
              >
                <td>Grand Total</td>
                <td>₹ {grandTotal}</td>
              </tr>
            </tbody>
          </Table>
        </div>
      </div>
      <SimpleBottomNavigation />
    </div>
  );
}
