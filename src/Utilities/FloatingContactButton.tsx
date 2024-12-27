import React, { useState, useRef, useEffect } from "react";
import { IconAngleUp, IconPhoneCall, IconZalo } from "../Constants/icons";
const phoneNumber = "+84773333829";

const FloatingContactButton: React.FC = () => {
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
    <div
      ref={containerRef} // Gán ref cho vùng chứa
      className="fixed bottom-10 right-6 z-50"
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
  );
};

export default FloatingContactButton;
