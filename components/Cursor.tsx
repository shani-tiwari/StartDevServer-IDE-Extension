/* eslint-disable react-hooks/rules-of-hooks */
"use client";


import { motion, useMotionValue, useSpring} from "motion/react";
import { useEffect } from "react";



export default function Cursor({hovering}: {hovering: boolean}) {

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  useEffect(() => {
    if (window.innerWidth < 1024) return;

    const handleMouseMove = (e: MouseEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [x,y]);

  const sprX = useSpring(x, {
    stiffness: 400,
    damping: 60,
  });
  const sprY = useSpring(y, {
    stiffness: 400,
    damping: 60,
  });

  return (
    <>
          <motion.div
            className=" hidden xl:flex fixed top-0 left-0 rounded-full bg-white mix-blend-difference pointer-events-none z-999"
            style={{
              width: hovering ? 40 : 15,
              height: hovering ? 40 : 15,
              translateX: "-50%",
              translateY: "-50%",
              x: sprX,
              y: sprY,
              filter: hovering ? 'blur(8px)' : 'blur(1px)',
            }}
          />
    </>
  );
}