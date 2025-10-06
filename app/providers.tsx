"use client";

import { type ReactNode } from "react";
// Remove import { base } from "wagmi/chains";
// Remove import { MiniKitProvider } from "@coinbase/onchainkit/minikit";
// Replace the Providers component with a simple React fragment or your own context provider:
export function Providers(props: { children: React.ReactNode }) {
  return <>{props.children}</>;
}