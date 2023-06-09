import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'HireMate',
  description: 'HireMate helping you get hired',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png"/>
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png"/>
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png"/>
        <link rel="manifest" href="/favicon/site.webmanifest"/>
        <link rel="mask-icon" href="/favicon/safari-pinned-tab.svg" color="#f5793b"/>
        <meta name="msapplication-TileColor" content="#37414f"/>
        <meta name="theme-color" content="#f5793b"/>
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
