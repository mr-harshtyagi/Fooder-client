// isme hoga login and sign up wala buton
import Navbar from "../components/navbar";
import SimpleBottomNavigation from "../components/bottomnavigation";

export default function FirstPage() {
  return (
    <div>
      <Navbar />
      <div
        style={{
          textAlign: "center",
          marginTop:"50px",
          paddingLeft: "20px",
          paddingRight: "20px",
        }}
      >
        <button className="btn btn-lg btn-primary">
          <strong>Sign Up </strong>
        </button>
        <h2 style={{marginTop:"20px",color:"grey"}}>OR</h2>
        <br />
        <h3>Already Signed up?</h3>
        <button className="btn btn-lg btn-primary mt-3">
          <strong>Login </strong>
        </button>
      </div>
      <SimpleBottomNavigation />
    </div>
  );
}
