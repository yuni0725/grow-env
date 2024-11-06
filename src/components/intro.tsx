import styled from "styled-components";
import useDeviceSize from "../MediaQuery";

const TitleBoxPc = styled.div`
  height: 45vh;

  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
`;

const CenterPc = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const TitlePc = styled.div`
  font-size: 48px;
  font-weight: 900;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const SubTitlePc = styled.div`
  font-size: 20px;
  font-weight: 500;
  text-align: center;
  margin-top: 40px;
`;

const TitleBoxMobile = styled.div`
  height: 35vh;

  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
`;

const CenterMobile = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const TitleMobile = styled.div`
  font-size: 36px;
  font-weight: 900;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const SubTitleMobile = styled.div`
  font-size: 16px;
  font-weight: 500;
  text-align: center;
  margin-top: 40px;
`;

function Intro() {
  const { isDesktop, isTablet, isMobile } = useDeviceSize();
  return (
    <>
      {isDesktop && (
        <TitleBoxPc>
          <CenterPc>
            <TitlePc>
              <span>ECOEDU websites</span>
            </TitlePc>
            <SubTitlePc>
              Progress ideas & Upgrade Developments of AI&APP
            </SubTitlePc>
          </CenterPc>
        </TitleBoxPc>
      )}
      {isTablet && (
        <TitleBoxMobile>
          <CenterMobile>
            <TitleMobile>
              <span>ECOEDU websites</span>
            </TitleMobile>
            <SubTitleMobile>
              Progress ideas & Upgrade Developments of AI&APP
            </SubTitleMobile>
          </CenterMobile>
        </TitleBoxMobile>
      )}
      {isMobile && (
        <TitleBoxMobile>
          <CenterMobile>
            <TitleMobile>
              <span>ECOEDU websites</span>
            </TitleMobile>
            <SubTitleMobile>
              Progress ideas & Upgrade Developments of AI&APP
            </SubTitleMobile>
          </CenterMobile>
        </TitleBoxMobile>
      )}
    </>
  );
}

export default Intro;
