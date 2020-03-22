export const rem = pxSize => {
    const remSize = pxSize / 16;
  
    return `${remSize}rem`;
  };
  
  export const Theme = {
    fonts: {
      body: "Titillium Web, sans-serif",
      logo: "Pacifico, cursive",
      heading: "inherit"
    },
    fontSizes: [
      rem(8),
      rem(10),
      rem(12),
      rem(14),
      rem(16),
      rem(20),
      rem(24),
      rem(32),
      rem(48),
      rem(64)
    ],
    fontWeights: {
      regular: 400,
      bold: 700
    },
    lineHeights: {
      tiny: 1,
      body: 1.5,
      link: 1.714, // 24px based on 14px font size
      heading: 1.25
    },
    space: [
      0,
      rem(2),
      rem(4),
      rem(8),
      rem(16),
      rem(32),
      rem(64),
      rem(128),
      rem(256)
    ],
    colors: {
      brand: {
        red: "#ef0000",
        purple: "#5f259f",
        blue: "#0cb1c3",
        yellow: "#fdda24",
        green: "#c4d600",
        sky_blue: "#2d8ad8"
      },
      dark: {
        dark_red: "#670a15",
        dark_purple: "#35005e",
        dark_blue: "#1e5787",
        dark_orange: "#ff9a32",
        dark_green: "#05740b"
      },
      light: {
        light_red: "#fae3e6",
        light_purple: "#dddfb",
        light_blue: "#e7f4f7",
        light_orange: "#fff1d0",
        light_green: "#def5df"
      },
      mono: {
        black: "#000000",
        coal: "#333333",
        graphite: "#4b5861",
        white: "#ffffff"
      },
      grey: {
        dark_grey: "#7f7f7f",
        grey: "#cccccc",
        light_grey: "#f2f2f2",
        light_grey_2: "#E6E6E6"
      }
    },
  };
  