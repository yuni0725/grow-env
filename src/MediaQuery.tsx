import { useMediaQuery } from "react-responsive";

export default function useDeviceSize() {
  const isDesktop = useMediaQuery({ minWidth: 1024 });
  const isTablet = useMediaQuery({ minWidth: 426, maxWidth: 1023 });
  const isMobile = useMediaQuery({ maxWidth: 425 });
  return { isDesktop, isTablet, isMobile };
}
