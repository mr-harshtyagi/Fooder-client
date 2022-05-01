import CartContext from "../cartcontext";
import { useContext } from "react";

export default function Dish(props) {

  const {addToCart}=useContext(CartContext);
  
  return (
    <div>
      <div style={{ textAlign: "left" }} className="dish-card">
        <img
          style={{
            float: "right",
            height: "100px",
            width: "100px",
            borderRadius: "5px",
            marginLeft:"5px"
          }}
          src={props.img}
          alt="dish-img"
        ></img>

        {props.nonveg ? (
          <img
            style={{ height: "20px", width: "20px",marginBottom:"2px" }}
            src="images/nonveg.png"
            alt="icon"
          />
        ) : (
          <img
            style={{ height: "20px", width: "20px",marginBottom:"2px" }}
            src="images/veg.png"
            alt="icon"
          />
        )}
        <h5 style={{ fontWeight: "600" }}>{props.name}</h5>
        <h6 style={{ fontSize: "1rem", color: "black" }}>
          {"₹ "}
          {props.price}
        </h6>
        <h6 style={{ fontSize: "0.8rem", fontWeight: "400", color: "grey" }}>
          {props.des}
        </h6>
        <button
          onClick={()=> addToCart(props.name, props.price, props.id,props.resName,props.nonveg)}
          className="btn btn-outline-success"
          style={{ float: "right", marginRight: "15px" ,marginBottom:"10px"}}
        >
          <strong>ADD +</strong>
        </button>
      </div>
      <br/>
      <hr />
    </div>
  );
}
 