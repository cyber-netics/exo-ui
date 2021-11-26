export const colors = {
  dark: "rgb(0, 0, 0)",
  dark1: "rgb(48, 48, 48)",
  dark2: "rgba(114, 114, 114, 0.3)",
  dark3: "rgb(0 0 0 / 6%)",

  primary: "rgb(24, 144, 255)",
  primary1: "rgb(64, 169, 255)",
  primary2: "rgba(24, 144, 255, 0.3)",
  primary3: "#1890ff",

  highlight: "rgb(230, 230, 230)",
  highlight1: "rgb(115, 115, 115)",
  hightlight2: "rgb(217, 217, 217)",
  highlight3: "rgb(250, 250, 250)",

  success: "rgb(82, 196, 26)",
  error: "rgb(255, 77, 79)",
  error1: "rgba(255, 77, 79, 0.3)",
  light: "rgb(255, 255, 255)",
};

export const theme = {
  colors: {
    primary: {
      light: colors.light,
      dark: colors.dark,
      primary: colors.primary,
    },

    secondary: {
      light: colors.light,
      dark: colors.dark1,
      primary: colors.primary1,
    },

    font: {
      primary: {
        light: colors.light,
        dark: colors.light,
        primary: colors.light,
      },
      secondary: {
        light: colors.light,
        dark: colors.dark,
        primary: colors.highlight1,
      },
    },

    shadow: {
      primary: {
        light: colors.light,
        dark: colors.dark2,
        primary: colors.primary2,
      },
      secondary: {
        light: colors.light,
        dark: colors.dark3,
        primary: colors.primary3,
      },
    },

    highlight: {
      primary: {
        dark: colors.dark3,
        light: colors.light,
        primary: colors.highlight3,
      },
    },

    status: {
      error: colors.error,
      neutral: colors.dark2,
      success: colors.success,
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
    secondary: {
      small: "12px",
      medium: "13px",
      large: "14px",
    },
  },
};
