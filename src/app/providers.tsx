'use client'

import {HeroUIProvider} from '@heroui/react'
import {ThemeProvider as NextThemesProvider} from "next-themes";
import {useEffect, useState} from "react";

export function Providers({children, ...props}: { children: React.ReactNode }) {
  const [mounted, setMounted] = useState<boolean>(false);
  useEffect(() => {
    setMounted(true);
    return () => setMounted(false);
  }, []);
  return (
    mounted && 
    <HeroUIProvider>
      <NextThemesProvider {...props} attribute="class" defaultTheme="dark">
        {children}
      </NextThemesProvider>
    </HeroUIProvider>
  )
}