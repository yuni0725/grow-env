import { Link } from "react-router-dom";
import styled from "styled-components";

export const Center = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const LinkNoDecoration = styled(Link)`
  text-decoration: none;
  color: black;
  display: flex;
  align-items: center;
  justify-content: center;
`;
