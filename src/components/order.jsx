// for making this order component , use dish for knowledge and reference

export default function Order(props) {
  
  return (
    <div
      style={{
        padding: "10px",
        textAlign: "left",
        width: "100%",
        backgroundColor: "#F9F3EE",
        borderRadius: "10px",
        marginBottom:"20px"
      }}
    >
      <h2 style={{ fontSize: "1.4rem", float: "right", color: "grey" }}>
        {props.resName}
      </h2>
      <h2 style={{ fontSize: "1rem" }}>
        Order No.
        <span style={{ color: "#4E944F", fontWeight: "700" }}> #{props.orderId}</span>
      </h2>
      <h2 style={{ fontSize: "1.2rem" }}>Items (2)</h2>
      <h3 style={{ fontSize: "0.8rem", fontWeight: "400" , color:"grey"}}>Pizza , Burger</h3>
      <hr />
      <h2 style={{ fontSize: "1rem" }}>
        Order placed on <span style={{ color: "#4E944F" }}>{props.date}</span>
      </h2>
      <h2 style={{ fontSize: "1rem" }}>
        for Amount
        <span style={{ color: "#4E944F", fontWeight: "700" }}> Rs. {props.total}</span>
      </h2>
    </div>
  );
}
 