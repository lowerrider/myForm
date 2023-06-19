import { forwardRef } from "react";
import classNames from "classnames";
import cn from "./Input.module.scss";

const Input = forwardRef(function Input(props, ref) {
  const { errorMsg = "", ...rest } = props;
  return (
    <div className={cn.inputContainer}>
      <label className={cn.label}>{props.label}</label>
      <input
        type="text"
        className={classNames(cn.formInput, errorMsg && cn.error)}
        ref={ref}
        {...rest}
      />
      {errorMsg && <p className={cn.errorMsg}>{errorMsg}</p>}
    </div>
  );
});

export default Input;
