import styled from "styled-components";

export const HeaderStyled = styled.header`
  display: flex;
  text-align: center;
  justify-content: space-between;
  align-content: space-around;
  font-family: ${({ theme }) => theme.fonts.body};
  background-color: ${({ theme }) => theme.colors.mono.black};
  min-height: 10vh;
  font-size: ${({ theme }) => theme.fontSizes[4]};
  color: ${({ theme }) => theme.colors.mono.white};

  .logo {
    align-self: flex-start;
    margin-left: ${({ theme }) => theme.space[5]};
    font-family: ${({ theme }) => theme.fonts.body};
  }

  .basketLoginContainer {
    display: flex;
    justify-content: space-between;
    width: 150px;
    margin-right: ${({ theme }) => theme.space[5]};
  }
`;
