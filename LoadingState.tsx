import React from "react";
import { getClassNames } from "./utils";
import "./LoadingState.css";

const config = {
  animation: {
    pulse: "loading-state--pulse",
    wave: "loading-state--wave",
  },
  variant: {
    text: "loading-state--text",
    rect: "loading-state--rect",
    circle: "loading-state--circle",
  },
};

interface ILoadingStateProps {
  animation?: "pulse" | "wave";
  className?: string;
  height?: string | number;
  style?: React.CSSProperties;
  variant?: "text" | "rect" | "circle";
  width?: string | number;
}

const formatCSSValue = (value) =>
  typeof value === "number" ? `${value}px` : value;

const LoadingState: React.FC<ILoadingStateProps> = ({
  animation = "pulse",
  className,
  height = ".75rem",
  style,
  variant = "text",
  width,
}) => {
  const styles = {
    height: formatCSSValue(height),
    width: formatCSSValue(width),
    ...style,
  };

  const classNames = getClassNames([
    "loading-state",
    config.variant[variant],
    config.animation[animation],
    className,
  ]);

  return <div className={classNames} style={styles}></div>;
};

export default LoadingState;
