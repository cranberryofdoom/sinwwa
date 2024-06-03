import classNames from "classnames";
import styles from "./Card.module.css";

export const Card = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return <div className={classNames(styles.root, className)}>{children}</div>;
};
