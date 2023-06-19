import { forwardRef } from "react";
import cn from "./Textarea.module.scss";

const Textarea = forwardRef(function Textarea(props, ref) {
  const { errorMsg = "", ...rest } = props;

  return (
    <div>
      <label className={cn.label}>{props.label}</label>
      <textarea
        type="text"
        className={cn.textarea}
        placeholder={props.placeholder}
        ref={ref}
        {...rest}
      />
      {errorMsg && <p className={cn.errorMsg}>{errorMsg}</p>}
    </div>
  );
});

export default Textarea;
