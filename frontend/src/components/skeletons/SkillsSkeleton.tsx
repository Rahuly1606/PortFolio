const SkillsSkeleton = () => {
    return (
        <section id="skills" className="py-20 md:py-32 relative bg-white">
            <div className="container mx-auto px-6 lg:px-12">
                <div className="mb-12 md:mb-20">
                    <div className="h-16 md:h-20 lg:h-24 w-full max-w-2xl bg-gray-200 rounded animate-pulse mb-4 md:mb-6" />
                    <div className="h-6 w-full max-w-lg bg-gray-200 rounded animate-pulse" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                    {[1, 2, 3, 4, 5, 6].map((i) => (
                        <div key={i} className="group">
                            <div className="bg-white border-2 border-gray-200 h-full rounded-2xl shadow-soft overflow-hidden">
                                <div className="pb-6 pt-8 px-8">
                                    <div className="w-14 h-14 rounded-xl bg-gray-200 animate-pulse mb-5" />
                                    <div className="h-6 bg-gray-200 rounded animate-pulse w-3/4" />
                                </div>
                                <div className="px-8 pb-8">
                                    <div className="flex flex-wrap gap-2">
                                        {[1, 2, 3, 4, 5, 6].map((j) => (
                                            <div key={j} className="h-8 w-20 bg-gray-200 rounded-lg animate-pulse" />
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default SkillsSkeleton;
