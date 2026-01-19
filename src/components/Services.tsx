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

const Services = () => {
  return (
    <section className="bg-white py-16 px-4 text-[#373937]">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-2">
          What's the <span className="text-yellow-500">process?</span>
        </h2>
        <p className="text-gray-700 mb-12">
          We become YOUR remote micro team, at either of the 3 levels.
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className="border rounded-lg shadow-md p-6 flex flex-col justify-between hover:shadow-xl transition"
            >
              <h3 className="text-xl font-semibold mb-4">{plan.name}</h3>
              <p className="text-gray-500 mb-4">{plan.subtitle}</p>
              <ul className="mb-6 space-y-2 text-left">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center">
                    <span className="inline-block w-5 h-5 mr-2 text-green-500">
                      ✓
                    </span>
                    {feature.title}
                  </li>
                ))}
              </ul>
              <button className="mt-auto bg-yellow-500 text-white py-2 px-4 rounded hover:bg-yellow-600 transition">
                Get started
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
