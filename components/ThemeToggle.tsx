import { useState, useEffect } from "react";
import Image from "next/image";

import { updateBodyClass, getLocalStorageTheme, getToggleInfo } from "@utils/index";

const ThemeToggle = () => {
  const [theme, setTheme] = useState<string | null>('dark');
  const { alt, src, ariaLabel } = getToggleInfo(theme ?? '')

  useEffect(() => {
    const newTheme = getLocalStorageTheme();
    if (newTheme === 'light') {
      updateBodyClass(newTheme)
    }
    setTheme(newTheme)
  }, [])

  const handleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light'
    updateBodyClass(newTheme);
    setTheme(newTheme)
  }

  return (
    <div className="relative max-w-3xl mx-auto z-10">
      <button
        aria-label={ariaLabel}
        className='absolute p-3 right-8 top-10 rounded-lg md:hover:bg-light-card md:right-0 md:top-12 md:p-4 md:dark:hover:bg-dark-card'
        onClick={handleTheme}
      >
        <Image alt={alt} src={src} width={20} height={20} />
      </button>
    </div>
  )
}

export default ThemeToggle;
