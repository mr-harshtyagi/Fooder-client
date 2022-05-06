// this page comes after we click on track order 
// take care that track order button is not the one on account view page
// it will be on a active order component. a varient of original 
// order component with track green button
import Navbar from "../components/navbar";
import SimpleBottomNavigation from "../components/bottomnavigation";

export default function OrderStatus() {
  return (
    <div>
      <Navbar />
      <h1>This is Track Order page</h1>
      <SimpleBottomNavigation />
    </div>
  );
}
