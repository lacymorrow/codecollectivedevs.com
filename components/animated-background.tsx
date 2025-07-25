import React from "react";
interface AnimatedBackgroundProps {
  className?: string;
  opacity?: number;
  overlayOpacity?: number;
  children?: React.ReactNode;
  style?: React.CSSProperties;
}

export function AnimatedBackground({
  className = "",
  opacity = 0.6,
  overlayOpacity = 0.5,
  children,
  style,
}: AnimatedBackgroundProps) {
  return (
    <div className={`relative overflow-hidden ${className}`} style={style}>
      <div className="absolute inset-0 z-0 bg-white overflow-hidden">
        <div className="absolute inset-0" style={{ opacity }}>
          <div className="absolute -inset-[10%] animate-[spin_20s_linear_infinite]">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[500px] w-[500px] rounded-full bg-gradient-to-r from-violet-600 to-pink-500 blur-3xl" />
          </div>
          <div className="absolute -inset-[10%] animate-[spin_15s_linear_infinite_reverse]">
            <div className="absolute top-1/3 left-2/3 -translate-x-1/2 -translate-y-1/2 h-[400px] w-[400px] rounded-full bg-gradient-to-r from-blue-600 to-cyan-400 blur-3xl" />
          </div>
          <div className="absolute -inset-[10%] animate-pulse">
            <div className="absolute top-2/3 left-1/3 -translate-x-1/2 -translate-y-1/2 h-[300px] w-[300px] rounded-full bg-gradient-to-r from-amber-400 to-yellow-300 blur-3xl" />
          </div>
        </div>
        <div
          className="absolute inset-0 bg-white backdrop-blur-sm"
          style={{ opacity: overlayOpacity }}
        />
      </div>
      {children && <div className="relative z-10">{children}</div>}
    </div>
  );
}
