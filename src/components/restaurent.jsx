import { Link } from "react-router-dom";

export default function restaurent(props) {
  return (
    <Link to={props.id} key={props.id}>
      <div
        style={{ textAlign: "left" }}
        className="restaurent-card"
      >
        <img
          style={{
            float: "left",
            marginRight: "20px",
            height: "64px",
            width: "64px",
          }}
          src={props.img}
          alt="res-img"
        />
        <div style={{ display: "inline-block" }}>
          <h5>{props.name}</h5>
          <h6
            className="bi bi-star-fill"
            style={{ fontSize: "0.8rem", color: "grey" }}
          > {props.rating}
            <span> | {props.type}</span>
          </h6>
          <h6 style={{ fontSize: "0.8rem",fontWeight:"400", color: "grey" }}>
            {props.category}
          </h6>
        </div>
      </div>
    </Link>
  );
}
