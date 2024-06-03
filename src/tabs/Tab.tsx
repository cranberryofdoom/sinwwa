import classNames from "classnames";
import styles from "./Tab.module.css";

export const Tab = ({
  active,
  name,
  onClick,
  label,
}: {
  active: boolean;
  name: string;
  onClick: (value: string) => void;
  label: string;
}) => {
  return (
    <div
      className={classNames(styles.root, { [styles.active]: active })}
      onClick={() => onClick(name)}
    >
      {label}
    </div>
  );
};
