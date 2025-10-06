"use client";

import { type ReactNode } from "react";
import { MiniKitProvider } from "@coinbase/onchainkit/minikit";

export function Providers(props: { children: React.ReactNode }) {
  return <MiniKitProvider>{props.children}</MiniKitProvider>;
}