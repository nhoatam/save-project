import { useMediaQuery } from "react-responsive";
import { BrandName } from "../Utilities/BrandName";
import { ListServices } from "../Utilities/ListServices";
import { ListProjects } from "../Utilities/ListProjects";
import { Customer } from "../Customer/Customer";
import { Header } from "../Utilities/Header";
import { colorTextOrange } from "../Constants/styles";

export const LandingPage = () => {
  const isDesktop = useMediaQuery({ query: "(min-width: 1024px)" }); // Điều kiện cho Desktop (>= 1024px)
  const isTablet = useMediaQuery({
    query: "(min-width: 768px) and (max-width: 1024px)",
  }); // Điều kiện cho Tablet (768px <= width <= 1024px)
  const isMobile = useMediaQuery({ query: "(max-width: 767px)" }); // Điều kiện cho Mobile (< 768px)

  return (
    <>
      {(isMobile || isTablet) && (
        <div className="h-dvh">
          <div className="grid h-16 grid-cols-10 items-center pl-5">
            <div className="col-span-8">
              <h1 className="text-4xl font-bold">SAVE</h1>
            </div>
            <div className="col-span-2 flex justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="35"
                height="35"
                fill="none"
                viewBox="0 0 40 40"
              >
                <path
                  fill="#F06225"
                  d="M20 0c11.046 0 20 8.954 20 20v14a6 6 0 0 1-6 6H21v-8.774c0-2.002.122-4.076 1.172-5.78a10 10 0 0 1 6.904-4.627l.383-.062a.8.8 0 0 0 0-1.514l-.383-.062a10 10 0 0 1-8.257-8.257l-.062-.383a.8.8 0 0 0-1.514 0l-.062.383a9.999 9.999 0 0 1-4.627 6.904C12.85 18.878 10.776 19 8.774 19H.024C.547 8.419 9.29 0 20 0Z"
                ></path>
                <path
                  fill="#F06225"
                  d="M0 21h8.774c2.002 0 4.076.122 5.78 1.172a10.02 10.02 0 0 1 3.274 3.274C18.878 27.15 19 29.224 19 31.226V40H6a6 6 0 0 1-6-6V21ZM40 2a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z"
                ></path>
              </svg>
            </div>
          </div>
          <div className="ml-4 mt-10 h-fit">
            <h1 className={`text-3xl font-bold ${colorTextOrange}`}>
              <span>Xây dựng giá trị </span>
              <span className="block">thương hiệu từ những</span>
              <span className="block">viên gạch đầu tiên</span>
            </h1>
          </div>
          <div className="mb-10 ml-4 mr-4 mt-5 h-fit">
            <p className="text-justify text-lg font-light text-gray-600">
              Save lấy ý tưởng từ viên gạch. Việc xây dựng thương hiệu, tư vấn
              chiến lược phải bắt đầu từ những viên gạch đầu tiên. Viên gạch
              được hội tụ bởi 4 mảnh thể hiện cho sự suy nghĩ nội tại của Save
              luôn nỗ lực tạo ra những giá trị khác biệt của thương hiệu
            </p>
          </div>
          <div className="flex h-fit items-center justify-center bg-[#f1f1f1] p-8">
            <BrandName />
          </div>
          <div className="ml-4 mt-4 h-fit">
            <h1 className={`text-4xl font-bold ${colorTextOrange}`}>
              <span>Các dịch vụ</span>
              <span className="block">của chúng tôi</span>
            </h1>
          </div>
          <ListServices />
          <div className="ml-4 mt-8 h-fit">
            <h1 className={`text-4xl font-bold ${colorTextOrange}`}>
              <span>Dự án</span>
              <span className="block">tiêu biểu</span>
            </h1>
          </div>
          <ListProjects />
          <Customer />
        </div>
      )}

      {isDesktop && (
        <div className="grid h-screen grid-rows-[100px,auto,100px] overflow-hidden">
          <Header />

          <div className="grid grid-cols-[2fr,1fr]">
            <div className="flex items-center justify-center">
              <h1
                className={`word-fade-in font-GilroyBold font-bold ${colorTextOrange} lg:text-5xl xl:text-7xl`}
              >
                <span>Chúng tôi xây dựng</span>
                <span className="block">giá trị thương hiệu từ</span>
                <span className="block">những nét “dưỡng tâm”</span>
              </h1>
            </div>
            <div className="flex items-center justify-center">
              <div className="pulseIn">
                <span style={{ "--i": 1 } as React.CSSProperties}></span>
                <span style={{ "--i": 2 } as React.CSSProperties}></span>
                <span style={{ "--i": 3 } as React.CSSProperties}></span>
                <span style={{ "--i": 4 } as React.CSSProperties}></span>
                <span style={{ "--i": 5 } as React.CSSProperties}></span>
                <span style={{ "--i": 6 } as React.CSSProperties}></span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="lg:h-[140px] lg:w-[140px] xl:h-[160px] xl:w-[160px]"
                  fill="none"
                  viewBox="0 0 40 40"
                >
                  <path
                    fill="#F06225"
                    d="M20 0c11.046 0 20 8.954 20 20v14a6 6 0 0 1-6 6H21v-8.774c0-2.002.122-4.076 1.172-5.78a10 10 0 0 1 6.904-4.627l.383-.062a.8.8 0 0 0 0-1.514l-.383-.062a10 10 0 0 1-8.257-8.257l-.062-.383a.8.8 0 0 0-1.514 0l-.062.383a9.999 9.999 0 0 1-4.627 6.904C12.85 18.878 10.776 19 8.774 19H.024C.547 8.419 9.29 0 20 0Z"
                  ></path>
                  <path
                    fill="#F06225"
                    d="M0 21h8.774c2.002 0 4.076.122 5.78 1.172a10.02 10.02 0 0 1 3.274 3.274C18.878 27.15 19 29.224 19 31.226V40H6a6 6 0 0 1-6-6V21ZM40 2a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z"
                  ></path>
                </svg>
              </div>
            </div>
          </div>

          <div className="flex items-end justify-end">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="#f06225"
              className="mb-5 mr-40 lg:size-8 xl:size-10"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 17.25 12 21m0 0-3.75-3.75M12 21V3"
              />
            </svg>
          </div>
        </div>
      )}
    </>
  );
};
