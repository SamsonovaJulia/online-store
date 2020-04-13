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

export const FilterStyled = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-end;
  width: 20%;
  height: 100%;
  font-family: ${({ theme }) => theme.fonts.body};
`;