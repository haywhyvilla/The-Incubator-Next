import classes from "./container.module.scss";
function Container({ children, className }) {
  return <div className={`${classes.Container} ${className}`}>{children}</div>;
}

export default Container;
