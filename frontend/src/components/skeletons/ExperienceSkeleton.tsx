const ExperienceSkeleton = () => {
    return (
        <section id="experience" className="py-20 md:py-32 relative bg-background">
            <div className="container mx-auto px-6 lg:px-12">
                <div className="mb-12 md:mb-20">
                    <div className="h-16 md:h-20 lg:h-24 w-full max-w-2xl bg-gray-200 rounded animate-pulse mb-4 md:mb-6" />
                    <div className="h-6 w-full max-w-lg bg-gray-200 rounded animate-pulse" />
                </div>

                <div className="max-w-5xl mx-auto relative">
                    {/* Vertical Timeline Line */}
                    <div className="absolute left-0 top-0 bottom-0 hidden md:block w-0.5 bg-gray-200" />

                    <div className="space-y-8 md:space-y-12">
                        {[1].map((i) => (
                            <div key={i} className="relative md:pl-16">
                                {/* Timeline Dot */}
                                <div className="absolute left-0 top-10 w-3 h-3 rounded-full bg-gray-300 animate-pulse hidden md:block transform -translate-x-[5px]" />

                                <div className="bg-white border-2 border-gray-200 rounded-2xl shadow-soft overflow-hidden">
                                    <div className="px-8 pt-8 pb-6">
                                        <div className="flex items-start justify-between flex-wrap gap-6">
                                            <div className="flex-1">
                                                <div className="w-20 h-20 bg-gray-200 rounded-xl animate-pulse mb-6" />
                                                <div className="h-8 bg-gray-200 rounded animate-pulse mb-3 w-3/4" />
                                                <div className="h-5 bg-gray-200 rounded animate-pulse mb-2 w-1/2" />
                                                <div className="h-4 bg-gray-200 rounded animate-pulse w-1/3" />
                                            </div>
                                            <div className="space-y-2">
                                                <div className="h-4 bg-gray-200 rounded animate-pulse w-32" />
                                                <div className="h-4 bg-gray-200 rounded animate-pulse w-24" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="px-8 pb-8 space-y-3">
                                        <div className="h-4 bg-gray-200 rounded animate-pulse w-40" />
                                        <div className="space-y-2">
                                            <div className="h-4 bg-gray-200 rounded animate-pulse w-full" />
                                            <div className="h-4 bg-gray-200 rounded animate-pulse w-5/6" />
                                            <div className="h-4 bg-gray-200 rounded animate-pulse w-full" />
                                            <div className="h-4 bg-gray-200 rounded animate-pulse w-4/5" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ExperienceSkeleton;
