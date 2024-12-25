import { useState } from "react";
import { InView } from "react-intersection-observer";
import {
  gapBrandName,
  sizeBrandName,
  sizeLogoSAVE,
  textBrandName,
} from "../Constants/styles";
import LogoS from "../assets/pictures/LogoS.png";
import LogoA from "../assets/pictures/LogoA.png";
import LogoV from "../assets/pictures/LogoV.png";
import LogoE from "../assets/pictures/LogoE.png";

interface SAVE {
  name: string;
  symbol: string;
  meant: string;
  style: string;
}

const lstSave: SAVE[] = [
  {
    name: "S",
    symbol: LogoS,
    meant: "Solution",
    style: "rounded-br-[4rem]",
  },
  {
    name: "V",
    symbol: LogoV,
    meant: "Value",
    style: "rounded-tr-[4rem]",
  },
  {
    name: "A",
    symbol: LogoA,
    meant: "Access",
    style: "rounded-bl-[4rem]",
  },
  {
    name: "E",
    symbol: LogoE,
    meant: "Education",
    style: "rounded-tl-[4rem]",
  },
];

export const BrandName: React.FC = () => {
  // State to track which letter is clicked
  const [revealedText, setRevealedText] = useState<string | null>("S");

  // Toggle function for each letter section
  const handleInteraction = (letter: string) => {
    setRevealedText((prev) => (prev === letter ? null : letter));
  };

  const handleInView = (id: string, inView: boolean) => {
    const element = document.getElementById(id);
    if (!element) return;

    // Apply animation class based on viewport visibility
    if (inView) {
      element.classList.add(`animate-slide-${id}`);
    } else {
      element.classList.remove(`animate-slide-${id}`);
    }
  };

  return (
    <>
      <div
        className={`grid ${gapBrandName} select-none grid-flow-col grid-rows-2`}
      >
        {lstSave.map((obj) => (
          <InView
            key={obj.name}
            triggerOnce={false}
            onChange={(inView) => handleInView(obj.name, inView)}
          >
            <div
              id={obj.name}
              className={`flex cursor-pointer items-center justify-center border border-[#ea580c] ${sizeBrandName} ${obj.style} shadow-2xl ${
                revealedText === obj.name ? "bg-orange-600" : "bg-white"
              }`}
              onClick={() => handleInteraction(obj.name)}
            >
              {revealedText === obj.name ? (
                <p className={`font-GilroyItalic ${textBrandName} text-white`}>
                  {obj.meant}
                </p>
              ) : (
                <img src={obj.symbol} alt="" className={`${sizeLogoSAVE}`} />
              )}
            </div>
          </InView>
        ))}
      </div>
    </>
  );
};
