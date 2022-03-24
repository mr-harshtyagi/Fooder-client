import Navbar from "./navbar";
import Appbar from "./appbar";
import Card from "./featured-card";
import Restaurent from "./restaurent";
import restaurents from "../data/restaurents";


function App() {
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
          {restaurents.map((e) => (
            <Restaurent
              key={e.id}
              id={e.id}
              img={e.img}
              name={e.name}
              rating={e.rating}
              type={e.type}
              category={e.category}
            />
          ))}
        </div>
        <Appbar />
     
    </div>
  );
}

export default App;
