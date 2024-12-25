import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  colorTextOrange,
  paddingTextEndProduct,
  paddingTextUI,
  paddingTextUX,
  sizeEndProductUIUX,
  sizeTextEndProductUIUX,
} from "../Constants/styles";
import { useMediaQuery } from "react-responsive";

export const EndProductUIUX = () => {
  const isTablet = useMediaQuery({ query: "(max-width: 768px)" });
  const isLaptop = useMediaQuery({ query: "(max-width: 1024px)" });
  const isLaptop_L = useMediaQuery({ query: "(max-width: 1440px)" });
  const isFullHD = useMediaQuery({ query: "(max-width: 1920px)" });
  const is2K = useMediaQuery({ query: "(min-width: 2560px)" });

  let positionUIUX = 0;
  if (is2K) {
    positionUIUX = 130;
  }
  if (isFullHD) {
    positionUIUX = 80;
  }
  if (isLaptop_L) {
    positionUIUX = 70;
  }
  if (isLaptop) {
    positionUIUX = 50;
  }
  if (isTablet) {
    positionUIUX = 50;
  }

  const ref = useRef(null);
  const isInView = useInView(ref, { once: false }); // Trigger animation once when in view
  return (
    <>
      <div className="flex">
        <motion.div
          ref={ref}
          initial={{ x: -75, opacity: 0 }}
          animate={{
            x: isInView ? positionUIUX : 0,
            opacity: isInView ? 1 : 0,
          }}
          transition={{
            duration: 0.8,
            ease: "easeOut",
            delay: isInView ? 0.8 : 0,
          }}
          className={`${sizeEndProductUIUX} place-content-center rounded-full bg-[#efcfba]`}
        >
          <motion.p
            ref={ref}
            initial={{ opacity: 0 }}
            animate={{ opacity: isInView ? 1 : 0 }}
            transition={{
              duration: 0.8,
              ease: "easeOut",
              delay: isInView ? 1.8 : 0,
            }}
            className={`${paddingTextUX} font-GilroyBold ${sizeTextEndProductUIUX} ${colorTextOrange}`}
          >
            UX
          </motion.p>
        </motion.div>
        <motion.div
          ref={ref}
          initial={{ x: 75, opacity: 0 }}
          animate={{
            x: isInView ? -positionUIUX : 0,
            opacity: isInView ? 1 : 0,
          }}
          transition={{
            duration: 0.8,
            ease: "easeOut",
            delay: isInView ? 0.8 : 0,
          }}
          className={`flex ${sizeEndProductUIUX} items-center justify-between rounded-full bg-[#df4917] bg-opacity-85`}
        >
          <motion.p
            ref={ref}
            initial={{ opacity: 0 }}
            animate={{ opacity: isInView ? 1 : 0 }}
            transition={{
              duration: 0.8,
              ease: "easeOut",
              delay: isInView ? 2.4 : 0,
            }}
            className={`${paddingTextEndProduct} text-center font-GilroyRegular ${sizeTextEndProductUIUX} text-[#f4d8c5]`}
          >
            End <span className="block">Product</span>
          </motion.p>
          <motion.p
            ref={ref}
            initial={{ opacity: 0 }}
            animate={{ opacity: isInView ? 1 : 0 }}
            transition={{
              duration: 0.8,
              ease: "easeOut",
              delay: isInView ? 1.8 : 0,
            }}
            className={`${paddingTextUI} font-GilroyBold ${sizeTextEndProductUIUX} text-white`}
          >
            UI
          </motion.p>
        </motion.div>
      </div>
    </>
  );
};
