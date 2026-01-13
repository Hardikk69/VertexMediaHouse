
import { Suspense, useMemo, lazy } from 'react'
const LogoLoop = lazy(() => import("./LogoLoop"))

type Review = {
    name: string;
    review: string;
    image: string;
    location: string;
};

const reviews: Review[] = [
    {
        name: 'Amit Patel',
        review: 'Amazing product! Smooth and professional UI.',
        image: 'https://i.pravatar.cc/150?img=1',
        location: 'Gujarat, India',
    },
    {
        name: 'Neha Shah',
        review: 'Very easy to use and beautifully designed.',
        image: 'https://i.pravatar.cc/150?img=2',
        location: 'Maharashtra, India',
    },
    {
        name: 'Rahul Mehta',
        review: 'Excellent performance and great support.',
        image: 'https://i.pravatar.cc/150?img=3',
        location: 'Rajasthan, India',
    },
    {
        name: 'Pooja Verma',
        review: 'Clean UI and smooth animations.',
        image: 'https://i.pravatar.cc/150?img=4',
        location: 'Delhi, India',
    },
];

const reviewLogos = reviews.map((r) => ({
    node: <ReviewCard review={r} />,
}));

function ReviewCard({ review }: { review: Review }) {
    return (
        <div className="w-[300px] rounded-xl bg-zinc-900 p-4">
            <div className="flex items-center gap-3">
                <img
                    src={review.image}
                    className="h-12 w-12 rounded-full object-cover"
                />
                <div>
                    <p className="text-sm font-semibold text-white">
                        {review.name}
                    </p>
                    <p className="text-xs text-zinc-400">
                        {review.location}
                    </p>
                </div>
            </div>

            <div className="mt-2 text-yellow-400 text-sm">
                ★★★★★
            </div>

            <p className="mt-2 text-sm text-zinc-300 leading-relaxed">
                {review.review}
            </p>
        </div>
    );
}

export default function ReviewSection() {
    return (
        <section className="bg-black py-20 overflow-hidden">
            <h2 className="mb-12 text-center text-4xl font-bold text-white">
                What People Say
            </h2>

            {/* HEIGHT IS REQUIRED */}
                <div className="mx-auto grid max-w-6xl grid-cols-1 md:grid-cols-3 gap-6 h-[460px]">
                    <LogoLoop
                        logos={reviewLogos}
                        direction="up"
                        speed={25}
                        logoHeight={180}
                        gap={24}
                        fadeOut
                        className="opacity-60 invisible md:block"
                    />

                    <LogoLoop
                    className='invisible md:bla'
                        logos={reviewLogos}
                        direction="up"
                        speed={18}
                        logoHeight={200}
                        gap={28}
                        fadeOut
                    />

                    <LogoLoop
                        logos={reviewLogos}
                        direction="up"
                        speed={30}
                        logoHeight={180}
                        gap={24}
                        fadeOut
                        renderItem={(item) => (
                            'node' in item ? (
                                <span className="logoloop__node">{item.node}</span>
                            ) : (
                                <img src={item.src} alt={item.alt} />
                            )
                        )}
                        className="opacity-60"
                    />
                </div>
        </section>
    );
}

