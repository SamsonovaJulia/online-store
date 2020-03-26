import styled from "styled-components";

export const ProductStyled = styled.div`
  display: flex;
  flex-wrap: nowrap;
  width: 100%;
  justify-content: center;
  align-items: center;
  font-family: ${({ theme }) => theme.fonts.body};
  margin: 0 ${({ theme }) => theme.space[7]} ${({ theme }) => theme.space[6]} 0;

  img {
    width: 50%;
    height: auto;
  }

  h1 {
    font-weight: ${({ theme }) => theme.fontWeights.bold};
    font-size: ${({ theme }) => theme.fontSizes[6]};
  }

  input {
    margin-top: ${({ theme }) => theme.space[3]};
    outline: none;
    width: 70px;
    height: 25px;
  }
`;

export const Price = styled.p`
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  font-size: ${({ theme }) => theme.fontSizes[5]};
`;

export const About = styled.p`
  margin: ${({ theme }) => theme.space[4]} 0 ${({ theme }) => theme.space[4]};
  font-size: ${({ theme }) => theme.fontSizes[5]};
  text-align: left;
`;

export const Description = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 50%;
  height: auto;
`;
