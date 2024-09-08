"use client"
// Next
import Image from "next/image"
import Link from "next/link"
// Media
import logo from "media/logo.svg"
// Components
import Navlist from "./Navlist"
import { CTA } from "@/components"
// Framer
import { motion } from "framer-motion"

export default function Navbar() {
    let variants = {
        "hidden": { opacity: 0, y: -40 },
        "visible": { opacity: 1, y: 0 }
    }
    let transitions = { duration: 0.3, ease: "easeIn" }
    // let transitions = { type: "spring", stiffness: 200, damping: 100 }

    return (
        <motion.header variants={variants} initial="hidden" whileInView="visible" transition={transitions}>
            <div className="mt-10">
                <div className="container">
                    <div className="w-[95%] mx-auto p-5 rounded-t-[20px] lg:rounded-[20px] bg-white navbar-shadow relative">
                        <div className="flex items-center">
                            <Link href="/" className="block mr-auto">
                                <Image tabIndex={0} src={logo} alt="logo" priority={true} />
                            </Link>
                            <Navlist />
                            <div className="xs:hidden">
                                <CTA />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </motion.header>
    )
}