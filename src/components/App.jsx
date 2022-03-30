import Navbar from "./navbar";
import Appbar from "./appbar";
import Card from "./featured-card";
import Restaurent from "./restaurent";
import RestaurentDisabled from "./restaurent-disabled";
import { useEffect, useState } from "react";


function App() {
  const [restaurents, setRestaurents] = useState([]); 
  useEffect(() =>{
      fetch("http://localhost:5000/restaurents")
      .then(res=> res.json())
      .then(json => setRestaurents(json));
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
      </div>
      <Appbar />
    </div>
  );

}

export default App;
