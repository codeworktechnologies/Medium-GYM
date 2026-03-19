import { Dumbbell, Instagram, Twitter, Facebook, Youtube } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-black py-20 border-t border-white/10">

      <div className="max-w-7xl mx-auto px-6">

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

          {/* Brand */}
          <div className="space-y-6">

            <div className="flex items-center gap-3">
              <div className="bg-primary p-2 rounded-lg">
                <Dumbbell className="text-white w-6 h-6" />
              </div>

              <span className="text-2xl font-black italic tracking-tight">
                TITAN <span className="text-primary italic">GYM</span>
              </span>
            </div>

            <p className="text-white/50 leading-relaxed">
              The premier fitness destination for those committed to high
              performance and lasting results.
            </p>

            <div className="flex gap-4">

              <a className="bg-white/5 p-3 rounded-xl hover:bg-primary transition group">
                <Instagram className="w-5 h-5 group-hover:scale-110 transition" />
              </a>

              <a className="bg-white/5 p-3 rounded-xl hover:bg-primary transition group">
                <Twitter className="w-5 h-5 group-hover:scale-110 transition" />
              </a>

              <a className="bg-white/5 p-3 rounded-xl hover:bg-primary transition group">
                <Facebook className="w-5 h-5 group-hover:scale-110 transition" />
              </a>

              <a className="bg-white/5 p-3 rounded-xl hover:bg-primary transition group">
                <Youtube className="w-5 h-5 group-hover:scale-110 transition" />
              </a>

            </div>

          </div>

          {/* Quick Links */}
          <div>

            <h4 className="text-lg font-bold uppercase mb-8">Quick Links</h4>

            <ul className="space-y-4">

              {["Home", "Programs", "Trainers", "Pricing", "Contact"].map((item) => (

                <li key={item}>

                  <a
                    href={`#${item.toLowerCase()}`}
                    className="text-white/50 hover:text-primary transition text-sm font-semibold"
                  >
                    {item}
                  </a>

                </li>

              ))}

            </ul>

          </div>

          {/* Services */}
          <div>

            <h4 className="text-lg font-bold uppercase mb-8">Services</h4>

            <ul className="space-y-4">

              {[
                "Weight Training",
                "Cardio",
                "Yoga",
                "CrossFit",
                "Personal Training",
              ].map((item) => (

                <li key={item}>

                  <a
                    href="#"
                    className="text-white/50 hover:text-primary transition text-sm font-semibold"
                  >
                    {item}
                  </a>

                </li>

              ))}

            </ul>

          </div>

          {/* Newsletter */}
          <div>

            <h4 className="text-lg font-bold uppercase mb-8">Newsletter</h4>

            <p className="text-white/50 text-sm mb-6">
              Subscribe for fitness tips and exclusive offers.
            </p>

            <div className="flex flex-col gap-3">

              <input
                type="email"
                placeholder="Enter Email"
                className="bg-white/5 border border-white/10 rounded-xl px-5 py-3 outline-none focus:border-primary transition"
              />

              <button className="bg-primary py-3 rounded-xl font-semibold uppercase text-xs tracking-wider hover:scale-105 transition">
                Subscribe
              </button>

            </div>

          </div>

        </div>

        {/* Bottom */}

        <div className="pt-12 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6">

          <p className="text-white/30 text-xs">
            © {new Date().getFullYear()} TITAN GYM. All rights reserved.
          </p>

          <div className="flex gap-8 text-xs text-white/40">

            <a className="hover:text-primary transition">
              Privacy Policy
            </a>

            <a className="hover:text-primary transition">
              Terms of Service
            </a>

          </div>

        </div>

      </div>

    </footer>
  );
};

export default Footer;