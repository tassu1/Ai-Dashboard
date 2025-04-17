import { motion } from "framer-motion";
import Section from "./Section";
import Heading from "./Heading";
import { service1, service2, service3, check } from "../assets";
import { brainwaveServices, brainwaveServicesIcons } from "../constants";
import {
  PhotoChatMessage,
  Gradient,
  VideoBar,
  VideoChatMessage,
} from "./design/Services";
import Generating from "./Generating";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const ServiceItem = ({ text }) => (
  <motion.li
    whileHover={{ x: 5 }}
    className="flex items-start py-4 border-t border-n-6"
  >
    <img
      width={24}
      height={24}
      src={check}
      alt="Checkmark"
      className="flex-shrink-0"
      loading="lazy"
    />
    <p className="ml-4">{text}</p>
  </motion.li>
);

const ServiceIcon = ({ item, index }) => (
  <motion.li
    whileHover={{ scale: 1.1 }}
    className={`rounded-2xl flex items-center justify-center ${
      index === 2
        ? "w-[3rem] h-[3rem] p-0.25 bg-conic-gradient md:w-[4.5rem] md:h-[4.5rem]"
        : "flex w-10 h-10 bg-n-6 md:w-15 md:h-15"
    }`}
  >
    <div
      className={
        index === 2
          ? "flex items-center justify-center w-full h-full bg-n-7 rounded-[1rem]"
          : ""
      }
    >
      <img
        src={item}
        width={24}
        height={24}
        alt={`Feature ${index + 1}`}
        className="hover:scale-110 transition-transform"
        loading="lazy"
      />
    </div>
  </motion.li>
);

const Services = () => {
  return (
    <Section id="how-to-use">
      <div className="container">
        <Heading
          title="Generative AI made for creators."
          text="BrainBot unlocks the potential of AI-powered applications"
        />

        <div className="relative">
          {/* Main Feature Section */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeIn}
            className="relative z-1 flex items-center h-[39rem] mb-5 p-8 border border-n-1/10 rounded-3xl overflow-hidden lg:p-20 xl:h-[46rem] bg-gradient-to-r from-n-8/50 to-n-8/10"
          >
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none md:w-3/5 xl:w-auto">
              <img
                className="w-full h-full object-cover md:object-right"
                width={800}
                height={730}
                src={service1}
                alt="AI Interface"
                loading="lazy"
              />
            </div>

            <div className="relative z-1 max-w-[17rem] ml-auto backdrop-blur-sm bg-n-8/50 p-6 rounded-xl">
              <h4 className="h4 mb-4 text-transparent bg-clip-text bg-gradient-to-r from-primary-500 to-white">
                Smartest AI
              </h4>
              <p className="body-2 mb-[3rem] text-n-3">
                BrainBot unlocks the potential of AI-powered applications
              </p>
              <ul className="body-2">
                {brainwaveServices.map((item, index) => (
                  <ServiceItem key={index} text={item} />
                ))}
              </ul>
            </div>

            <Generating className="absolute left-4 right-4 bottom-4 border-n-1/10 border lg:left-1/2 lg-right-auto lg:bottom-8 lg:-translate-x-1/2" />
          </motion.div>

          {/* Services Grid */}
          <div className="relative z-1 grid gap-5 lg:grid-cols-2">
            {/* Photo Editing Card */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              className="relative min-h-[39rem] border border-n-1/10 rounded-3xl overflow-hidden group"
            >
              <div className="absolute inset-0">
                <img
                  src={service2}
                  className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500"
                  width={630}
                  height={750}
                  alt="Photo Editing"
                  loading="lazy"
                />
              </div>

              <div className="absolute inset-0 flex flex-col justify-end p-8 bg-gradient-to-b from-n-8/0 via-n-8/60 to-n-8/90 lg:p-15">
                <h4 className="h4 mb-4">Photo editing</h4>
                <p className="body-2 mb-[3rem] text-n-3">
                  Automatically enhance your photos using our AI app's photo
                  editing feature.
                </p>
              </div>
              <PhotoChatMessage />
            </motion.div>

            {/* Video Generation Card - Optimized */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{
                hidden: { opacity: 0, x: 20 },
                visible: { opacity: 1, x: 0 },
              }}
              className="flex flex-col p-4 sm:p-6 lg:p-8 bg-n-7 rounded-3xl overflow-hidden lg:min-h-[46rem] border border-n-1/10"
            >
              <div className="py-8 sm:py-12 px-4 xl:px-8">
                <h4 className="h4 mb-4">Video generation</h4>
                <p className="body-2 mb-6 sm:mb-8 text-n-3">
                  The world's most powerful AI photo and video art generation
                  engine.
                </p>

                <ul className="flex items-center justify-between mb-8 sm:mb-12">
                  {brainwaveServicesIcons.map((item, index) => (
                    <ServiceIcon key={index} item={item} index={index} />
                  ))}
                </ul>
              </div>

              {/* Optimized Image Container */}
              <div className="relative flex-1 min-h-[20rem] bg-n-8 rounded-xl overflow-hidden aspect-video border border-n-1/10">
                <div className="absolute inset-0 flex items-center justify-center bg-n-7/50">
                  <motion.img
                    src={service3}
                    className="w-full h-full object-contain"
                    alt="AI Video Generation Demo"
                    loading="lazy"
                    initial={{ scale: 1 }}
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  />
                </div>
                <VideoChatMessage />
                <VideoBar />
              </div>
            </motion.div>
          </div>

          <Gradient />
        </div>
      </div>
    </Section>
  );
};

export default Services;
