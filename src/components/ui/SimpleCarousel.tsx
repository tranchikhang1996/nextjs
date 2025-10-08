import { useState } from "react";

function mod(n: number, m: number) {
    return ((n % m) + m) % m;
}

export default function SimpleCarousel({ images }: { images: { src: string; alt: string }[] }) {
    const [index, setIndex] = useState(0);

    const prevIndex = mod(index - 1, images.length);
    const nextIndex = mod(index + 1, images.length);

    const goPrev = () => setIndex(mod(index - 1, images.length));
    const goNext = () => setIndex(mod(index + 1, images.length));

    return (
        <section className="w-full max-w-5xl mx-auto py-8 lg:py-16 relative px-4 lg:px-16">
            {/* Mobile carousel - simplified */}
            <div className="lg:hidden">
                <div className="relative">
                    <img
                        src={images[index].src}
                        alt={images[index].alt}
                        className="w-full aspect-[16/9] object-cover rounded-xl shadow-2xl"
                    />
                    
                    {/* Mobile navigation */}
                    <button
                        onClick={goPrev}
                        className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-2 shadow-lg"
                        aria-label="Previous image"
                    >
                        <img src="/angle_left.svg" className="size-6" alt="" />
                    </button>

                    <button
                        onClick={goNext}
                        className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-2 shadow-lg"
                        aria-label="Next image"
                    >
                        <img src="/angle_right.svg" className="size-6" alt="" />
                    </button>
                </div>

                {/* Mobile dots indicator */}
                <div className="flex justify-center mt-4 space-x-2">
                    {images.map((_, i) => (
                        <button
                            key={i}
                            onClick={() => setIndex(i)}
                            className={`w-2 h-2 rounded-full ${
                                i === index ? 'bg-white' : 'bg-white/50'
                            }`}
                            aria-label={`Go to image ${i + 1}`}
                        />
                    ))}
                </div>
            </div>

            {/* Desktop carousel - three images */}
            <div className="hidden lg:flex items-center justify-center gap-6">
                {/* Previous image */}
                <div className="w-1/4 opacity-60">
                    <img
                        src={images[prevIndex].src}
                        alt={images[prevIndex].alt}
                        className="w-full aspect-[16/9] object-cover rounded-xl shadow-md"
                    />
                </div>

                {/* Current (main) image */}
                <div className="w-1/2">
                    <img
                        src={images[index].src}
                        alt={images[index].alt}
                        className="w-full aspect-[16/9] object-cover rounded-xl shadow-2xl"
                    />
                </div>

                {/* Next image */}
                <div className="w-1/4 opacity-60">
                    <img
                        src={images[nextIndex].src}
                        alt={images[nextIndex].alt}
                        className="w-full aspect-[16/9] object-cover rounded-xl shadow-md"
                    />
                </div>

                {/* Desktop navigation buttons */}
                <button
                    onClick={goPrev}
                    className="absolute left-2 top-1/2 -translate-y-1/2 hover:bg-stone-400 rounded-full p-3"
                    aria-label="Previous image"
                >
                    <img src="/angle_left.svg" className="size-6" alt="" />
                </button>

                <button
                    onClick={goNext}
                    className="absolute right-2 top-1/2 -translate-y-1/2 hover:bg-stone-400 rounded-full p-3"
                    aria-label="Next image"
                >
                    <img src="/angle_right.svg" className="size-6" alt="" />
                </button>
            </div>
        </section>
    );
}