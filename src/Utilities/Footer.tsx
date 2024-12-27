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
} from "../Constants/styles";
import SocialMediaIcons from "./SocialMediaIcons";
import ContactUs from "./ContactUs";
import { IconAngle, IconCopyRight } from "../Constants/icons";
import { useState, useRef, useEffect } from "react";
import { IconAngleUp, IconPhoneCall, IconZalo } from "../Constants/icons";
const phoneNumber = "+84773333829";

export const Footer = () => {
  const isBreakPointMobile = useMediaQuery({ query: "(max-width: 1024px)" });

  const [isOpen, setIsOpen] = useState(false); // State để kiểm soát mở/đóng menu
  const containerRef = useRef<HTMLDivElement>(null); // Tham chiếu tới vùng chứa
  // Xử lý khi click ra ngoài phạm vi
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false); // Đóng menu khi click bên ngoài
      }
    };

    // Lắng nghe sự kiện click toàn cục
    document.addEventListener("mousedown", handleClickOutside);

    // Dọn dẹp sự kiện khi component unmount
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <>
      {isBreakPointMobile && (
        <footer className="relative mt-10 space-y-2">
          <h1
            className={`ml-4 mr-4 font-GilroyBold ${colorTextOrange} ${textHeaderPage}`}
          >
            Kết nối <span className="block">với chúng tôi</span>
          </h1>
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
            <ContactUs />
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
              <IconAngle className="absolute right-[calc(0px+5px)] top-[calc(0px+4px)] size-5 text-[#b3b3b3]" />
            </div>
          </div>
          <div className="flex items-center justify-center bg-[#ef5a21] text-lg">
            <span className={`font-GilroyRegular text-white ${textCopyRight}`}>
              Copyright 2024&nbsp;
            </span>
            <IconCopyRight className={`${sizeCopyRight}`} />
            <span className={`font-GilroyRegular text-white ${textCopyRight}`}>
              &nbsp;The Save. All Rights Reserved.
            </span>
          </div>

          {/* floating for mobile */}
          <div
            ref={containerRef} // Gán ref cho vùng chứa
            className="absolute bottom-[calc(0px+80px)] right-[calc(0px+20px)] z-50"
          >
            {/* Icon chính */}
            <button
              onClick={() => setIsOpen(!isOpen)} // Toggle trạng thái mở/đóng
              className="mb-2 ml-1 flex transform items-center justify-center rounded-full shadow-lg transition-transform hover:scale-110"
              title="Mở menu liên hệ"
              style={{ width: "40px", height: "40px" }}
            >
              <IconAngleUp className="size-10" />
            </button>

            {/* Các icon liên hệ xổ lên khi mở */}
            {isOpen && (
              <div className="flex flex-col items-center space-y-2">
                <a
                  href={`tel:${phoneNumber}`}
                  className="flex transform items-center justify-center rounded-full shadow-lg transition-transform hover:scale-110"
                  title="Gọi điện"
                  style={{ width: "48px", height: "48px" }} // Thay đổi theo kích thước ảnh
                >
                  <IconPhoneCall className="size-12" />
                </a>

                <a
                  href="https://zalo.me/0356658211"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex transform items-center justify-center rounded-full text-white shadow-lg transition-transform hover:scale-110"
                  title="Liên hệ Zalo"
                  style={{ width: "48px", height: "48px" }} // Thay đổi theo kích thước ảnh
                >
                  <IconZalo className="size-12" />
                </a>
              </div>
            )}
          </div>
          {/* floating for mobile */}
        </footer>
      )}

      {!isBreakPointMobile && (
        <footer className="space-y-6">
          <h1
            className={`ml-20 font-GilroyBold ${colorTextOrange} ${textHeaderPage}`}
          >
            Kết nối <span className="block">với chúng tôi</span>
          </h1>
          <div className="ml-20 mr-20 grid grid-cols-4 gap-4">
            <div
              className={`grid border-l-2 border-[#808080] pl-4 ${colorTextGrey}`}
            >
              <span className={`mb-2 font-GilroyBold ${textHeaderFooter}`}>
                Văn phòng
              </span>
              <span className={`font-GilroyBold ${textInfoFooter}`}>
                Công ty TNHH Save
              </span>
              <span className={`font-GilroyRegular ${textInfoFooter}`}>
                1063/1 Huỳnh Tấn Phát,
              </span>
              <span className={`font-GilroyRegular ${textInfoFooter}`}>
                P. Phú Thuận, Quận 7, TP.HCM.
              </span>
            </div>
            <div
              className={`grid grid-cols-[1fr_3fr] border-l-2 border-[#808080] pl-4 ${colorTextGrey}`}
            >
              <ContactUs />
            </div>
            <div
              className={`grid border-l-2 border-[#808080] pl-4 ${colorTextGrey}`}
            >
              <span className={`mb-2 font-GilroyBold ${textHeaderFooter}`}>
                Dịch vụ
              </span>
              <span className={`font-GilroyRegular ${textInfoFooter}`}>
                Thiết kế nhận diện thương hiệu
              </span>
              <span className={`font-GilroyRegular ${textInfoFooter}`}>
                Thiết kế website
              </span>
              <span className={`font-GilroyRegular ${textInfoFooter}`}>
                Sản xuất film
              </span>
            </div>
            <div className="grid grid-cols-2 grid-rows-2">
              <span
                className={`mb-2 font-GilroyBold ${textHeaderFooter} ${colorTextGrey}`}
              >
                Đăng ký <span className="block">nhận thông tin</span>
              </span>
              <div className="flex justify-end gap-2">
                <SocialMediaIcons />
              </div>
              <div className="relative col-span-2">
                <input
                  type="text"
                  className={`w-full rounded-lg border bg-white px-4 py-2 font-GilroyRegular shadow-lg ${textInfoFooter}`}
                  placeholder="Nhập email tại đây"
                />
                <IconAngle className="absolute right-3 top-2 h-6 w-6 cursor-pointer text-gray-500" />
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center bg-[#ef5a21] text-lg">
            <span className={`font-GilroyRegular text-white ${textCopyRight}`}>
              Copyright 2024&nbsp;
            </span>
            <IconCopyRight className={`${sizeCopyRight}`} />
            <span className={`font-GilroyRegular text-white ${textCopyRight}`}>
              &nbsp;The Save. All Rights Reserved.
            </span>
          </div>
        </footer>
      )}
    </>
  );
};
