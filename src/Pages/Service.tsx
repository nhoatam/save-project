import { LightHouse } from "../Utilities/LightHouse";
import { BrandIdentity } from "../Utilities/BrandIdentity";
import { EndProductUIUX } from "../Utilities/EndProductUIUX";
import { FilmReel } from "../Utilities/FilmReel";
import { Header } from "../Utilities/Header";
import { Footer } from "../Utilities/Footer";
import {
  colorTextGrey,
  colorTextOrange,
  textHeaderPage,
  textSlogan,
  textStory,
} from "../Constants/styles";
import { useMediaQuery } from "react-responsive";
import { useState, useEffect } from "react";
import { AnimationPulseOut } from "../Utilities/AnimationPulseOut";
import SocialMediaIcons from "../Utilities/SocialMediaIcons";
import FloatingContactButton from "../Utilities/FloatingContactButton";

export const Service = () => {
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
        <div className="relative overflow-hidden">
          <Header />

          <div className="ml-4 mr-4">
            <h1
              className={`word-fade-in mb-5 mt-10 font-GilroyBold ${colorTextOrange} ${textSlogan}`}
            >
              Dịch vụ
              <span className="block">của chúng tôi</span>
            </h1>
            <p
              className={`word-fade-in mb-10 text-left font-GilroyRegular text-[#77787a] ${textStory}`}
            >
              Với kinh nghiệm nhiều năm đồng hành cùng nhiều doanh nghiệp, chúng
              tôi xây dựng một quy trình dịch vụ tiêu chuẩn kết hợp với sự thấu
              cảm và sự sáng tạo không ngừng nghỉ nhằm tạo ra những trải nghiệm
              cuốn hút thúc đẩy sự phát triển của doanh nghiệp
            </p>
          </div>

          {/* hiệu ứng lan tỏa */}
          <div className="absolute right-[calc(0px-60px)] top-[calc(0px+100px)]">
            <div className="pulseOut">
              <AnimationPulseOut />
            </div>
          </div>
          {/* hiệu ứng lan tỏa */}

          <div className="m-4 space-y-4 rounded-xl bg-[#f1f1f1] px-4 pb-12 pt-10">
            <h1
              className={`font-GilroyBold ${colorTextOrange} ${textHeaderPage}`}
            >
              Thiết kế nhận diện thương hiệu
            </h1>
            <p
              className={`text-justify font-GilroyRegular ${colorTextGrey} ${textStory}`}
            >
              Mỗi một thương hiệu đều có các giá trị nội tại khác nhau, thông
              qua các tôn chỉ, triết lý kinh doanh riêng. Đó là những tính cách
              riêng biệt của thương hiệu được truyền tải qua bộ thiết kế nhận
              diện thương hiệu bằng hình ảnh, màu sắc và các tín hiệu đồ họa
              nhận diện có tính đồng bộ.
            </p>
            <div className="flex items-center justify-center">
              <BrandIdentity />
            </div>
            <ul
              className={`ml-4 list-disc font-GilroyMedium ${colorTextGrey} ${textStory}`}
            >
              <li>Tư vấn thương hiệu</li>
              <li>Tái định vi thương hiệu</li>
              <li>Nhận diện thương hiệu</li>
              <li>Thiết kế Profile công ty</li>
              <li>Thiết kế Brochure</li>
              <li>Thiết kế Sales Kit</li>
            </ul>
          </div>

          <div className="m-4 space-y-4 rounded-xl bg-[#f1f1f1] px-4 pb-12 pt-10">
            <h1
              className={`font-GilroyBold ${colorTextOrange} ${textHeaderPage}`}
            >
              Tư vấn chiến lược
              <span className="block">Digital Marketing</span>
            </h1>
            <p
              className={`text-justify font-GilroyRegular ${colorTextGrey} ${textStory}`}
            >
              Chúng tôi đồng hành cùng doanh nghiệp trong việc duy trì và phát
              triển chiến lược Marketing toàn diện, và cung cấp tư vấn giải pháp
              kinh doanh phù hợp với xu hướng thời đại số.
            </p>
            <div className="grid place-content-center place-items-center">
              <LightHouse />
            </div>
            <ul
              className={`ml-4 list-disc font-GilroyMedium ${colorTextGrey} ${textStory}`}
            >
              <li>Triển khai kế hoạch Digital marketing.</li>
              <li>Xây kênh chạy chuẩn format.</li>
              <li>Tối ưu perfomance ads đa nền tảng.</li>
              <li>Triển khai SEO website on top google.</li>
            </ul>
          </div>

          <div className="m-4 space-y-4 rounded-xl bg-[#f1f1f1] px-4 pb-12 pt-10">
            <h1
              className={`font-GilroyBold ${colorTextOrange} ${textHeaderPage}`}
            >
              Thiết kế Website chuẩn SEO
            </h1>
            <p
              className={`text-justify font-GilroyRegular ${colorTextGrey} ${textStory}`}
            >
              Bằng kinh nghiệm thực chiến và tư duy sáng tạo, Chúng tôi hiện
              thực hóa những trải nghiệm thị giác đầy tính tương tác, khơi gợi
              cảm xúc thông qua những đường nét tỷ lệ tinh tế và tính ứng dụng
              cao xuyên suốt toàn bộ các loại thiết bị hay màn hình trong hành
              trình trải nghiệm. Kết hợp với nền tảng thông tin được xây dựng
              khoa học giúp thương hiệu tạo lợi thế cạnh tranh trên thị trường.
            </p>
            <div className="flex items-center justify-center">
              <EndProductUIUX />
            </div>
            <ul
              className={`ml-4 list-disc font-GilroyMedium ${colorTextGrey} ${textStory}`}
            >
              <li>Thiết kế website doanh nghiệp</li>
              <li>Thiết kế website bán hàng</li>
              <li>Thiết kế landing page bán hàng</li>
            </ul>
          </div>

          <div className="m-4 space-y-4 rounded-xl bg-[#f1f1f1] px-4 pb-12 pt-10">
            <h1
              className={`font-GilroyBold ${colorTextOrange} ${textHeaderPage}`}
            >
              Sản xuất phim <span className="block">quảng cáo</span>
            </h1>
            <p
              className={`text-justify font-GilroyRegular ${colorTextGrey} ${textStory}`}
            >
              Trước đây Pro5 là một trong những ấn phẩm căn bản giới thiệu doanh
              nghiệp, dự án đến với khách hàng tuy nhiên ngày nay với sự phát
              triển của internet việc sản xuất phim doanh nghiệp sẽ tăng độ nhận
              diện của sản phẩm góp phần lớn trong việc tăng tỷ lệ chuyển đổi
              khách hàng.
            </p>
            <FilmReel />
            <ul
              className={`ml-4 list-disc font-GilroyMedium ${colorTextGrey} ${textStory}`}
            >
              <li>Sản xuất Phim doanh nghiệp</li>
              <li>Sản xuất phim 3D bất động sản</li>
              <li>Sản xuất Phim Viral</li>
              <li>Tour 360 độ dự án</li>
            </ul>
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
            <div className="h-[200vh] overflow-hidden">
              <div className="relative grid h-screen grid-rows-[100px,auto,100px]">
                <Header />

                <div className="ml-20 w-4/6 place-content-center space-y-6">
                  <h1
                    className={`word-fade-in font-GilroyBold ${colorTextOrange} ${textSlogan}`}
                  >
                    Dịch vụ
                    <span className="block">của chúng tôi</span>
                  </h1>
                  <p
                    className={`word-fade-in text-balance font-GilroyRegular text-[#77787a] ${textStory}`}
                  >
                    Với kinh nghiệm nhiều năm đồng hành cùng nhiều doanh nghiệp,
                    chúng tôi xây dựng một quy trình dịch vụ tiêu chuẩn kết hợp
                    với sự thấu cảm và sự sáng tạo không ngừng nghỉ nhằm tạo ra
                    những trải nghiệm cuốn hút thúc đẩy sự phát triển của doanh
                    nghiệp
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

              <div className="grid h-screen grid-cols-2 gap-10 bg-[#f3f3f3] bg-opacity-50">
                <div className="flex items-center justify-center">
                  <BrandIdentity />
                </div>
                <div className={`mr-20 place-content-center space-y-8`}>
                  <h1
                    className={`font-GilroyBold ${colorTextOrange} ${textHeaderPage}`}
                  >
                    Thiết kế nhận diện thương hiệu
                  </h1>
                  <p
                    className={`text-justify font-GilroyRegular text-[#77787a] ${textStory}`}
                  >
                    Mỗi một thương hiệu đều có các giá trị nội tại khác nhau,
                    thông qua các tôn chỉ, triết lý kinh doanh riêng. Đó là
                    những tính cách riêng biệt của thương hiệu được truyền tải
                    qua bộ thiết kế nhận diện thương hiệu bằng hình ảnh, màu sắc
                    và các tín hiệu đồ họa nhận diện có tính đồng bộ.
                  </p>
                  <ul
                    className={`ml-6 grid list-disc grid-cols-2 gap-1 font-GilroyBold text-[#77787a] ${textStory}`}
                  >
                    <li>Tư vấn thương hiệu</li>
                    <li>Thiết kế Profile công ty</li>
                    <li>Tái định vi thương hiệu</li>
                    <li>Thiết kế Brochure</li>
                    <li>Nhận diện thương hiệu</li>
                    <li>Thiết kế Sales Kit</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="grid h-screen grid-cols-2 gap-10">
              <div className="ml-20 place-content-center space-y-8">
                <h1
                  className={`font-GilroyBold ${colorTextOrange} ${textHeaderPage}`}
                >
                  Tư vấn chiến lược
                  <span className="block">Digital Marketing</span>
                </h1>
                <p
                  className={`text-justify font-GilroyRegular text-[#77787a] ${textStory}`}
                >
                  Chúng tôi đồng hành cùng doanh nghiệp trong việc duy trì và
                  phát triển chiến lược Marketing toàn diện, và cung cấp tư vấn
                  giải pháp kinh doanh phù hợp với xu hướng thời đại số.
                </p>
                <ul
                  className={`ml-6 list-disc font-GilroyBold text-[#77787a] ${textStory}`}
                >
                  <li>Triển khai kế hoạch Digital marketing.</li>
                  <li>Xây kênh chạy chuẩn format.</li>
                  <li>Tối ưu perfomance ads đa nền tảng.</li>
                  <li>Triển khai SEO website on top google.</li>
                </ul>
              </div>
              <div className="mr-20 grid place-content-center place-items-center">
                <LightHouse />
              </div>
            </div>

            <div className="grid h-screen grid-cols-2 gap-10 bg-[#f1f1f1]">
              <div className="ml-20 flex items-center justify-center">
                <EndProductUIUX />
              </div>
              <div className="mr-20 place-content-center space-y-8">
                <h1
                  className={`font-GilroyBold ${colorTextOrange} ${textHeaderPage}`}
                >
                  Thiết kế Website chuẩn SEO
                </h1>
                <p
                  className={`text-justify font-GilroyRegular text-[#77787a] ${textStory}`}
                >
                  Bằng kinh nghiệm thực chiến và tư duy sáng tạo, Chúng tôi hiện
                  thực hóa những trải nghiệm thị giác đầy tính tương tác, khơi
                  gợi cảm xúc thông qua những đường nét tỷ lệ tinh tế và tính
                  ứng dụng cao xuyên suốt toàn bộ các loại thiết bị hay màn hình
                  trong hành trình trải nghiệm. Kết hợp với nền tảng thông tin
                  được xây dựng khoa học giúp thương hiệu tạo lợi thế cạnh tranh
                  trên thị trường.
                </p>
                <ul
                  className={`ml-6 list-disc font-GilroyBold text-[#77787a] ${textStory}`}
                >
                  <li>Thiết kế website doanh nghiệp</li>
                  <li>Thiết kế website bán hàng</li>
                  <li>Thiết kế landing page bán hàng</li>
                </ul>
              </div>
            </div>

            <div className="grid h-screen grid-rows-[auto,auto] overflow-hidden">
              <div className="ml-20 mr-20 grid grid-cols-2 gap-10">
                <div className="place-content-end">
                  <FilmReel />
                </div>
                <div className="place-content-end space-y-8">
                  <h1
                    className={`font-GilroyBold ${colorTextOrange} ${textHeaderPage}`}
                  >
                    Sản xuất phim <span className="block">quảng cáo</span>
                  </h1>
                  <p
                    className={`text-justify font-GilroyRegular text-[#77787a] ${textStory}`}
                  >
                    Trước đây Pro5 là một trong những ấn phẩm căn bản giới thiệu
                    doanh nghiệp, dự án đến với khách hàng tuy nhiên ngày nay
                    với sự phát triển của internet việc sản xuất phim doanh
                    nghiệp sẽ tăng độ nhận diện của sản phẩm góp phần lớn trong
                    việc tăng tỷ lệ chuyển đổi khách hàng.
                  </p>

                  <ul
                    className={`ml-6 list-disc font-GilroyBold text-[#77787a] ${textStory}`}
                  >
                    <li>Sản xuất Phim doanh nghiệp</li>
                    <li>Sản xuất phim 3D bất động sản</li>
                    <li>Sản xuất Phim Viral</li>
                    <li>Tour 360 độ dự án</li>
                  </ul>
                </div>
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
