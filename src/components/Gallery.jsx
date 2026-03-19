import { motion } from "framer-motion";

const images = [
  "https://images.pexels.com/photos/416778/pexels-photo-416778.jpeg",
  "https://images.pexels.com/photos/1552242/pexels-photo-1552242.jpeg",
  "https://images.pexels.com/photos/2261477/pexels-photo-2261477.jpeg",
  "https://images.pexels.com/photos/414029/pexels-photo-414029.jpeg",
  "https://images.pexels.com/photos/3757376/pexels-photo-3757376.jpeg",
  "https://images.pexels.com/photos/247918/pexels-photo-247918.jpeg",
];

const Gallery = () => {
  return (
    <section className="py-24 bg-black">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="flex flex-col items-center mb-16 text-center">
          <span className="text-red-500 font-bold uppercase tracking-widest text-sm mb-2">
            Real Results
          </span>

          <h2 className="text-4xl md:text-5xl font-black uppercase italic tracking-tight">
            Transformation <span className="text-red-500">Gallery</span>
          </h2>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

          {images.map((img, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              whileHover={{ scale: 1.03 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="relative aspect-square overflow-hidden rounded-3xl group cursor-pointer"
            >

              <img
                src={img}
                alt="Gym Transformation"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-red-500/30 opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center">

                <span className="bg-white text-black px-6 py-2 rounded-full font-bold uppercase text-xs tracking-widest scale-75 group-hover:scale-100 transition-transform duration-300">
                  View Result
                </span>

              </div>

            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default Gallery;