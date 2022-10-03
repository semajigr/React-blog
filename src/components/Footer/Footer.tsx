import { useTheme } from "../../hooks/useTheme";
import { CopyRight, StyledFooter, ThemeFooter } from "./styles";

export const Footer = () => {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <StyledFooter>
      <CopyRight>©2022 Blogologo</CopyRight>
      <ThemeFooter type="button" onClick={toggleTheme}>
        {theme === "dark" ? "light" : "dark"}
      </ThemeFooter>
    </StyledFooter>
  );
};
