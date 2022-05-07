// you have the reference photo for design.
// make a card component for order 
// for now map it 3 times with static data
import Navbar from "../components/navbar";
import SimpleBottomNavigation from "../components/bottomnavigation";
import Order from "../components/order";
export default function OrderHistory() {
  return (
    <div>
      <Navbar />
      <div style={{ padding: "10px", marginTop: "10px" }}>
        <h1 style={{ marginBottom: "10px", fontSize: "1.5rem" }}>All Orders</h1>
        <Order
          key="1"
          resName="Restaurent X"
          orderId="1000001"
          date="07 May"
          total="200"
        />
        <Order
          key="2"
          resName="Restaurent Y"
          orderId="1000002"
          date="07 May"
          total="100"
        />
        <Order
          key="3"
          resName="Restaurent Z"
          orderId="1000003"
          date="07 May"
          total="400"
        />
      </div>
      <SimpleBottomNavigation />
    </div>
  );
}