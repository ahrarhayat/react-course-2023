import "./Card.css";
function Card(props) {
  //to also include css classes in the children components
  const classes = "card " + props.className;
  return <div className={classes}>{props.children}</div>;
}

export default Card;
