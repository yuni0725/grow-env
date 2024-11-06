import useDeviceSize from "../MediaQuery";
import NaviBarMobile from "./navibar-mobile";
import NaviBarPc from "./navibar-pc";

function NaviBar() {
  const { isDesktop, isTablet, isMobile } = useDeviceSize();
  console.log(isDesktop, isMobile, isTablet);
  if (isDesktop) {
    return <NaviBarPc></NaviBarPc>;
  }
  if (isTablet) {
    return <NaviBarMobile></NaviBarMobile>;
  }
  if (isMobile) {
    return <NaviBarMobile></NaviBarMobile>;
  }
}

export default NaviBar;
