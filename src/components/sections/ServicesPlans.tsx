import React from "react";

interface Feature {
    title: string;
}

interface Plan {
    name: string;
    subtitle: string;
    features: Feature[];
}

const plans: Plan[] = [
    {
        name: "End to End",
        subtitle: "Full service process",
        features: [
            { title: "Brand Strategy" },
            { title: "Visual Identity Revamp" },
            { title: "Content Ideation" },
            { title: "Scripting" },
            { title: "Planning content shoots" },
            { title: "Complete guidance" },
            { title: "World Class Edits" },
            { title: "Organic Lead Gen Strategies" },
            { title: "Posting across platforms" },
            { title: "Growth reports" },
            { title: "Check in calls" },
            { title: "Month to Month plans" },
            { title: "20-25 video edits a month" },
        ],
    },
    {
        name: "Post Production",
        subtitle: "Editing & management",
        features: [
            { title: "Complete project management" },
            { title: "World class edits" },
            { title: "Custom packages for number of edits" },
            { title: "Content Posting across platforms" },
            { title: "Captions & Thumbnails" },
            { title: "Check in calls" },
        ],
    },
    {
        name: "Content Flywheel",
        subtitle: "Repurpose & growth",
        features: [
            { title: "Brand Strategy" },
            { title: "Clipping from long form to world class edits" },
            { title: "End to End repurposing on all platforms" },
            { title: "Growth via trial reels" },
            { title: "Captions" },
            { title: "Complete Project Management" },
            { title: "Check in Calls" },
            { title: "Growth Reports" },
            { title: "Over 60 edits a month" },
        ],
    },
];

interface ServicesPlansProps {
    accentColor?: string;
    accentHoverColor?: string;
    tickBgColor?: string;
    tickTextColor?: string;
}

const ServicesPlans: React.FC<ServicesPlansProps> = ({
    accentColor = "bg-[#ff4d31]",
    accentHoverColor = "hover:bg-[#ff3d21]",
    tickBgColor = "bg-green-100",
    tickTextColor = "text-green-600"
}) => {
    return (
        <section className="bg-[#fafafa] py-20 px-4">
            <div className="max-w-6xl mx-auto text-center">
                <span className="text-sm uppercase tracking-[0.2em] font-semibold text-gray-500">
                    Our Process
                </span>
                <h2 className="text-3xl md:text-4xl font-bold mb-3 mt-3 text-[#18191c]">
                    What's the <span className="text-black">process?</span>
                </h2>
                <p className="text-gray-600 mb-12 max-w-xl mx-auto">
                    We become YOUR remote micro team, at either of the 3 levels.
                </p>

                <div className="grid md:grid-cols-3 gap-6">
                    {plans.map((plan) => (
                        <div
                            key={plan.name}
                            className="bg-white border border-gray-100 rounded-2xl shadow-lg p-8 flex flex-col justify-between hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                        >
                            <div>
                                <h3 className="text-2xl font-bold mb-2 text-[#18191c]">{plan.name}</h3>
                                <p className="text-gray-500 mb-6 text-sm">{plan.subtitle}</p>
                                <ul className="mb-8 space-y-3 text-left">
                                    {plan.features.map((feature, idx) => (
                                        <li key={idx} className="flex items-start gap-3 text-gray-700">
                                            <span className={`inline-flex items-center justify-center w-5 h-5 rounded-full ${tickBgColor} ${tickTextColor} text-xs flex-shrink-0 mt-0.5`}>
                                                ✓
                                            </span>
                                            <span className="text-sm">{feature.title}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <a
                                href="tel:+919909210605"
                                className={`mt-auto ${accentColor} text-white py-3 px-6 rounded-full font-semibold ${accentHoverColor} transition-all duration-300 text-center`}
                            >
                                Get started
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ServicesPlans;
