import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { NuqsAdapter } from 'nuqs/adapters/next/app'
import { Toaster } from 'sonner'
import Providers from './providers'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter'
})

export const metadata: Metadata = {
  title: 'Calculadora de IMC',
  description: 'Conoce tu peso ideal y empezá a cuidar tu salud hoy'
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased bg-[#191d2a]`}>
        <Providers>
          <NuqsAdapter>{children}</NuqsAdapter>
          <Toaster position="bottom-center" richColors />
        </Providers>
      </body>
    </html>
  )
}
