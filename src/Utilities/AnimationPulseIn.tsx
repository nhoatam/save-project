import { useMediaQuery } from "react-responsive";

export const AnimationPulseIn = () => {
  const isBreakPointMobile = useMediaQuery({ query: "(max-width: 1024px)" });
  return (
    <>
      <span
        style={
          {
            "--i": 1,
            border: isBreakPointMobile
              ? "5px solid #fdeee9"
              : "15px solid #fdeee9",
          } as React.CSSProperties
        }
      ></span>
      <span
        style={
          {
            "--i": 2,
            border: isBreakPointMobile
              ? "5px solid #fdeee9"
              : "15px solid #fdeee9",
          } as React.CSSProperties
        }
      ></span>
      <span
        style={
          {
            "--i": 3,
            border: isBreakPointMobile
              ? "5px solid #fdeee9"
              : "15px solid #fdeee9",
          } as React.CSSProperties
        }
      ></span>
      <span
        style={
          {
            "--i": 4,
            border: isBreakPointMobile
              ? "5px solid #fdeee9"
              : "15px solid #fdeee9",
          } as React.CSSProperties
        }
      ></span>
      <span
        style={
          {
            "--i": 5,
            border: isBreakPointMobile
              ? "5px solid #fdeee9"
              : "15px solid #fdeee9",
          } as React.CSSProperties
        }
      ></span>
      <span
        style={
          {
            "--i": 6,
            border: isBreakPointMobile
              ? "5px solid #fdeee9"
              : "15px solid #fdeee9",
          } as React.CSSProperties
        }
      ></span>
    </>
  );
};
