import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  sizeCircleBig,
  sizeCircleMedium,
  sizeCircleSmall,
  sizeTextBrandIdentity,
} from "../Constants/styles";
import { useMediaQuery } from "react-responsive";

export const BrandIdentity = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false }); // Trigger animation once when in view

  const isBreakPointMobile = useMediaQuery({ query: "(max-width: 1024px)" });

  return (
    <>
      {isBreakPointMobile && (
        <div className={`flex ${sizeCircleBig} items-end justify-center`}>
          <motion.div
            ref={ref}
            initial={{ y: -100, opacity: 0 }}
            animate={isInView ? { y: 0, opacity: 1 } : {}}
            transition={{
              duration: 0.8,
              ease: "easeOut",
              delay: isInView ? 0.8 : 0,
            }} // Thời gian animation và easing
            className={`absolute ${sizeCircleBig} rounded-full bg-[#fddcc5]`}
          >
            <p
              className={`pt-6 text-center font-GilroyRegular ${sizeTextBrandIdentity} text-[#f05a21]`}
            >
              Your Brand
            </p>
          </motion.div>

          <motion.div
            ref={ref}
            initial={{ y: -100, opacity: 0 }}
            animate={isInView ? { y: 0, opacity: 1 } : {}}
            transition={{
              duration: 0.8,
              ease: "easeOut",
              delay: isInView ? 1.6 : 0,
            }}
            className={`absolute ${sizeCircleMedium} rounded-full bg-[#f78d52]`}
          >
            <p
              className={`pt-6 text-center font-GilroyRegular ${sizeTextBrandIdentity} text-white`}
            >
              Brand <span className="block">Identity</span>
            </p>
          </motion.div>

          <motion.div
            ref={ref}
            initial={{ y: -100, opacity: 0 }}
            animate={isInView ? { y: 0, opacity: 1 } : {}}
            transition={{
              duration: 0.8,
              ease: "easeOut",
              delay: isInView ? 2.4 : 0,
            }}
            className={`absolute place-content-center ${sizeCircleSmall} rounded-full bg-[#f05a21]`}
          >
            <p
              className={`text-center font-GilroyRegular ${sizeTextBrandIdentity} text-white`}
            >
              Logo
            </p>
          </motion.div>
        </div>
      )}

      {!isBreakPointMobile && (
        <div className={`flex ${sizeCircleBig} items-end justify-center`}>
          <motion.div
            ref={ref}
            initial={{ y: -100, opacity: 0 }}
            animate={isInView ? { y: 0, opacity: 1 } : {}}
            transition={{
              duration: 0.8,
              ease: "easeOut",
              delay: isInView ? 0.8 : 0,
            }} // Thời gian animation và easing
            className={`absolute ${sizeCircleBig} place-items-center rounded-full bg-[#fddcc5]`}
          >
            <p
              className={`pt-10 font-GilroyRegular ${sizeTextBrandIdentity} text-[#f05a21]`}
            >
              Your Brand
            </p>
          </motion.div>

          <motion.div
            ref={ref}
            initial={{ y: -100, opacity: 0 }}
            animate={isInView ? { y: 0, opacity: 1 } : {}}
            transition={{
              duration: 0.8,
              ease: "easeOut",
              delay: isInView ? 1.6 : 0,
            }}
            className={`absolute ${sizeCircleMedium} rounded-full bg-[#f78d52]`}
          >
            <p
              className={`pt-8 text-center font-GilroyRegular ${sizeTextBrandIdentity} text-white`}
            >
              Brand <span className="block">Identity</span>
            </p>
          </motion.div>

          <motion.div
            ref={ref}
            initial={{ y: -100, opacity: 0 }}
            animate={isInView ? { y: 0, opacity: 1 } : {}}
            transition={{
              duration: 0.8,
              ease: "easeOut",
              delay: isInView ? 2.4 : 0,
            }}
            className={`absolute ${sizeCircleSmall} place-content-center place-items-center rounded-full bg-[#f05a21]`}
          >
            <p
              className={`font-GilroyRegular ${sizeTextBrandIdentity} text-white`}
            >
              Logo
            </p>
          </motion.div>
        </div>
      )}
    </>
  );
};
