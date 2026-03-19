import { motion } from "framer-motion";
import CountUp from "react-countup";

const stats = [
  { value: 500, suffix: "+", label: "Happy Members" },
  { value: 50, suffix: "+", label: "Expert Trainers" },
  { value: 20, suffix: "+", label: "Fitness Programs" },
  { value: 10, suffix: "+", label: "Years Experience" },
];

const Stats = () => {
  return (
    <div className="bg-primary/5 py-12 border-y border-white/5">
      <div className="max-w-7xl mx-auto px-6">

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">

          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="text-center"
            >
              <h3 className="text-4xl md:text-5xl font-black italic text-primary mb-2">

                <CountUp
                  end={stat.value}
                  duration={2}
                  suffix={stat.suffix}
                />

              </h3>

              <p className="text-gray-400 uppercase text-xs tracking-[0.2em] font-bold">
                {stat.label}
              </p>

            </motion.div>
          ))}

        </div>
      </div>
    </div>
  );
};

export default Stats;