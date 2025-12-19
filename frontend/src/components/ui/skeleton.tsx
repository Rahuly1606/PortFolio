import { cn } from "@/lib/utils";

function Skeleton({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      role="status"
      aria-busy="true"
      aria-label="Loading"
      className={cn("animate-pulse rounded-md bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 bg-[length:200%_100%] dark:from-gray-700 dark:via-gray-600 dark:to-gray-700", className)}
      style={{
        animation: "pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite, shimmer 2s linear infinite"
      }}
      {...props}
    />
  )
}

function SkeletonText({
  className,
  lines = 1,
  ...props
}: React.HTMLAttributes<HTMLDivElement> & { lines?: number }) {
  return (
    <div className="space-y-2" {...props}>
      {Array.from({ length: lines }).map((_, i) => (
        <Skeleton
          key={i}
          className={cn("h-4 w-full", i === lines - 1 && "w-4/5", className)}
        />
      ))}
    </div>
  )
}

function SkeletonAvatar({
  className,
  size = "md",
  ...props
}: React.HTMLAttributes<HTMLDivElement> & { size?: "sm" | "md" | "lg" | "xl" }) {
  const sizeClasses = {
    sm: "w-8 h-8",
    md: "w-12 h-12",
    lg: "w-16 h-16",
    xl: "w-24 h-24"
  }

  return (
    <Skeleton
      className={cn("rounded-full", sizeClasses[size], className)}
      {...props}
    />
  )
}

function SkeletonImage({
  className,
  aspectRatio = "video",
  ...props
}: React.HTMLAttributes<HTMLDivElement> & { aspectRatio?: "square" | "video" | "portrait" }) {
  const aspectClasses = {
    square: "aspect-square",
    video: "aspect-video",
    portrait: "aspect-[3/4]"
  }

  return (
    <Skeleton
      className={cn("w-full", aspectClasses[aspectRatio], className)}
      {...props}
    />
  )
}

function SkeletonCard({
  className,
  hasImage = false,
  hasAvatar = false,
  ...props
}: React.HTMLAttributes<HTMLDivElement> & { hasImage?: boolean; hasAvatar?: boolean }) {
  return (
    <div
      className={cn("rounded-xl border border-gray-200 bg-white dark:bg-gray-800 dark:border-gray-700 p-6 space-y-4", className)}
      role="status"
      aria-busy="true"
      aria-label="Loading card"
      {...props}
    >
      {hasImage && <SkeletonImage className="mb-4" />}
      {hasAvatar && (
        <div className="flex items-center gap-3 mb-4">
          <SkeletonAvatar size="md" />
          <div className="flex-1 space-y-2">
            <Skeleton className="h-4 w-1/2" />
            <Skeleton className="h-3 w-1/3" />
          </div>
        </div>
      )}
      <Skeleton className="h-6 w-3/4" />
      <SkeletonText lines={3} />
      <div className="flex gap-2 pt-2">
        <Skeleton className="h-8 w-20" />
        <Skeleton className="h-8 w-20" />
        <Skeleton className="h-8 w-20" />
      </div>
    </div>
  )
}

function SkeletonButton({
  className,
  variant = "default",
  ...props
}: React.HTMLAttributes<HTMLDivElement> & { variant?: "default" | "small" }) {
  return (
    <Skeleton
      className={cn(
        "rounded-xl",
        variant === "default" ? "h-12 w-32" : "h-8 w-20",
        className
      )}
      {...props}
    />
  )
}

export { Skeleton, SkeletonText, SkeletonAvatar, SkeletonImage, SkeletonCard, SkeletonButton };
