import { useMediaQuery } from "react-responsive";
import {
  mt_space_y_ListService,
  sizeListService,
  textHeaderListService,
  textListService,
} from "../Constants/styles";

interface ServiceProps {
  title: string;
  support: string[];
}

const serviceList: ServiceProps[] = [
  {
    title: "Tư vấn chiến lược Digital Marketing",
    support: [
      "Triển khai kế hoạch Digital marketing",
      "Xây kênh chạy chuẩn format",
      "Tối ưu performance ads đa nền tảng",
      "SEO website on top google",
    ],
  },
  {
    title: "Tư vấn thiết kế thương hiệu",
    support: [
      "Tư vấn thiết kế thương hiệu",
      "Tái định vị thương hiệu",
      "Nhận diện thương hiệu",
      "Thiết kế Profile công ty",
      "Thiết kế Brochure",
      "Thiết kế Sales Kit",
    ],
  },
  {
    title: "Thiết kế Website chuẩn SEO",
    support: [
      "Tư vấn thiết kế website doanh nghiệp",
      "Thiết kế website bán hàng",
      "Thiết kế landing page bán hàng, dự án Bất động sản",
    ],
  },
  {
    title: "Sản xuất phim quảng cáo",
    support: [
      "Sản xuất Phim doanh nghiệp",
      "Sản xuất phim 3D bất động sản",
      "Sản xuất Phim Viral",
      "Tour 360 độ dự án",
    ],
  },
];

export const ListServices: React.FC = () => {
  const isBreakPointMobile = useMediaQuery({ query: "(max-width: 1024px)" });
  return (
    <>
      {isBreakPointMobile && (
        <>
          {serviceList.map((obj) => (
            <div className="mb-2 rounded-lg bg-[#ef5a21] text-white">
              <div className={`p-4 ${sizeListService}`}>
                <h3
                  className={`font-GilroyMedium ${textHeaderListService} text-balance`}
                >
                  {obj.title}
                </h3>
                <ul
                  className={`ml-4 mt-2 list-disc ${textListService} font-GilroyRegular`}
                >
                  {obj.support.map((s) => (
                    <li>{s}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </>
      )}

      {!isBreakPointMobile && (
        <div className="grid grid-cols-4 rounded-2xl bg-[#ef5a21] text-white">
          {serviceList.map((obj) => (
            <div className={`p-5 ${sizeListService}`}>
              <h3
                className={`font-GilroyMedium ${textHeaderListService} text-balance`}
              >
                {obj.title}
              </h3>
              <ul
                className={`ml-6 list-disc ${mt_space_y_ListService} ${textListService} font-GilroyRegular`}
              >
                {obj.support.map((s) => (
                  <li className="">{s}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      )}
    </>
  );
};
