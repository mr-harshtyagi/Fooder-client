import { useNavigate } from "react-router-dom";
import CartContext from "../cartcontext";
import { useContext } from "react";

export default function Appbar() {
    let navigate = useNavigate();
    const {items} =useContext(CartContext);
  return (
    <div style={{ marginTop: "60px" }}>
      <nav
        className="navbar fixed-bottom navbar-light bg-dark row"
        style={{
          textAlign: "center",
          borderRadius: "30px",
          margin: "0 10px 5px 10px",
          color: "white",
          fontSize: "1.8rem",
          padding: "0px",
        }}
      >
        <div
          onClick={() => {
            navigate(`/`);
          }}
          className="col bi bi-house appbar-item"
        ></div>

        <div
          onClick={() => navigate(`/cart`)}
          className="col bi bi-bag appbar-item"
        >
          <span style={{ fontSize: "1.2rem" }}> <strong>{items.length}</strong>
          </span>
        </div>
        <div
          onClick={() => navigate(`/account`)}
          className="col bi bi-person-circle appbar-item"
        ></div>
      </nav>
    </div>
  );
}
