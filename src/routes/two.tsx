import styled from "styled-components";
import NaviBar from "../components/navibar";
import { AiOutlineExport } from "react-icons/ai";

const Wrapper = styled.div`
  background-color: #ecefe9;
  height: 193vh;

  display: grid;
  grid-template-rows: 1fr 1fr 1fr;

  padding: 0px 10px;
  width: 100%;
`;

const Start = styled.div`
  background-color: #202124;
  width: 100%;
  height: 100%;

  display: flex;
  grid-template-columns: 1fr 1fr;

  overflow: hidden;

  border-radius: 15px;
`;

const GameImage = styled.div`
  background-image: url("gameTwo.webp");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  width: 100%;
  height: 100%;
`;

const StartMenu = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Title = styled.div`
  font-size: 36px;
  font-weight: 800;

  color: white;

  text-align: center;
  margin-bottom: 25px;
`;

const StartButton = styled.div`
  height: 50px;
  width: 200px;
  border-radius: 15px;

  color: white;

  background-color: #2a7b69;

  margin-top: 25px;

  display: flex;
  align-items: center;
  justify-content: center;

  font-size: 18px;
  font-weight: 500;

  & span {
    display: flex;
    align-items: center;
  }
`;

const Images = styled.div`
  width: 100%;
  margin-top: 30px;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`;

const Image = styled.div`
  width: 500px;
  height: 350px;

  overflow: hidden;

  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;

  border-radius: 10px;
`;

const Info = styled.div`
  margin-top: 30px;
`;

const InfoTitle = styled.div`
  color: #2a7b69;

  font-size: 40px;
  font-weight: 800;
`;

const MainTitle = styled.div`
  margin-top: 30px;
  font-size: 36px;
  font-weight: 600;

  margin-left: 5px;
`;

const SubTitleBox = styled.div`
  margin-left: 15px;
`;

const SubTitle = styled.div`
  margin-top: 10px;

  font-size: 18px;
  font-weight: 400;
`;

function Two() {
  return (
    <>
      <NaviBar></NaviBar>
      <Wrapper>
        <Start>
          <GameImage></GameImage>
          <StartMenu>
            <Title>환경 퍼즐 게임</Title>
            <StartButton>
              <span>
                <AiOutlineExport />
                <span style={{ marginLeft: "5px" }}>실행하기</span>
              </span>
            </StartButton>
          </StartMenu>
        </Start>
        <Images>
          <Image style={{ backgroundImage: `url('gameTwoOne.png')` }}></Image>
        </Images>
        <Info>
          <InfoTitle>콘텐츠 정보</InfoTitle>
          <MainTitle>게임의 목적</MainTitle>
          <SubTitleBox>
            <SubTitle>1. 환경 배경 지식의 이해</SubTitle>
          </SubTitleBox>
          <MainTitle>콘텐츠 내용</MainTitle>
          <SubTitleBox>
            <SubTitle>
              1. 오른쪽에 나오는 낱말들은 배열하여 단어를 만드는 게임이다.
            </SubTitle>
            <SubTitle>
              2. 설명에 적절한 단어를 맞추면 점수를 획득할 수 있다.
            </SubTitle>
          </SubTitleBox>
        </Info>
      </Wrapper>
    </>
  );
}

export default Two;
