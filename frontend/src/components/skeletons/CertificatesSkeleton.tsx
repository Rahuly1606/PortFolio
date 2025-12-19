const CertificateCardSkeleton = () => {
    return (
        <div className="h-full bg-white border-2 border-gray-200 rounded-xl shadow-soft overflow-hidden flex flex-col">
            <div className="pb-3 pt-4 px-5">
                <div className="w-12 h-12 bg-gray-200 rounded-lg animate-pulse mb-3" />
                <div className="h-5 bg-gray-200 rounded animate-pulse" />
            </div>
            <div className="flex-1 flex flex-col pt-1 pb-4 px-5">
                <div className="flex-1 space-y-2">
                    <div className="space-y-1">
                        <div className="h-3 bg-gray-200 rounded w-full animate-pulse" />
                        <div className="h-3 bg-gray-200 rounded w-4/5 animate-pulse" />
                    </div>
                    <div className="space-y-1">
                        <div className="h-3 bg-gray-200 rounded w-16 animate-pulse" />
                        <div className="h-3 bg-gray-200 rounded w-32 animate-pulse" />
                    </div>
                    <div className="space-y-1">
                        <div className="h-3 bg-gray-200 rounded w-16 animate-pulse" />
                        <div className="h-3 bg-gray-200 rounded w-24 animate-pulse" />
                    </div>
                </div>
                <div className="h-9 bg-gray-200 rounded-lg animate-pulse mt-4" />
            </div>
        </div>
    );
};

const CertificatesSkeleton = () => {
    return (
        <section id="certificates" className="py-20 md:py-32 relative bg-white">
            <div className="container mx-auto px-6 lg:px-12">
                <div className="mb-12 md:mb-20">
                    <div className="h-16 md:h-20 lg:h-24 w-full max-w-2xl bg-gray-200 rounded animate-pulse mb-4 md:mb-6" />
                    <div className="h-6 w-full max-w-lg bg-gray-200 rounded animate-pulse" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6 mb-12 md:mb-16 max-w-6xl mx-auto">
                    {[1, 2, 3].map((i) => (
                        <CertificateCardSkeleton key={i} />
                    ))}
                </div>

                <div className="text-center">
                    <div className="h-14 w-64 bg-gray-200 rounded-xl animate-pulse mx-auto" />
                </div>
            </div>
        </section>
    );
};

export { CertificatesSkeleton, CertificateCardSkeleton };
