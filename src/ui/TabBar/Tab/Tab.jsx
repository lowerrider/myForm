import classNames from "classnames";
import IconCheck from "../../../Images/IconCheck/IconCheck";
import cn from "./Tab.module.scss";

function Tab({ checked, active, number, onClick }) {
  if (active) {
    return (
      <div className={classNames(cn.tabContainer, cn.activeTab)}>
        <button onClick={onClick} className={cn.tab}>
          {checked ? (
            <div>
              <IconCheck />
            </div>
          ) : (
            <div className={cn.whiteRing} />
          )}
        </button>
        <div className={cn.number}>{number}</div>
      </div>
    );
  }

  return (
    <div className={classNames(cn.tabContainer, cn.notActiveTab)}>
      <button onClick={onClick} className={cn.tab} />
      <div className={cn.number}>{number}</div>
    </div>
  );
}

export default Tab;
