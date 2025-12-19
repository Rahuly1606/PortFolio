import { SkeletonCard } from "@/components/ui/skeleton";

const ProjectCardSkeleton = () => {
    return (
        <div className="group">
            <div className="bg-card-dark border-none h-full rounded-2xl shadow-soft overflow-hidden">
                <div className="pb-4 pt-8 px-8">
                    <div className="space-y-3">
                        <div className="h-7 bg-gray-700 rounded animate-pulse" />
                        <div className="space-y-2">
                            <div className="h-4 bg-gray-700 rounded animate-pulse" />
                            <div className="h-4 bg-gray-700 rounded w-5/6 animate-pulse" />
                            <div className="h-4 bg-gray-700 rounded w-4/6 animate-pulse" />
                        </div>
                    </div>
                </div>
                <div className="space-y-6 pb-8 px-8">
                    <div className="flex flex-wrap gap-2">
                        {[1, 2, 3, 4].map((i) => (
                            <div key={i} className="h-7 w-20 bg-gray-700 rounded-lg animate-pulse" />
                        ))}
                    </div>
                    <div className="flex gap-3 pt-2">
                        <div className="flex-1 h-12 bg-gray-700 rounded-xl animate-pulse" />
                        <div className="flex-1 h-12 bg-gray-700 rounded-xl animate-pulse" />
                    </div>
                </div>
            </div>
        </div>
    );
};

const ProjectsSkeleton = () => {
    return (
        <section id="projects" className="py-20 md:py-32 relative bg-background">
            <div className="container mx-auto px-6 lg:px-12">
                <div className="mb-12 md:mb-20">
                    <div className="h-16 md:h-20 lg:h-24 w-full max-w-2xl bg-gray-200 rounded animate-pulse mb-4 md:mb-6" />
                    <div className="h-6 w-full max-w-lg bg-gray-200 rounded animate-pulse" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-12 md:mb-16">
                    {[1, 2, 3].map((i) => (
                        <ProjectCardSkeleton key={i} />
                    ))}
                </div>

                <div className="text-center">
                    <div className="h-14 w-64 bg-gray-200 rounded-xl animate-pulse mx-auto" />
                </div>
            </div>
        </section>
    );
};

export { ProjectsSkeleton, ProjectCardSkeleton };
