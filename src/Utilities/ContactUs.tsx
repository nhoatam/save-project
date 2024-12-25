import React from "react";
import {
  colorTextGrey,
  colorTextOrange,
  textHeaderFooter,
  textInfoFooter,
} from "../Constants/styles";
import { useMediaQuery } from "react-responsive";

const phoneNumber = "+84773333829";
const email = "hi.thesave@gmail.com";
const website = "thesave.vn";

const ContactUs: React.FC = () => {
  const isBreakPointMobile = useMediaQuery({ query: "(max-width: 1024px)" });

  return (
    <>
      <span
        className={`col-span-2 ${textHeaderFooter} ${!isBreakPointMobile ? colorTextGrey : colorTextOrange} font-GilroyBold`}
      >
        Liên hệ
      </span>
      <span className={`font-GilroyBold ${textInfoFooter} ${colorTextGrey}`}>
        Hotline
      </span>
      <a
        href={`tel:${phoneNumber}`}
        className="cursor-pointer font-GilroyRegular"
      >
        <span
          className={`font-GilroyRegular ${textInfoFooter} ${colorTextGrey} hover:text-orange-500`}
        >
          +84 77 333 3829
        </span>
      </a>

      <span className={`font-GilroyBold ${textInfoFooter} ${colorTextGrey}`}>
        Email
      </span>

      <a
        href={`mailto:${email}?subject=Liên hệ từ website&body=Chào bạn, tôi muốn liên hệ về vấn đề...`}
        className="cursor-pointer font-GilroyRegular"
      >
        <span
          className={`font-GilroyRegular ${textInfoFooter} ${colorTextGrey} hover:text-orange-500`}
        >
          {email}
        </span>
      </a>
      {!isBreakPointMobile && (
        <>
          <span className={`font-GilroyBold ${textInfoFooter}`}>Website</span>
          <a href={`${website}`} className="cursor-pointer font-GilroyRegular">
            <span
              className={`font-GilroyRegular ${textInfoFooter} hover:text-orange-500`}
            >
              {website}
            </span>
          </a>
        </>
      )}
    </>
  );
};

export default ContactUs;
