import { motion } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";
import {
  colorTextGrey,
  h_figcapListProject,
  sizePicListProject,
  textStory,
} from "../Constants/styles";
import { useMediaQuery } from "react-responsive";

export const ListProjects: React.FC = () => {
  const [isInView, setIsInView] = useState(false);
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // if (entry.isIntersecting) {
        //   setIsInView(true);
        // }
        setIsInView(entry.isIntersecting); // Cập nhật mỗi lần trạng thái thay đổi
      },
      { threshold: 0.1 }, // 10% của phần tử xuất hiện
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  const isBreakPointMobile = useMediaQuery({ query: "(max-width: 1024px)" });

  return (
    <>
      {isBreakPointMobile && (
        <>
          <motion.figure className={`h-[250px]`}>
            <iframe
              src="https://www.behance.net/embed/project/217276589?ilo0=1"
              className="h-full w-full rounded-lg shadow-lg"
              allowFullScreen
              frameBorder="0"
              allow="clipboard-write"
              referrerPolicy="strict-origin-when-cross-origin"
            ></iframe>
          </motion.figure>
          <motion.figcaption
            className={`p-2 font-GilroyMedium ${colorTextGrey} ${textStory}`}
          >
            ESG Viet Vision
          </motion.figcaption>
          <div className="grid grid-cols-2 gap-2">
            <div>
              <motion.div className={`h-[300px]`}>
                <iframe
                  src="https://www.behance.net/embed/project/216239241?ilo0=1"
                  className="h-full w-full rounded-lg shadow-lg"
                  allowFullScreen
                  frameBorder="0"
                  allow="clipboard-write"
                  referrerPolicy="strict-origin-when-cross-origin"
                ></iframe>
              </motion.div>
              <motion.figcaption
                className={`p-2 font-GilroyMedium ${colorTextGrey} ${textStory}`}
              >
                NDV Logistic
              </motion.figcaption>
            </div>
            <div>
              <motion.div className={`h-[300px]`}>
                <iframe
                  src="https://www.behance.net/embed/project/193520737?ilo0=1"
                  className="h-full w-full rounded-md shadow-lg"
                  allowFullScreen
                  frameBorder="0"
                  allow="clipboard-write"
                  referrerPolicy="strict-origin-when-cross-origin"
                ></iframe>
                <motion.figcaption
                  className={`p-2 font-GilroyMedium ${colorTextGrey} ${textStory}`}
                >
                  Smartbuild Logo and Identity
                </motion.figcaption>
              </motion.div>
            </div>
          </div>
        </>
      )}

      {!isBreakPointMobile && (
        <>
          <motion.figure
            ref={ref}
            initial={{ y: 80, opacity: 0 }}
            animate={isInView ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className={`relative ${sizePicListProject} w-2/5`}
          >
            <iframe
              src="https://www.behance.net/embed/project/217276589?ilo0=1"
              className="h-full w-full rounded-lg shadow-lg"
              allowFullScreen
              loading="lazy"
              frameBorder="0"
              allow="clipboard-write"
              referrerPolicy="strict-origin-when-cross-origin"
              scrolling="no" // Prevents scrollbars
              style={{ overflow: "hidden" }} // Ensures no overflow
            ></iframe>
            <motion.figcaption
              className={`absolute bottom-0 grid ${h_figcapListProject} w-full grid-cols-10 bg-white bg-opacity-35`}
            ></motion.figcaption>
          </motion.figure>
          <motion.div
            ref={ref}
            initial={{ y: -80, opacity: 0 }}
            animate={isInView ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className={`relative ${sizePicListProject} w-1/5`}
          >
            <iframe
              src="https://www.behance.net/embed/project/216239241?ilo0=1"
              className="h-full w-full rounded-lg shadow-md"
              allowFullScreen
              loading="lazy"
              frameBorder="0"
              allow="clipboard-write"
              referrerPolicy="strict-origin-when-cross-origin"
              scrolling="no" // Prevents scrollbars
              style={{ overflow: "hidden" }} // Ensures no overflow
            ></iframe>
            <motion.figcaption
              className={`absolute bottom-0 grid ${h_figcapListProject} w-full grid-cols-10 bg-white bg-opacity-35`}
            ></motion.figcaption>
          </motion.div>
          <motion.div
            ref={ref}
            initial={{ y: 80, opacity: 0 }}
            animate={isInView ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className={`relative ${sizePicListProject} w-1/5`}
          >
            <iframe
              src="https://www.behance.net/embed/project/193520737?ilo0=1"
              className="h-full w-full rounded-md shadow-lg"
              allowFullScreen
              loading="lazy"
              frameBorder="0"
              allow="clipboard-write"
              referrerPolicy="strict-origin-when-cross-origin"
              scrolling="no" // Prevents scrollbars
              style={{ overflow: "hidden" }} // Ensures no overflow
            ></iframe>
            <motion.figcaption
              className={`absolute bottom-0 grid ${h_figcapListProject} w-full grid-cols-10 bg-white bg-opacity-35`}
            ></motion.figcaption>
          </motion.div>
        </>
      )}
    </>
  );
};
