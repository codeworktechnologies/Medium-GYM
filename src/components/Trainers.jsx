import { motion } from "framer-motion";
import { Instagram, Twitter, Facebook } from "lucide-react";

const trainers = [
  {
    img: "https://images.pexels.com/photos/6551436/pexels-photo-6551436.jpeg",
    name: "Alex Johnson",
    role: "Bodybuilding Expert",
  },
  {
    img: "https://images.pexels.com/photos/30564857/pexels-photo-30564857.jpeg",
    name: "Sarah Parker",
    role: "Cardio & HIIT Coach",
  },
  {
    img: "https://images.pexels.com/photos/13451904/pexels-photo-13451904.jpeg",
    name: "Mike Hammer",
    role: "CrossFit Master",
  },
  {
    img: "https://images.pexels.com/photos/1638324/pexels-photo-1638324.jpeg",
    name: "David Stone",
    role: "Strength Coach",
  },
];

const Trainers = () => {
  return (
    <section id="trainers" className="py-24 bg-black">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="flex flex-col items-center mb-16 text-center">
          <span className="text-red-500 font-bold uppercase tracking-widest text-sm mb-2">
            Expert Coaches
          </span>

          <h2 className="text-4xl md:text-5xl font-black uppercase italic tracking-tight">
            Meet Our <span className="text-red-500">Professionals</span>
          </h2>
        </div>

        {/* Trainers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

          {trainers.map((trainer, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative group overflow-hidden rounded-3xl cursor-pointer"
            >
              {/* Image */}
              <img
                src={trainer.img}
                alt={trainer.name}
                className="w-full h-[420px] object-cover transition-transform duration-500 group-hover:scale-110"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-80" />

              {/* Content */}
              <div className="absolute bottom-0 left-0 w-full p-6 translate-y-6 group-hover:translate-y-0 transition-all duration-300">

                <h3 className="text-2xl font-bold uppercase italic mb-1">
                  {trainer.name}
                </h3>

                <p className="text-red-500 font-bold uppercase text-sm mb-4">
                  {trainer.role}
                </p>

                {/* Social Icons */}
                <div className="flex gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">

                  <div className="bg-white/10 p-2 rounded-full hover:bg-red-500 transition cursor-pointer">
                    <Instagram className="w-4 h-4" />
                  </div>

                  <div className="bg-white/10 p-2 rounded-full hover:bg-red-500 transition cursor-pointer">
                    <Twitter className="w-4 h-4" />
                  </div>

                  <div className="bg-white/10 p-2 rounded-full hover:bg-red-500 transition cursor-pointer">
                    <Facebook className="w-4 h-4" />
                  </div>

                </div>

              </div>
            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default Trainers;