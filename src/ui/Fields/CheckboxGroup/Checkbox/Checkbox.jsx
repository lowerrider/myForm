import cn from "./Checkbox.module.scss";

function Checkbox({ label, value, register, name }) {
  return (
    <label className={cn.label}>
      <input
        className={cn.checkbox}
        {...register(name, { required: true })}
        type="checkbox"
        value={value}
      />
      {label}
    </label>
  );
}

export default Checkbox;
