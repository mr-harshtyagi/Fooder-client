import Navbar from "../components/navbar";
import SimpleBottomNavigation from "../components/bottomnavigation";

export default function AccountView() {
  return (
    <div className="padding">
      <Navbar />
      <h1>This is Account Page</h1>
      <SimpleBottomNavigation/>
    </div>
  );
}
