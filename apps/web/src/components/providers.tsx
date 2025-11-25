"use client";

import { Toaster } from "@permashelf/ui/sonner";
import { ThemeProvider } from "@permashelf/ui/theme";

import { TRPCReactProvider } from "~/trpc/react";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider>
      <TRPCReactProvider>{children}</TRPCReactProvider>
      {/* <div className="absolute right-4 bottom-4">
        <ThemeToggle />
      </div> */}
      <Toaster />
    </ThemeProvider>
  );
}
