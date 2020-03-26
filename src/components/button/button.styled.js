import styled from "styled-components";

export const ButtonStyled = styled.button`
  margin: ${({ theme }) => theme.space[3]} 0 ${({ theme }) => theme.space[3]};
  background-color: ${({ theme }) => theme.colors.mono.black};
  color: ${({ theme }) => theme.colors.mono.white};
  border: none;
  outline: none;
  width: 150px;
  height: 50px;

  :hover {
    outline: none;
    border: 1px solid ${({ theme }) => theme.colors.mono.black};
    color: ${({ theme }) => theme.colors.mono.black};
    background-color: ${({ theme }) => theme.colors.mono.white};
  }

  :active {
    outline: none;
    border: 1px solid ${({ theme }) => theme.colors.mono.black};
    background-color: ${({ theme }) => theme.colors.mono.graphite};
  }
`;
