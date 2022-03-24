import Navbar from "../components/navbar"
import Appbar from "../components/appbar";
import { useParams } from "react-router-dom";
import restaurents from "../data/restaurents";
import Dish from "../components/dish";

export default function RestaurentView() {
      let params = useParams();
  return (
    <div>
      <Navbar />
      {restaurents
        .filter((restaurent) => restaurent.id === params.restaurentId)
        .map((filteredRestaurent) => (
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
          </div>
        ))}
      <div style={{ padding: "20px" }}>
        <h4 style={{ marginTop: "10px" }}>
          <strong>Menu (5)</strong>{" "}
        </h4>
        <Dish
          key="1"
          img="images/pizza-logo.svg"
          name="Pizza"
          price="100"
          des="This is the best pizza in the world. You will go to hell if you don't buy it."
          nonveg={false}
        />
        <Dish
          key="2"
          img="images/food.png"
          name="Schwarma"
          price="120"
          des="This is the worst in the world. You will go to hell if you buy it."
          nonveg={true}
        />
        <Dish
          key="3"
          img="images/food.png"
          name="Chicken Burger"
          price="120"
          des="This is the worst in the world. You will go to hell if you buy it."
          nonveg={true}
        />
        <Dish
          key="4"
          img="images/food.png"
          name="Veg Cheese Burger"
          price="120"
          des="This is the worst in the world. You will go to hell if you buy it."
          nonveg={false}
        />
        <Dish
          key="5"
          img="images/food.png"
          name="Juice"
          price="120"
          des="This is the worst in the world. You will go to hell if you buy it."
          nonveg={false}
        />
      </div>
      
      <Appbar />
    </div>
  );
}
