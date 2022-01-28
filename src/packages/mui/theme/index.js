import { createTheme } from "@mui/material";
import themesOptions from "./options";

export const createAppTheme = (config = {}) => {
  let themeOptions = themesOptions.find((theme) => theme.name === config.theme)
  
  if (!themeOptions) {
    console.warn(new Error(`The theme ${config.theme} is not valid`));
    [themeOptions] = themesOptions;
  }

  let theme = createTheme(
    themeOptions,
  )

  return theme;
}