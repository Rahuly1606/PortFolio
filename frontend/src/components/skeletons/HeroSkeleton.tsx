import { Skeleton, SkeletonAvatar, SkeletonButton } from "@/components/ui/skeleton";

const HeroSkeleton = () => {
    return (
        <section className="h-screen flex items-center justify-center relative bg-background overflow-hidden pt-20">
            {/* Subtle Grid Pattern */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:4rem_4rem]" />

            <div className="container mx-auto px-6 lg:px-12 relative z-10 py-12">
                <div className="max-w-5xl mx-auto">
                    <div className="text-center space-y-6">
                        {/* Status Badge Skeleton */}
                        <div className="flex justify-center">
                            <Skeleton className="h-10 w-64 rounded-full" />
                        </div>

                        {/* Main Heading Skeleton */}
                        <div className="space-y-4">
                            <Skeleton className="h-20 md:h-28 lg:h-32 w-full max-w-4xl mx-auto" />
                        </div>

                        {/* Subtitle Skeleton */}
                        <div className="space-y-3 max-w-2xl mx-auto">
                            <Skeleton className="h-6 w-full" />
                            <Skeleton className="h-6 w-3/4 mx-auto" />
                        </div>

                        {/* CTA Buttons Skeleton */}
                        <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
                            <SkeletonButton className="w-32 h-12" />
                            <SkeletonButton className="w-40 h-12" />
                            <SkeletonButton className="w-32 h-12" />
                        </div>

                        {/* Social Links Skeleton */}
                        <div className="flex items-center justify-center gap-4 pt-6">
                            <SkeletonAvatar size="md" />
                            <SkeletonAvatar size="md" />
                            <SkeletonAvatar size="md" />
                        </div>

                        {/* Scroll Indicator Skeleton */}
                        <div className="flex justify-center pt-12">
                            <Skeleton className="h-12 w-8 rounded-full" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroSkeleton;
