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
          href="https://hh.ru/resume/a5a837d3ff0c6faaf40039ed1f424365565157"
        />
      </div>
    </div>
  );
}

export default HeaderDescription;
