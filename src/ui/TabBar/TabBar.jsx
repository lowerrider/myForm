import Bar from "./Bar/Bar";
import Tab from "./Tab/Tab";
import cn from "./TabBar.module.scss";

function TabBar({ tabs, activeTab, onTabClick }) {
  const tabsContent = tabs.map((el, i) => (
    <div className={cn.item} key={el.key}>
      {i > 0 && <Bar active={el.key <= activeTab.key} />}
      <Tab
        onClick={() => onTabClick(el)}
        active={el.key <= activeTab.key}
        number={el.label}
        checked={el.key < activeTab.key}
      />
    </div>
  ));

  return <div className={cn.tabs}>{tabsContent}</div>;
}

export default TabBar;
