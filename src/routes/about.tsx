import styled from "styled-components";
import NaviBar from "../components/navibar";
import Intro from "../components/intro";
import { Center } from "../components/component";

const Wrapper = styled.div`
  background-color: #ecefe9;
  height: 93vh;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.div`
  width: 100%;
  font-size: 36px;
  font-weight: 700;
  margin-bottom: 30px;
`;

const ContentBox = styled.div`
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: center;

  font-size: 24px;
  font-weight: 500;
  line-height: 40px;

  text-align: center;
`;

function About() {
  return (
    <>
      <NaviBar></NaviBar>
      <Wrapper>
        <Intro></Intro>
        <Center>
          <Title>About Us</Title>
        </Center>
        <ContentBox>
          상산고 개발팀이 모여 만든 환경의 정석 페이지 <br />
          환경 교육을 모두와 함께하고 싶습니다 <br />
          재밌게 만들었으니 모두들 환영합니다
        </ContentBox>
      </Wrapper>
    </>
  );
}

export default About;
