import { Link } from "react-router-dom";
import styled from "styled-components";

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 4fr 1fr;
  height: 7vh;
  width: 100vw;
  padding: 0px 20px;
`;

const Center = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Columns = styled.div`
  &:first-child {
    width: 100%;
    height: 80%;
    background-image: url("logo.png");
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
  }

  &:nth-child(2) {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
  }

  &:last-child {
    display: flex;
    align-items: center;
    justify-content: space-evenly;
  }
`;

const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  font-size: 18px;
  font-weight: 500;

  color: black;

  &:hover {
    opacity: 0.8;
  }

  cursor: pointer;
`;

const LinkNoDecoration = styled(Link)`
  text-decoration: none;
  display: flex;
  align-items: center;
  justify-content: center;
`;

function NaviBarPc() {
  return (
    <>
      <Wrapper>
        <Center>
          <Columns></Columns>
        </Center>
        <Columns>
          <LinkNoDecoration to="/home">
            <Content>Home</Content>
          </LinkNoDecoration>
          <LinkNoDecoration to="/about">
            <Content>About</Content>
          </LinkNoDecoration>
          <LinkNoDecoration to="/padlet">
            <Content>Padlet</Content>
          </LinkNoDecoration>
        </Columns>
        <Columns></Columns>
      </Wrapper>
    </>
  );
}

export default NaviBarPc;
