import classes from "./container-fluid.module.scss";

function ContainerFluid({ children, className }) {
  return <div className={`${classes.container} ${className}`}>{children}</div>;
}

export default ContainerFluid;
