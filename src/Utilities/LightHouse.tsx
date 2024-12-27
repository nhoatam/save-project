import { useMediaQuery } from "react-responsive";
import {
  positionLighter,
  positionLighterAfter,
  positionLighterBefore,
  positionLightHouseSVG,
  sizeContainerLightHouse,
  sizeLightHouseSVG,
} from "../Constants/styles";
import { IconLighthouse } from "../Constants/icons";

export const LightHouse = () => {
  const isBreakPointMobile = useMediaQuery({ query: "(max-width: 1024px)" });
  return (
    <>
      <div className="relative">
        <div
          className={`${sizeContainerLightHouse} place-content-center place-items-center rounded-full bg-[#fddcc5]`}
        >
          <div
            className={`lighter ${isBreakPointMobile ? `before:bg-[#f1f1f1] after:bg-[#f1f1f1]` : `before:bg-[#ffffff] after:bg-[#ffffff]`} ${positionLighterAfter} ${positionLighterBefore} ${positionLighter} after:z-10`}
          ></div>
          {/* <span className="glow-shine-3 shine-circle"></span>
            <span className="glow-shine-2 shine-circle"></span>
            <span className="glow-shine-1 shine-circle"></span>
            <span className="glow-shine-0 shine-circle"></span> */}
          <div
            className={`absolute inset-0 ${positionLightHouseSVG} z-0 grid place-content-center place-items-center`}
          >
            <IconLighthouse className={`${sizeLightHouseSVG}`} />
          </div>
        </div>
      </div>
    </>
  );
};
