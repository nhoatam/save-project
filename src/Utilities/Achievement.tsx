import { useSpring, animated } from "react-spring";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  colorTextBlack,
  colorTextOrange,
  sizeNumberAchievement,
  sizeTextNumber,
} from "../Constants/styles";
import { useMediaQuery } from "react-responsive";

let customerNum = 150;
let memberNum = 15;
let productNum = 300;
let client = 80;

export const Achievement = () => {
  function Number({ n }: { n: number }) {
    const props = useSpring({
      from: { number: 0 },
      to: { number: n },
      delay: 200,
      config: { mass: 1, tension: 20, friction: 10 },
    });
    return (
      <animated.span>{props.number.to((val) => val.toFixed(0))}</animated.span>
    );
  }

  const ref = useRef(null);
  const isInView = useInView(ref, { once: false }); // Trigger animation once when in view

  const isBreakPointMobile = useMediaQuery({ query: "(max-width: 1024px)" });
  return (
    <>
      {isBreakPointMobile && (
        <div className="grid grid-cols-2">
          <motion.div
            ref={ref}
            initial={{ opacity: 0 }} // Bắt đầu từ trạng thái mờ
            animate={isInView ? { opacity: 1 } : {}} // Hiện dần khi vào viewport
            transition={{ duration: 0.8, ease: "easeOut" }} // Thời gian và easing
            className=""
          >
            <h1
              className={`font-GilroyBold ${colorTextOrange} ${sizeNumberAchievement}`}
            >
              <Number n={customerNum} />+
            </h1>
            <p
              className={`font-GilroyBold ${colorTextBlack} ${sizeTextNumber}`}
            >
              khách hàng
            </p>
          </motion.div>

          <motion.div
            ref={ref}
            initial={{ opacity: 0 }} // Bắt đầu từ trạng thái mờ
            animate={isInView ? { opacity: 1 } : {}} // Hiện dần khi vào viewport
            transition={{ duration: 0.8, ease: "easeOut" }} // Thời gian và easing
            className=""
          >
            <h1
              className={`font-GilroyBold ${colorTextOrange} ${sizeNumberAchievement}`}
            >
              <Number n={productNum} />+
            </h1>
            <p
              className={`font-GilroyBold ${colorTextBlack} ${sizeTextNumber}`}
            >
              Sản phẩm
            </p>
          </motion.div>

          <motion.div
            ref={ref}
            initial={{ opacity: 0 }} // Bắt đầu từ trạng thái mờ
            animate={isInView ? { opacity: 1 } : {}} // Hiện dần khi vào viewport
            transition={{ duration: 0.8, ease: "easeOut" }} // Thời gian và easing
            className=""
          >
            <h1
              className={`font-GilroyBold ${colorTextOrange} ${sizeNumberAchievement}`}
            >
              <Number n={memberNum} />+
            </h1>
            <p
              className={`font-GilroyBold ${colorTextBlack} ${sizeTextNumber}`}
            >
              Chuyên gia
            </p>
          </motion.div>

          <motion.div
            ref={ref}
            initial={{ opacity: 0 }} // Bắt đầu từ trạng thái mờ
            animate={isInView ? { opacity: 1 } : {}} // Hiện dần khi vào viewport
            transition={{ duration: 0.8, ease: "easeOut" }} // Thời gian và easing
            className=""
          >
            <h1
              className={`font-GilroyBold ${colorTextOrange} ${sizeNumberAchievement}`}
            >
              <Number n={client} />+
            </h1>
            <p
              className={`font-GilroyBold ${colorTextBlack} ${sizeTextNumber}`}
            >
              Đối tác
            </p>
          </motion.div>
        </div>
      )}

      {!isBreakPointMobile && (
        <div className="grid grid-cols-2 gap-x-20 gap-y-10">
          <motion.div
            ref={ref}
            initial={{ opacity: 0 }} // Bắt đầu từ trạng thái mờ
            animate={isInView ? { opacity: 1 } : {}} // Hiện dần khi vào viewport
            transition={{ duration: 0.8, ease: "easeOut" }} // Thời gian và easing
            className="space-y-4"
          >
            <h1
              className={`font-GilroyBold ${colorTextOrange} ${sizeNumberAchievement}`}
            >
              <Number n={customerNum} />+
            </h1>
            <p
              className={`text-balance font-GilroyBold ${colorTextBlack} ${sizeTextNumber}`}
            >
              Hơn 150 khách hàng trong mọi lĩnh vực đã tin tưởng và đồng hành
              cùng chúng tôi.
            </p>
          </motion.div>

          <motion.div
            ref={ref}
            initial={{ opacity: 0 }} // Bắt đầu từ trạng thái mờ
            animate={isInView ? { opacity: 1 } : {}} // Hiện dần khi vào viewport
            transition={{ duration: 0.8, ease: "easeOut" }} // Thời gian và easing
            className="space-y-4"
          >
            <h1
              className={`font-GilroyBold ${colorTextOrange} ${sizeNumberAchievement}`}
            >
              <Number n={memberNum} />+
            </h1>
            <p
              className={`text-balance font-GilroyBold ${colorTextBlack} ${sizeTextNumber}`}
            >
              Chuyên gia sáng tạo và nhiệt huyết đã đồng hành cùng save.
            </p>
          </motion.div>

          <motion.div
            ref={ref}
            initial={{ opacity: 0 }} // Bắt đầu từ trạng thái mờ
            animate={isInView ? { opacity: 1 } : {}} // Hiện dần khi vào viewport
            transition={{ duration: 0.8, ease: "easeOut" }} // Thời gian và easing
            className="col-span-2 space-y-4"
          >
            <h1
              className={`font-GilroyBold ${colorTextOrange} ${sizeNumberAchievement}`}
            >
              <Number n={productNum} />+
            </h1>
            <p
              className={`text-balance font-GilroyBold ${colorTextBlack} ${sizeTextNumber}`}
            >
              Sản phẩm đã được chúng tôi tạo ra và phát triển thành công. Những
              đứa con tinh thần của save vẫn luôn được dõi theo và cải thiện tốt
              hơn từng ngày.
            </p>
          </motion.div>
        </div>
      )}
    </>
  );
};
