import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-dark/50">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Info Side */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-primary font-black uppercase tracking-widest text-sm mb-2 block">Reach Out</span>
            <h2 className="text-4xl md:text-6xl font-black uppercase italic tracking-tighter mb-8">
              Start Your <span className="text-primary">Journey</span> Today
            </h2>
            <p className="text-light/60 text-lg mb-12 max-w-md">
              Have questions about our programs or memberships? Send us a message or visit us in person.
            </p>

            <div className="space-y-8">
              <div className="flex items-center gap-6">
                <div className="bg-primary/20 p-4 rounded-2xl text-primary">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold uppercase text-xs text-primary tracking-widest mb-1">Location</h4>
                  <p className="font-bold text-lg">123 Fitness Street, Muscle City</p>
                </div>
              </div>

              <div className="flex items-center gap-6">
                <div className="bg-primary/20 p-4 rounded-2xl text-primary">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold uppercase text-xs text-primary tracking-widest mb-1">Phone</h4>
                  <p className="font-bold text-lg">+1 (234) 567-890</p>
                </div>
              </div>

              <div className="flex items-center gap-6">
                <div className="bg-primary/20 p-4 rounded-2xl text-primary">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold uppercase text-xs text-primary tracking-widest mb-1">Email</h4>
                  <p className="font-bold text-lg">info@titangym.com</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Form Side */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass p-10 rounded-[2rem]"
          >
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-light/40 ml-2">Full Name</label>
                  <input
                    type="text"
                    placeholder="John Doe"
                    className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 outline-none focus:border-primary transition-colors font-medium"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-light/40 ml-2">Email Address</label>
                  <input
                    type="email"
                    placeholder="john@example.com"
                    className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 outline-none focus:border-primary transition-colors font-medium"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-light/40 ml-2">
                  Subject
                </label>

                <select className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 outline-none focus:border-primary transition-colors font-medium appearance-none">

                  <option className="bg-black text-white">
                    Membership Inquiry
                  </option>

                  <option className="bg-black text-white">
                    Personal Training
                  </option>

                  <option className="bg-black text-white">
                    General Question
                  </option>

                </select>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-light/40 ml-2">Message</label>
                <textarea
                  rows="4"
                  placeholder="Tell us about your fitness goals..."
                  className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 outline-none focus:border-primary transition-colors font-medium resize-none"
                ></textarea>
              </div>

              <button className="btn-primary w-full flex items-center justify-center gap-3">
                Send Message <Send className="w-5 h-5" />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
