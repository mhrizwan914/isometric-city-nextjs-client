// Fonts
import { fontSans, fontMono, fontSecondary } from "./fonts"
// Css
import "./globals.css"
// Components
import { Navbar } from "@/components"

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`font-sans antialiased bg-body ${fontSans.variable} ${fontMono.variable} ${fontSecondary.variable}`}>
        <Navbar />
        <main>
          {children}
        </main>
      </body>
    </html>
  )
}