"use client"

import { cn } from "@/lib/utils"

interface VideoPlayerProps {
    src: string
    title?: string
    className?: string
    aspectRatio?: "horizontal" | "vertical" | "square"
}

export function VideoPlayer({ src, title, className, aspectRatio = "horizontal" }: VideoPlayerProps) {
    // Convert Google Drive share link to embed format
    const getEmbedUrl = (url: string) => {
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
                    className="relative rounded-lg overflow-hidden"
                    style={{
                        width: "280px",
                        height: "550px",
                    }}
                >
                    <iframe
                        src={embedUrl}
                        title={title || "Video"}
                        className="w-full h-full border-0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        loading="lazy"
                    />
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
                className="relative rounded-lg overflow-hidden"
                style={{
                    width: "100%",
                    maxWidth: "800px",
                    paddingBottom: paddingBottom,
                    height: 0,
                }}
            >
                <iframe
                    src={embedUrl}
                    title={title || "Video"}
                    className="absolute top-0 left-0 w-full h-full border-0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    loading="lazy"
                />
            </div>
        </div>
    )
}
