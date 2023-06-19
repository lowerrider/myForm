import classNames from "classnames";
import cn from "./StatusIcon.module.scss";

export const COLOR_TYPE = {
  green: "green",
  red: "red",
};

function StatusIcon({ icon, color }) {
  return <div className={classNames(cn.wrapper, cn[color])}>{icon}</div>;
}

export default StatusIcon;
