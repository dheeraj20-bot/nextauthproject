'use client'

import React from "react";
import { useRouter } from "next/navigation";

interface LoginButtonProps {
   children: React.ReactNode;
   mode?:"modal" | "redirect"
   asChild?: boolean
}

export default function LoginButton({children, mode="redirect", asChild}: LoginButtonProps) {
    const router = useRouter();
    const onClick = ()=>{
        router.push("/login")
    }
    if(mode==="modal"){
        return (
            <span>
                Todo Impleem
            </span>
        )
    }
  return (
    <span onClick={onClick} className="cursor-pointer" >
      {children}
    </span>
  );
}