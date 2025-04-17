import { motion } from "framer-motion";
import { brainwaveSymbol, check } from "../assets";
import { collabApps, collabContent, collabText } from "../constants";
import Button from "./Button";
import Section from "./Section";
import { LeftCurve, RightCurve } from "./design/Collaboration";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const rotateItem = {
  hidden: { opacity: 0, rotate: -90 },
  visible: (i) => ({
    opacity: 1,
    rotate: i * 45,
    transition: { delay: i * 0.1, duration: 0.8 },
  }),
};

const Collaboration = () => {
  return (
    <Section crosses>
      <div className="container lg:flex gap-12 items-center">
        {/* Left Content */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeIn}
          className="max-w-[25rem]"
        >
          <h2 className="h2 mb-6 md:mb-8 bg-gradient-to-r from-white to-n-3 bg-clip-text text-transparent">
            AI Chat App for seamless collaboration
          </h2>

          <ul className="max-w-[22rem] mb-10 md:mb-14 space-y-4">
            {collabContent.map((item) => (
              <motion.li
                key={item.id}
                whileHover={{ scale: 1.02 }}
                className="p-4 rounded-xl bg-n-7/50 backdrop-blur border border-n-1/10 transition-all hover:bg-n-7/70"
              >
                <div className="flex items-center">
                  <img
                    src={check}
                    width={24}
                    height={24}
                    alt="check"
                    className="flex-shrink-0"
                  />
                  <h6 className="body-2 ml-4">{item.title}</h6>
                </div>
                {item.text && (
                  <p className="body-2 mt-3 text-n-3">{item.text}</p>
                )}
              </motion.li>
            ))}
          </ul>

          <Button
            className="hover:shadow-[0_0_24px_0_rgba(255,255,255,0.12)] transition-shadow"
            black
          >
            Try it now
          </Button>
        </motion.div>

        {/* Right Content */}
        <div className="lg:ml-auto xl:w-[38rem] mt-10 lg:mt-0">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="body-2 mb-10 text-n-3 md:mb-16 lg:mb-24 lg:w-[22rem] lg:mx-auto"
          >
            {collabText}
          </motion.p>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="relative left-1/2 flex w-[22rem] aspect-square border border-n-6 rounded-full -translate-x-1/2 scale-75 md:scale-100"
          >
            <div className="flex w-60 aspect-square m-auto border border-n-6 rounded-full overflow-hidden">
              <div className="w-[6rem] aspect-square m-auto p-[0.2rem] bg-conic-gradient rounded-full animate-spin-slow">
                <div className="flex items-center justify-center w-full h-full bg-n-8 rounded-full">
                  <img
                    src={brainwaveSymbol}
                    width={48}
                    height={48}
                    alt="brainwave"
                    className="hover:scale-110 transition-transform"
                  />
                </div>
              </div>
            </div>

            <ul>
              {collabApps.map((app, index) => (
                <motion.li
                  key={app.id}
                  custom={index}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={rotateItem}
                  className={`absolute top-0 left-1/2 h-1/2 -ml-[1.6rem] origin-bottom`}
                >
                  <motion.div
                    whileHover={{ scale: 1.1, zIndex: 10 }}
                    className={`relative -top-[1.6rem] flex w-[3.2rem] h-[3.2rem] bg-n-7 border border-n-1/15 rounded-xl shadow-lg hover:shadow-purple-500/20`}
                  >
                    <img
                      className="m-auto hover:scale-125 transition-transform"
                      width={app.width}
                      height={app.height}
                      alt={app.title}
                      src={app.icon}
                    />
                  </motion.div>
                </motion.li>
              ))}
            </ul>

            <LeftCurve />
            <RightCurve />
          </motion.div>
        </div>
      </div>
    </Section>
  );
};

export default Collaboration;
