// # components/providers.tsx
"use client";

import { SmoothScrollProvider } from "@/components/SmoothScrollProvider";
import type { ReactNode } from "react";

/** Lenis only — theme is fixed via `className="dark"` on `<html>` (avoids next-themes inline script + React 19 warning). */
export function Providers({ children }: { children: ReactNode }) {
  return <SmoothScrollProvider>{children}</SmoothScrollProvider>;
}
