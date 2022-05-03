
export default function Navbar() {
  return (
    <div style={{ }}>
      <nav
        style={{
          boxShadow: "0px 0px 8px 0px rgba(0,0,0,1)",
          paddingBottom:"0px"
        }}
        className="navbar static-top navbar-light bg-dark"
      >
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            <i
              className="bi bi-egg-fill"
              style={{
                color: "#FFB72B",
                fontSize: "2rem",
                float: "left",
                marginRight: "20px",
              }}
            ></i>
            <h1
              style={{
                display: "inline",
                fontWeight: "900",
                fontSize: "1.5rem",
                color: "white",
              }}
            >
              {" "}
              Fooder{" "}
            </h1>
            <h6 style={{ color: "white" }}>Order your food now.</h6>
          </a>
        </div>
      </nav>
    </div>
  );
}


