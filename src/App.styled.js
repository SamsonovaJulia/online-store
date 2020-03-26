import styled from "styled-components";

export const AppStyle = styled.div`
  text-align: center;
  font-family: ${({ theme }) => theme.fonts.body};
`;

export const Main = styled.div`
  display: flex;
  font-family: ${({ theme }) => theme.fonts.body};
`;
