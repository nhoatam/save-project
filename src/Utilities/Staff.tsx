import { motion } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";
import {
  colorTextGrey,
  sizePicListStaff,
  sizeTextStaff,
} from "../Constants/styles";
import picStaff from "../assets/pictures/staff.jpg";
import { useMediaQuery } from "react-responsive";

interface StaffProp {
  picStaff: string;
  nameStaff: string;
  roleStaff: string;
  isTop: boolean;
}

const lstStaff: StaffProp[] = [
  {
    picStaff: picStaff,
    nameStaff: "Nguyễn Gia Tân",
    roleStaff: "Chief Executive Officer",
    isTop: false,
  },
  {
    picStaff: picStaff,
    nameStaff: "Nguyễn Huệ Tâm",
    roleStaff: "Creative Director",
    isTop: true,
  },
  {
    picStaff: picStaff,
    nameStaff: "Đặng Anh Tuấn",
    roleStaff: "Art Director",
    isTop: false,
  },
  {
    picStaff: picStaff,
    nameStaff: "Nguyễn Phú Nhân",
    roleStaff: "Digital Marketing Manager",
    isTop: true,
  },
];

export const Staff: React.FC = () => {
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
          <div className="grid grid-cols-2 gap-x-4">
            {lstStaff.map((obj) => (
              <motion.figure className={``}>
                {!obj.isTop && (
                  <img
                    src={picStaff}
                    alt="staff-role"
                    className={`${sizePicListStaff} rounded-3xl object-cover shadow-2xl`}
                  />
                )}
                <motion.figcaption className="m-2">
                  <span className={`font-GilroyBold ${colorTextGrey} text-lg`}>
                    {obj.nameStaff}
                  </span>
                  <span
                    className={`block font-GilroyRegular ${colorTextGrey} text-xs`}
                  >
                    {obj.roleStaff}
                  </span>
                </motion.figcaption>
                {obj.isTop && (
                  <img
                    src={picStaff}
                    alt="staff-role"
                    className={`${sizePicListStaff} rounded-3xl object-cover shadow-2xl`}
                  />
                )}
              </motion.figure>
            ))}
          </div>
        </>
      )}

      {!isBreakPointMobile && (
        <>
          {lstStaff.map((obj) => (
            <motion.figure
              ref={ref}
              initial={{ y: obj.isTop ? -130 : 130, opacity: 0 }}
              animate={isInView ? { y: 0, opacity: 1 } : {}}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className={`${sizePicListStaff}`}
            >
              {!obj.isTop && (
                <img
                  src={picStaff}
                  alt="staff-role"
                  className="mb-4 h-full w-full rounded-3xl object-cover shadow-2xl"
                />
              )}
              <motion.figcaption className="">
                <p
                  className={`font-GilroyBold ${colorTextGrey} ${sizeTextStaff}`}
                >
                  {obj.nameStaff}
                  <span className="block font-GilroyRegular">
                    {obj.roleStaff}
                  </span>
                </p>
              </motion.figcaption>
              {obj.isTop && (
                <img
                  src={picStaff}
                  alt="staff-role"
                  className="mt-4 h-full w-full rounded-3xl object-cover shadow-2xl"
                />
              )}
            </motion.figure>
          ))}
        </>
      )}
    </>
  );
};
