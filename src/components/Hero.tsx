// Components
import { CTA, VideoPlayer } from "@/components"
// Framer
import * as motion from "framer-motion/client"
// Media
import thumbnail from "media/default-thumbnail.png"

export default function Hero() {
    const variants = {
        "hidden": { opacity: 0, y: 48 },
        "visible": { opacity: 1, y: 0 }
    }
    // const transitions = { duration: 0.3, ease: "easeIn", staggerChildren: 0.3 }
    const transitions = { type: "spring", stiffness: 50, staggerChildren: 0.3 }

    return (
        <section>
            <div className="mt-12">
                <div className="container">
                    <motion.div variants={variants} initial="hidden" animate="visible" transition={transitions} className="text-center">
                        <motion.div variants={variants}>
                            <h1 className="text-[35px] sm:text-[50px] md:text-[60px] lg:text-[70px] xl:text-[80px] font-mono font-extrabold leading-none text-[#3F2B20] mb-4">
                                Gamify Your Way Into <br className="hidden sm:block" />
                                <span className="text-[#6EDC00]">Peak Productivity</span>
                            </h1>
                        </motion.div>
                        <motion.div variants={variants}>
                            <p className="xs:leading-relaxed text-[18px] md:text-[20px] lg:text-[22px] xl:text-[26px] leading-snug font-semibold text-[#3D3D3D] mb-6 md:mb-8">
                                Build your city, build your focus—one task at a time
                            </p>
                        </motion.div>
                        <motion.div variants={variants}>
                            <CTA />
                        </motion.div>
                        <motion.div variants={variants} className="mt-14">
                            <VideoPlayer
                                src="/default-video.mp4"
                                thumbnail={thumbnail}
                                css="max-w-[1000px]"
                            />
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}