const ContactSkeleton = () => {
    return (
        <section id="contact" className="py-20 md:py-32 relative bg-white">
            <div className="container mx-auto px-6 lg:px-12">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-12 md:mb-16">
                        <div className="h-16 md:h-20 lg:h-24 w-full max-w-md bg-gray-200 rounded animate-pulse mb-4 md:mb-6 mx-auto" />
                        <div className="h-6 w-full max-w-lg bg-gray-200 rounded animate-pulse mx-auto" />
                    </div>

                    <div className="bg-background border-2 border-gray-200 rounded-2xl shadow-soft p-8 md:p-12">
                        <div className="space-y-6">
                            <div className="space-y-2">
                                <div className="h-4 w-20 bg-gray-200 rounded animate-pulse" />
                                <div className="h-12 w-full bg-gray-200 rounded-xl animate-pulse" />
                            </div>
                            <div className="space-y-2">
                                <div className="h-4 w-20 bg-gray-200 rounded animate-pulse" />
                                <div className="h-12 w-full bg-gray-200 rounded-xl animate-pulse" />
                            </div>
                            <div className="space-y-2">
                                <div className="h-4 w-20 bg-gray-200 rounded animate-pulse" />
                                <div className="h-32 w-full bg-gray-200 rounded-xl animate-pulse" />
                            </div>
                            <div className="h-12 w-full bg-gray-200 rounded-xl animate-pulse" />
                        </div>

                        <div className="mt-12 pt-8 border-t border-gray-200">
                            <div className="flex justify-center gap-4">
                                {[1, 2, 3, 4].map((i) => (
                                    <div key={i} className="h-12 w-12 bg-gray-200 rounded-full animate-pulse" />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactSkeleton;
