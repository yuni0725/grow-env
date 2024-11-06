import NaviBar from "../components/navibar";
import useDeviceSize from "../MediaQuery";
import OnePc from "../components/one-pc";
import OneMobile from "../components/one-mobile";

function One() {
  const { isDesktop, isTablet, isMobile } = useDeviceSize();
  return (
    <>
      <NaviBar></NaviBar>
      {isDesktop && <OnePc></OnePc>}
      {isTablet && <OneMobile></OneMobile>}
      {isMobile && <OneMobile></OneMobile>}
    </>
  );
}

export default One;
