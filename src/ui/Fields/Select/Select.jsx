import { useState, forwardRef, useRef } from "react";
import classNames from "classnames";
import IconChewronDown from "../../../Images/IconChewronDown/IconChewronDown";
import cn from "./Select.module.scss";

const Select = forwardRef(function Select(
  { label, placeholder, options, onChange, value, error },
  ref
) {
  const [showOptions, setShowOptions] = useState(false);
  const containerRef = useRef(null);
  function onOptionItemClick(el, e) {
    containerRef.current.classList.remove(cn.focus);
    onChange(el);
    setShowOptions(false);
  }

  const optionsItems = options.map((el) => (
    <div
      key={el.value}
      className={cn.option}
      onClick={(event) => onOptionItemClick(el, event)}
    >
      {el.label}
    </div>
  ));

  return (
    <div className={cn.select}>
      <label className={cn.label}>{label}</label>
      <div
        ref={containerRef}
        className={classNames(cn.container, error && cn.error)}
        onClick={(e) => {
          e.currentTarget.classList.add(cn.focus);
          setShowOptions(!showOptions);
        }}
      >
        <input
          ref={ref}
          value={value}
          className={cn.input}
          placeholder={placeholder}
          disabled
        />
        <IconChewronDown className={cn.icon} />
      </div>
      {showOptions && <div className={cn.optionsContainer}>{optionsItems}</div>}
    </div>
  );
});

export default Select;
