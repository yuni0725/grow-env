import styled from "styled-components";
import NaviBar from "../components/navibar";
import Intro from "../components/intro";

const Wrapper = styled.div`
  background-color: #ecefe9;
  height: 150vh;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;

  padding: 0px 20px;
`;

const Body = styled.div`
  border-radius: 20px;
  overflow: hidden;
  margin-bottom: 20px;
`;

const Iframe = styled.iframe`
  width: 90vw;
  height: 100vh;
  padding: 5px;
`;

function Padlet() {
  return (
    <>
      <NaviBar></NaviBar>
      <Wrapper>
        <Intro></Intro>
        <Body>
          <Iframe src="https://padlet.com/sangsancom/padlet-x1xis8w25c47ikr1"></Iframe>
        </Body>
      </Wrapper>
    </>
  );
}

export default Padlet;
