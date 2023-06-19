import { NAME } from "../../../constants/constants";
import HeaderAvatar from "../HeaderAvatar/HeaderAvatar";
import HeaderDescription from "../HeaderDescription/HeaderDescription";
import cn from "./Header.module.scss";

function Header() {
  return (
    <div className={cn.header}>
      <HeaderAvatar name={NAME} />
      <HeaderDescription name={NAME} />
    </div>
  );
}

export default Header;
