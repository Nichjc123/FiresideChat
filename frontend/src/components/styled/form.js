import styled from "styled-components";

export const Input = styled.input`
  background-color: transparent;
  border: none;
  border-bottom: 3px solid white;
  margin: 1rem;
  font-size: 18px;
  color: white;
  padding: 4px 2px;
  font-family: monospace;
  transition: all 0.3s ease;
  &:focus {
    border-bottom: 3px solid #ff8e00;
    outline: none;
    transform: scale(1.08);
  }
`;

export const Form = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  & label {
    font-family: monospace;
  }
`;
