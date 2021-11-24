export const colors = {
  dark: "rgb(0, 0, 0)",
  dark1: "#000000d4",
  dark2: "rgb(114 114 114 / 28%)",
  dark3: "rgb(0 0 0 / 6%)",

  primary: "rgb(24, 144, 255)",
  primary1: "#40a9ff",
  primary2: "rgb(24 144 255 / 20%)",
  primary3: "#1890ff",

  light: "rgb(255, 255, 255)",
  highlight: "rgb(217, 217, 217)",
};

export const theme = {
  colors: {
    primary: {
      dark: colors.dark,
      primary: colors.primary,
    },

    secondary: {
      dark: colors.dark1,
      primary: colors.primary1,
    },

    font: {
      primary: {
        dark: colors.light,
        primary: colors.light,
      },
    },

    shadow: {
      primary: {
        dark: colors.dark2,
        primary: colors.primary2,
      },
      secondary: {
        dark: colors.dark3,
        primary: colors.primary3,
      },
    },
  },

  sizes: {
    primary: {
      small: "40px",
      medium: "50px",
      large: "55px",
    },
    secondary: {
      small: "16px",
      medium: "17px",
      large: "18px",
    },
  },

  spacing: {
    primary: {
      small: "4px 15px",
      medium: "5px 25px",
      large: "6px 30px",
    },
  },

  font: {
    primary: {
      small: "13.5px",
      medium: "14.5px",
      large: "15.5px",
    },
  },
};
