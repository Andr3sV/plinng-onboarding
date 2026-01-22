"use client"

import { cn } from "@/lib/utils"

interface VideoPlayerProps {
    src: string
    title?: string
    className?: string
    aspectRatio?: "horizontal" | "vertical" | "square"
}

export function VideoPlayer({ src, title, className, aspectRatio = "horizontal" }: VideoPlayerProps) {
    // Detectar si es un video local (empieza con / o no tiene http/https)
    const isLocalVideo = src.startsWith('/') || (!src.startsWith('http://') && !src.startsWith('https://'))

    // Convert URLs to embed format
    const getEmbedUrl = (url: string) => {
        // Canva: https://www.canva.com/design/DESIGN_ID/...
        const canvaMatch = url.match(/canva\.com\/design\/([a-zA-Z0-9_-]+)/)
        if (canvaMatch) {
            return `https://www.canva.com/design/${canvaMatch[1]}/view?embed`
        }

        // YouTube Shorts: https://www.youtube.com/shorts/VIDEO_ID
        const shortsMatch = url.match(/youtube\.com\/shorts\/([a-zA-Z0-9_-]+)/)
        if (shortsMatch) {
            return `https://www.youtube.com/embed/${shortsMatch[1]}`
        }

        // YouTube regular: https://www.youtube.com/watch?v=VIDEO_ID
        const youtubeMatch = url.match(/youtube\.com\/watch\?v=([a-zA-Z0-9_-]+)/)
        if (youtubeMatch) {
            return `https://www.youtube.com/embed/${youtubeMatch[1]}`
        }

        // YouTube youtu.be: https://youtu.be/VIDEO_ID
        const youtuBeMatch = url.match(/youtu\.be\/([a-zA-Z0-9_-]+)/)
        if (youtuBeMatch) {
            return `https://www.youtube.com/embed/${youtuBeMatch[1]}`
        }

        // Google Drive share link
        const fileIdMatch = url.match(/\/d\/([a-zA-Z0-9_-]+)/)
        if (fileIdMatch) {
            return `https://drive.google.com/file/d/${fileIdMatch[1]}/preview`
        }

        return url
    }

    const embedUrl = getEmbedUrl(src)

    // For vertical videos, use fixed dimensions
    if (aspectRatio === "vertical") {
        return (
            <div className={cn("flex justify-center", className)}>
                <div
                    className="relative rounded-[40px] bg-black border-[11px] border-black overflow-hidden"
                    style={{
                        width: "280px",
                        height: "550px",
                    }}
                >
                    {isLocalVideo ? (
                        <video
                            src={src}
                            title={title || "Video"}
                            controls
                            style={{
                                width: '100%',
                                height: '100%',
                                objectFit: 'cover',
                            }}
                            playsInline
                        />
                    ) : (
                        <iframe
                            src={embedUrl}
                            title={title || "Video"}
                            className="w-full h-full border-0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                            loading="lazy"
                        />
                    )}
                </div>
            </div>
        )
    }

    // For horizontal and square videos, use aspect ratio with padding
    const aspectRatios = {
        horizontal: "56.25%", // 16:9
        square: "100%", // 1:1
    }

    const paddingBottom = aspectRatios[aspectRatio] || "56.25%"

    return (
        <div className={cn("flex justify-center", className)}>
            <div
                className="relative rounded-[40px] bg-black border-[11px] border-black overflow-hidden"
                style={{
                    width: "100%",
                    maxWidth: "800px",
                    paddingBottom: paddingBottom,
                    height: 0,
                }}
            >
                {isLocalVideo ? (
                    <video
                        src={src}
                        title={title || "Video"}
                        controls
                        className="absolute top-0 left-0 w-full h-full"
                        style={{
                            objectFit: 'cover',
                        }}
                        playsInline
                    />
                ) : (
                    <iframe
                        src={embedUrl}
                        title={title || "Video"}
                        className="absolute top-0 left-0 w-full h-full border-0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        loading="lazy"
                    />
                )}
            </div>
        </div>
    )
}
