import { useEffect, useRef } from "react";

export const useObserverTargetInfiniteScroll = ({
  fetchData,
}: {
  fetchData: () => void;
}) => {
  const observerTarget = useRef(null);

  useEffect(() => {
    const element = observerTarget.current;
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          fetchData();
        }
      },
      { threshold: 1 },
    );

    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, [fetchData]);

  return { observerTarget };
};

export const useHandleScrollInfiniteScroll = ({
  isLoading,
  onLoadMore,
  onScroll,
}: {
  isLoading?: boolean;
  onLoadMore?: () => void;
  onScroll?: (element: HTMLDivElement) => void;
}) => {
  const lastScrollTop = useRef(0);
  const scrollingElement = useRef<HTMLDivElement>(null);

  const handleScroll = () => {
    // If the scrolling element is not available, return.
    if (!scrollingElement.current) return;

    onScroll?.(scrollingElement.current);

    lastScrollTop.current =
      scrollingElement.current.scrollTop <= 0
        ? 0
        : scrollingElement.current.scrollTop;

    // If the user is scrolling up, return.
    if (scrollingElement.current.scrollTop < lastScrollTop.current) {
      return;
    }

    // If the user has scrolled to the bottom of the table and we're not already fetching data, load more data if we can.
    if (
      Math.round(
        scrollingElement.current.scrollTop +
          scrollingElement.current.offsetHeight,
      ) >= scrollingElement.current.scrollHeight &&
      !isLoading
    ) {
      onLoadMore?.();
    }
  };

  return {
    scrollingElement,
    handleScroll,
  };
};
