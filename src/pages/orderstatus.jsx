// this page comes after we click on track order 
// take care that track order button is not the one on account view page
// it will be on a active order component. a varient of original 
// order component with track green button
import Navbar from "../components/navbar";
import SimpleBottomNavigation from "../components/bottomnavigation";
import TrackOrderCard from "../components/track-order-card";

export default function OrderStatus() {
  return (
    <>
      <Navbar />
      <div style={{ padding: "10px", marginTop: "10px" }}>
        <h1 style={{ marginBottom: "10px", fontSize: "1.5rem" }}>
          Active Orders
        </h1>
        <TrackOrderCard
          key="1"
          resName="Restaurent X"
          orderId="1000001"
          date="07 May"
          total="200"
        />
      </div>
      <SimpleBottomNavigation />
    </>
  );
}
