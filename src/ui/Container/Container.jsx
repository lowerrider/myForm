import classNames from "classnames";
import cn from "./Container.module.scss";

function Container({ children, classname }) {
  return <div className={classNames(cn.container, classname)}>{children}</div>;
}

export default Container;
