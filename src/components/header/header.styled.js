import styled from "styled-components";

export const HeaderStyled = styled.header`
  display: flex;
  text-align: center;
  align-items: center;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.colors.mono.white};
  min-height: 10vh;
  font-size: ${({ theme }) => theme.fontSizes[4]};
  color: ${({ theme }) => theme.colors.mono.black};
`;

export const Logo = styled.p`
  margin-left: ${({ theme }) => theme.space[5]};
  font-family: ${({ theme }) => theme.fonts.logo};
  font-size: ${({ theme }) => theme.fontSizes[6]};
`;

export const BasketLoginContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 150px;
  margin-right: ${({ theme }) => theme.space[5]};
  font-family: ${({ theme }) => theme.fonts.body};

  a:link {
    text-decoration: none;
    color: ${({ theme }) => theme.colors.dark.dark_red};
  }

  a:hover {
    text-decoration: none;
    color: ${({ theme }) => theme.colors.dark.dark_green};
  }
`;
