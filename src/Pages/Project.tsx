import { useMediaQuery } from "react-responsive";
import { Header } from "../Utilities/Header";
import {
  colorTextGrey,
  colorTextOrange,
  textSlogan,
  textStory,
} from "../Constants/styles";
import { Footer } from "../Utilities/Footer";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { AnimationPulseOut } from "../Utilities/AnimationPulseOut";
import SocialMediaIcons from "../Utilities/SocialMediaIcons";
import FloatingContactButton from "../Utilities/FloatingContactButton";
import { IconAngle } from "../Constants/icons";

interface ListCustomer {
  id: number;
  content: { item: React.ReactNode; projectName: string }[];
}

const slides: ListCustomer[] = [
  {
    id: 1,
    content: [
      {
        item: (
          <iframe
            src="https://www.behance.net/embed/project/217276589?ilo0=1"
            className="h-[200px] w-full"
            allowFullScreen
            frameBorder="0"
            allow="clipboard-write"
            referrerPolicy="strict-origin-when-cross-origin"
          ></iframe>
        ),
        projectName: "ESG Viet Vision.",
      },
      {
        item: (
          <iframe
            src="https://www.behance.net/embed/project/216239241?ilo0=1"
            className="h-[200px] w-full"
            allowFullScreen
            frameBorder="0"
            allow="clipboard-write"
            referrerPolicy="strict-origin-when-cross-origin"
          ></iframe>
        ),
        projectName: "NDV Logistic",
      },
      {
        item: (
          <iframe
            src="https://www.behance.net/embed/project/216213885?ilo0=1"
            className="h-[200px] w-full"
            allowFullScreen
            frameBorder="0"
            allow="clipboard-write"
            referrerPolicy="strict-origin-when-cross-origin"
          ></iframe>
        ),
        projectName: "Key Visual mở bán dự án bất động sản Lamia",
      },
    ],
  },
  // {
  //   id: 2,
  //   content: [
  //     {
  //       item: (
  //         <iframe
  //           src="https://www.behance.net/embed/project/81732483?ilo0=1"
  //           className="h-[200px] w-full"
  //           allowFullScreen
  //           frameBorder="0"
  //           allow="clipboard-write"
  //           referrerPolicy="strict-origin-when-cross-origin"
  //         ></iframe>
  //       ),
  //       projectName: "string",
  //     },
  //     {
  //       item: (
  //         <iframe
  //           src="https://www.behance.net/embed/project/81732483?ilo0=1"
  //           className="h-[200px] w-full"
  //           allowFullScreen
  //           frameBorder="0"
  //           allow="clipboard-write"
  //           referrerPolicy="strict-origin-when-cross-origin"
  //         ></iframe>
  //       ),
  //       projectName: "string",
  //     },
  //     {
  //       item: (
  //         <iframe
  //           src="https://www.behance.net/embed/project/81732483?ilo0=1"
  //           className="h-[200px] w-full"
  //           allowFullScreen
  //           frameBorder="0"
  //           allow="clipboard-write"
  //           referrerPolicy="strict-origin-when-cross-origin"
  //         ></iframe>
  //       ),
  //       projectName: "string",
  //     },
  //   ],
  // },
];

