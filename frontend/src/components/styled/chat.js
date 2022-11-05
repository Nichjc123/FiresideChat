import styled from "styled-components";

export const Input = styled.input`
  background-color: transparent;
  border: 1px solid white;
  margin: 1rem;
  font-size: 18px;
  color: white;
  padding: 7px 7px;
  font-family: monospace;
  transition: all 0.3s ease;
  &:focus {
    border-bottom: 3px solid #ff8e00;
    outline: none;
    transform: scale(1.08);
  }
`;

export const SendButton = styled.button`
  background-color: transparent;
  color: white;
  font-family: monospace;
  box-shadow: 0 6px #999;
  border-radius: 10px;
  &:active {
    background-color: #3e8e41;
    box-shadow: 0 5px #666;
    transform: translateY(4px);
  }
`;
