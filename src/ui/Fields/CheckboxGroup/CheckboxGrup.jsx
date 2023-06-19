import classNames from "classnames";
import Checkbox from "./Checkbox/Checkbox";
import cn from "./CheckboxGroup.module.scss";

function CheckboxGroup({ options, title, name, register, errors }) {
  const checkboxList = options.map((el) => (
    <Checkbox
      key={el.value}
      label={el.label}
      value={el.value}
      register={register}
      name={name}
      errors={errors}
    />
  ));
  return (
    <div className={cn.container}>
      <p className={classNames(cn.title, errors && cn.error)}>{title}</p>
      <div className={cn.checkboxGroup}>{checkboxList} </div>
    </div>
  );
}

export default CheckboxGroup;
