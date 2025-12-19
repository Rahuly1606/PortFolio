const CompetitiveCodingSkeleton = () => {
    return (
        <section id="competitive-coding" className="py-20 md:py-32 relative bg-background">
            <div className="container mx-auto px-6 lg:px-12">
                <div className="mb-12 md:mb-20">
                    <div className="h-16 md:h-20 lg:h-24 w-full max-w-2xl bg-gray-200 rounded animate-pulse mb-4 md:mb-6" />
                    <div className="h-6 w-full max-w-lg bg-gray-200 rounded animate-pulse" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                    {[1, 2, 3].map((i) => (
                        <div key={i} className="bg-white border-2 border-gray-200 rounded-2xl shadow-soft overflow-hidden">
                            <div className="p-8 space-y-4">
                                <div className="w-16 h-16 bg-gray-200 rounded-xl animate-pulse" />
                                <div className="h-6 bg-gray-200 rounded animate-pulse w-3/4" />
                                <div className="space-y-2">
                                    <div className="h-4 bg-gray-200 rounded animate-pulse w-full" />
                                    <div className="h-4 bg-gray-200 rounded animate-pulse w-5/6" />
                                </div>
                                <div className="flex gap-2 pt-2">
                                    <div className="h-10 flex-1 bg-gray-200 rounded-xl animate-pulse" />
                                    <div className="h-10 w-10 bg-gray-200 rounded-xl animate-pulse" />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default CompetitiveCodingSkeleton;
