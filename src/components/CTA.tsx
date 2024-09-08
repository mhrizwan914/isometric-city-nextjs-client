// Framer
import * as motion from "framer-motion/client"

interface CTAProps {
    link?: string
    text?: string
}

export default function CTA({ link = "javascript:;", text = "Get Started" }: CTAProps) {
    return (
        <div
            // initial={{ y: 0 }}
            // whileHover={{ y: -5 }}
            // transition={{ duration: 0.2 }}
            // className="inline-block"
            dangerouslySetInnerHTML={{
                __html: `<a href=${link} tabindex="0" class="py-3 px-5 primary-cta rounded-xl font-semibold text-[16px] text-black">
                    ${text}
                </a>`
            }}
        />
    )
}