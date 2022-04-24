import Navbar from "./navbar";
import Card from "./featured-card";
import Restaurent from "./restaurent";
import RestaurentDisabled from "./restaurent-disabled";
import { useEffect, useState } from "react";
import SyncLoader from "react-spinners/SyncLoader"
import axios from "axios";
import SimpleBottomNavigation from "./bottomnavigation";

function App() {
  const [restaurents, setRestaurents] = useState([]); 
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() =>{
       axios
         .get(
           "https://fooder-app-server.herokuapp.com/restaurents"
         )
         .then(function (response) {
           setRestaurents(response.data);
           setIsLoaded(true);
         })
         .catch(function (error) {
           console.log(error);
         });
  },[])
  
  return (
    <div>
      <Navbar />
      <div className="padding">
        <h3 style={{ marginTop: "10px" }}>
          <strong>Today's Featured</strong>{" "}
        </h3>
        <Card />
        <h3 className="bi bi-egg-fried">
          <strong> Nearby Restaurents</strong>{" "}
        </h3>
        <h6 style={{ color: "grey", marginBottom: "20px" }}>
          Discover unique tastes near you.
        </h6>
        {isLoaded ? (
          <>
            {restaurents.map((restaurent) =>
              restaurent.status ? (
                <Restaurent
                  key={restaurent.id}
                  id={restaurent.id}
                  img={restaurent.img}
                  name={restaurent.name}
                  rating={restaurent.rating}
                  type={restaurent.type}
                  category={restaurent.category}
                />
              ) : (
                <RestaurentDisabled
                  key={restaurent.id}
                  id={restaurent.id}
                  img={restaurent.img}
                  name={restaurent.name}
                  rating={restaurent.rating}
                  type={restaurent.type}
                  category={restaurent.category}
                />
              )
            )}
          </>
        ) : (
          <div className="text-center mt-5">
            <SyncLoader color={"#444645"} size={15} />
          </div>
        )}
      </div>
      <SimpleBottomNavigation/>
    </div>
  );

}

export default App;
