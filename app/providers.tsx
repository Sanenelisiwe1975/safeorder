"use client";

import { MiniKitProvider } from "@coinbase/onchainkit/minikit";
import { base } from "viem/chains";
import type { ReactNode } from "react";

export function Providers(props: { children: ReactNode }) {
  return <MiniKitProvider chain={base}>{props.children}</MiniKitProvider>;
}