type ClickableProps = {
  children: React.ReactNode;
  onClick: () => void;
  /**
   * The label for the clickable text. This is used for accessibility purposes.
   */
  label: string;
  className?: string;
};

/**
 * An accessibility-first, clickable text component.
 * Should be used to wrap Body or Caption components that are clickable.
 */
export const Clickable = ({
  className,
  onClick,
  children,
  label,
}: ClickableProps) => {
  return (
    <button
      className={className}
      role="button"
      aria-labelledby="pressable-body-label"
      onClick={onClick}
    >
      <span id="pressable-body-label" hidden>
        {label}
      </span>
      {children}
    </button>
  );
};
