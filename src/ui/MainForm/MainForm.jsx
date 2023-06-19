import Input from "../Fields/Input/Input";
import cn from "./MainForm.module.scss";

function MainForm() {
  return (
    <div className={cn.mainform}>
      <Input
        label="Номер телефона"
        placeholder="+7 927 279-39-20"
        disabled={true}
      />
      <Input
        label="Email"
        placeholder="nastykoocher@gmail.com"
        disabled={true}
      />
    </div>
  );
}

export default MainForm;
