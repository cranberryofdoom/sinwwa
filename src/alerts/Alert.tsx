import styles from "./Alert.module.css";
import classNames from "classnames";
import { IconName, TextIcon } from "../icons";
import { Body } from "../typography";
import { colors } from "../tokens";

type AlertVariant = "success" | "error" | "warning";

const variantToIconNameMapping: {
  success: IconName;
  warning: IconName;
  error: IconName;
} = {
  success: "CheckCircle",
  warning: "Error",
  error: "Error",
};

const variantToColorMapping: {
  success: keyof typeof colors;
  warning: keyof typeof colors;
  error: keyof typeof colors;
} = {
  success: "system-success-green",
  warning: "system-caution-orange",
  error: "system-warning-red",
};

type AlertProps = {
  variant: AlertVariant;
  children: React.ReactNode;
};

export const Alert = ({ variant, children }: AlertProps) => {
  return (
    <div className={classNames(styles.root, styles[variant])}>
      <TextIcon
        size="medium"
        color={variantToColorMapping[variant]}
        name={variantToIconNameMapping[variant]}
      />
      <Body color="accent-ash-gray">{children}</Body>
    </div>
  );
};
