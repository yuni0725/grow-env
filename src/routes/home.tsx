import styled from "styled-components";
import NaviBar from "../components/navibar";
import Intro from "../components/intro";
import { LinkNoDecoration } from "../components/component";

const Wrapper = styled.div`
  background-color: #ecefe9;
  height: 93vh;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
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
  width: 40vw;
  border-radius: 10px;
  box-shadow: 3px 3px 3px 3px #a6a6a640;

  display: grid;
  grid-template-rows: 1fr 3fr 6fr;

  border-radius: 15px;
  overflow: hidden;

  cursor: pointer;
`;

const ContentTag = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin-left: 30px;

  font-size: 20px;
  font-weight: 500;
`;

const ContentTitle = styled.div`
  font-size: 36px;
  font-weight: 600;

  display: flex;
  justify-content: center;
  margin-top: 30px;
`;

const ContentImg = styled.div`
  width: 100%;
  height: 100%;

  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;

function Home() {
  return (
    <>
      <NaviBar></NaviBar>
      <Wrapper>
        <Intro></Intro>
        <ContentBox>
          <LinkNoDecoration to="./one">
            <Content>
              <ContentTag>
                <span>환경</span>
              </ContentTag>
              <ContentTitle>
                <span>환경 플로깅 게임</span>
              </ContentTitle>
              <ContentImg
                style={{
                  backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("gameOne.webp")`,
                }}
              ></ContentImg>
            </Content>
          </LinkNoDecoration>
          <LinkNoDecoration to="./two">
            <Content>
              <ContentTag>
                <span>환경</span>
              </ContentTag>
              <ContentTitle>
                <span>환경 퍼즐 게임</span>
              </ContentTitle>
              <ContentImg
                style={{
                  backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("gameTwo.webp")`,
                }}
              ></ContentImg>
            </Content>
          </LinkNoDecoration>
        </ContentBox>
      </Wrapper>
    </>
  );
}

export default Home;
