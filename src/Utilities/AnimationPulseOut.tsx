import { useMediaQuery } from "react-responsive";

export const AnimationPulseOut = () => {
  const isBreakPointMobile = useMediaQuery({ query: "(max-width: 1024px)" });
  return (
    <>
      <span
        style={
          {
            "--i": 1,
            boxShadow: isBreakPointMobile
              ? "0 0 10px 1px rgba(248, 178, 152, 0.8), inset 0 0 10px 1px rgba(248, 178, 152, 0.8)"
              : "0 0 30px 10px rgba(248, 178, 152, 0.8), inset 0 0 30px 10px rgba(248, 178, 152, 0.8)",
          } as React.CSSProperties
        }
      ></span>
      <span
        style={
          {
            "--i": 2,
            boxShadow: isBreakPointMobile
              ? "0 0 10px 1px rgba(248, 178, 152, 0.8), inset 0 0 10px 1px rgba(248, 178, 152, 0.8)"
              : "0 0 30px 10px rgba(248, 178, 152, 0.8), inset 0 0 30px 10px rgba(248, 178, 152, 0.8)",
          } as React.CSSProperties
        }
      ></span>
      <span
        style={
          {
            "--i": 3,
            boxShadow: isBreakPointMobile
              ? "0 0 10px 1px rgba(248, 178, 152, 0.8), inset 0 0 10px 1px rgba(248, 178, 152, 0.8)"
              : "0 0 30px 10px rgba(248, 178, 152, 0.8), inset 0 0 30px 10px rgba(248, 178, 152, 0.8)",
          } as React.CSSProperties
        }
      ></span>
      <span
        style={
          {
            "--i": 4,
            boxShadow: isBreakPointMobile
              ? "0 0 10px 1px rgba(248, 178, 152, 0.8), inset 0 0 10px 1px rgba(248, 178, 152, 0.8)"
              : "0 0 30px 10px rgba(248, 178, 152, 0.8), inset 0 0 30px 10px rgba(248, 178, 152, 0.8)",
          } as React.CSSProperties
        }
      ></span>
      <span
        style={
          {
            "--i": 5,
            boxShadow: isBreakPointMobile
              ? "0 0 10px 1px rgba(248, 178, 152, 0.8), inset 0 0 10px 1px rgba(248, 178, 152, 0.8)"
              : "0 0 30px 10px rgba(248, 178, 152, 0.8), inset 0 0 30px 10px rgba(248, 178, 152, 0.8)",
          } as React.CSSProperties
        }
      ></span>
      <span
        style={
          {
            "--i": 6,
            boxShadow: isBreakPointMobile
              ? "0 0 10px 1px rgba(248, 178, 152, 0.8), inset 0 0 10px 1px rgba(248, 178, 152, 0.8)"
              : "0 0 30px 10px rgba(248, 178, 152, 0.8), inset 0 0 30px 10px rgba(248, 178, 152, 0.8)",
          } as React.CSSProperties
        }
      ></span>
    </>
  );
};
