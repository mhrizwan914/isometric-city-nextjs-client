import { Manrope as FontSans, Neuton as FontMono, Jost as FontSecondary } from "next/font/google"

const fontSans = FontSans({
    subsets: ["latin"],
    variable: "--font-sans",
    weight: ["200", "300", "400", "500", "600", "700", "800"],
    style: "normal",
    display: "swap",
    fallback: ['system-ui', 'arial']
})

const fontMono = FontMono({
    subsets: ["latin"],
    variable: "--font-mono",
    weight: ["200", "300", "400", "700", "800"],
    style: ["normal"],
    display: "swap",
    fallback: ['system-ui', 'arial']
})

const fontSecondary = FontSecondary({
    subsets: ["latin"],
    variable: "--font-secondary",
    weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
    style: ["normal"],
    display: "swap",
    fallback: ['system-ui', 'arial']
})

export { fontSans, fontMono, fontSecondary }