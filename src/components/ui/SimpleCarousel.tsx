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
        <section className="w-full max-w-5xl mx-auto py-16 relative px-16">
            <div className="flex items-center justify-center gap-6">
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

                {/* Navigation buttons */}
                <img
                    src="/angle_left.svg"
                    onClick={goPrev}
                    className="absolute left-2 top-1/2 -translate-y-1/2 hover:bg-stone-400 rounded-full size-12"
                />

                <img
                    src="/angle_right.svg"
                    onClick={goNext}
                    className="absolute right-2 top-1/2 -translate-y-1/2 hover:bg-stone-400 rounded-full size-12"
                />
            </div>
        </section>
    );
}