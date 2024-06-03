import style from "./Tabs.module.css";
import { Tab } from "./Tab";

export const Tabs = {
  Root: ({ children }: { children: React.ReactNode }) => {
    return <div className={style.root}>{children}</div>;
  },
  Tab,
};
