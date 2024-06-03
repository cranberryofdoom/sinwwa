import styles from "./PanelResizeHandle.module.css";
import { PanelResizeHandle as RRPPanelResizeHandle } from "react-resizable-panels";

export const PanelResizeHandle = () => {
  return <RRPPanelResizeHandle className={styles.root} />;
};
