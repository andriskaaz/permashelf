"use client";

import dynamic from "next/dynamic";

import { Toaster } from "@permashelf/ui/sonner";
import { ThemeProvider } from "@permashelf/ui/theme";
import { TRPCReactProvider } from "~/trpc/react";

import { env } from "~/env";

const Devtools = env.NODE_ENV === "development" ? dynamic(() => import("~/components/devtools")) : () => null;

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider>
      <TRPCReactProvider>
        {children}
        <Devtools />
      </TRPCReactProvider>
      <Toaster />
    </ThemeProvider>
  );
}
