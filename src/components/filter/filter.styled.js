import styled from "styled-components";

export const FilterStyled = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-end;
  width: 20%;
  height: 100%;
  font-family: ${({ theme }) => theme.fonts.body};
`;
