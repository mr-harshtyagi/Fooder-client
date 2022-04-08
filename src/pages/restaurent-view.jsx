import Navbar from "../components/navbar"
import Appbar from "../components/appbar";
import { useParams,useNavigate } from "react-router-dom";
import { useState,useEffect } from "react";
import Dish from "../components/dish";
import axios from "axios";

export default function RestaurentView() {
  let params = useParams();
  let navigate =useNavigate();
  const [restaurent, setRestaurent] = useState({});
  const [isLoaded, setIsLoaded] =useState(false);
  useEffect(() => {
        axios
          .get(
            `http://localhost:5000/getrestaurentdetails/${params.restaurentId}`
          )
          .then(function (response) {
            setRestaurent(response.data)
            setIsLoaded(true)
            if(response.data.status === false)
            navigate("/")
            
          })
          .catch(function (error) {
            console.log(error);
          })

  }, []);
  
  
  return (
    <div>
      <Navbar />
      {isLoaded ?(
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
                {" " + restaurent.rating}
                <hr style={{ border: "none" }} />
                <>Rating</>
              </h6>
              <h5
                style={{
                  fontSize: "2rem",
                }}
              >
                {restaurent.name}
              </h5>
              <h6 style={{ fontSize: "0.8rem", color: "grey" }}>
                {restaurent.type} | {restaurent.category}
              </h6>

              <div>
                <h4 style={{ marginTop: "40px" }}>
                  <strong>Menu (5)</strong>{" "}
                </h4>
                {restaurent.dish.map((dish) =>
              dish.status && (
                <Dish
                  key={dish.id}
                  id={dish.id}
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


      ): ( <h1>Loading ...</h1>)    }
           
         
      <Appbar />
    </div>
  );
}
