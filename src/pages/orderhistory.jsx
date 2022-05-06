// you have the reference photo for design.
// make a card component for order 
// for now map it 3 times with static data
import Navbar from "../components/navbar";
import SimpleBottomNavigation from "../components/bottomnavigation";

export default function OrderHistory() {
  return (
    <div>
      <Navbar />
      <h1>This is Order History page</h1>
      <SimpleBottomNavigation />
    </div>
  );
}