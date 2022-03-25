import Navbar from "../components/navbar";
import Appbar from "../components/appbar";

export default function Checkout() {
  return (
    <div className="padding">
      <Navbar />
      <h1>This is Checkout Page. This page will be rendered on backend</h1>
      <h1>
        Items array will be passed to server and then based on it total will be
        calculated
      </h1>
      <h1>And then redirected to payment gateway. (will do later v3.0)</h1>
      <Appbar />
    </div>
  );
}
