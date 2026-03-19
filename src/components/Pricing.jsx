import { motion } from "framer-motion";
import { Check } from "lucide-react";

const plans = [
  {
    name: "Basic",
    price: "29",
    features: [
      "Access to Gym",
      "Standard Equipment",
      "1 Group Class / month",
      "Locker Room Access",
    ],
    isPopular: false,
  },
  {
    name: "Standard",
    price: "59",
    features: [
      "All Basic Features",
      "24/7 Gym Access",
      "Unlimited Group Classes",
      "1 Personal Training Session",
    ],
    isPopular: true,
  },
  {
    name: "Premium",
    price: "99",
    features: [
      "All Standard Features",
      "Unlimited Personal Training",
      "All Specialty Classes",
      "Personal Nutrition Plan",
    ],
    isPopular: false,
  },
];

const Pricing = () => {
  return (
    <section id="pricing" className="py-24 bg-black">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="flex flex-col items-center mb-16 text-center">
          <span className="text-red-500 font-bold uppercase tracking-widest text-sm mb-2">
            Our Plans
          </span>

          <h2 className="text-4xl md:text-5xl font-black uppercase italic tracking-tight">
            Choose Your <span className="text-red-500">Level</span>
          </h2>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -10 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative p-10 rounded-3xl border backdrop-blur-md transition-all duration-300 
              ${
                plan.isPopular
                  ? "border-red-500 bg-white/5 shadow-[0_0_40px_rgba(255,0,0,0.2)] scale-105"
                  : "border-white/10 bg-white/5"
              }`}
            >

              {/* Popular Badge */}
              {plan.isPopular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-red-500 text-white text-xs font-bold px-4 py-1 rounded-full uppercase tracking-wider">
                  Most Popular
                </div>
              )}

              {/* Plan Name */}
              <h3 className="text-2xl font-bold uppercase italic mb-6">
                {plan.name}
              </h3>

              {/* Price */}
              <div className="flex items-end gap-2 mb-8">
                <span className="text-5xl font-black italic text-red-500">
                  ${plan.price}
                </span>
                <span className="text-gray-400 text-sm font-bold uppercase">
                  / month
                </span>
              </div>

              {/* Features */}
              <ul className="space-y-4 mb-10">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-3 text-gray-300">
                    <Check className="text-red-500 w-5 h-5 flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>

              {/* Button */}
              <button
                className={`w-full py-4 rounded-full font-bold uppercase tracking-wider transition-all duration-300
                ${
                  plan.isPopular
                    ? "bg-red-500 hover:scale-105 hover:shadow-[0_0_25px_rgba(255,0,0,0.4)]"
                    : "border border-white hover:bg-white hover:text-black"
                }`}
              >
                Get Started
              </button>
            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default Pricing;