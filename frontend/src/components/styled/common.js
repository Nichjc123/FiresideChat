import styled from "styled-components";

export const MainContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 100%;
  color: white;
`;

export const CenteredColumn = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const Header1 = styled.h1`
  font-weight: 800;
  font-size: 40px;
  margin-bottom: 0.2rem;
`;

export const PrimaryButton = styled.button`
  letter-spacing: 1.1px;
  background-color: #fd7702;
  text-transform: capitalize;
  border: 3px solid black;
  color: white;
  font-family: monospace;
  font-size: 14px;
  font-weight: 600;
  margin: 0.5rem;
  border-radius: 55px;
  height: 50px;
  padding: 0 35px;
`;

export const GoBackButton = styled.div`
  & svg {
    font-size: 20px;
    margin-right: 20rem;
  }
`;
