import { check } from "../assets";
import { pricing } from "../constants";
import Button from "./Button";
import { motion } from "framer-motion";

const PricingList = () => {
  return (
    <div className="flex gap-6 max-lg:flex-wrap justify-center">
      {pricing.map((item) => (
        <motion.div
          key={item.id}
          whileHover={{ y: -10, scale: 1.02 }}
          className={`w-[19rem] max-lg:w-full h-auto px-6 py-8 rounded-[2rem] lg:w-auto
            bg-n-8/80 dark:bg-n-2/5
            border border-n-6/50 dark:border-n-2/10
            backdrop-blur-md
            shadow-md hover:shadow-xl
            transition-all duration-300 ease-in-out
            ${item.id % 2 === 0 ? "my-4" : "my-0"}`}
        >
          <h4
            className={`h4 mb-6 ${
              item.id === 1
                ? "text-color-2"
                : item.id === 2
                ? "text-color-1"
                : "text-color-3"
            }`}
          >
            {item.title}
          </h4>

          <p className="body-2 min-h-[4rem] mb-6 text-n-1/70 dark:text-n-7/80">
            {item.description}
          </p>

          <div className="flex items-center h-[5.5rem] mb-8">
            {item.price && (
              <>
                <div className="h3 text-n-1 dark:text-n-7">$</div>
                <div className="text-[5.5rem] leading-none font-bold text-n-1 dark:text-n-7">
                  {item.price}
                </div>
              </>
            )}
          </div>

          <Button
            className="w-full mb-8 hover:scale-[1.02] transition-transform"
            href={item.price ? "/pricing" : "mailto:tassutahsee@gmail.com"}
            white={false} // Disable white background
            glow={false} // Disable glow effect
            style={{ backgroundColor: "#000000", color: "#ffffff" }} // Black button with white text
          >
            {item.price ? "Get started" : "Contact us"}
          </Button>

          <ul>
            {item.features.map((feature, index) => (
              <motion.li
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-center py-5 border-t border-n-6/50 dark:border-n-2/10"
              >
                <img
                  src={check}
                  width={24}
                  height={24}
                  alt="Check"
                  className="flex-shrink-0 mr-4"
                  loading="lazy"
                />
                <p className="body-2 text-n-1 dark:text-n-7">{feature}</p>
              </motion.li>
            ))}
          </ul>
        </motion.div>
      ))}
    </div>
  );
};

export default PricingList;
