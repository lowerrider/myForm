import cn from "./HeaderAvatar.module.scss";

function HeaderAvatar({ name }) {
  function getInitialAvatar(name) {
    const nameSplit = name.split(" ");
    return nameSplit[0][0] + nameSplit[1][0];
  }

  return (
    <div className={cn.avatar}>
      <h3 className={cn.initial}>{getInitialAvatar(name)}</h3>
    </div>
  );
}

export default HeaderAvatar;
