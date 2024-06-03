import { useObserverTargetInfiniteScroll } from "../hooks/useInfiniteScroll";

export const InfiniteScroll = ({ fetchData }: { fetchData: () => void }) => {
  const { observerTarget } = useObserverTargetInfiniteScroll({ fetchData });
  return <div ref={observerTarget}></div>;
};
