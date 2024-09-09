// Media
import cloud1 from "media/clouds/1.png"
// import cloud2 from "media/clouds/2.png"
// import cloud3 from "media/clouds/3.png"
// Next
import Image from "next/image"
// Framer
// import * as motion from "framer-motion/client"

export default function AnimatedClouds() {
    return (
        <div className="relative">
            <div className="bg-[url('/clouds/3.png')] absolute h-[100%] w-[200%] [animation:clouds_10s_-3s_linear_infinite;] object-cover bottom-[60px] object-top left-0 right-0 z-[1] max-h-[720px][transform:translate3d(0,_0,_0)]"></div>
            <div className="bg-[url('/clouds/2.png')] absolute h-[100%] w-[200%] [animation:clouds_18s_linear_reverse_infinite;] bottom-[30px]  object-cover object-top left-0 right-0 z-[2] max-h-[596px] [transform:translate3d(0,_0,_0)]"></div>
            <Image src={cloud1} alt="cloud1" className="z-[4] relative" />
        </div>
    )
}