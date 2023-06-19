import { Controller } from "react-hook-form";
import { REQUIRED_FIED } from "../../../constants/constants";
import Button, { NATIVE_TYPE, TYPE } from "../../Button/Button";
import Textarea from "../../Fields/Textarea/Textarea";
import cn from "../Forms.module.scss";

function FormStepThree({ onClickBack, onSubmitForm, formThree }) {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = formThree;

  function onSubmit(data) {
    onSubmitForm(data);
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Controller
        name="about"
        control={control}
        rules={{
          required: REQUIRED_FIED,
          maxLength: 200,
        }}
        render={({ field }) => (
          <Textarea
            label="О себе"
            placeholder="Введите"
            errorMsg={errors?.about?.message}
            {...field}
          />
        )}
      />
      <div className={cn.buttons}>
        <Button type={TYPE.white} onClick={onClickBack} content="Назад" />
        <Button
          type={TYPE.blue}
          nativeType={NATIVE_TYPE.submit}
          content="Отправить"
        />
      </div>
    </form>
  );
}

export default FormStepThree;
