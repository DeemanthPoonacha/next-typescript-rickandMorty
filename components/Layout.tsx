import Link from "next/link"
import React from "react"

const Layout = ({children}:{children:React.ReactNode}) => {
  return (
    <div>
      <nav>
        <Link href='/'>
          Home
        </Link>
      </nav>
      {children}
    </div>
  )
}

export default Layout