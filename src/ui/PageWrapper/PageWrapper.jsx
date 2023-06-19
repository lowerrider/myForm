import cn from "./PageWrapper.module.scss";

function PageWrapper({ children }) {
  return <div className={cn.wrapper}>{children}</div>;
}

export default PageWrapper;
