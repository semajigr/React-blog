import { useLayoutEffect, useState } from "react";
import { Theme } from "../types";

export const useTheme = () => {
  const [theme, setTheme] = useState<Theme>("light");

  useLayoutEffect(() => {});
};
