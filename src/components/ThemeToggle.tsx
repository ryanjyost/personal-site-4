"use client";

import { Box, Button } from "@radix-ui/themes";
import { useTheme } from "./ThemeProvider";
import { MoonIcon, SunIcon } from "@radix-ui/react-icons";

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <Button
      variant="soft"
      size="2"
      onClick={toggleTheme}
      aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
      color="gray"
      radius="full"
    >
      {theme === "light" ? <MoonIcon /> : <SunIcon />}
      {theme === "light" ? "Dark Mode" : "Light Mode"}
    </Button>
  );
}
