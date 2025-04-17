import { motion } from "framer-motion";
import Section from "./Section";
import { socials } from "../constants";
import { FooterBackground } from "./design/Footer";
import Button from "./Button";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <Section crosses className="!px-0 !py-12 relative overflow-hidden">
      <FooterBackground />

      <div className="container relative z-2">
        <div className="flex flex-col items-center">
          {/* Logo and Navigation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            className="mb-8 text-center"
          >
            <h3 className="h3 mb-4">BrainBot AI</h3>
            <p className="body-2 max-w-md text-n-4">
              The future of conversational AI is here. Experience the
              difference.
            </p>
          </motion.div>

          {/* Newsletter Signup */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            viewport={{ once: true }}
            className="mb-10 w-full max-w-xl"
          >
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-grow p-4 bg-n-8/50 backdrop-blur-sm border border-n-1/10 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500 text-n-1"
              />
              <Button className="whitespace-nowrap" black>
                Subscribe
              </Button>
            </div>
          </motion.div>

          {/* Social Links */}
          <motion.ul
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ staggerChildren: 0.1 }}
            viewport={{ once: true }}
            className="flex gap-5 mb-8"
          >
            {socials.map((item) => (
              <motion.li
                key={item.id}
                whileHover={{ y: -5 }}
                whileTap={{ scale: 0.9 }}
              >
                <a
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-12 h-12 bg-n-7/50 backdrop-blur-sm border border-n-1/10 rounded-full transition-all hover:bg-n-6/50 hover:border-n-1/30"
                  aria-label={item.title}
                >
                  <img
                    src={item.iconUrl}
                    width={20}
                    height={20}
                    alt=""
                    loading="lazy"
                  />
                </a>
              </motion.li>
            ))}
          </motion.ul>

          {/* Bottom Bar */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="w-full pt-8 border-t border-n-1/10 flex flex-col md:flex-row justify-between items-center gap-4"
          >
            <p className="caption text-n-4/80">
              © {currentYear} BrainBot AI. All rights reserved.
            </p>

            <div className="flex gap-6">
              <a
                href="/privacy"
                className="caption text-n-4 hover:text-n-1 transition-colors"
              >
                Privacy Policy
              </a>
              <a
                href="/terms"
                className="caption text-n-4 hover:text-n-1 transition-colors"
              >
                Terms of Service
              </a>
              <a
                href="/contact"
                className="caption text-n-4 hover:text-n-1 transition-colors"
              >
                Contact Us
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </Section>
  );
};

export default Footer;
