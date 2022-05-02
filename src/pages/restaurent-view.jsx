import Navbar from "../components/navbar"
import { useParams,useNavigate } from "react-router-dom";
import { useState,useEffect } from "react";
import Dish from "../components/dish";
import axios from "axios";
import { Modal } from "react-bootstrap";
import SyncLoader from "react-spinners/SyncLoader"
import SimpleBottomNavigation from "../components/bottomnavigation";

export default function RestaurentView() {
  let params = useParams();
  let navigate =useNavigate();
  const categories = [
    "Category 1",
    "Category 2",
    "Category 3",
    "Category 4",
    "Category 5",
    "Category 6",
    "Category 7",
    
  ];
   const [show, setShow] = useState(false);
   const handleClose = () => setShow(false);
   const handleShow = () => setShow(true);
   const [restaurent, setRestaurent] = useState({});
   const [dishes, setDishes] = useState([]);
   const [isLoaded, setIsLoaded] =useState(false);
   const [dishesLoaded, setDishesLoaded] = useState(false);

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
            <h2 style={{ marginTop: "40px", textAlign: "center" }}>
              <strong>-- Menu --</strong>{" "}
            </h2>
            {dishesLoaded ? (
              <>
                {dishes.map((category) => {
                  return (
                    <>
                      <h2
                        style={{
                          fontWeight: "700",
                          fontSize: "2rem",
                        }}
                      >
                        {category.category_name}
                        {" ("}
                        {category.items.length}
                        {") "}
                      </h2>
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
                handleShow();
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
      <div>
        <Modal
          show={show}
          onHide={handleClose}
          style={{ color: "white" }}
          centered
        >
          <Modal.Body style={{ backgroundColor: "black" }}>
            {categories.map((category) => {
              return (
                <h3
                  style={{ cursor: "pointer", marginBottom: "15px" }}
                  onClick={() => {
                    setShow(false);
                  }}
                >
                  {category}
                </h3>
              );
            })}
          </Modal.Body>
        </Modal>
      </div>
      <SimpleBottomNavigation />
    </div>
  );
}
