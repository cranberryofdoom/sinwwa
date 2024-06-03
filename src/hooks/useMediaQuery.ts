import { useEffect, useState } from "react";

/**
 * Given a media query, this hook returns a boolean indicating whether it matches. If the media
 * query's "change" listener fires, the component will re-render with a new hook return value.
 */
const useMediaQuery = (query: string) => {
  const [matches, setMatches] = useState<boolean>(false);

  useEffect(() => {
    const mediaQueryList = window.matchMedia(query);
    setMatches(mediaQueryList ? mediaQueryList.matches : false);

    if (mediaQueryList) {
      mediaQueryList.addEventListener("change", handleChange);
    }

    return () => {
      if (mediaQueryList) {
        mediaQueryList.removeEventListener("change", handleChange);
      }
    };
  }, [query]);

  const handleChange = (event: MediaQueryListEvent) => {
    setMatches(event.matches);
  };

  return matches;
};

export const useMobilePortraitBreakpoint = () => {
  return useMediaQuery("(max-width: 478px)");
};
export const useMobileLandscapeBreakpoint = () => {
  return useMediaQuery("(max-width: 768px)");
};
export const useTabletBreakpoint = () => {
  return useMediaQuery("(max-width: 991px)");
};
