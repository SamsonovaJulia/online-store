import styled from "styled-components";

export const AppStyle = styled.div`
  text-align: center;
  font-family: ${({ theme }) => theme.fonts.body};
`;

export const Main = styled.div`
  display: flex;
  justify-content: space-between;
  font-family: ${({ theme }) => theme.fonts.body};
`;

export const ProductsStyle = styled.div`
  width: 80%;
`;
