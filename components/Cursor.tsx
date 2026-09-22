/* eslint-disable react-hooks/rules-of-hooks */
"use client";

import { motion, useMotionValue, useSpring } from "motion/react";
import { useEffect } from "react";

const circles = [
  { size: 9, bg: "rgba(0,0,0,0.7)", stiffness: 500, damping: 30 },
  { size: 8, bg: "rgba(0,0,0,0.6)", stiffness: 450, damping: 30 },
  { size: 7, bg: "rgba(0,0,0,0.5)", stiffness: 400, damping: 30 },
  { size: 6, bg: "rgba(0,0,0,0.4)", stiffness: 350, damping: 30 },
  { size: 5, bg: "rgba(0,0,0,0.3)", stiffness: 300, damping: 30 },
  { size: 4, bg: "rgba(0,0,0,0.2)", stiffness: 300, damping: 30 },
  { size: 3, bg: "rgba(0,0,0,0.1)", stiffness: 300, damping: 30 },
];

export default function Cursor() {

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  useEffect(() => {
    if(window.innerWidth < 1024){ 
      return;
    };

    const handleMouseMove = (e: MouseEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [x, y]);

  return (
    <>
      {circles.map((circle, i) => {
        const springX = useSpring(x, {
          stiffness: circle.stiffness,
          damping: circle.damping,
        });

        const springY = useSpring(y, {
          stiffness: circle.stiffness,
          damping: circle.damping,
        });

        return (
          <motion.div
            key={i}
            className="hidden xl:flex fixed top-0 left-0 rounded-full pointer-events-none z-9999"
            style={{
            //   mixBlendMode: "color",
              width: circle.size,
              height: circle.size,
              background: circle.bg,
              x: springX,
              y: springY,
              translateX: "-50%",
              translateY: "-50%",
            }}
          />
        );
      })}
    </>
  );
}