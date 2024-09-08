// Radix
import * as Collapsible from "@radix-ui/react-collapsible"
// Next
import Link from "next/link"
// React
import { useState } from "react"
// Framer
import { motion } from "framer-motion"

export default function MobileNav() {
    const [open, setOpen] = useState(false)

    const variants = {
        "hidden": { opacity: 0, y: -40 },
        "visible": { opacity: 1, y: 0 }
    }
    const transitions = { duration: 0.3, ease: "easeIn", staggerChildren: 0.2 }
    // const transitions = { type: "spring", stiffness: 200, staggerChildren: 0.3 }
    // animate={open ? "visible" : "hidden"}

    return (
        <Collapsible.Root open={open} className="sm:mr-5" onOpenChange={setOpen}>
            <Collapsible.Trigger asChild>
                <button className="font-semibold text-[16px] bg-[#6EDC00] p-3 rounded-xl  text-white">
                    MENU
                </button>
            </Collapsible.Trigger>
            <Collapsible.Content className="absolute top-full mt-3 left-0 right-0 p-5 bg-white rounded-b-[20px] navbar-shadow z-50">
                <motion.ul className="grid grid-cols-1 font-secondary gap-y-5" initial="hidden" animate="visible" variants={variants} transition={transitions}>
                    {
                        [
                            ["Product", "/"],
                            ["Solution", "/"],
                            ["Enterprise", "/"],
                            ["Pricing", "/"]
                        ].map(([text, link], i) => (
                            <motion.li variants={variants} key={i}>
                                <Link href={link} tabIndex={0} className="text-[20px] font-medium text-black">
                                    {text}
                                </Link>
                            </motion.li>
                        ))
                    }
                </motion.ul>
            </Collapsible.Content>
        </Collapsible.Root>
    )
}