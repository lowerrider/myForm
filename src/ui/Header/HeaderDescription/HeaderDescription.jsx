import UserLink from "../../UserLink/UserLink";
import cn from "./HeaderDescription.module.scss";

function HeaderDescription({ name }) {
  return (
    <div className="description">
      <h3 className={cn.heading}>{name}</h3>
      <div className={cn.links}>
        <UserLink socialName="Telegram" href="https://t.me/rusya_love_boobs" />
        <UserLink socialName="GitHub" href="https://github.com/lowerrider" />
        <UserLink
          socialName="Resume"
          href="https://hh.ru/resume/8ffc6212ff09dfcb850039ed1f566c39725332"
        />
      </div>
    </div>
  );
}

export default HeaderDescription;
