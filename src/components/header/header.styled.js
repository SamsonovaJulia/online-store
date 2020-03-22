import styled from "styled-components";

export const HeaderStyled = styled.header`
  display: flex;
  text-align: center;
  font-family: ${({ theme }) => theme.fonts.body};
  background-color: ${({ theme }) => theme.colors.grey.grey};
  min-height: 10vh;
  justify-content: center;
  font-size: ${({ theme }) => theme.fontSizes[4]};
  color: ${({ theme }) => theme.colors.mono.black};
  justify-content: space-between;

  .logo {
    align-self: flex-start;
    margin-left: ${({ theme }) => theme.space[5]};
  }

  .basket {
    margin-right: ${({ theme }) => theme.space[5]};
  }
`;
