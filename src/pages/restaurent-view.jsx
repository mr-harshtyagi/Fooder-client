import Navbar from "../components/navbar"
import { useParams,useNavigate } from "react-router-dom";
import { useState,useEffect,useRef } from "react";
import Dish from "../components/dish";
import axios from "axios";
import SyncLoader from "react-spinners/SyncLoader"
import SimpleBottomNavigation from "../components/bottomnavigation";

export default function RestaurentView(props) {
  let params = useParams();
  let navigate =useNavigate();
  const ref = useRef();
   const [show, setShow] = useState(false);
   const [restaurent, setRestaurent] = useState({});
   const [dishes, setDishes] = useState([]);
   const [isLoaded, setIsLoaded] =useState(false);
   const [dishesLoaded, setDishesLoaded] = useState(false);
    useEffect(() => {
      const checkIfClickedOutside = (e) => {
        // If the menu is open and the clicked target is not within the menu,
        // then close the menu
        if (show && ref.current && !ref.current.contains(e.target)) {
          setShow(false);
        }
      };

      document.addEventListener("mousedown", checkIfClickedOutside);

      return () => {
        // Cleanup the event listener
        document.removeEventListener("mousedown", checkIfClickedOutside);
      };
    }, [show]);

  useEffect(() => {
        axios
          .get(
            `https://fooder-app-server.herokuapp.com/getrestaurentdetails/${params.restaurentId}`
          )
          .then(function (response) {
            setRestaurent(response.data);
            setIsLoaded(true);
            if (response.data.status === false) navigate("/");
          })
          .catch(function (error) {
            console.log(error);
          });
          axios
            .get(
              `https://fooder-app-server.herokuapp.com/alldishes/${params.restaurentId}`
            )
            .then(function (response) {
              setDishes(response.data);
               setDishesLoaded(true);
            
            })
            .catch(function (error) {
              console.log(error);
            });

  }, []); 
  return (
    <div>
      <Navbar />
      {isLoaded ? (
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
            <h2 style={{ marginTop: "50px",marginBottom: "20px", textAlign: "center",fontSize:"1.8rem" }}>
              <strong>-- Menu --</strong>{" "}
            </h2>
            {dishesLoaded ? (
              <>
                {dishes.map((category) => {
                  return (
                    <>
                      <div
                        id={category.category_name}
                        style={{
                          fontWeight: "700",
                          fontSize: "2rem",
                        }}
                      >
                        {category.category_name}
                        {" ("}
                        {category.items.length}
                        {") "}
                      </div>
                      
                      {category.items.map((dish) => {
                        return (
                          <Dish
                            key={dish.id}
                            id={dish.id}
                            resName={dish.resName}
                            img={dish.img}
                            name={dish.name}
                            price={dish.price}
                            des={dish.des}
                            status={dish.status}
                            nonveg={dish.nonveg}
                          />
                        );
                      })}
                    </>
                  );
                })}
              </>
            ) : (
              <div className="text-center mt-5">
                <SyncLoader color={"#444645"} size={15} />
              </div>
            )}
          </div>
          <div
            style={{
              position: "fixed",
              bottom: "65px",
              right: "10px",
              zIndex: "1",
            }}
          >
            <button
              style={{
                borderRadius: "30px",
                paddingLeft: "15px",
                paddingRight: "15px",
                paddingBottom: "8px",
              }}
              className="btn btn-dark"
              onClick={() => {
                setShow(oldstate => !oldstate);
              }}
            >
              <i className="bi bi-list"></i> <strong>MENU</strong>
            </button>
          </div>
        </div>
      ) : (
        <div className="text-center mt-5">
          <SyncLoader color={"#444645"} size={15} />
        </div>
      )}
      {show && (
        <div
          className="wrapper"
          ref={ref}
          style={{
            textAlign: "center",
            paddingTop: "10px",
            paddingBottom: "10px",
            backgroundColor: "black",
            width: "65%",
            height: "300px",
            position: "fixed",
            borderRadius: "20px",
            bottom: 63,
            right: 8,
            zIndex: "2",
            overflowY: "scroll",
          }}
        >
          {dishes.map((category) => {
            return (
              <>
                <a
                  href={"#" + category.category_name}
                  style={{
                    fontSize: "1.5rem",
                    fontWeight: "500",
                    color: "white",
                    marginTop: "25px",
                    textDecoration: "none",
                  }}
                  onClick={() => {
                    setShow(false);
                  }}
                >
                  <div
                    style={{
                      display: "inline",
                      float: "left",
                      paddingLeft: "25px",
                    }}
                  >
                    {category.category_name}
                  </div>
                  <div
                    style={{
                      display: "inline",
                      float: "right",
                      paddingRight: "25px",
                    }}
                  >
                    {"  ( "} {category.items.length}
                    {" ) "}
                  </div>
                </a>
                <br />
              </>
            );
          })}
        </div>
      )}
      <SimpleBottomNavigation />
    </div>
  );
}

