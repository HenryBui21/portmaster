const plugin = require("tailwindcss/plugin");

module.exports = {
  content: [
    "./src/**/*.{html,scss,css,ts}",
    "./projects/**/*.{html,scss,css,ts}",
  ],
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      white: "var(--white)",
      background: "var(--background)",

      gray: {
        100: "var(--gray-100)",
        200: "var(--gray-200)",
        300: "var(--gray-300)",
        400: "var(--gray-400)",
        500: "var(--gray-500)",
        600: "var(--gray-600)",
        700: "var(--gray-700)",
        DEFAULT: "var(--gray-700)",
      },

      green: {
        100: "#143d24",
        200: "#18823d",
        300: "#1de966",
        DEFAULT: "#18823d",
      },

      red: {
        100: "#3d1414",
        200: "#811818",
        300: "#e01d1d",
        DEFAULT: "#d12e2e",
      },

      yellow: {
        100: "#3d3a14",
        200: "#827918",
        300: "#e9d81d",
        DEFAULT: "#e9d81d",
      },

      cyan: {
        100: "#b2ebf2",
        200: "#80deea",
        300: "#4dd0e1",
        400: "#26c6da",
        500: "#00bcd4",
        600: "#00acc1",
        700: "#0097a7",
        800: "#00838f",
        900: "#006064",
      },

      deepPurple: {
        50: "#ede7f6",
        100: "#d1c4e9",
        200: "#b39ddb",
        300: "#9575cd",
        400: "#7e57c2",
        500: "#673ab7",
        600: "#5e35b1",
        700: "#512da8",
        800: "#4527a0",
        900: "#311b92",
      },

      blue: {
        DEFAULT: "#4e97fa",
      },

      // Legacy color definitions

      // The overall application background color

      // Text shades
      cards: {
        primary: "var(--cards-primary)",
        secondary: "var(--cards-secondary)",
        tertiary: "var(--cards-tertiary)",
      },

      buttons: {
        icon: "var(--button-icon)",
        dark: "var(--button-dark)",
        light: "var(--button-light)",
      },

      info: {
        green: "var(--info-green)",
        red: "var(--info-red)",
        gray: "var(--info-gray)",
        blue: "var(--info-blue)",
        yellow: "var(--info-yellow)",
      },
    },
    textColor: (theme) => {
      return {
        primary: "var(--text-primary)",
        secondary: "var(--text-secondary)",
        tertiary: "var(--text-tertiary)",

        ...theme("colors"),
      };
    },
    extend: {
      boxShadow: {
        xs: "0 0 0 1px rgba(0, 0, 0, 0.05)",
        "inner-xs": "inset 0 2px 4px 0 rgba(0, 0, 0, 0.16)",
      },
      fontSize: {
        xxs: "0.7rem",
      },
    },
  },
  plugins: [
    plugin(function ({ addVariant, theme }) {
      Object.keys(theme("screens")).forEach((key) => {
        addVariant("sfng-" + key, ".min-width-" + theme("screens")[key] + " &");
      });
    }),
  ],
};
