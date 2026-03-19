import { motion } from "framer-motion";
import {
  Dumbbell,
  HeartPulse,
  UserCheck,
  Flame,
  Zap,
  Activity,
} from "lucide-react";

const programs = [
  {
    icon: <Dumbbell className="w-8 h-8" />,
    title: "Weight Training",
    desc: "Build strength and muscle mass using modern equipment and expert guidance.",
  },
  {
    icon: <HeartPulse className="w-8 h-8" />,
    title: "Cardio Training",
    desc: "Improve stamina and heart health with high-energy cardio workouts.",
  },
  {
    icon: <UserCheck className="w-8 h-8" />,
    title: "Personal Training",
    desc: "Customized workout programs with one-on-one coaching support.",
  },
  {
    icon: <Activity className="w-8 h-8" />,
    title: "Functional Training",
    desc: "Enhance mobility, coordination and everyday strength with functional workouts.",
  },
  {
    icon: <Flame className="w-8 h-8" />,
    title: "CrossFit",
    desc: "High-intensity workouts combining strength, endurance and agility.",
  },
  {
    icon: <Zap className="w-8 h-8" />,
    title: "Yoga & Flexibility",
    desc: "Improve balance, flexibility and mental focus through guided yoga sessions.",
  },
];

const Programs = () => {
  return (
    <section id="programs" className="py-24 bg-black">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="flex flex-col items-center mb-16 text-center">
          <span className="text-red-500 font-bold uppercase tracking-widest text-sm mb-2">
            Our Programs
          </span>

          <h2 className="text-4xl md:text-5xl font-black uppercase italic tracking-tight">
            Push Your <span className="text-red-500">Limits</span>
          </h2>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

          {programs.map((program, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -10 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white/5 border border-white/10 p-10 rounded-3xl group cursor-pointer hover:border-red-500/50 transition-all duration-300 backdrop-blur-md"
            >
              {/* Icon */}
              <div className="bg-red-500/20 p-4 rounded-2xl w-fit mb-6 text-red-500 group-hover:bg-red-500 group-hover:text-white transition-colors duration-300">
                {program.icon}
              </div>

              {/* Title */}
              <h3 className="text-2xl font-bold mb-4 uppercase italic">
                {program.title}
              </h3>

              {/* Description */}
              <p className="text-gray-400 leading-relaxed mb-6">
                {program.desc}
              </p>

              {/* Link */}
              <a
                href="#"
                className="inline-flex items-center gap-2 text-red-500 font-bold group-hover:underline"
              >
                Explore Now <Zap className="w-4 h-4" />
              </a>
            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default Programs;