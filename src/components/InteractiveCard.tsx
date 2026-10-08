"use client";

import React, { useState } from "react";

export default function InteractiveCard({ children }: { children: React.ReactNode }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`rounded-lg ${
        isHovered ? "shadow-2xl bg-neutral-200" : "shadow-lg bg-white"
        }`}
      onMouseOver={() => setIsHovered(true)}
      onMouseOut={() => setIsHovered(false)}
    >
      {children}
    </div>
  );
}