import styled from "styled-components";

export const AppStyle = styled.div`
  text-align: center;
  font-family: ${({ theme }) => theme.fonts.body};

  .App-logo {
    height: 40vmin;
    pointer-events: none;
  }

  .App-header {
    background-color: ${({ theme }) => theme.colors.grey.grey};
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: ${({ theme }) => theme.fontSizes[4]};
    color: ${({ theme }) => theme.colors.mono.white};
  }

  .App-link {
    color: ${({ theme }) => theme.colors.brand.sky_blue};
  }

  @media (prefers-reduced-motion: no-preference) {
    .App-logo {
      animation: App-logo-spin infinite 20s linear;
    }
  }

  @keyframes App-logo-spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;
