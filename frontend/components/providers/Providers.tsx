"use client";

/**
 * Client-side Providers
 *
 * Wraps the application with necessary client-side providers
 * including ThemeProvider for dark/light mode support.
 */

import { ReactNode } from "react";
import { ThemeProvider } from "@/components/theme";

interface ProvidersProps {
  children: ReactNode;
}

export function Providers({ children }: ProvidersProps) {
  return (
    <ThemeProvider defaultTheme="system">
      {children}
    </ThemeProvider>
  );
}
