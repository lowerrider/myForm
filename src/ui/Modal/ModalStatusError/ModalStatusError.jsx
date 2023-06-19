import IconClose from "../../../Images/IconClose/IconClose";
import IconError from "../../../Images/IconError/IconError";
import Button from "../../Button/Button";
import StatusIcon, { COLOR_TYPE } from "../../StatusIcon/StatusIcon";
import cn from "./ModalStatusError.module.scss";

function ModalStatusError({ onClose }) {
  function onIconCloseClick(e) {
    e.preventDefault();
    onClose();
  }
  return (
    <div className={cn.container}>
      <div className={cn.wrapper}>
        <h3 className={cn.title}>Ошибка</h3>
        <div onClick={onIconCloseClick}>
          <IconClose />
        </div>
      </div>
      <StatusIcon color={COLOR_TYPE.red} icon={<IconError />} />
      <div className={cn.button}>
        <Button onClick={onClose} content="Закрыть" />
      </div>
    </div>
  );
}

export default ModalStatusError;
