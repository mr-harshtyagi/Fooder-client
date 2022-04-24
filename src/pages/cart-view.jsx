import Navbar from "../components/navbar";
import Appbar from "../components/appbar";
import { useContext, useEffect, useState} from "react";
import { useNavigate } from "react-router-dom";
import CartContext from "../cartcontext";

export default function CartView() {
  let a;
  let navigate = useNavigate();
  const { items, total, removeDish } = useContext(CartContext);
  const [cartEmpty,setCartEmpty]=useState(false);
  const [differentRestaurent,setDifferentRestaurent] =useState(false)
  
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
              {item.price}{" "}
              <i
                onClick={() => {removeDish(index)
                setDifferentRestaurent(false)}}
                className="bi bi-trash-fill"
                style={{ marginLeft: "20px", fontSize: "1.2rem", color: "red" }}
              ></i>
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
              setCartEmpty(true);
            } 
            else
            {
              let diffres =0;
              for (a = 0; a < (items.length-1); a++) {
                if (
                  Math.floor(Number(items[a].id / 1000)) !== Math.floor(Number(items[a+1].id / 1000))) {
                  diffres=1;
                  break;}}
                if(diffres === 0){
                  navigate("/checkout");
                }
                else{
                  setDifferentRestaurent(true)
                 console.log("Not allowed for checkout");
                }
                }
            }
        }
          style={{ borderRadius: "30px" }}
          className="btn btn-success btn-lg"
        >
          Proceed to Checkout
        </button>
      </div>
      {cartEmpty && (
        <h5
          style={{
            marginTop: "20px",
            textAlign: "center",
            color: "white",
            backgroundColor: "black",
            borderRadius: "20px",
          }}
        >
          Please ADD items to your Cart
        </h5>
      )}
      {differentRestaurent && 
      (
        <h5
          style={{
            marginTop: "20px",
            textAlign: "center",
            color: "white",
            backgroundColor: "black",
            borderRadius: "20px"
          }}
        >
          Please ADD items from the same Restaurent.
        </h5>
      )}

      <Appbar />
    </div>
  );
}
