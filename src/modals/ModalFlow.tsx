import { Modal } from "./Modal";

export type ModalFlowData = {
  title: string;
  description?: string;
  onBack?: () => void;
  children: React.ReactNode;
  /**
   * If true, the padding will be removed from the body.
   */
  noBodyPadding?: boolean;
};

type ModalFlowProps = ModalFlowData & {
  open: boolean;
  onClose: () => void;
};

/**
 * A helper component used to render a modal flow.
 */
export const ModalFlow = ({
  open,
  onClose,
  title,
  description,
  onBack,
  children,
  noBodyPadding,
}: ModalFlowProps) => {
  return (
    <Modal.Root open={open} onClose={onClose}>
      <Modal.Header
        title={title}
        description={description}
        onClose={onClose}
        onBack={onBack}
      />
      <Modal.Body renderDirectly={noBodyPadding}>{children}</Modal.Body>
    </Modal.Root>
  );
};
