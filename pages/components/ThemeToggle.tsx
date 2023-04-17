import Image from "next/image";

import { ThemeToggle } from "../types";

const ThemeToggle = ({onClick, theme} : ThemeToggle) => {
  const { alt, src } = theme === 'light' ? { alt: "Use Dark Mode", src: "/moon.svg" } : { alt: "Use Light Mode", src: "/sun.svg" };

  const handleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light'
    onClick(newTheme)
    console.log(newTheme)
    document.body.classList.remove('light', 'dark')
    document.body.classList.add(newTheme)
  }

  return (
    <div className="relative max-w-3xl mx-auto">
      <button
        className='absolute p-3 right-8 top-10 rounded-lg md:hover:bg-light-card md:right-0 md:top-12 md:p-4 md:dark:hover:bg-dark-card'
        onClick={handleTheme}
      >
        <Image alt={alt} src={src} width={20} height={20} />
      </button>
    </div>
  )
}

export default ThemeToggle;
