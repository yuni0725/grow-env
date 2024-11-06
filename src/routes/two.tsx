import NaviBar from "../components/navibar";
import useDeviceSize from "../MediaQuery";
import TwoMobile from "../components/two-mobile";
import TwoPc from "../components/two-pc";

function Two() {
  const { isDesktop, isTablet, isMobile } = useDeviceSize();
  return (
    <>
      <NaviBar></NaviBar>
      {isDesktop && <TwoPc></TwoPc>}
      {isTablet && <TwoMobile></TwoMobile>}
      {isMobile && <TwoMobile></TwoMobile>}
    </>
  );
}

export default Two;
