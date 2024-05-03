import { Metadata } from 'next';
import Link from 'next/link'
import React from 'react'

export const metadata: Metadata = {
  title: "About",
  description: "Frontend Boilerplate",
};

const AboutLayout = ({children}:any) => {
  return (
    <div>
      <nav>
        <ul style={{display: 'flex', gap: '20px'}}>
          <p>
            <Link href='/about/mission'>Mission</Link>
          </p>
          <p>
            <Link href='/about/vision'>Vision</Link>
          </p>
        </ul>
      </nav>
      {children}</div>
  )
}

export default AboutLayout