export const Project = () => {
  // Zoom Out
  const [zoom, setZoom] = useState(1); // Khởi tạo giá trị zoom mặc định là 1
  useEffect(() => {
    const handleResize = () => {
      // Lấy tỷ lệ zoom từ devicePixelRatio và tính toán
      const zoomLevel = window.devicePixelRatio.toFixed(2); // Làm tròn giá trị zoom đến 2 chữ số
      setZoom(parseFloat(zoomLevel)); // Chuyển đổi về kiểu số sau khi làm tròn
    };

    // Gọi hàm khi component mount
    handleResize();

    // Đăng ký sự kiện resize để theo dõi sự thay đổi kích thước cửa sổ
    window.addEventListener("resize", handleResize);

    // Dọn dẹp khi component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [zoom]);
  // Zoom Out

  const isBreakPointMobile = useMediaQuery({ query: "(max-width: 1024px)" });
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

  return (
    <>
      {isBreakPointMobile && (
        <div className="overflow-hidden">
          <Header />
          <div className="relative mb-10 ml-4 mr-4 mt-10 space-y-2">
            <h1
              className={`word-fade-in font-GilroyBold ${colorTextOrange} ${textSlogan}`}
            >
              Dự án <span className="block">tiêu biểu</span>
            </h1>
            <p
              className={`word-fade-in text-justify font-GilroyRegular text-[#77787a] ${textStory}`}
            >
              Khám phá những câu chuyện sáng tạo được chúng tôi gửi gắm vào từng
              dự án.
            </p>
            {/* hiệu ứng lan tỏa */}
            <div className="absolute right-[calc(0px-60px)] top-[calc(0px+100px)]">
              <div className="pulseOut">
                <AnimationPulseOut />
              </div>
            </div>
            {/* hiệu ứng lan tỏa */}
          </div>
          <div className="ml-4 mr-4">
            {/* Slider */}
            <motion.div
              key={currentIndex}
              className={`grid`}
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
                <div>
                  {ct.item}
                  <p className={`${colorTextGrey} p-1 text-base`}>
                    {ct.projectName}
                  </p>
                </div>
              ))}
            </motion.div>
            {/* Slider */}

            <div className="flex justify-between pb-4 pt-4">
              <div className="flex items-center">
                {/* Button Slider */}
                <IconAngle
                  onClick={prevSlide}
                  className={`size-11 origin-center -scale-x-100 transform rounded-full bg-[#ef5a21] p-2 ${
                    currentIndex === 0 ? "pointer-events-none opacity-0" : ""
                  }`}
                  color="#FFFFFF"
                />
                {/* Button Slider */}
                {/* Button Slider */}
                <IconAngle
                  onClick={nextSlide}
                  className={`size-11 rounded-full bg-[#ef5a21] p-2 ${
                    currentIndex === slides.length - 1
                      ? "pointer-events-none opacity-0"
                      : ""
                  }`}
                  color="#FFFFFF"
                />
                {/* Button Slider */}
              </div>
              <div>
                <a
                  href="https://www.behance.net/savethe"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="relative flex cursor-pointer items-center justify-between rounded-full bg-[#ef5a21] px-8 py-2 font-GilroyBold text-white">
                    <span className="translate-x-[-10px] text-lg">
                      Xem nhiều hơn
                    </span>
                    <IconAngle
                      className="absolute right-4 h-5 w-5"
                      color="#FFFFFF"
                    />
                  </button>
                </a>
              </div>
            </div>

            <Footer />
          </div>
        </div>
      )}

      {!isBreakPointMobile && (
        <div
          className="relative overflow-hidden"
          style={{
            transform: zoom < 1 ? `scale(${zoom})` : "none", // Áp dụng scale khi zoom < 1
            transformOrigin: "top center",
            width: "100%",
            height: "100%",
          }}
        >
          <div className="grid min-h-screen grid-rows-[100px,auto,100px]">
            <Header />

            <div className="ml-20 w-4/6 place-content-center space-y-6">
              <h1
                className={`word-fade-in font-GilroyBold ${colorTextOrange} ${textSlogan}`}
              >
                Dự án tiêu biểu
              </h1>
              <p
                className={`word-fade-in text-justify font-GilroyRegular text-[#77787a] ${textStory}`}
              >
                Khám phá những câu chuyện sáng tạo được chúng tôi gửi gắm vào
                từng dự án.
              </p>
            </div>

            <div className="ml-20 flex place-items-center gap-4">
              <SocialMediaIcons />
            </div>
          </div>

          {/* hiệu ứng lan tỏa */}
          <div className="absolute -right-10">
            <div className="pulseOut">
              <AnimationPulseOut />
            </div>
          </div>
          {/* hiệu ứng lan tỏa */}

          <div className="grid grid-cols-3 grid-rows-2 gap-4 p-20">
            <div className="col-span-2 row-span-2 min-h-[700px]">
              <iframe
                src="https://www.behance.net/embed/project/217276589?ilo0=1"
                className="h-full w-full"
                allowFullScreen
                frameBorder="0"
                allow="clipboard-write"
                referrerPolicy="strict-origin-when-cross-origin"
              ></iframe>
            </div>
            <div className="">
              <iframe
                src="https://www.behance.net/embed/project/216239241?ilo0=1"
                className="h-full w-full"
                allowFullScreen
                frameBorder="0"
                allow="clipboard-write"
                referrerPolicy="strict-origin-when-cross-origin"
              ></iframe>
            </div>
            <div>
              <iframe
                src="https://www.behance.net/embed/project/216213885?ilo0=1"
                className="h-full w-full"
                allowFullScreen
                frameBorder="0"
                allow="clipboard-write"
                referrerPolicy="strict-origin-when-cross-origin"
              ></iframe>
            </div>
          </div>

          <div className="flex items-end justify-center">
            <a
              href="https://www.behance.net/savethe"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="relative flex cursor-pointer items-center justify-between rounded-full bg-[#ef5a21] px-8 py-2 font-GilroyBold text-white hover:bg-orange-500">
                <span className="translate-x-[-10px]">Xem nhiều hơn</span>
                <IconAngle
                  className="absolute right-4 h-5 w-5"
                  color="#FFFFFF"
                />
              </button>
            </a>
          </div>
          <Footer />

          <FloatingContactButton />
        </div>
      )}
    </>
  );
};
