"use client";

import { ThemeProvider, ThemeToggle } from "@permashelf/ui/theme";
import { Toaster } from "@permashelf/ui/toast";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider>
      {children}
      <div className="absolute right-4 bottom-4">
        <ThemeToggle />
      </div>
      <Toaster />
    </ThemeProvider>
  );
}
