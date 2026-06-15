import type { Metadata } from 'next'
import { Inter, JetBrains_Mono } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
  weight: ['300', '400', '500', '600', '700', '800', '900'],
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains-mono',
  display: 'swap',
  weight: ['400', '500', '600', '700'],
})

export const metadata: Metadata = {
  title: 'Vidura Rathnayaka | Full Stack Developer',
  description:
    'Portfolio of Vidura Rathnayaka, a Full Stack Developer specializing in Java, Spring Boot, and the MERN Stack. Building elegant, performant web applications.',
  keywords: [
    'Vidura Rathnayaka',
    'Full Stack Developer',
    'Java',
    'Spring Boot',
    'MERN Stack',
    'React',
    'Node.js',
    'Portfolio',
  ],
  authors: [{ name: 'Vidura Rathnayaka' }],
  openGraph: {
    title: 'Vidura Rathnayaka | Full Stack Developer',
    description:
      'Full Stack Developer specializing in Java, Spring Boot, and the MERN Stack.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <body className="font-sans antialiased bg-[#0A0A0A] text-white">
        {children}
      </body>
    </html>
  )
}
