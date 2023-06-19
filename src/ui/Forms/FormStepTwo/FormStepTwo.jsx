import Advantages from "../../Advantages/Advantages";
import Button, { NATIVE_TYPE, TYPE } from "../../Button/Button";
import CheckboxGroup from "../../Fields/CheckboxGroup/CheckboxGrup";
import RadioGroup from "../../Fields/RadioGroup/RadioGroup";
import cn from "../Forms.module.scss";

function FormStepTwo({
  onClickBack,
  onClickForward,
  initialValues,
  setData,
  formTwo,
}) {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = formTwo;

  function onSubmit(data) {
    setData({ ...initialValues, data });
    onClickForward();
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className={cn.container}>
        <Advantages title="Достижения" control={control} errors={errors} />
        <CheckboxGroup
          options={[
            { label: "1", value: "1" },
            { label: "2", value: "2" },
            { label: "3", value: "3" },
          ]}
          title="Группа чекбоксов"
          name="checkbox"
          register={register}
          errors={errors?.checkbox}
        />
        <RadioGroup
          options={[
            { label: "1", value: "1" },
            { label: "2", value: "2" },
            { label: "3", value: "3" },
          ]}
          title="Группа радио"
          name="radio"
          register={register}
          errors={errors?.radio}
        />
      </div>
      <div className={cn.buttons}>
        <Button type={TYPE.white} content="Назад" onClick={onClickBack} />
        <Button
          nativeType={NATIVE_TYPE.submit}
          type={TYPE.blue}
          content="Вперед"
        />
      </div>
    </form>
  );
}

export default FormStepTwo;
