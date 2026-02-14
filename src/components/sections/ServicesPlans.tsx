import React from "react";

interface Feature {
    title: string;
}

interface Plan {
    name: string;
    subtitle: string;
    features: Feature[];
}

interface ServicesPlansProps {
    title?: string;
    subtitle?: string;
    badge?: string;
    plans?: Plan[];
    accentColor?: string;
    accentHoverColor?: string;
    tickBgColor?: string;
    tickTextColor?: string;
}


const ServicesPlans: React.FC<ServicesPlansProps> = ({
    title = "",
    subtitle,
    badge = "Our Packages",
    plans = [],
    accentColor = "bg-[#ff4d31]",
    accentHoverColor = "hover:bg-[#ff3d21]",
    tickBgColor = "bg-orange-100",
    tickTextColor = "text-orange-600",
}) => {

    const accentText = accentColor
        .replace("bg-[", "")
        .replace("]", "");

    return (
        <section className="bg-[#fafafa] py-20 px-4">
            <div className="max-w-6xl mx-auto text-center">
                <span
                    className="text-sm uppercase tracking-[0.2em] font-semibold"
                    style={{ color: accentText }}
                >
                    {badge}
                </span>

                <h2 className="text-3xl md:text-4xl font-bold mb-3 mt-3 text-[#18191c]">
                    {title}
                </h2>

                {subtitle && (
                    <p className="text-gray-600 mb-12 max-w-xl mx-auto">
                        {subtitle}
                    </p>
                )}

                {plans.length > 0 && (
                    <div className="grid md:grid-cols-3 gap-6">
                        {plans.map((plan) => (
                            <div
                                key={plan.name}
                                className="bg-white border border-gray-100 rounded-2xl shadow-lg p-8 flex flex-col justify-between hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                            >
                                <div>
                                    <h3 className="text-2xl font-bold mb-2 text-[#18191c]">
                                        {plan.name}
                                    </h3>

                                    <p className="text-gray-500 mb-6 text-sm">
                                        {plan.subtitle}
                                    </p>

                                    <ul className="mb-8 space-y-3 text-left">
                                        {plan.features.map((feature, idx) => (
                                            <li
                                                key={idx}
                                                className="flex items-start gap-3 text-gray-700"
                                            >
                                                <span
                                                    className={`inline-flex items-center justify-center w-5 h-5 rounded-full ${tickBgColor} ${tickTextColor} text-xs flex-shrink-0 mt-0.5`}
                                                >
                                                    ✓
                                                </span>
                                                <span className="text-sm">
                                                    {feature.title}
                                                </span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <a
                                    href="tel:+919909210605"
                                    className={`mt-auto ${accentColor} text-white py-3 px-6 rounded-full font-semibold ${accentHoverColor} transition-all duration-300 text-center`}
                                >
                                    Get Started
                                </a>
                            </div>
                        ))}
                    </div>
                )}

            </div>
        </section>
    );
};

export default ServicesPlans;
