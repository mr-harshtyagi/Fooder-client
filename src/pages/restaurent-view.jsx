import Navbar from "../components/navbar"
import { useParams,useNavigate } from "react-router-dom";
import { useState,useEffect } from "react";
import Dish from "../components/dish";
import axios from "axios";
import { Button,Modal } from "react-bootstrap";
import SyncLoader from "react-spinners/SyncLoader"
import SimpleBottomNavigation from "../components/bottomnavigation";

export default function RestaurentView() {
  let params = useParams();
  let navigate =useNavigate();
   const [show, setShow] = useState(false);
   const handleClose = () => setShow(false);
   const handleShow = () => setShow(true);
   const [restaurent, setRestaurent] = useState({});
   const [isLoaded, setIsLoaded] =useState(false);
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
            <h4 style={{ marginTop: "40px" }}>
              <strong>Menu (5)</strong>{" "}
            </h4>
            {restaurent.dish.map(
              (dish) =>
                dish.status && (
                  <Dish
                    key={dish.id}
                    id={dish.id}
                    resName={dish.resName}
                    img={dish.img}
                    name={dish.name}
                    price={dish.price}
                    des={dish.des}
                    nonveg={dish.nonveg}
                  />
                )
            )}
          </div>
          <div
            style={{
              position: "fixed",
              bottom: "70px",
              right: "0px",
              zIndex: "1",
              width: "100%",
              textAlign: "center",
            }}
          >
            <button
              style={{
                display: "inline-block",
                borderRadius: "20px",
              }}
              className="btn btn-dark"
              onClick={() => {
                handleShow();
              }}
            >
              <strong>BROWSE MENU</strong>{" "}
            </button>
          </div>
        </div>
      ) : (
        <div className="text-center mt-5">
          <SyncLoader color={"#444645"} size={15} />
        </div>
      )}
      <div>
        <Modal show={show} onHide={handleClose} centered>
          <Modal.Body>
            <h3
              style={{ cursor: "pointer", marginBottom: "15px" }}
              onClick={() => {
                setShow(false);
              }}
            >
              Category 1
            </h3>
            <h3
              style={{ cursor: "pointer", marginBottom: "15px" }}
              onClick={() => {
                setShow(false);
              }}
            >
              Category 2
            </h3>
            <h3
              style={{ cursor: "pointer", marginBottom: "15px" }}
              onClick={() => {
                setShow(false);
              }}
            >
              Category 3
            </h3>
            <h3
              style={{ cursor: "pointer", marginBottom: "15px" }}
              onClick={() => {
                setShow(false);
              }}
            >
              Category 4
            </h3>
            <h3
              style={{ cursor: "pointer", marginBottom: "15px" }}
              onClick={() => {
                setShow(false);
              }}
            >
              Category 5
            </h3>
            <h3
              style={{ cursor: "pointer", marginBottom: "15px" }}
              onClick={() => {
                setShow(false);
              }}
            >
              Category 6
            </h3>
            <h3
              style={{ cursor: "pointer", marginBottom: "15px" }}
              onClick={() => {
                setShow(false);
              }}
            >
              Category 7
            </h3>
            <h3
              style={{ cursor: "pointer", marginBottom: "15px" }}
              onClick={() => {
                setShow(false);
              }}
            >
              Category 8
            </h3>
            <h3
              style={{ cursor: "pointer", marginBottom: "15px" }}
              onClick={() => {
                setShow(false);
              }}
            >
              Category 9
            </h3>
            <h3
              style={{ cursor: "pointer", marginBottom: "15px" }}
              onClick={() => {
                setShow(false);
              }}
            >
              Category 10
            </h3>
          </Modal.Body>
        </Modal>
      </div>
      <SimpleBottomNavigation />
    </div>
  );
}
