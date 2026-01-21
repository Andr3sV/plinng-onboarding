interface MobileVideoContainerProps {
    videoUrl: string
    title: string
    className?: string
}

export function MobileVideoContainer({ videoUrl, title, className }: MobileVideoContainerProps) {
    const getEmbedUrl = (url: string) => {
        const fileIdMatch = url.match(/\/d\/([a-zA-Z0-9_-]+)/)
        if (fileIdMatch) {
            return `https://drive.google.com/file/d/${fileIdMatch[1]}/preview`
        }
        return url
    }

    return (
        <div className={`relative shrink-0 ${className || ''}`}>
            {/* Contenedor con borde y fondo - dimensiones exactas */}
            <div
                className="relative rounded-[40px] bg-[#EDEEEC] border-[11px] border-black"
                style={{
                    width: '277.3px',
                    height: '600px',
                    overflow: 'hidden',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}
            >
                {/* Iframe que ocupa todo el espacio interno */}
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
            </div>
        </div>
    )
}

