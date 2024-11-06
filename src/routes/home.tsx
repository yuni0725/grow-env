import styled from "styled-components";
import NaviBar from "../components/navibar";
import Intro from "../components/intro";
import { LinkNoDecoration } from "../components/component";
import useDeviceSize from "../MediaQuery";

const Wrapper = styled.div`
  background-color: #ecefe9;
  height: 93vh;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;

  padding: 0px 20px;
`;

const ContentBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  width: 100vw;
  padding-bottom: 30px;
`;

const Content = styled.div`
  background-color: white;
  height: 60vh;
  width: 45vw;
  border-radius: 10px;
  box-shadow: 3px 3px 3px 3px #a6a6a640;

  display: grid;
  grid-template-rows: 1fr 3fr 6fr;

  border-radius: 15px;
  overflow: hidden;

  cursor: pointer;
`;

const ContentTagPc = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin-left: 30px;

  font-size: 20px;
  font-weight: 500;
`;

const ContentTitlePc = styled.div`
  font-size: 36px;
  font-weight: 600;

  display: flex;
  justify-content: center;
  margin-top: 30px;
`;

const ContentTagMobile = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin-left: 15px;

  font-size: 16px;
  font-weight: 500;
`;

const ContentTitleMobile = styled.div`
  font-size: 24px;
  font-weight: 600;

  display: flex;
  justify-content: center;
  margin-top: 20px;
`;

const ContentImg = styled.div`
  width: 100%;
  height: 100%;

  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;

function Home() {
  const { isDesktop, isTablet, isMobile } = useDeviceSize();
  return (
    <>
      <NaviBar></NaviBar>
      <Wrapper>
        <Intro></Intro>
        {isDesktop && (
          <ContentBox>
            <LinkNoDecoration to="/one">
              <Content>
                <ContentTagPc>
                  <span>환경</span>
                </ContentTagPc>
                <ContentTitlePc>
                  <span>환경 플로깅 게임</span>
                </ContentTitlePc>
                <ContentImg
                  style={{
                    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("gameOne.webp")`,
                  }}
                ></ContentImg>
              </Content>
            </LinkNoDecoration>
            <LinkNoDecoration to="/two">
              <Content>
                <ContentTagPc>
                  <span>환경</span>
                </ContentTagPc>
                <ContentTitlePc>
                  <span>환경 퍼즐 게임</span>
                </ContentTitlePc>
                <ContentImg
                  style={{
                    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("gameTwo.jpg")`,
                  }}
                ></ContentImg>
              </Content>
            </LinkNoDecoration>
          </ContentBox>
        )}
        {isTablet && (
          <ContentBox>
            <LinkNoDecoration to="/one">
              <Content>
                <ContentTagMobile>
                  <span>환경</span>
                </ContentTagMobile>
                <ContentTitleMobile>
                  <span>환경 플로깅 게임</span>
                </ContentTitleMobile>
                <ContentImg
                  style={{
                    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("gameOne.webp")`,
                  }}
                ></ContentImg>
              </Content>
            </LinkNoDecoration>
            <LinkNoDecoration to="/two">
              <Content>
                <ContentTagMobile>
                  <span>환경</span>
                </ContentTagMobile>
                <ContentTitleMobile>
                  <span>환경 퍼즐 게임</span>
                </ContentTitleMobile>
                <ContentImg
                  style={{
                    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("gameTwo.jpg")`,
                  }}
                ></ContentImg>
              </Content>
            </LinkNoDecoration>
          </ContentBox>
        )}
        {isMobile && (
          <ContentBox>
            <LinkNoDecoration to="/one">
              <Content>
                <ContentTagMobile>
                  <span>환경</span>
                </ContentTagMobile>
                <ContentTitleMobile>
                  <span>환경 플로깅 게임</span>
                </ContentTitleMobile>
                <ContentImg
                  style={{
                    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("gameOne.webp")`,
                  }}
                ></ContentImg>
              </Content>
            </LinkNoDecoration>
            <LinkNoDecoration to="/two">
              <Content>
                <ContentTagMobile>
                  <span>환경</span>
                </ContentTagMobile>
                <ContentTitleMobile>
                  <span>환경 퍼즐 게임</span>
                </ContentTitleMobile>
                <ContentImg
                  style={{
                    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("gameTwo.jpg")`,
                  }}
                ></ContentImg>
              </Content>
            </LinkNoDecoration>
          </ContentBox>
        )}
      </Wrapper>
    </>
  );
}

export default Home;
