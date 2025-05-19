import { useMediaQuery } from "react-responsive";
import {
  colorTextGrey,
  colorTextOrange,
  gridCustomer,
  gridHeader,
  gridListProject,
  positionBigIcon,
  sizeAngle,
  sizeArrowDown,
  sizeBigSizeIcon,
  textHeaderPage,
  textMeanSave,
  textSlogan,
  textStory,
} from "../Constants/styles";
import { Customer } from "../Utilities/Customer";
import { BrandName } from "../Utilities/BrandName";
import { Footer } from "../Utilities/Footer";
import { Header } from "../Utilities/Header";
import { ListProjects } from "../Utilities/ListProjects";
import { ListServices } from "../Utilities/ListServices";
import { AnimationPulseIn } from "../Utilities/AnimationPulseIn";
import { useState, useEffect } from "react";
import FloatingContactButton from "../Utilities/FloatingContactButton";
import {
  IconAngle,
  IconArrowDown,
  IconMenuLogo,
  IconQuote,
} from "../Constants/icons";

export const Home = () => {
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

  return (
    <>
      {isBreakPointMobile && (
        <div className="overflow-hidden">
          <Header />

          <div className="relative mt-10 h-fit space-y-4 p-4">
            <h1
              className={`word-fade-in text-left font-GilroyBold font-bold ${colorTextOrange} ${textSlogan}`}
            >
              Chúng tôi xây dựng giá trị thương hiệu từ những nét “dưỡng tâm”
            </h1>
            <p
              className={`text-justify font-GilroyRegular ${colorTextGrey} ${textStory}`}
            >
              Save lấy ý tưởng từ viên gạch. Biểu tượng cho sự khởi nguyên của
              một nền tảng vững chắc. Hành trình xây dựng thương hiệu, tư vấn
              chiến lược cũng giống như hành trình xây dựng một ngôi nhà, phải
              bắt đầu từ những viên gạch đầu tiên.
            </p>
            <p
              className={`text-justify font-GilroyRegular ${colorTextGrey} ${textStory}`}
            >
              Viên gạch được hội tụ bởi 4 chữ cái – 4 triết lý của Save, thể
              hiện cho suy nghĩ nội tại mạnh mẽ mà Save luôn nỗ lực tạo ra những
              giá trị khác biệt của thương hiệu.
            </p>
            <div className="absolute right-[calc(0px-40px)] top-[150px]">
              <div className="pulseIn h-[80px] w-[80px]">
                <AnimationPulseIn />
              </div>
            </div>
            <IconQuote
              className="absolute bottom-[calc(0px-0px)] right-[calc(0px-0px)] -z-10 size-16"
              gradientStart="#ffffff"
              gradientEnd="#9f9d9d"
            />
          </div>
          <div className="flex h-fit items-center justify-center bg-[#f1f1f1] p-10">
            <BrandName />
          </div>
          <div className="h-fit p-4">
            <h1
              className={`mb-6 text-balance font-GilroyBold ${colorTextOrange} ${textHeaderPage}`}
            >
              Các dịch vụ <span className="block">của chúng tôi</span>
            </h1>
            <ListServices />
          </div>
          <div className="grid grid-rows-[auto,auto] p-4">
            <div>
              <h1
                className={`mb-6 text-balance font-GilroyBold ${colorTextOrange} ${textHeaderPage}`}
              >
                Dự án <span className="block">tiêu biểu</span>
              </h1>
              <ListProjects />
            </div>
            <div className="flex justify-center p-4">
              <a
                href="https://www.behance.net/savethe"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="rounded-full bg-[#ef5a21] px-6 py-2 font-GilroyBold text-white">
                  Xem nhiều hơn
                </button>
              </a>
            </div>
          </div>
          <div className="grid grid-rows-[auto] bg-[#f1f1f1] p-8">
            <div>
              <h1
                className={`mb-6 font-GilroyBold ${colorTextOrange} ${textHeaderPage}`}
              >
                Khách hàng<span className="block">của chúng tôi</span>
              </h1>
              <Customer />
            </div>
          </div>
          <Footer />
        </div>
      )}

      {!isBreakPointMobile && (
        <>
          <div
            className=""
            style={{
              transform: zoom < 1 ? `scale(${zoom})` : "none", // Áp dụng scale khi zoom < 1
              transformOrigin: "top center",
              width: "100%",
              height: "100%",
            }}
          >
            <div className={`grid h-screen ${gridHeader} overflow-hidden`}>
              <Header />

              <div className="grid grid-cols-[2fr,1fr]">
                <div className="flex items-center justify-center">
                  <h1
                    className={`word-fade-in font-GilroyBold font-bold ${colorTextOrange} ${textSlogan}`}
                  >
                    <span>Chúng tôi xây dựng</span>
                    <span className="block">giá trị thương hiệu từ</span>
                    <span className="block">những nét “dưỡng tâm”</span>
                  </h1>
                </div>
                <div className="flex items-center justify-center">
                  <div className="pulseIn h-[160px] w-[160px]">
                    <AnimationPulseIn />
                    <IconMenuLogo
                      className={`${sizeBigSizeIcon} ${positionBigIcon}`}
                    />
                  </div>
                </div>
              </div>

              <div className="flex items-end justify-end">
                <IconArrowDown
                  className={`mb-5 mr-40 ${sizeArrowDown} animate-bounce cursor-pointer`}
                  onClick={() => {
                    const nextSection = document.getElementById("next-section");
                    if (nextSection) {
                      nextSection.scrollIntoView({ behavior: "smooth" });
                    }
                  }}
                />
              </div>
            </div>
            <div
              id="next-section"
              className="grid h-screen grid-cols-2 bg-[#f1f1f1]"
            >
              <div className="flex items-center justify-center">
                <div className="relative z-0 w-4/6 space-y-4">
                  <p
                    className={`text-justify font-GilroyRegular ${colorTextGrey} ${textMeanSave}`}
                  >
                    Save lấy ý tưởng từ viên gạch. Biểu tượng cho sự khởi nguyên
                    của một nền tảng vững chắc. Hành trình xây dựng thương hiệu,
                    tư vấn chiến lược cũng giống như hành trình xây dựng một
                    ngôi nhà, phải bắt đầu từ những viên gạch đầu tiên.
                  </p>
                  <p
                    className={`text-justify font-GilroyRegular ${colorTextGrey} ${textMeanSave}`}
                  >
                    Viên gạch được hội tụ bởi 4 chữ cái – 4 triết lý của Save,
                    thể hiện cho suy nghĩ nội tại mạnh mẽ mà Save luôn nỗ lực
                    tạo ra những giá trị khác biệt của thương hiệu.
                  </p>
                  <IconQuote
                    className="absolute bottom-[calc(0px-110px)] right-[calc(0px-30px)] -z-10 size-52"
                    gradientStart="#ffffff"
                    gradientEnd="#9f9d9d"
                  />
                </div>
              </div>

              <div className="flex items-center justify-center">
                <BrandName />
              </div>
            </div>
            <div className="grid h-screen items-center justify-center">
              <div className="space-y-8">
                <h1
                  className={`text-balance font-GilroyBold ${colorTextOrange} ${textHeaderPage}`}
                >
                  Các dịch vụ <span className="block">của chúng tôi</span>
                </h1>
                <ListServices />
              </div>
            </div>
            <div className={`grid h-screen grid-cols-4 ${gridListProject}`}>
              <div className="ml-20 place-content-end">
                <h1
                  className={`text-balance font-GilroyBold ${colorTextOrange} ${textHeaderPage}`}
                >
                  Dự án <span className="block">tiêu biểu</span>
                </h1>
              </div>
              <div className="col-span-2 place-content-end">
                <p
                  className={`text-justify font-GilroyRegular ${colorTextGrey} ${textStory}`}
                >
                  Khám phá những câu chuyện
                  <span className="block">sáng tạo được chúng tôi gửi</span>
                  <span className="block">gắm vào từng dự án.</span>
                </p>
              </div>
              <div className="mr-20 flex items-center justify-end">
                <span
                  onClick={() =>
                    window.open("https://www.behance.net/savethe", "_blank")
                  }
                  className={`flex cursor-pointer font-GilroyRegular hover:text-orange-500 ${colorTextGrey} ${textStory} items-center space-x-2 font-GilroyRegular text-lg text-[#77787a]`}
                >
                  <span className="">Xem nhiều hơn</span>
                  <IconAngle className={sizeAngle} color="#77787b" />
                </span>
              </div>
              <div className="col-span-4 flex items-center justify-center gap-10">
                <ListProjects />
              </div>
            </div>
            <div className={`grid h-screen ${gridCustomer}`}>
              <div className="ml-20 place-content-end">
                <h1
                  className={`font-GilroyBold ${colorTextOrange} ${textHeaderPage}`}
                >
                  Khách hàng<span className="block">của chúng tôi</span>
                </h1>
              </div>
              <div className="place-content-end">
                <Customer />
              </div>
              <div className="place-content-end">
                {/* <div className="relative flex justify-center">
            <hr className="absolute -top-10 h-1 w-5/6 bg-[#f1f1f1]" />
          </div> */}
                <Footer />
              </div>
            </div>

            <FloatingContactButton />
          </div>
        </>
      )}
    </>
  );
};
