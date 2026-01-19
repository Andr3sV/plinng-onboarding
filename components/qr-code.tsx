import { cn } from "@/lib/utils"

interface QRCodeProps {
  src?: string
  alt?: string
  size?: "sm" | "md" | "lg"
  className?: string
}

export function QRCode({ 
  src, 
  alt = "QR Code", 
  size = "md",
  className 
}: QRCodeProps) {
  const sizeClasses = {
    sm: "w-32 h-32",
    md: "w-48 h-48 sm:w-56 sm:h-56",
    lg: "w-64 h-64 sm:w-72 sm:h-72",
  }

  // Placeholder QR code - replace with actual QR image when available
  if (!src) {
    return (
      <div
        className={cn(
          "bg-muted border-2 border-dashed border-muted-foreground/20 rounded-lg flex items-center justify-center",
          sizeClasses[size],
          className
        )}
      >
        <div className="text-center p-4">
          <div className="text-xs text-muted-foreground mb-2">QR Code</div>
          <div className="text-2xl font-mono">▢</div>
        </div>
      </div>
    )
  }

  return (
    <div className={cn("flex items-center justify-center", className)}>
      <img
        src={src}
        alt={alt}
        className={cn("rounded-lg", sizeClasses[size])}
      />
    </div>
  )
}

