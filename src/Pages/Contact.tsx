import { useMediaQuery } from "react-responsive";
import {
  colorTextBlack,
  colorTextGrey,
  colorTextOrange,
  sizeCopyRight,
  textCopyRight,
  textHeaderFooter,
  textHeaderPage,
  textInfoFooter,
  textStory,
} from "../Constants/styles";
import { Footer } from "../Utilities/Footer";
import { Header } from "../Utilities/Header";
import { AnimationPulseOut } from "../Utilities/AnimationPulseOut";
import { useState, useEffect } from "react";
import SocialMediaIcons from "../Utilities/SocialMediaIcons";
import FloatingContactButton from "../Utilities/FloatingContactButton";

export const Contact = () => {
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

  const isBreakPointMobile = useMediaQuery({ query: "(max-width: 425px)" });

  return (
    <>
      {isBreakPointMobile && (
        <>
          <div className="relative overflow-hidden">
            <Header />

            <div className="ml-4 mr-4 mt-28 space-y-6">
              <h1
                className={`word-fade-in font-GilroyBold ${colorTextOrange} ${textHeaderPage}`}
              >
                Kết nối <span className="block">với chúng tôi</span>
              </h1>
              <div className="space-y-2">
                <p
                  className={`word-fade-in ${colorTextGrey} font-GilroyMedium text-base`}
                >
                  Cùng Save tạo nên những điều huyền diệu
                </p>
                <textarea
                  className={`word-fade-in h-[150px] w-full rounded-md border bg-[#f1f1f1] p-2 font-GilroyMedium opacity-80 ${textStory}`}
                  placeholder="Lời nhắn..."
                ></textarea>
              </div>
            </div>

            {/* hiệu ứng lan tỏa */}
            <div className="absolute right-[calc(0px-60px)] top-[calc(0px+150px)]">
              <div className="pulseOut">
                <AnimationPulseOut />
              </div>
            </div>
            {/* hiệu ứng lan tỏa */}

            <footer className="mt-10 space-y-2">
              <div className="ml-4 mr-4 flex gap-2">
                <SocialMediaIcons />
              </div>
              <div className={`ml-4 mr-4 grid`}>
                <span
                  className={`font-GilroyBold ${colorTextOrange} ${textHeaderFooter}`}
                >
                  Văn phòng
                </span>
                <span
                  className={`font-GilroyRegular ${textInfoFooter} ${colorTextGrey}`}
                >
                  1063/1 Huỳnh Tấn Phát, P. Phú Thuận, Quận 7, TP.HCM.
                </span>
              </div>
              <div className={`ml-4 mr-4 grid grid-cols-[1fr_3fr]`}>
                <span
                  className={`col-span-2 ${textHeaderFooter} ${colorTextOrange} font-GilroyBold`}
                >
                  Liên hệ
                </span>
                <span
                  className={`font-GilroyBold ${textInfoFooter} ${colorTextGrey}`}
                >
                  Hotline
                </span>
                <span
                  className={`font-GilroyRegular ${textInfoFooter} ${colorTextGrey}`}
                >
                  +84 77 333 3829
                </span>
                <span
                  className={`font-GilroyBold ${textInfoFooter} ${colorTextGrey}`}
                >
                  Email
                </span>
                <span
                  className={`font-GilroyRegular ${textInfoFooter} ${colorTextGrey}`}
                >
                  hi.thesave@gmail.com
                </span>
              </div>
              <div className={`ml-4 mr-4 grid`}>
                <span
                  className={`font-GilroyBold ${colorTextOrange} ${textHeaderFooter}`}
                >
                  Dịch vụ
                </span>
                <span
                  className={`font-GilroyRegular ${colorTextGrey} ${textInfoFooter}`}
                >
                  Thiết kế nhận diện thương hiệu
                </span>
                <span
                  className={`font-GilroyRegular ${colorTextGrey} ${textInfoFooter}`}
                >
                  Thiết kế website
                </span>
                <span
                  className={`font-GilroyRegular ${colorTextGrey} ${textInfoFooter}`}
                >
                  Sản xuất film
                </span>
              </div>
              <div className="ml-4 mr-4">
                <span
                  className={`font-GilroyBold ${textHeaderFooter} ${colorTextBlack}`}
                >
                  Đăng ký nhận thông tin
                </span>
                <div className="relative">
                  <input
                    type="text"
                    className={`w-full rounded-lg border bg-[#f1f1f1] px-4 py-1 font-GilroyRegular shadow-lg ${textInfoFooter}`}
                    placeholder="Nhập email tại đây"
                  />
                  <svg
                    className="absolute right-[calc(0px+5px)] top-[calc(0px+3px)] size-6 text-[#b3b3b3]"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="m9 5 7 7-7 7"
                    />
                  </svg>
                </div>
              </div>
              <div className="flex justify-center bg-[#ef5a21] text-lg">
                <span
                  className={`font-GilroyRegular text-white ${textCopyRight}`}
                >
                  Copyright 2024&nbsp;
                </span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 -960 960 960"
                  className={`${sizeCopyRight}`}
                  fill="#ffffff"
                >
                  <path d="M400-320h160q17 0 28.5-11.5T600-360v-80h-80v40h-80v-160h80v40h80v-80q0-17-11.5-28.5T560-640H400q-17 0-28.5 11.5T360-600v240q0 17 11.5 28.5T400-320Zm80 240q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z" />
                </svg>
                <span
                  className={`font-GilroyRegular text-white ${textCopyRight}`}
                >
                  &nbsp;The Save. All Rights Reserved.
                </span>
              </div>
            </footer>
          </div>
        </>
      )}

      {!isBreakPointMobile && (
        <div
          className=""
          style={{
            transform: zoom < 1 ? `scale(${zoom})` : "none", // Áp dụng scale khi zoom < 1
            transformOrigin: "top center",
            width: "100%",
            height: "100%",
          }}
        >
          <div className="h-[100vh] overflow-hidden">
            <div className="relative grid h-screen grid-rows-[100px,1fr,1fr]">
              <Header />

              <div className="ml-20 place-content-end space-y-8">
                <h1
                  className={`word-fade-in font-GilroyBold ${colorTextOrange} ${textHeaderPage}`}
                >
                  Cùng Save tạo nên
                  <span className="block">những điều huyền diệu</span>
                </h1>
                <textarea
                  className={`word-fade-in h-2/5 w-4/6 rounded-md border bg-[#f1f1f1] p-2 font-GilroyRegular ${textStory}`}
                  placeholder="Lời nhắn..."
                ></textarea>
              </div>

              {/* đoạn kết nối */}
              <div className="place-content-end">
                {/* <div className="relative flex justify-center">
              <hr className="absolute -top-10 h-1 w-5/6 bg-[#f1f1f1]" />
            </div> */}
                <Footer />
              </div>
              {/* đoạn kết nối */}

              {/* hiệu ứng lan tỏa */}
              <div className="absolute -bottom-10 -right-10">
                <div className="pulseOut">
                  <AnimationPulseOut />
                </div>
              </div>
              {/* hiệu ứng lan tỏa */}
            </div>
          </div>
          <FloatingContactButton />
        </div>
      )}
    </>
  );
};
