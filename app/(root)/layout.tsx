import React, { ReactNode } from 'react'

const RootLayout = ({children}: {children: ReactNode}) => {
  return (
    <main>
        Navbar
        {children}
        footer      
    </main>
  )
}

export default RootLayout