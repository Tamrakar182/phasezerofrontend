"use client"
import clsx from "clsx"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useEffect, useState } from "react"
import Image from "next/image"

const Nav = () => {
  const pathname = usePathname()
  const [isHome, setIsHome] = useState(true)
  const [isScrolled, setIsScrolled] = useState(false)

  //useEffect that detects if window is scrolled > 5px on the Y axis
  useEffect(() => {
    if (isHome) {
      const detectScrollY = () => {
        if (window.scrollY > 5) {
          setIsScrolled(true)
        } else {
          setIsScrolled(false)
        }
      }

      window.addEventListener("scroll", detectScrollY)

      return () => {
        window.removeEventListener("scroll", detectScrollY)
      }
    }
  }, [isHome])

  useEffect(() => {
    pathname === "/" ? setIsHome(true) : setIsHome(false)
  }, [pathname])

  return (
    <div
      className={clsx("sticky top-0 inset-x-0 z-50 group", {
        "!fixed": isHome,
      })}
    >
      <header
        className={clsx(
          "relative h-30 px-8 mx-auto transition-colors bg-transparent border-b border-transparent duration-200 group-hover:bg-white group-hover:border-gray-200",
          {
            "!bg-white !border-gray-200": !isHome || isScrolled,
          }
        )}
      >
        <nav
          className={clsx(
            "text-gray-900 flex items-center justify-center w-full h-full text-small-regular transition-colors duration-200",
            {
              "text-white group-hover:text-gray-200": isHome && !isScrolled,
            }
          )}
        >
          <div className="flex items-center h-full">
            <Link href="/" className="max-w-[500px]">
              <Image
                src="/logo_black.png"
                alt="logo"
                height={80}
                width={120}
                className="object-contain p-2"
              />
            </Link>
          </div>
        </nav>
      </header>
    </div>
  )
}

export default Nav
