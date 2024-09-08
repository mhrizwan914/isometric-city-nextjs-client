// Next
import Link from "next/link"
// React
import { useEffect, useState } from "react"
// Components
import MobileNav from "./MobileNav"

export default function Navlist() {
    const [isMobile, setIsMobile] = useState(false)

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 992)
        }

        handleResize()

        window.addEventListener('resize', handleResize)

        return () => {
            window.removeEventListener('resize', handleResize)
        }
    }, [])
    
    return (
        <>
            {isMobile ?
                <MobileNav />
                :
                <ul className="flex items-center gap-7 mr-auto font-secondary">
                    {
                        [
                            ["Product", "/"],
                            ["Solution", "/"],
                            ["Enterprise", "/"],
                            ["Pricing", "/"]
                        ].map(([text, link], i) => (
                            <li key={i} className="relative after:content-[''] after:absolute after:block after:w-[5px] after:h-[5px] after:bg-dots after:rounded-full last:after:hidden after:top-3 after:-right-4">
                                <Link href={link} tabIndex={0} className="text-[20px] font-medium text-black">
                                    {text}
                                </Link>
                            </li>
                        ))
                    }
                </ul>}

        </>
    )
}