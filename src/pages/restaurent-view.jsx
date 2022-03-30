import Navbar from "../components/navbar"
import Appbar from "../components/appbar";
import { useParams } from "react-router-dom";
 import { useState,useEffect } from "react";
import Dish from "../components/dish";

export default function RestaurentView() {
  const [restaurents, setRestaurents] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/restaurents")
      .then((res) => res.json())
      .then((json) => setRestaurents(json));
  }, []);
  let params = useParams();
  
  
  
  return (
    <div>
      <Navbar />
      {restaurents
        .filter((restaurent) => restaurent.id === Number(params.restaurentId))
        .map((filteredRestaurent) => {
          return (
            <div
              className="restaurent-view"
              style={{
                padding: "20px",
                borderBottomLeftRadius: "20px",
                borderBottomRightRadius: "20px",
              }}
            >
              <h6
                className="bi bi-star-fill"
                style={{
                  float: "right",
                  color: "#4caf50",
                  padding: "10px 15px 10px 15px",
                  borderRadius: "10px",
                  boxShadow: "0px 0px 40px -20px rgba(87,84,87,1)",
                }}
              >
                {" " + filteredRestaurent.rating}
                <hr style={{ border: "none" }} />
                <>Rating</>
              </h6>
              <h5
                style={{
                  fontSize: "2rem",
                }}
              >
                {filteredRestaurent.name}
              </h5>
              <h6 style={{ fontSize: "0.8rem", color: "grey" }}>
                {filteredRestaurent.type} | {filteredRestaurent.category}
              </h6>

              <div>
                <h4 style={{ marginTop: "40px" }}>
                  <strong>Menu (5)</strong>{" "}
                </h4>
                {
          filteredRestaurent.dish.map((dish) =>
              dish.status && (
                <Dish
                  key={dish.id}
                  img={dish.img}
                  name={dish.name}
                  price={dish.price}
                  des={dish.des}
                  nonveg={dish.nonveg}
                />
              )
          )}
              </div>
            </div>
          );})}
      <Appbar />
    </div>
  );
}
