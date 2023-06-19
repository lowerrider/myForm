import classNames from "classnames";
import cn from "./Button.module.scss";

export const TYPE = {
  white: "white",
  blue: "blue",
};

export const NATIVE_TYPE = {
  button: "button",
  submit: "submit",
};

function Button({
  type = TYPE.blue,
  content,
  onClick,
  nativeType = NATIVE_TYPE.button,
}) {
  function onClickFn(e) {
    if (onClick) {
      e.preventDefault();
      onClick();
    }
  }
  return (
    <button
      type={nativeType}
      onClick={onClickFn}
      className={classNames(
        cn.button,
        type === TYPE.white ? cn[TYPE.white] : cn[TYPE.blue]
      )}
    >
      {content}
    </button>
  );
}

export default Button;
