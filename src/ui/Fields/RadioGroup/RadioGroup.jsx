import classNames from "classnames";
import RadioButton from "./RadioButton/RadioButton";
import cn from "./RadioGroup.module.scss";

function RadioGroup({ options, title, name, register, errors }) {
  const radioList = options.map((el) => (
    <RadioButton
      name={name}
      key={el.value}
      label={el.label}
      value={el.value}
      register={register}
    />
  ));
  return (
    <div className={cn.container}>
      <p className={classNames(cn.title, errors && cn.error)}>{title}</p>
      <div className={cn.radioGroup}>{radioList} </div>
    </div>
  );
}

export default RadioGroup;
