import { BrandName } from "../Utilities/BrandName";
import { Header } from "../Utilities/Header";
import { Footer } from "../Utilities/Footer";
import { Achievement } from "../Utilities/Achievement";
import {
  colorTextBlack,
  colorTextGrey,
  colorTextOrange,
  sizeAchievement,
  sizeCoreValue,
  sizeDefineSave,
  sizeLogoSAVE,
  sizeTextAchievement,
  sizeTextCoreValue,
  sizeTextDefineSave,
  sizeTextVisionDuty,
  sizeVisionDuty,
  space_Y_VisionDuty,
  textHeaderPage,
  textSlogan,
  textStory,
} from "../Constants/styles";
import LogoS from "../assets/pictures/LogoS.png";
import LogoA from "../assets/pictures/LogoA.png";
import LogoV from "../assets/pictures/LogoV.png";
import LogoE from "../assets/pictures/LogoE.png";
import { useMediaQuery } from "react-responsive";

import { AnimationPulseOut } from "../Utilities/AnimationPulseOut";
import { useState, useEffect } from "react";
import SocialMediaIcons from "../Utilities/SocialMediaIcons";
import FloatingContactButton from "../Utilities/FloatingContactButton";
import { IconQuote } from "../Constants/icons";

interface DefineSave {
  symbol: string;
  contentTitle: string;
  contentDescription: string;
  style: string;
}

const lstDefineSave: DefineSave[] = [
  {
    symbol: LogoS,
    contentTitle: "Solution/Giải pháp",
    contentDescription:
      "Sáng tạo và chủ ộng tạo ra các giải pháp tối ưu cho doanh nghiệp. Tập trung làm nổi bật những giá trị cốt lõi mà Khách hàng muốn truyền tải.",
    style: "rounded-br-[4rem]",
  },
  {
    symbol: LogoA,
    contentTitle: "Access/Tiếp cận",
    contentDescription:
      "Thấu hiểu và xây dựng hành trình trải nghiệm tuyệt vời trên phương diện truyền thông về hình ảnh, bản sắc thương hiệu của Khách hàng.",
    style: "rounded-bl-[4rem]",
  },
  {
    symbol: LogoV,
    contentTitle: "Value/Giá trị",
    contentDescription:
      "Tạo ra giá trị nhân văn cùng sự phát triển bền vững cho thương hiệu thông qua câu chuyện truyền cảm hứng.",
    style: "rounded-tr-[4rem]",
  },
  {
    symbol: LogoE,
    contentTitle: "Education/Giáo dục",
    contentDescription:
      "Đồng hành để lan tỏa các thông tin của doanh nghiệp với mục tiêu xây dựng lòng tin và tăng ộ nhận của Khách hàng.",
    style: "rounded-tl-[4rem]",
  },
];

