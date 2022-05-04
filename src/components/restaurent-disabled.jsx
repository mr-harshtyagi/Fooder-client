
export default function restaurentDisabled(props) {
  
  return (
    <div style={{ textAlign: "left"}} className="restaurent-card-offline">
      <img
        style={{
          float: "left",
          marginRight: "15px",
          height: "70px",
          width: "70px",
        }}
        src={props.img}
        alt="res-img"
      />
      <div style={{ display: "inline-block" }}>
        <h5>
          {props.name} (CLOSED)
        </h5>
        <h6
          className="bi bi-star-fill"
          style={{ fontSize: "0.8rem", color: "black" }}
        >
          {" "}
          {props.rating}
          <span> | {props.type}</span>
        </h6>
        <h6 style={{ fontSize: "0.8rem", fontWeight: "400", color: "black" }}>
          {props.category}
        </h6>
      </div>
    </div>
  );
}
