import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const reviews = [
  {
    name: "James Wilson",
    role: "Member since 2022",
    img: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg",
    text: "Titan Gym changed my life. The trainers are world-class and the atmosphere is pure energy. I lost 20kg in 6 months!",
    rating: 5,
  },
  {
    name: "Sarah Connor",
    role: "Member since 2023",
    img: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg",
    text: "The best fitness community I have ever been part of. The equipment is top-notch and the facilities are always spotless.",
    rating: 5,
  },
  {
    name: "Michael Bay",
    role: "Member since 2021",
    img: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg",
    text: "Incredible experience. The programs are challenging but rewarding. Highly recommend for anyone serious about fitness.",
    rating: 4,
  },
];

const Testimonials = () => {
  return (
    <section className="py-24 bg-black relative overflow-hidden">

      {/* Background Glow */}
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-red-500/10 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* Heading */}
        <div className="flex flex-col items-center mb-16 text-center">
          <span className="text-red-500 font-bold uppercase tracking-widest text-sm mb-2">
            Success Stories
          </span>

          <h2 className="text-4xl md:text-5xl font-black uppercase italic tracking-tight">
            What Our <span className="text-red-500">Members Say</span>
          </h2>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

          {reviews.map((review, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -8 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative bg-white/5 border border-white/10 p-8 rounded-3xl backdrop-blur-md"
            >

              <Quote className="absolute top-6 right-6 text-red-500/20 w-10 h-10" />

              {/* Stars */}
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-5 h-5 ${i < review.rating
                        ? "text-red-500 fill-red-500"
                        : "text-gray-600"
                      }`}
                  />
                ))}
              </div>

              {/* Review */}
              <p className="text-gray-300 italic mb-8 leading-relaxed">
                "{review.text}"
              </p>

              {/* User */}
              <div className="flex items-center gap-4">

                <img
                  src={review.img}
                  alt={review.name}
                  className="w-12 h-12 rounded-full object-cover"
                />

                <div>
                  <h4 className="font-bold uppercase text-white">
                    {review.name}
                  </h4>

                  <p className="text-red-500 text-xs font-bold uppercase">
                    {review.role}
                  </p>
                </div>

              </div>

            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default Testimonials;