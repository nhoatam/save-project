import { Link, useNavigate } from "react-router-dom";
import {
  textNavBar,
  sizeSmallSizeIcon,
  sizeMainLogo,
  colorTextGrey,
  space_X_NavBar,
} from "../Constants/styles";
import { useMediaQuery } from "react-responsive";
import { useState, useEffect } from "react";
import { IconClose, IconMainLogo, IconMenuLogo } from "../Constants/icons";

export const Header = () => {
  const [isMenuVisible, setMenuVisible] = useState<boolean | null>(false);
  const isBreakPointMobile = useMediaQuery({ query: "(max-width: 1024px)" });
  const navigate = useNavigate(); // Hook để điều hướng

  useEffect(() => {
    // Khóa cuộn trang khi menu mở
    if (isMenuVisible) {
      document.body.style.overflow = "hidden"; // Khóa cuộn
    } else {
      document.body.style.overflow = "auto"; // Mở lại cuộn
    }
    // Dọn dẹp khi component unmount
    return () => {
      document.body.style.overflow = "auto";
    };
    // Khóa cuộn trang khi menu mở
  }, [isMenuVisible]);

  const handleClickLink = (to: string) => {
    // setMenuVisible(false);
    navigate(to); // Điều hướng đến trang mong muốn
  };
  return (
    <>
      {isBreakPointMobile && (
        <>
          <div className="relative ml-4 mr-4 flex h-[60px] items-end justify-between">
            <IconMainLogo
              className={`${sizeMainLogo}`}
              onClick={() => handleClickLink("/")}
            />
            {/* Menu */}
            <IconMenuLogo
              className={`${sizeSmallSizeIcon} cursor-pointer`}
              onClick={() => {
                setMenuVisible(!isMenuVisible);
              }}
            />
            {/* Menu */}
          </div>

          {isMenuVisible && (
            <div
              className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80"
              onClick={() =>
                setMenuVisible(false)
              } /* Đóng menu khi click ra ngoài */
            >
              <div
                className="flex h-full w-full flex-col items-center justify-center bg-[#ef5a21] text-black"
                onClick={(e) =>
                  e.stopPropagation()
                } /* Ngăn đóng menu khi click vào bên trong */
              >
                <ul
                  className={`grid space-y-8 overflow-auto text-center font-GilroyBold text-4xl text-white`}
                >
                  <Link
                    className="cursor-pointer hover:text-red-400"
                    to="/about"
                    onClick={() => {
                      handleClickLink("/about");
                      setMenuVisible(!isMenuVisible);
                    }}
                  >
                    Giới thiệu
                  </Link>
                  <Link
                    className="cursor-pointer hover:text-red-400"
                    to="/project"
                    onClick={() => {
                      handleClickLink("/project");
                      setMenuVisible(!isMenuVisible);
                    }}
                  >
                    Dự án
                  </Link>
                  <Link
                    className="cursor-pointer hover:text-red-400"
                    to="/service"
                    onClick={() => {
                      handleClickLink("/service");
                      setMenuVisible(!isMenuVisible);
                    }}
                  >
                    Dịch vụ
                  </Link>
                  <Link
                    className="cursor-pointer hover:text-red-400"
                    to="/contact"
                    onClick={() => {
                      handleClickLink("/contact");
                      setMenuVisible(!isMenuVisible);
                    }}
                  >
                    Liên hệ
                  </Link>
                </ul>
                <IconClose
                  onClick={() => setMenuVisible(false)}
                  className="absolute right-[calc(0px+20px)] top-[calc(0px+20px)] size-12 rounded-full p-2 hover:bg-red-600"
                  color="#FFFFFF"
                />
              </div>
            </div>
          )}
        </>
      )}

      {!isBreakPointMobile && (
        <div className="ml-20 mr-20 grid grid-cols-2">
          <div className="place-content-end">
            <IconMainLogo
              className={`${sizeMainLogo}`}
              onClick={() => handleClickLink("/")}
            />
          </div>
          <div
            className={`flex place-content-end place-items-end ${space_X_NavBar}`}
          >
            <ul
              className={`flex ${space_X_NavBar} font-GilroyRegular ${colorTextGrey} ${textNavBar}`}
            >
              <Link className="cursor-pointer hover:text-red-400" to="/about">
                Giới thiệu
              </Link>
              <Link className="cursor-pointer hover:text-red-400" to="/project">
                Dự án
              </Link>
              <Link className="cursor-pointer hover:text-red-400" to="/service">
                Dịch vụ
              </Link>
              <Link className="cursor-pointer hover:text-red-400" to="/contact">
                Liên hệ
              </Link>
            </ul>
            <IconMenuLogo className={`${sizeSmallSizeIcon}`} />
          </div>
        </div>
      )}
    </>
  );
};
