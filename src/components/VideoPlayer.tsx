"use client"
// React
import { useState, useRef } from "react"
// Next
import Image, { StaticImageData } from "next/image"

interface VideoPlayerProps {
    src: string
    thumbnail: string | StaticImageData
    css?: string
}

export default function VideoPlayer({ src, thumbnail, css }: VideoPlayerProps) {
    const [isPlaying, setIsPlaying] = useState(false);
    const videoRef = useRef<HTMLVideoElement>(null);

    const handlePlay = () => {
        if (videoRef.current) {
            videoRef.current.play();
        }
        setIsPlaying(true);
    }

    const handlePause = () => {
        if (videoRef.current) {
            videoRef.current.pause();
        }
        setIsPlaying(false);
    }

    const handleClick = () => {
        if (isPlaying) {
            handlePause();
        } else {
            handlePlay();
        }
    }
    const thumbnailUrl = typeof thumbnail === "string" ? thumbnail : thumbnail
    return (
        <div className={`relative rounded-3xl overflow-hidden mx-auto border-2 border-[#000000] ${css}`}>
            {!isPlaying && (
                <div className="relative cursor-pointer" onClick={handlePlay}>
                    <Image src={thumbnailUrl} alt="thumbnail" className="w-full h-auto" />
                </div>
            )}
            <video
                ref={videoRef}
                src={src}
                className={`w-full h-auto ${isPlaying ? "block" : "hidden"}`}
                preload="none"
                onClick={handleClick}
                onPause={handlePause}
                onEnded={handlePause}
            />
        </div>
    )
}
