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

    // Aspect ratios: horizontal (16:9), vertical (9:16), square (1:1)
    const aspectRatios = {
        horizontal: "56.25%", // 16:9
        vertical: "177.78%", // 9:16 (inverted)
        square: "100%", // 1:1
    }

    const paddingBottom = aspectRatios[aspectRatio]

    return (
        <div className={cn("w-full flex justify-center", className)} style={{ margin: 0, padding: 0, background: "transparent" }}>
            <div className="relative" style={{
                width: "70%",
                maxWidth: "400px",
                height: "550px",
                background: "transparent"
            }}>
                <iframe
                    src={embedUrl}
                    title={title || "Video"}
                    className="absolute top-0 left-0 w-full h-full rounded-lg"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    loading="lazy"
                    style={{ background: "transparent" }}
                />
            </div>
        </div>
    )
}

