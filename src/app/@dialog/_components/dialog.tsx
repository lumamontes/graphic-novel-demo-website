"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { PropsWithChildren } from "react";

export function Dialog({ children }: PropsWithChildren) {
  const router = useRouter();

  return (
    <dialog className="absolute top-0 w-full h-full bg-gray-600 bg-opacity-75 flex justify-center items-center">
      {children}
    </dialog>
  );
}
