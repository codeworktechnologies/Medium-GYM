import { motion } from "framer-motion";
import { Play } from "lucide-react";

const heroBg =
  "https://images.pexels.com/photos/1552242/pexels-photo-1552242.jpeg";

const Hero = () => {
  return (
    <section className="relative h-screen w-full flex items-center overflow-hidden">

      {/* Background */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center scale-110"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent" />
      </div>

      {/* Content */}
      <div className="w-full max-w-7xl px-6 lg:px-12 relative z-10">
        <div className="max-w-3xl">

          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >

            <span className="text-red-500 font-bold uppercase tracking-[0.3em] text-sm mb-4 block">
              Professional Fitness Training
            </span>

            <h1 className="text-5xl md:text-7xl font-black uppercase leading-tight mb-6">
              Transform Your <span className="text-red-500">Body</span> <br />
              Transform Your <span className="text-red-500">Life</span>
            </h1>

            <p className="text-gray-300 text-lg md:text-xl mb-10 max-w-xl">
              Join the most elite fitness community with expert trainers,
              world-class equipment and a results-driven environment.
            </p>

            <div className="flex flex-wrap gap-4">
              <button className="bg-red-500 text-white px-8 py-4 rounded-full font-bold hover:scale-105 transition">
                Join Now
              </button>

              <button className="border-2 border-white px-8 py-4 rounded-full flex items-center gap-2 hover:bg-white hover:text-black transition">
                <Play className="w-4 h-4 fill-white" />
                View Programs
              </button>
            </div>

          </motion.div>
        </div>
      </div>

      {/* Decorative Text */}
      <div className="absolute bottom-10 right-10 hidden lg:block opacity-20">
        <span className="text-[20vw] font-black italic select-none text-white/10">
          ENERGY
        </span>
      </div>

    </section>
  );
};

export default Hero;