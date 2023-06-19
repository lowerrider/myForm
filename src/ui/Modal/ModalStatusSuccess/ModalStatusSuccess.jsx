import IconSuccess from "../../../Images/IconSuccess/IconSuccess";
import { ROUTES } from "../../../constants/constants";
import ButtonLink from "../../ButtonLink/ButtonLink";
import StatusIcon, { COLOR_TYPE } from "../../StatusIcon/StatusIcon";
import cn from "./ModalStatusSuccess.module.scss";

function ModalStatusSuccess() {
  return (
    <div className={cn.container}>
      <h3 className={cn.title}>Форма успешно отправлена</h3>
      <div className={cn.icon}>
        <StatusIcon color={COLOR_TYPE.green} icon={<IconSuccess />} />
      </div>
      <ButtonLink path={ROUTES.index} content="На главную" />
    </div>
  );
}

export default ModalStatusSuccess;
