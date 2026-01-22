interface MobileVideoContainerProps {
    videoUrl: string
    title: string
    className?: string
    showBorder?: boolean
}

export function MobileVideoContainer({ videoUrl, title, className, showBorder = true }: MobileVideoContainerProps) {
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

    // Detectar si es un video local (empieza con / o no tiene http/https)
    const isLocalVideo = videoUrl.startsWith('/') || (!videoUrl.startsWith('http://') && !videoUrl.startsWith('https://'))

    return (
        <div className={`relative shrink-0 ${className || ''}`}>
            {/* Contenedor con borde y fondo - dimensiones exactas */}
            <div
                className={`relative rounded-[40px] bg-black ${showBorder ? 'border-[11px] border-black' : ''}`}
                style={{
                    width: '277.3px',
                    height: '600px',
                    overflow: 'hidden',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}
            >
                {isLocalVideo ? (
                    /* Video local usando tag <video> */
                    <video
                        src={videoUrl}
                        title={title}
                        controls
                        style={{
                            width: '100%',
                            height: '100%',
                            objectFit: 'cover',
                        }}
                        playsInline
                    />
                ) : (
                    /* Iframe para videos externos */
                    <iframe
                        src={getEmbedUrl(videoUrl)}
                        title={title}
                        style={{
                            width: '100%',
                            height: '100%',
                            border: 'none',
                            margin: '0',
                            padding: '0',
                            display: 'block',
                        }}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        loading="lazy"
                    />
                )}
            </div>
        </div>
    )
}

