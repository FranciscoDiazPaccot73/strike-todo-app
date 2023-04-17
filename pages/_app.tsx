import type { AppProps } from 'next/app'
import dynamic from "next/dynamic";
import { useEffect, useState } from 'react'

import '@/styles/globals.scss'

const ThemeToggle = dynamic(() => import('./components/ThemeToggle'));

export default function App({ Component, pageProps }: AppProps) {
  const [theme, setTheme] = useState<string>('light')

  useEffect(() => {
    const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    setTheme(systemTheme)
    document.body.classList.remove('light', 'dark')
    document.body.classList.add(systemTheme)
  }, [])

  return (
    <main className='relative'>
      <ThemeToggle onClick={setTheme} theme={theme} />
      <Component {...pageProps} />
    </main>
  )
}
