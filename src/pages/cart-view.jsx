import Navbar from "../components/navbar";
import Appbar from "../components/appbar";
import { useContext, useState} from "react";
import { useNavigate } from "react-router-dom";
import CartContext from "../cartcontext";

export default function CartView() {
  let navigate = useNavigate();
  const [empty,setEmpty]=useState(false);
  const {items,total,removeDish} =useContext(CartContext);
  
  return (
    <div className="padding">
      <Navbar />
      <h1 style={{ marginBottom: "30px", fontWeight: "700" }}> Cart Items</h1>
      {items.map((item, index) => {
        return (
          <div className="row">
            <h5 className="col" style={{ fontWeight: "600" }}>
              {item.name}
            </h5>
            <h6
              className="col"
              style={{ fontSize: "1rem", color: "black", textAlign: "center" }}
            >
              {"₹ "}
              {item.price} <i onClick={()=> removeDish(index)} className="bi bi-trash" style={{marginLeft:"20px",fontSize:"1.2rem"}}></i>
            </h6>
          </div>
        );
      })}
      <hr />
      <div className="row">
        <h5 className="col" style={{ fontWeight: "800" }}>
          Total :
        </h5>
        <h5 className="col" style={{ fontWeight: "800", textAlign: "center" }}>
          {"₹ "}
          {total}
        </h5>
      </div>
      <hr />
      <div className="col text-center">
        <button
          onClick={() => {
            if (total === 0) {
              setEmpty(true);
            } else navigate("/checkout");
          }}
          style={{ borderRadius: "30px" }}
          className="btn btn-success btn-lg"
        >
          Proceed to Checkout
        </button>
      </div>
      {empty&&<h5 style={{marginTop:"20px", textAlign:"center", color:"white", backgroundColor:"black", borderRadius:"20px"}}>Please ADD items to your Cart</h5>}
      
      

      <Appbar />
    </div>
  );
}
