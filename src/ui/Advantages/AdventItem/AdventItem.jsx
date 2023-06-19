import { useContext } from "react";
import { Controller } from "react-hook-form";
import IconTrash from "../../../Images/IconTrash/IconTrash";
import { validateAdvent } from "../../../libs/validators";
import { REQUIRED_FIED } from "../../../constants/constants";
import Input from "../../Fields/Input/Input";
import { AdvantagesContext } from "../Advantages";
import cn from "./AdventItem.module.scss";

function AdvantItem({ name, control, advantIndex, errors }) {
  const adventCtx = useContext(AdvantagesContext);

  function onClickFn() {
    adventCtx.remove(advantIndex);
  }

  return (
    <div className={cn.adventItem}>
      <Controller
        name={name}
        control={control}
        rules={{
          required: REQUIRED_FIED,
          validate: validateAdvent,
        }}
        render={({ field }) => (
          <Input
            errorMsg={errors?.advantages?.[advantIndex]?.value?.message ?? ""}
            placeholder="Введите достижение"
            {...field}
          />
        )}
      />
      <button className={cn.buttonRemove} onClick={onClickFn}>
        <IconTrash />
      </button>
    </div>
  );
}

export default AdvantItem;
