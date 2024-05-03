import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const poppins = Poppins({ subsets: ["latin"], weight: "600" });
 
export const metadata: Metadata = {
  title: "Frontend",
  description: "Frontend Boilerplate",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={poppins.className}  style={{padding: '20px'}}>
        <nav>
          <ul style={{display: 'flex', gap: '20px'}}>
            <p>
              <Link href='/'>Home</Link>
            </p>
            <p>
              <Link prefetch={false} href='/about'>About</Link>
            </p>
            <p>
              <Link prefetch={false} href='/blog'>Blog</Link>
            </p>
            <p>
              <Link prefetch={false} href='/posts'>Post</Link>
            </p>
          </ul>
        </nav>
        <hr />
        {children}</body>
    </html>
  );
}
