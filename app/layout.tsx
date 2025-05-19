// app/layout.tsx
import './globals.css'
import { NavBar } from '@/components/Navbar'


export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        
        {children}
      </body>
    </html>
  )
}
