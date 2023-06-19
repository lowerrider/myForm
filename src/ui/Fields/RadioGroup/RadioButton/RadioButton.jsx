import cn from "./RadioButton.module.scss";

function RadioButton({ label, value, register, name }) {
  return (
    <label className={cn.label}>
      <input
        className={cn.radio}
        {...register(name, { required: true })}
        type="radio"
        value={value}
      />
      {label}
    </label>
  );
}

export default RadioButton;
