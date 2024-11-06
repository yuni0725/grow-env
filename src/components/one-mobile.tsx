import styled from "styled-components";
import { AiOutlineExport } from "react-icons/ai";

const Wrapper = styled.div`
  background-color: #ecefe9;
  height: 100%;
  width: 100vw;

  display: grid;
  grid-template-rows: 1fr 1fr 1fr;

  padding: 0px 20px;
`;

const Start = styled.div`
  background-color: #202124;
  height: 250px;
  width: 100%;

  border-radius: 15px;

  display: grid;
  grid-template-columns: 1fr 1fr;

  margin-top: 40px;
`;

const GameDiv = styled.div`
  height: 100%;
  overflow: hidden;
`;

const GameImage = styled.div`
  background-image: url("gameOne.webp");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  overflow: hidden;

  border-radius: 15px;

  width: 100%;
  height: 100%;
`;

const StartMenu = styled.div`
  height: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Title = styled.div`
  font-size: 24px;
  font-weight: 800;

  color: white;

  text-align: center;
  margin-bottom: 25px;
`;

const StartButton = styled.div`
  height: 50px;
  width: 90px;
  border-radius: 15px;

  color: white;

  background-color: #2a7b69;

  margin-top: 25px;

  display: flex;
  align-items: center;
  justify-content: center;

  font-size: 14px;
  font-weight: 500;

  & span {
    display: flex;
    align-items: center;
  }
`;

const Images = styled.div`
  height: 300px;

  display: flex;
  justify-content: flex-start;
  align-items: center;

  overflow-x: scroll;
  overflow-y: hidden;
`;

const Image = styled.div`
  width: 400px;
  height: 200px;
  margin-right: 10px;

  overflow-x: hidden;
  overflow-y: hidden;

  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
`;

const Info = styled.div`
  margin-bottom: 30px;
`;

const InfoTitle = styled.div`
  color: #2a7b69;

  font-size: 28px;
  font-weight: 800;
`;

const MainTitle = styled.div`
  margin-top: 15px;
  font-size: 24px;
  font-weight: 600;

  margin-left: 5px;
`;

const SubTitleBox = styled.div`
  margin-left: 15px;
`;

const SubTitle = styled.div`
  margin-top: 7px;

  font-size: 13px;
  font-weight: 500;
`;

function OneMobile() {
  return (
    <Wrapper>
      <Start>
        <GameDiv>
          <GameImage></GameImage>
        </GameDiv>
        <StartMenu>
          <Title>환경플로깅게임</Title>
          <StartButton>
            <span>
              <AiOutlineExport />
              <span style={{ marginLeft: "5px" }}>실행하기</span>
            </span>
          </StartButton>
        </StartMenu>
      </Start>
      <Images>
        <Image style={{ backgroundImage: `url('gameOneOne.webp')` }}></Image>
        <Image style={{ backgroundImage: `url('gameOneTwo.webp')` }}></Image>
      </Images>
      <Info>
        <InfoTitle>콘텐츠 정보</InfoTitle>
        <MainTitle>게임의 목적</MainTitle>
        <SubTitleBox>
          <SubTitle>1. 플로깅에 대한 이해</SubTitle>
          <SubTitle>2. 쓰레기 줍기에 대한 실천적 활동 유도</SubTitle>
        </SubTitleBox>
        <MainTitle>콘텐츠 내용</MainTitle>
        <SubTitleBox>
          <SubTitle>
            1. 조깅을 하며 쓰레기를 주워 점수를 획득할 수 있다
          </SubTitle>
          <SubTitle>
            2. 스페이스바를 눌러 장애물을 피하며 더 높은 점수를 획득할 수 있다
          </SubTitle>
        </SubTitleBox>
      </Info>
    </Wrapper>
  );
}

export default OneMobile;
