import styled from "styled-components";

export const Input = styled.input`
  background-color: transparent;
  border: 1px solid white;
  margin: 1rem;
  font-size: 18px;
  color: white;
  padding: 7px 7px;
  font-family: monospace;
  width: calc(40vw - 1rem - 70px);
  transition: all 0.3s ease;
  border-bottom: 3px solid #ff8e00;
  outline: none;
  &:focus {
    transform: scale(1.05);
  }
`;

export const SendButton = styled.button`
  background-color: transparent;
  color: white;
  width: 70px;
  height: 35px;
  margin-left: 0.3rem;
  transform: translateY(-5px);
  font-family: monospace;
  box-shadow: 0 6px #999;
  border-radius: 10px;
  &:active {
    background-color: #ff5003;
    box-shadow: 0 5px #666;
    transform: translateY(-1px);
  }
`;

export const ChatLogContiner = styled.ul`
  border: 3px solid white;
  border-radius: 10px;
  height: 40vh;
  width: 60vw;
  overflow: hidden;
  overflow-y: scroll;
  padding-left: 0;
  & li {
    list-style-type: none;
    border-left: 2px solid orange;
    margin: 1rem;
    font-size: 18px;
    background-color: #003f7d;
  }
`;

export const Author = styled.p`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 30px;
  margin: 0;
  background-color: #ff8d00c4;
  & p:first-child {
    font-weight: 700;
    height: fit-content;
    margin: 0;
    font-size: 16px;
    margin-left: 0.4rem;
  }
  & p:nth-child(2) {
    font-weight: 300;
    font-size: 15px;
    margin: 0;
    margin-right: 0.4rem;
  }
`;

export const Message = styled.p`
  font-family: monospace;
  padding: 0 0 0.6rem 0.6rem;
`;
