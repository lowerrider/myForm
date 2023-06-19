import { Controller } from "react-hook-form";
import {
  REQUIRED_FIED,
  ROUTES,
  SELECT_OPTIONS,
} from "../../../constants/constants";
import {
  validateInput,
  validateNickName,
  validateSex,
} from "../../../libs/validators";
import Button, { NATIVE_TYPE, TYPE } from "../../Button/Button";
import ButtonLink from "../../ButtonLink/ButtonLink";
import Input from "../../Fields/Input/Input";
import Select from "../../Fields/Select/Select";
import cn from "../Forms.module.scss";

function FormStepOne({ initialValues, onForvardClick, setData, formOne }) {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = formOne;

  function getSelectLabel(value) {
    return value === ""
      ? ""
      : SELECT_OPTIONS.filter((el) => el.value === value)[0].label;
  }

  function getSelectValue(item) {
    return SELECT_OPTIONS.filter((el) => el.label === item.label)[0].value;
  }

  function onSubmit(data) {
    setData({ ...initialValues, ...data });
    onForvardClick();
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className={cn.container}>
        <Controller
          name="nickname"
          control={control}
          rules={{
            required: REQUIRED_FIED,
            validate: validateNickName,
          }}
          render={({ field }) => (
            <Input
              label="Никнейм"
              placeholder="Введите никнейм"
              errorMsg={errors?.nickname?.message}
              {...field}
            />
          )}
        />
        <Controller
          name="name"
          control={control}
          rules={{
            required: REQUIRED_FIED,
            validate: validateInput,
          }}
          render={({ field }) => (
            <Input
              label="Имя"
              placeholder="Введите имя"
              errorMsg={errors?.name?.message}
              {...field}
            />
          )}
        />
        <Controller
          name="sername"
          control={control}
          rules={{
            required: REQUIRED_FIED,
            validate: validateInput,
          }}
          render={({ field }) => (
            <Input
              label="Фамилия"
              placeholder="Введите фамилию"
              errorMsg={errors?.sername?.message}
              {...field}
            />
          )}
        />

        <Controller
          name="sex"
          control={control}
          rules={{
            required: REQUIRED_FIED,
            validate: validateSex,
          }}
          render={({ field }) => (
            <Select
              {...field}
              label="Пол"
              placeholder="Не выбрано"
              options={SELECT_OPTIONS}
              value={getSelectLabel(field.value)}
              onChange={(val) => field.onChange(getSelectValue(val))}
              error={errors?.sex}
            />
          )}
        />
      </div>
      <div className={cn.buttons}>
        <ButtonLink type={TYPE.white} path={ROUTES.index} content="Назад" />
        <Button nativeType={NATIVE_TYPE.submit} content="Вперед" />
      </div>
    </form>
  );
}

export default FormStepOne;
