import classNames from "classnames";
import cn from "./Bar.module.scss";

function Bar({ active }) {
  return <div className={classNames(cn.bar, active && cn.active)} />;
}

export default Bar;
