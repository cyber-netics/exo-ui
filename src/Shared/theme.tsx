export const colors = {
  dark: "rgb(0, 0, 0)",
  dark1: "rgb(48, 48, 48)",
  dark2: "rgba(114, 114, 114, 0.3)",
  dark3: "rgb(0 0 0 / 6%)",

  primary: "rgb(24, 144, 255)",
  primary1: "rgb(64, 169, 255)",
  primary2: "rgba(24, 144, 255, 0.3)",
  primary3: "#1890ff",

  error: "rgb(255, 77, 79)",
  error1: "rgba(255, 77, 79, 0.3)",
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
    tertiary: {
      small: "10px",
      medium: "11px",
      large: "12px",
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
