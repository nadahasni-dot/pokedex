"use client"

import { QueryClient, QueryClientProvider } from 'react-query';
import Footer from './components/Footer';
import './globals.css'
import { poppins } from './theme/font';

const queryClient = new QueryClient()

export const metadata = {
  title: 'Pokédex',
  description: 'Discover all the things about pokémon at ease',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body suppressHydrationWarning={true} className={`bg-white text-slate-800 ${poppins.className} bg-no-repeat bg-[length:200px_200px] bg-pokeball bg-right-top-negative`}>
        <QueryClientProvider client={queryClient}>
          {children}
        </QueryClientProvider>
        <Footer />
      </body>
    </html>
  )
}
