import styled from "styled-components";

const TitleBox = styled.div`
  height: 45vh;

  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
`;

const Center = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const Title = styled.div`
  font-size: 48px;
  font-weight: 900;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const SubTitle = styled.div`
  font-size: 20px;
  font-weight: 500;
  text-align: center;
  margin-top: 40px;
`;

function Intro() {
  return (
    <>
      <TitleBox>
        <Center>
          <Title>
            <span>ECOEDU websites</span>
          </Title>
          <SubTitle>Progress ideas & Upgrade Developments of AI&APP</SubTitle>
        </Center>
      </TitleBox>
    </>
  );
}

export default Intro;
