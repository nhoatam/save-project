import { useMediaQuery } from "react-responsive";
import {
  positionLighter,
  positionLighterAfter,
  positionLighterBefore,
  positionLightHouseSVG,
  sizeContainerLightHouse,
  sizeLightHouseSVG,
} from "../Constants/styles";

export const LightHouse = () => {
  const isBreakPointMobile = useMediaQuery({ query: "(max-width: 425px)" });
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
            <svg
              version="1.1"
              id="Layer_1"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              x="0px"
              y="0px"
              viewBox="0 0 374.38 439.7"
              xmlSpace="preserve"
              className={`${sizeLightHouseSVG}`}
            >
              <style type="text/css">{`.st0{fill:#F05A22;}`}</style>
              <path
                className="st0"
                d="M0,439.7h374.38c0,0-55.73-10.9-132.34-14.93l-8.41-237.26c3.79,1.28,7.4,2.66,10.69,4.21V162.9
c-5.68-2.68-12.17-4.97-19.26-6.81v-22.06c-2.56-0.66-5.25-1.23-7.97-1.78V81.42h7.3c1.64,0,2.2-2.17,0.78-2.98l-32.23-18.08l0,0
V37.94c0-1.27-1.03-2.3-2.3-2.3h-2.37V4.42c0-2.44-1.98-4.42-4.42-4.42h0c-2.44,0-4.42,1.98-4.42,4.42v31.21h-2.37
c-1.27,0-2.3,1.03-2.3,2.3v22.42l-32.22,18.08c-1.43,0.8-0.86,2.98,0.78,2.98h7.29v50.83c-2.71,0.54-5.4,1.11-7.96,1.78v22.06
c-7.09,1.84-13.58,4.13-19.26,6.81v28.83c3.29-1.55,6.9-2.93,10.68-4.21l-8.42,237.63C52.51,429.43,0,439.7,0,439.7z M136.39,246.64
l2.06-60c13.56-4.08,29.21-5.95,45.39-5.95c16.18,0,31.84,1.75,45.39,5.84l0.89,26.87c-1.11,0.16-2.25,0.39-3.37,0.57
c-1.32,0.22-2.63,0.43-3.96,0.67c-1.47,0.28-2.97,0.6-4.46,0.91c-1.35,0.28-2.69,0.54-4.05,0.85c-1.51,0.34-3.04,0.73-4.56,1.11
c-1.37,0.34-2.74,0.66-4.12,1.03c-1.54,0.41-3.09,0.87-4.65,1.31c-1.39,0.4-2.78,0.78-4.18,1.2c-1.58,0.48-3.16,1-4.75,1.52
c-1.4,0.45-2.79,0.88-4.19,1.35c-1.61,0.55-3.24,1.15-4.86,1.73c-1.39,0.5-2.78,0.97-4.17,1.49c-1.77,0.66-3.56,1.39-5.34,2.09
c-1.24,0.49-2.48,0.95-3.72,1.46c-3.03,1.24-6.06,2.53-9.09,3.88c-4.5,2.01-8.92,4.12-13.28,6.31c-1.46,0.73-2.85,1.5-4.29,2.25
C140.84,244.3,138.57,245.44,136.39,246.64z M140.08,292.96c1.41-0.89,2.79-1.8,4.23-2.67c2.18-1.32,4.45-2.58,6.69-3.86
c1.33-0.75,2.61-1.53,3.96-2.27c2.68-1.47,5.44-2.87,8.2-4.27c0.99-0.5,1.94-1.03,2.94-1.53c3.8-1.88,7.67-3.7,11.61-5.45
c4.62-2.06,9.28-3.99,13.94-5.81c1.6-0.62,3.2-1.16,4.81-1.75c3.06-1.13,6.12-2.28,9.16-3.29c1.85-0.62,3.68-1.14,5.53-1.71
c2.77-0.86,5.55-1.75,8.29-2.51c1.91-0.53,3.77-0.95,5.66-1.43c2.18-0.55,4.35-1.1,6.49-1.57l1.59,44.85
c-25.19,5.05-52.61,14.15-79.46,26.41c-6.73,3.07-13.61,6.51-20.5,10.13l1.41-39.79C136.4,295.25,138.25,294.11,140.08,292.96z
M176.23,364.92c19.53-8.93,39.19-16.05,58.5-21.29l2.81,79.15h-107.4l1.2-33.77C145.45,380.2,160.54,372.08,176.23,364.92z
M155.02,81.42h18.46h20.74h18.45v50.04c-5.31-0.9-10.84-1.59-16.58-1.98v-27.49H171.6v27.49c-5.74,0.39-11.27,1.08-16.58,1.98
V81.42z"
              />
            </svg>
          </div>
        </div>
      </div>
    </>
  );
};
