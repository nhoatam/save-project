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

export const Footer = () => {
  const isBreakPointMobile = useMediaQuery({ query: "(max-width: 1024px)" });
  return (
    <>
      {isBreakPointMobile && (
        <footer className="mt-10 space-y-2">
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
            <span className={`font-GilroyRegular text-white ${textCopyRight}`}>
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
            <span className={`font-GilroyRegular text-white ${textCopyRight}`}>
              &nbsp;The Save. All Rights Reserved.
            </span>
          </div>
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
                <svg
                  className="absolute right-3 top-2 h-6 w-6 text-gray-500"
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
          </div>
          <div className="flex items-center justify-center bg-[#ef5a21] text-lg">
            <span className={`font-GilroyRegular text-white ${textCopyRight}`}>
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
            <span className={`font-GilroyRegular text-white ${textCopyRight}`}>
              &nbsp;The Save. All Rights Reserved.
            </span>
          </div>
        </footer>
      )}
    </>
  );
};
