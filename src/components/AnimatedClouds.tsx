// Media
import cloud1 from "media/clouds/1.png"
import cloud2 from "media/clouds/2.png"
import cloud3 from "media/clouds/3.png"
// Next
import Image from "next/image"
// Framer
// import * as motion from "framer-motion/client"

export default function AnimatedClouds() {
    return (
        <div className="relative">
            <Image src={cloud3} alt="cloud3" className="absolute bottom-[60px] left-0 right-0 w-full h-auto z-[1] max-h-[720px]" />
            <Image src={cloud2} alt="cloud2" className="absolute bottom-[30px] left-0 right-0 w-full h-auto z-[2] max-h-[596px]" />
            <Image src={cloud1} alt="cloud1" className="w-full max-w-[100%] relative z-[3] h-auto max-h-[620px]" />
        </div>
    )
}
