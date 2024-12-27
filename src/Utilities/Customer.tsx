import { useState } from "react";
import { motion } from "framer-motion";
import { gapCustomer, sizeAngle, sizePicCustomer } from "../Constants/styles";
import customer1 from "../assets/pictures/customer1.png";
import customer2 from "../assets/pictures/customer2.png";
import customer3 from "../assets/pictures/customer3.png";
import customer4 from "../assets/pictures/customer4.png";
import customer5 from "../assets/pictures/customer5.png";
import customer6 from "../assets/pictures/customer6.png";
import customer7 from "../assets/pictures/customer7.png";
import customer8 from "../assets/pictures/customer8.png";
import { useMediaQuery } from "react-responsive";
import { IconAngle } from "../Constants/icons";

interface ListCustomer {
  id: number;
  content: string[];
}

const slides: ListCustomer[] = [
  {
    id: 1,
    content: [
      customer1,
      customer2,
      customer3,
      customer4,
      customer5,
      customer6,
      customer7,
      customer8,
    ],
  },
  {
    id: 2,
    content: [
      customer1,
      customer2,
      customer3,
      customer4,
      customer5,
      customer6,
      customer7,
      customer8,
    ],
  },
];

export const Customer = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const nextSlide = () => {
    if (currentIndex < slides.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };
  const prevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const isBreakPointMobile = useMediaQuery({ query: "(max-width: 1024px)" });

  return (
    <>
      {isBreakPointMobile && (
        <>
          <motion.div className="grid grid-cols-3 grid-rows-2 place-content-center place-items-center gap-4">
            {slides[0].content.map((ct) => (
              <img
                src={ct}
                alt="our customer"
                className={`${sizePicCustomer}`}
              />
            ))}
          </motion.div>
        </>
      )}

      {!isBreakPointMobile && (
        <div className="flex select-none items-center justify-center gap-8">
          {/* Button Slider */}
          <IconAngle
            onClick={prevSlide}
            className={`origin-center -scale-x-100 transform ${sizeAngle} ${
              currentIndex === 0 ? "pointer-events-none opacity-0" : ""
            }`}
          />
          {/* Button Slider */}

          {/* Slider */}
          <motion.div
            key={currentIndex}
            className={`grid h-fit w-fit grid-cols-4 grid-rows-2 ${gapCustomer}`}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{
              type: "spring",
              stiffness: 60, // Giảm độ cứng để chuyển động mượt hơn
              damping: 20, // Tăng giảm chấn để dừng mượt hơn
              mass: 0.8, // Tăng khối lượng để chuyển động chậm hơn
            }}
          >
            {slides[currentIndex].content.map((ct) => (
              // <div
              //   className={`${sizePicCustomer} place-content-center place-items-center bg-[#e6e6e6]`}
              // >
              //   <img src={ct} alt="our customer" className="h-2/3 w-2/3" />
              // </div>
              <img
                src={ct}
                alt="our customer"
                className={`${sizePicCustomer}`}
              />
            ))}
          </motion.div>
          {/* Slider */}

          {/* Button Slider */}
          <IconAngle
            onClick={nextSlide}
            className={`${sizeAngle} ${
              currentIndex === slides.length - 1
                ? "pointer-events-none opacity-0"
                : ""
            }`}
          />
          {/* Button Slider */}
        </div>
      )}
    </>
  );
};
