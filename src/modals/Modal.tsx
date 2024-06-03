import * as Dialog from "@radix-ui/react-dialog";
import styles from "./Modal.module.css";
import { ClickableIcon, Icon } from "../icons";
import { Caption, H3 } from "../typography";
import classNames from "classnames";

type ModalRootProps = {
  children: React.ReactNode;
  open: boolean;
  onClose?: () => void;
  /**
   * If true, the children will be rendered in the headless style.
   */
  headless?: boolean;
};

type ModalHeaderProps = {
  onBack?: () => void;
  onClose: () => void;
  title: string;
  description?: string;
};

type ModalBodyProps = {
  children: React.ReactNode;
  /**
   * If true, the children will be rendered directly without a wrapping div that configures the default padding.
   */
  renderDirectly?: boolean;
};

export const Modal = {
  /**
   * Should render a Modal.Header and Modal.Body.
   */
  Root: ({ children, open, onClose, headless }: ModalRootProps) => {
    return (
      <Dialog.Root open={open}>
        <Dialog.Portal>
          <div className={styles.modal}>
            <Dialog.Overlay
              onClick={onClose}
              className={styles.dialogOverlay}
            />
            <Dialog.Content
              className={classNames(styles.dialogContent, {
                [styles.headless]: headless,
              })}
            >
              {children}
            </Dialog.Content>
          </div>
        </Dialog.Portal>
      </Dialog.Root>
    );
  },
  Header: ({ onBack, title, description, onClose }: ModalHeaderProps) => {
    return (
      <div className={styles.header}>
        <div className={styles.headerLeftContent}>
          {onBack && (
            <ClickableIcon
              label="Back"
              name="ChevronLeft"
              color="black"
              onClick={onBack}
              size="medium"
            />
          )}
          <div className={styles.titleAndDescription}>
            <Dialog.Title>
              <H3 color="accent-offblack">{title}</H3>
            </Dialog.Title>
            {description && (
              <Dialog.Description>
                <Caption color="accent-ash-gray">{description}</Caption>
              </Dialog.Description>
            )}
          </div>
        </div>
        <Dialog.Close onClick={onClose}>
          <Icon name="Close" size="medium" color="black" />
        </Dialog.Close>
      </div>
    );
  },
  Body: ({ children, renderDirectly }: ModalBodyProps) => {
    if (renderDirectly) return <>{children}</>;
    return <div className={styles.body}>{children}</div>;
  },
};
