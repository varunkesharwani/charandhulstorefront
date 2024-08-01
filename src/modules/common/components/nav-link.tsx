"use client"

import Link from "next/link"
import { useParams, usePathname } from "next/navigation"
import { ChevronDown } from "@medusajs/icons"
import React from "react"

const NavbarLink = ({
  children,
  href,
  ...props
}: {
  children?: React.ReactNode
  href: string
  className?: string
  onClick?: () => void
  passHref?: true
  [x: string]: any
}) => {
  const { countryCode } = useParams()
  const route = usePathname()

  return (
    <Link
      href={`/${countryCode}${href}`}
      {...props}
      className={`${
        route === `/${countryCode}${href}`
          ? "text-black font-medium"
          : "text-gray-500"
      }   hover:bg-gray-50 hover:text-black p-2 rounded-md transition-all transform duration-300 flex`}
    >
      {children}{" "}
      {/* <span className=" ml-2 text-xs">
        <ChevronDown className="text-xs" />
      </span> */}
    </Link>
  )
}

export default NavbarLink
