import { createContext } from "react";
import { useFieldArray } from "react-hook-form";
import IconPlus from "../../Images/IconPlus/IconPlus";
import Button, { TYPE } from "../Button/Button";
import AdvantItem from "./AdventItem/AdventItem";
import cn from "./Advantages.module.scss";

export const AdvantagesContext = createContext({
  remove: () => {},
  append: () => {},
});

function Advantages({ title, control, errors }) {
  const { fields, remove, append } = useFieldArray({
    control,
    name: "advantages",
  });

  function addProfileHandler() {
    append({
      value: "",
    });
  }

  return (
    <AdvantagesContext.Provider value={{ remove }}>
      <p className={cn.title}>{title}</p>
      {fields.map((field, index) => (
        <AdvantItem
          key={field.id}
          advantIndex={index}
          name={`advantages.${index}.value`}
          control={control}
          errors={errors}
        />
      ))}
      <Button
        onClick={addProfileHandler}
        type={TYPE.white}
        content={<IconPlus />}
      />
    </AdvantagesContext.Provider>
  );
}

export default Advantages;
