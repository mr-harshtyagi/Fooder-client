import Navbar from "../components/navbar";
import { useContext, useState} from "react";
import { useNavigate,Link } from "react-router-dom";
import CartContext from "../cartcontext";
import SimpleBottomNavigation from "../components/bottomnavigation";

export default function CartView() {
  let a;
  let navigate = useNavigate();
  const { items, total, removeDish } = useContext(CartContext);
  const [differentRestaurent,setDifferentRestaurent] =useState(false)
  return (
    <div className="padding">
      <Navbar />
      {items.length !== 0 ? (
        <>
          <h1 style={{ marginBottom: "30px", fontWeight: "700" }}>
            {" "}
            Cart Items
          </h1>
          {items.map((item, index) => {
            return (
              <div className="row">
                <h5
                  className="col col-8"
                  style={{ fontWeight: "600", fontSize: "1.5rem" }}
                >
                  {item.nonveg ? (
                    <div
                      style={{
                        float: "left",
                        height: "100%",
                        paddingRight: "8px",
                      }}
                    >
                      <img
                        style={{
                          height: "20px",
                          width: "20px",
                          marginBottom: "2px",
                        }}
                        src="images/nonveg.png"
                        alt=""
                      />
                    </div>
                  ) : (
                    <div
                      style={{
                        float: "left",
                        height: "100%",
                        paddingRight: "8px",
                      }}
                    >
                      <img
                        style={{
                          height: "20px",
                          width: "20px",
                          marginBottom: "2px",
                        }}
                        src="images/veg.png"
                        alt=""
                      />
                    </div>
                  )}{" "}
                  {item.name}
                  <p
                    style={{
                      fontWeight: "600",
                      color: "grey",
                      fontSize: "1rem",
                      paddingLeft: "27px",
                    }}
                  >
                    {item.resName}
                  </p>
                </h5>

                <h6
                  className="col col-4"
                  style={{
                    fontSize: "1rem",
                    color: "black",
                    textAlign: "center",
                  }}
                >
                  {"₹ "}
                  {item.price}{" "}
                  <i
                    onClick={() => {
                      removeDish(index);
                      setDifferentRestaurent(false);
                    }}
                    className="bi bi-trash-fill"
                    style={{
                      marginLeft: "20px",
                      fontSize: "1.2rem",
                      color: "red",
                    }}
                  ></i>
                </h6>
              </div>
            );
          })}
          <hr />
          <div className="row">
            <h5 className="col col-8" style={{ fontWeight: "800" }}>
              Item Total :
            </h5>
            <h5
              className="col col-4"
              style={{ fontWeight: "800", textAlign: "center" }}
            >
              {"₹ "}
              {total}
            </h5>
          </div>
          <hr />
          {differentRestaurent && (
            <div>
              <h5
                style={{
                  position: "relative",
                  padding: "2px",
                  textAlign: "center",
                  color: "white",
                  backgroundColor: "#FF6B6B",
                  borderRadius: "20px",
                }}
              >
                <strong>Please add items from the same Restaurent</strong>
              </h5>
            </div>
          )}

          <div className="col text-center">
            <button
              onClick={() => {
                let diffres = 0;
                for (a = 0; a < items.length - 1; a++) {
                  if (
                    Math.floor(Number(items[a].id / 1000)) !==
                    Math.floor(Number(items[a + 1].id / 1000))
                  ) {
                    diffres = 1;
                    break;
                  }
                }
                if (diffres === 0) {
                  navigate("/checkout");
                } else {
                  setDifferentRestaurent(true);
                  console.log("Not allowed for checkout");
                }
              }}
              style={{ borderRadius: "30px" }}
              className="btn btn-success btn-lg"
            >
              Proceed to Checkout
            </button>
          </div>
        </>
      ) : (
        <>
          <div className="text-center pt-4">
            <i
              style={{ fontSize: "7rem", color: "grey" }}
              className="bi bi-cart-x"
            ></i>
            <h2 style={{ fontWeight: "400" }}>YOUR CART IS EMPTY</h2>
            <p>Please add some items from the menu</p>
            <Link to={"/"}>
              <button className="btn btn-lg btn-success mt-3">
                <strong> Browse Restaurents</strong>
              </button>
            </Link>
          </div>
        </>
      )}

      <SimpleBottomNavigation />
    </div>
  );
}
