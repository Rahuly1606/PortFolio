const AboutSkeleton = () => {
    return (
        <section id="about" className="py-20 md:py-32 relative bg-white">
            <div className="container mx-auto px-6 lg:px-12">
                <div className="max-w-6xl mx-auto">
                    <div className="mb-12 md:mb-20">
                        <div className="h-16 md:h-20 lg:h-24 w-full max-w-md bg-gray-200 rounded animate-pulse mb-4 md:mb-6" />
                        <div className="h-6 w-full max-w-lg bg-gray-200 rounded animate-pulse" />
                    </div>

                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div className="space-y-6">
                            <div className="space-y-3">
                                <div className="h-5 bg-gray-200 rounded animate-pulse w-full" />
                                <div className="h-5 bg-gray-200 rounded animate-pulse w-5/6" />
                                <div className="h-5 bg-gray-200 rounded animate-pulse w-full" />
                                <div className="h-5 bg-gray-200 rounded animate-pulse w-4/5" />
                            </div>
                            <div className="space-y-3">
                                <div className="h-5 bg-gray-200 rounded animate-pulse w-full" />
                                <div className="h-5 bg-gray-200 rounded animate-pulse w-5/6" />
                            </div>
                            <div className="h-12 w-40 bg-gray-200 rounded-xl animate-pulse" />
                        </div>
                        <div className="relative">
                            <div className="aspect-square w-full max-w-md mx-auto bg-gray-200 rounded-2xl animate-pulse" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutSkeleton;
