export const THEMES = {
  DARK: 'DARK',
  LIGHT: 'LIGHT',
};

const themesOptions = [
  {
    name: THEMES.DARK,
    palette: {
      mode: 'dark',
      background: {
        default: '#141414',
      },
      primary: {
        main: '#D0DF00',
      },
    },
    typography: {
      button: {
        fontWeight: 800,
      },
    },
  },
  {
    name: THEMES.LIGHT,
  },
]

export default themesOptions