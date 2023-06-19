import IconFolder from "../../Images/IconFolder/IconFolder";
import cn from "./UserLink.module.scss";

function UserLink({ href, socialName }) {
  return (
    <div>
      <IconFolder classname={cn.icon} />

      <a href={href} className={cn.userLink}>
        {socialName}
      </a>
    </div>
  );
}

export default UserLink;