export const About = () => {
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
          <div className="relative mb-10 ml-4 mr-4 mt-10 space-y-2">
            <h1
              className={`word-fade-in font-GilroyBold ${colorTextOrange} ${textSlogan}`}
            >
              Câu chuyện <span className="block">về SAVE</span>
            </h1>
            <p
              className={`word-fade-in text-justify font-GilroyRegular text-[#77787a] ${textStory}`}
            >
              Save là đơn vị cung cấp giải pháp toàn diện về xây dựng thương
              hiệu, từ tư vấn chiến lược định vị, thiết kế hệ thống nhận diện
              đến chiến dịch truyền thông - marketing.
            </p>
            <p
              className={`word-fade-in text-justify font-GilroyRegular text-[#77787a] ${textStory}`}
            >
              Dù chỉ mới thành lập vào năm 2022 nhưng Save sở hữu đội ngũ nhân
              viên giàu kinh nghiệm, tận tâm, cùng nhau làm việc dựa trên tôn
              chỉ “CHUYÊN NGHIỆP TẠO GIÁ TRỊ KHÁC BIỆT”. Với chúng tôi, những
              sản phẩm tạo ra sẽ mang đến cho Khách hàng những giá trị vượt trội
              từ các câu chuyện sáng tạo và đạt hiệu quả truyền thông nhất định.
            </p>
            {/* hiệu ứng lan tỏa */}
            <div className="absolute right-[calc(0px-60px)] top-[calc(0px+100px)]">
              <div className="pulseOut">
                <AnimationPulseOut />
              </div>
            </div>
            {/* hiệu ứng lan tỏa */}
          </div>

          <div className="bg-[#f8f8f8]">
            <div className={`grid ${sizeDefineSave} space-y-4 p-4`}>
              {lstDefineSave.map((obj) => (
                <div
                  className={`flex place-items-center space-x-5 rounded-lg bg-[#ffffff] p-5 shadow-lg`}
                >
                  <img src={obj.symbol} alt="" className={`${sizeLogoSAVE}`} />
                  <p className={`${colorTextBlack} ${sizeTextDefineSave}`}>
                    <span className="font-GilroyBold">
                      {obj.contentTitle}&nbsp;
                    </span>
                    <span className="font-light">{obj.contentDescription}</span>
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="m-8 space-y-4">
            <div>
              <h1
                className={`${textHeaderPage} ${colorTextOrange} font-GilroyBold`}
              >
                Tầm nhìn
              </h1>
              <p
                className={`text-left ${colorTextGrey} ${sizeTextVisionDuty} font-GilroyRegular`}
              >
                Trở thành đơn vị tư vấn phát triển và xây dựng hệ thống thương
                hiệu chuẩn mực, chuyên nghiệp, góp phần nhân cao giá trị thương
                hiệu.
              </p>
            </div>
            <div>
              <h1
                className={`${textHeaderPage} ${colorTextOrange} font-GilroyBold`}
              >
                Sứ mệnh
              </h1>
              <p
                className={`text-left ${colorTextGrey} ${sizeTextVisionDuty} font-GilroyRegular`}
              >
                Không ngừng nỗ lực để phát triển thương hiệu sâu sắc, nâng cao
                trải nghiệp trong cuộc sống.
              </p>
            </div>
            <div>
              <h1
                className={`font-GilroyBold ${colorTextOrange} ${textHeaderPage}`}
              >
                Giá trị cốt lõi
              </h1>
              <div className="space-y-2">
                <p
                  className={`font-GilroyBold ${colorTextBlack} ${sizeTextCoreValue}`}
                >
                  Bản Lĩnh&nbsp;
                  <span
                    className={`font-GilroyRegular ${colorTextGrey} ${textStory}`}
                  >
                    Không ngại thách thức, đội ngũ Save luôn vững vàng và dám
                    đương đầu để chinh phục thành công.
                  </span>
                </p>
                <p
                  className={`font-GilroyBold ${colorTextBlack} ${sizeTextCoreValue}`}
                >
                  Tâm Huyết&nbsp;
                  <span
                    className={`font-GilroyRegular ${colorTextGrey} ${textStory}`}
                  >
                    Save đặt trọn tâm huyết trong mọi hợp tác, đội ngũ Save luôn
                    tận tâm cho tất cả sản phẩm đồng hành.
                  </span>
                </p>
                <p
                  className={`font-GilroyBold ${colorTextBlack} ${sizeTextCoreValue}`}
                >
                  Khác Biệt&nbsp;
                  <span
                    className={`font-GilroyRegular ${colorTextGrey} ${textStory}`}
                  >
                    Save không ngại tìm ra những lối đi “chưa ai dám đi” vì Save
                    dám khác biệt.
                  </span>
                </p>
                <p
                  className={`font-GilroyBold ${colorTextBlack} ${sizeTextCoreValue}`}
                >
                  Đam Mê&nbsp;
                  <span
                    className={`font-GilroyRegular ${colorTextGrey} ${textStory}`}
                  >
                    Tạo ra niềm vui trong công việc, xây dựng giá trị có ích cho
                    xã hội.
                  </span>
                </p>
                <p
                  className={`font-GilroyBold ${colorTextBlack} ${sizeTextCoreValue}`}
                >
                  Hiểu Quả&nbsp;
                  <span
                    className={`font-GilroyRegular ${colorTextGrey} ${textStory}`}
                  >
                    Save luôn đặt mục tiêu chung lên hàng đầu, tạo ra hiệu ứng
                    lan tỏa nhất định, cùng doanh nghiệp khẳng định vị thế
                    thương hiệu.
                  </span>
                </p>
              </div>
            </div>
          </div>

          <div className="m-8">
            <div className="relative mb-10">
              <h1
                className={`font-GilroyBold ${colorTextBlack} ${textHeaderPage}`}
              >
                Thành tích
              </h1>
              <p
                className={`font-GilroyRegular ${colorTextGrey} ${sizeTextAchievement}`}
              >
                Save không ngừng nỗ lực mở rộng và phát triển. Trong thời gian
                qua, chúng tôi đã có những con số ấn tượng.
              </p>
              <IconQuote
                className="absolute bottom-[calc(0px-40px)] right-[calc(0px+40px)] size-20"
                gradientStart="#ffffff"
                gradientEnd="#9f9d9d"
              />
            </div>
            <Achievement />
          </div>

          {/* <div className="bg-[#f1f1f1]">
            <div className="p-8">
              <h1
                className={`mb-8 font-GilroyBold ${colorTextOrange} ${textHeaderPage}`}
              >
                Đội ngũ
              </h1>
              <Staff />
            </div>
          </div> */}
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
            <div className="h-[200vh] overflow-hidden">
              <div className="relative grid h-screen grid-rows-[100px,auto,100px]">
                <Header />

                <div className="ml-20 w-4/6 place-content-center space-y-6">
                  <h1
                    className={`word-fade-in font-GilroyBold ${colorTextOrange} ${textSlogan}`}
                  >
                    Câu chuyện về SAVE
                  </h1>
                  <p
                    className={`word-fade-in text-justify font-GilroyRegular text-[#77787a] ${textStory}`}
                  >
                    Save là đơn vị cung cấp giải pháp toàn diện về xây dựng
                    thương hiệu, từ tư vấn chiến lược định vị, thiết kế hệ thống
                    nhận diện đến chiến dịch truyền thông - marketing.
                  </p>
                  <p
                    className={`word-fade-in text-justify font-GilroyRegular text-[#77787a] ${textStory}`}
                  >
                    Dù chỉ mới thành lập vào năm 2022 nhưng Save sở hữu đội ngũ
                    nhân viên giàu kinh nghiệm, tận tâm, cùng nhau làm việc dựa
                    trên tôn chỉ “CHUYÊN NGHIỆP TẠO GIÁ TRỊ KHÁC BIỆT”. Với
                    chúng tôi, những sản phẩm tạo ra sẽ mang đến cho Khách hàng
                    những giá trị vượt trội từ các câu chuyện sáng tạo và đạt
                    hiệu quả truyền thông nhất định.
                  </p>
                </div>

                <div className="ml-20 flex place-items-center gap-4">
                  <SocialMediaIcons />
                </div>

                {/* hiệu ứng lan tỏa */}
                <div className="absolute -bottom-10 -right-10">
                  <div className="pulseOut">
                    <AnimationPulseOut />
                  </div>
                </div>
                {/* hiệu ứng lan tỏa */}
              </div>
              <div className="h-screen place-content-center bg-[#f3f3f3] bg-opacity-50">
                <div className={`grid grid-cols-4 ${sizeDefineSave}`}>
                  {lstDefineSave.map((obj) => (
                    <div
                      className={`col-span-2 flex place-items-center space-x-10 ${obj.style} bg-[#ffffff] p-10 shadow-2xl`}
                    >
                      <img
                        src={obj.symbol}
                        alt=""
                        className={`${sizeLogoSAVE}`}
                      />
                      <p className={`${colorTextBlack} ${sizeTextDefineSave}`}>
                        <span className="font-GilroyBold">
                          {obj.contentTitle}&nbsp;
                        </span>
                        <span className="font-light">
                          {obj.contentDescription}
                        </span>
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div
              className={`grid h-screen grid-cols-2 place-content-center ${sizeVisionDuty}`}
            >
              <div className={`${space_Y_VisionDuty} `}>
                <h1
                  className={`${textHeaderPage} ${colorTextOrange} font-GilroyBold`}
                >
                  Tầm nhìn
                </h1>
                <p
                  className={`text-left ${colorTextBlack} ${sizeTextVisionDuty} font-GilroyBold`}
                >
                  Trở thành đơn vị tư vấn phát triển và xây dựng hệ thống thương
                  hiệu chuẩn mực, chuyên nghiệp, góp phần nhân cao giá trị
                  thương hiệu.
                </p>
              </div>
              <div className={`${space_Y_VisionDuty} `}>
                <h1
                  className={`${textHeaderPage} ${colorTextOrange} font-GilroyBold`}
                >
                  Sứ mệnh
                </h1>
                <p
                  className={`text-left ${colorTextBlack} ${sizeTextVisionDuty} font-GilroyBold`}
                >
                  Không ngừng nỗ lực để phát triển thương hiệu sâu sắc, nâng cao
                  trải nghiệp trong cuộc sống.
                </p>
              </div>
            </div>

            <div className="h-screen place-content-center bg-[#f3f3f3]">
              <div className={`${sizeCoreValue} grid grid-cols-[auto,auto]`}>
                <div className="place-content-center">
                  <h1
                    className={`mb-10 font-GilroyBold ${colorTextOrange} ${textHeaderPage}`}
                  >
                    Giá trị cốt lõi
                  </h1>
                  <div className="grid grid-cols-2 gap-20">
                    <div className="space-y-6">
                      <div className="space-y-2">
                        <h1
                          className={`font-GilroyBold ${colorTextBlack} ${sizeTextCoreValue}`}
                        >
                          Tâm Huyết
                        </h1>
                        <p
                          className={`text-justify font-GilroyRegular ${colorTextGrey} ${textStory}`}
                        >
                          Save đặt trọn tâm huyết trong mọi hợp tác, đội ngũ
                          Save luôn tận tâm cho tất cả sản phẩm đồng hành.
                        </p>
                      </div>
                      <div className="space-y-2">
                        <h1
                          className={`font-GilroyBold ${colorTextBlack} ${sizeTextCoreValue}`}
                        >
                          Hiểu Quả
                        </h1>
                        <p
                          className={`text-justify font-GilroyRegular ${colorTextGrey} ${textStory}`}
                        >
                          Save luôn đặt mục tiêu chung lên hàng đầu, tạo ra hiệu
                          ứng lan tỏa nhất định, cùng doanh nghiệp khẳng định vị
                          thế thương hiệu.
                        </p>
                      </div>
                    </div>
                    <div className="space-y-6">
                      <div className="space-y-2"></div>
                      <div className="space-y-2">
                        <h1
                          className={`font-GilroyBold ${colorTextBlack} ${sizeTextCoreValue}`}
                        >
                          Khác Biệt
                        </h1>
                        <p
                          className={`text-justify font-GilroyRegular ${colorTextGrey} ${textStory}`}
                        >
                          Save không ngại tìm ra những lối đi “chưa ai dám đi”
                          vì Save dám khác biệt.
                        </p>
                      </div>
                      <div className="space-y-2">
                        <h1
                          className={`font-GilroyBold ${colorTextBlack} ${sizeTextCoreValue}`}
                        >
                          Đam Mê
                        </h1>
                        <p
                          className={`text-justify font-GilroyRegular ${colorTextGrey} ${textStory}`}
                        >
                          Tạo ra niềm vui trong công việc, xây dựng giá trị có
                          ích cho xã hội.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="place-content-center place-items-center">
                  <BrandName />
                </div>
              </div>
            </div>

            <div className={`grid h-screen grid-cols-2 ${sizeAchievement}`}>
              <div className="col-span-2 place-content-end">
                <h1
                  className={`font-GilroyBold ${colorTextOrange} ${textHeaderPage}`}
                >
                  Thành tích
                </h1>
              </div>
              <div className="place-content-center">
                <div className="relative w-fit">
                  <p
                    className={`font-GilroyBold ${colorTextBlack} ${sizeTextAchievement}`}
                  >
                    Save không ngừng nỗ lực mở
                    <span className="block">rộng và phát triển.</span>
                    <span className="block">
                      Trong thời gian qua, chúng tôi
                    </span>
                    <span className="block">đã có những con số ấn tượng.</span>
                  </p>
                  <IconQuote
                    className="absolute bottom-[calc(0px-80px)] right-[calc(0px-40px)] -z-10 size-40"
                    gradientStart="#ffffff"
                    gradientEnd="#9f9d9d"
                  />
                </div>
              </div>
              <div className="place-content-center">
                <Achievement />
              </div>
              <div className="col-span-2"></div>
            </div>

            {/* <div className={`grid h-screen bg-[#f3f3f3] ${gridStaff}`}> */}
            <div className={`bg-[#f3f3f3]`}>
              {/* <h1
                className={`ml-20 place-content-end font-GilroyBold ${colorTextOrange} ${textHeaderPage}`}
              >
                Đội ngũ
              </h1>
              <div className="flex items-center justify-center gap-10">
                <Staff />
              </div> */}
              <div className="place-content-end pt-10">
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
