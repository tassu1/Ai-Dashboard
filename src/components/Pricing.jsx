import Section from "./Section";
import { smallSphere, stars } from "../assets";
import Heading from "./Heading";
import PricingList from "./PricingList";
import { LeftLine, RightLine } from "./design/Pricing";
import { motion } from "framer-motion";

const Pricing = () => {
  return (
    <Section className="overflow-hidden" id="pricing">
      <div className="container relative z-2">
        {/* Decorative elements with theme-based glow and motion */}
        <div className="hidden relative justify-center mb-[6.5rem] lg:flex">
          <motion.div
            className="relative z-1"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1, rotate: 360 }}
            transition={{
              scale: { duration: 1.2, ease: "easeOut" },
              opacity: { duration: 1, ease: "easeOut" },
              rotate: { duration: 20, repeat: Infinity, ease: "linear" },
            }}
          >
            <img
              src={smallSphere}
              className="relative z-1 drop-shadow-[0_0_24px_rgba(88,86,214,0.4)] dark:drop-shadow-[0_0_24px_rgba(158,156,255,0.4)]"
              width={255}
              height={255}
              alt="Sphere"
              loading="lazy"
            />
          </motion.div>
          <motion.div
            className="absolute top-1/2 left-1/2 w-[60rem] -translate-x-1/2 -translate-y-1/2 pointer-events-none"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 0.85, y: 0 }}
            transition={{ duration: 1.5, delay: 0.3, ease: "easeOut" }}
          >
            <motion.img
              src={stars}
              className="w-full opacity-80 dark:opacity-100 transition-opacity"
              width={950}
              height={400}
              alt="Stars"
              loading="lazy"
              animate={{ scale: [1, 1.05, 1], opacity: [0.8, 0.9, 0.8] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            />
          </motion.div>
        </div>

        {/* Heading with theme-based gradient */}
        <Heading
          tag="Get started with BrainBot"
          title="Pay once, use forever"
          className="text-center"
          titleClass="bg-gradient-to-r from-n-1 to-n-3 dark:from-primary-500 dark:to-white bg-clip-text text-transparent"
        />

        {/* Pricing content with theme borders and animated lines */}
        <div className="relative">
          <div className="relative z-1 border border-n-1/10 dark:border-n-6/50 rounded-3xl overflow-hidden backdrop-blur-sm bg-n-1/5 dark:bg-n-8/50">
            <PricingList />
          </div>
          <motion.div
            className="absolute top-0 left-0 h-full w-2 bg-n-1/10 dark:bg-n-6/50"
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1, pathLength: [0, 1] }}
            transition={{ duration: 1.2, ease: "easeOut" }}
          >
            <LeftLine className="text-n-1/10 dark:text-n-6/50" />
          </motion.div>
          <motion.div
            className="absolute top-0 right-0 h-full w-2 bg-n-1/10 dark:bg-n-6/50"
            initial={{ x: 20, opacity: 0 }}
            animate={{ x: 0, opacity: 1, pathLength: [0, 1] }}
            transition={{ duration: 1.2, delay: 0.2, ease: "easeOut" }}
          >
            <RightLine className="text-n-1/10 dark:text-n-6/50" />
          </motion.div>
        </div>

        {/* CTA with theme-based hover effect */}
        <div className="flex justify-center mt-10">
          <a
            className="text-xs font-code font-bold tracking-wider uppercase border-b border-n-1 dark:border-n-6 text-n-1 dark:text-n-3 hover:text-primary-500 dark:hover:text-primary-500 hover:border-primary-500 transition-colors duration-300"
            href="/pricing"
          >
            See the full details
          </a>
        </div>
      </div>
    </Section>
  );
};

export default Pricing;
