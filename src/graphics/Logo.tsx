import { Logo as LogoSVG } from "./assets";
import styles from "./Logo.module.css";
import classNames from "classnames";

type LogoProps = {
  mobile?: boolean;
  href?: React.AnchorHTMLAttributes<HTMLAnchorElement>["href"];
  className?: string;
};

export const Logo = ({ className, href, mobile }: LogoProps) => {
  if (href) {
    return (
      <a href={href}>
        <LogoSVG
          className={classNames(
            styles.logo,
            { [styles.mobile]: mobile },
            className,
          )}
        />
      </a>
    );
  }
  return (
    <LogoSVG
      className={classNames(
        styles.logo,
        { [styles.mobile]: mobile },
        className,
      )}
    />
  );
};
