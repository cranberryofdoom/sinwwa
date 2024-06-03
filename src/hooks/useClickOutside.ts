import { useEffect } from "react";

/**
 * Calls the `onClickOutside` function when a click outside of the given `refs` sub-tree is detected.
 */
export const useClickOutside = (
  refs: React.RefObject<HTMLElement>[],
  onClickOutside: (event: MouseEvent) => void,
) => {
  useEffect(() => {
    const isOutsideOfTarget = (
      ref: React.RefObject<HTMLElement>,
      target: Node,
    ) => {
      return ref.current && !ref.current.contains(target);
    };

    const handleClick = (event: MouseEvent) => {
      if (
        event.target &&
        refs.every((ref) => isOutsideOfTarget(ref, event.target as Node))
      ) {
        onClickOutside(event);
      }
    };

    document.addEventListener("click", handleClick);
    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, [refs, onClickOutside]);
};
