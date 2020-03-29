import styled from "styled-components";

export const ProductsStyled = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 80%;
  font-family: ${({ theme }) => theme.fonts.body};
  margin-bottom: ${({ theme }) => theme.space[6]};
`;

export const Product = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 30%;
  margin-bottom: ${({ theme }) => theme.space[6]};

  a:link {
    text-decoration: none;
    color: ${({ theme }) => theme.colors.dark.dark_red};
  }

  a:hover {
    text-decoration: none;
    color: ${({ theme }) => theme.colors.dark.dark_green};
  }

  div {
    display: flex;
    flex-direction: column;
    margin: ${({ theme }) => theme.space[4]} 0 0;
  }
`;

export const Img = styled.div`
  position: relative;
  display: inline-block;
  width: 100%;
  height: auto;

  img {
    width: 100%;
    height: auto;
  }

  .img-top {
    display: none;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 99;
    height: 100%;
    width: 100%;
  }

  :hover .img-top {
    display: inline;
    cursor: pointer;
  }
`;

export const Price = styled.p`
  font-weight: ${({ theme }) => theme.fontWeights.bold};
`;

export const Title = styled.p`
  :hover {
    cursor: pointer;
  }
`;
