/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        mobile_S: "320px", // - từ 425px trở Xuống
        mobile_M: "375px", // - từ 425px trở Xuống
        mobile: "393px", // - từ 393px trở lên
        mobile_L: "425px", // - từ 425px trở Xuống
        xs: "480px", // Smartphones nhỏ
        sm: "640px", // Smartphones phổ biến
        tablet: "768px", // Tablets - từ 768px trở lên
        laptop: "1024px", // Laptop nhỏ hoặc tablets ngang - từ 1024px trở lên
        xl: "1280px", // Desktop tiêu chuẩn
        laptop_L: "1440px", // Desktop lớn - từ 1440px trở lên
        "3xl": "1536px", // Desktop rất lớn
        fullHD: "1920px", // Màn hình Full HD - từ 1920px trở lên
        "2k": "2560px", // Màn hình 4K - từ 2560px trở lên
        ultra: "3840px", // Màn hình Ultra HD lớn hơn 4K
      },
      fontFamily: {
        GilroyBold: "Gilroy-Bold",
        GilroyItalic: "Gilroy-Italic",
        GilroyMedium: "Gilroy-Medium",
        GilroyRegular: "Gilroy-Regular",
      },
    },
  },
  plugins: [require("tailwindcss-motion")],
};
