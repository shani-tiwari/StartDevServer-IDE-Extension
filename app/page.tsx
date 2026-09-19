"use client";
import About from "@/components/About";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Header from "@/components/Header";
import Image from "next/image";
import {motion} from 'framer-motion';
import Coffee from "@/components/Coffee";
import { useRef } from "react";
import Cursor from "@/components/Cursor";


export default function Home() {
  return (
    <div className="w-full flex flex-col bg-background select-none">
      <Cursor/>
      <main className=" w-full md:max-w-6xl px-1 md:px-6 mx-auto flex flex-col gap-6 items-center border border-stone-300">

        <Navbar/>
        <Header/>
        <ImageSet/>
        <About/>
        <Coffee/>
        <Footer/>

      </main>
    </div>
  );
};

function ImageSet(){
  return (
        <motion.div 
         animate={{scale: 1, opacity: 1, filter: 'blur(0px)'}} 
         initial={{scale: 0.8, opacity: 0, filter: 'blur(5px)'}}
         transition={{duration: 0.5, delay: 0.35}}
         className=" p-1 bg-stone-200/80 border border-stone-300 rounded-2xl my-8 shadow-md ">
          <Image
            src="/sds-preview.png"
            alt="SDS extension Preview page image"
            width={1080}
            height={500}
            loading="eager"
            className="mx-auto rounded-xl outline-2 -outline-offset-1 outline-stone-600"
          />
        </motion.div>
  )
};


// function CursorFollower(){

// //   ref={ball} is reused for every circle → only one element gets referenced.
// // onMouseMove is attached to the circle itself → it won't reliably track the cursor.
// // circle.bg contains CSS but you're putting it inside className → Tailwind won't understand it.
// // size-${circle.size} is dynamic Tailwind → these classes may not be generated.
// // duration-${...} is also dynamic → same problem.
// // -z-${i} is dynamic → same issue.
//     const ball = useRef<HTMLDivElement>(null);
    
//     const circles = [
//       {
//         size: 10,
//         bg: 'rgba(0,0,0,0.8)',
//       },
//       {
//         size: 8,
//         bg: 'rgba(0,0,0,0.6)',
//       },
//       {
//         size: 6,
//         bg: 'rgba(0,0,0,0.4)',
//       },
//       {
//         size: 4,
//         bg: 'rgba(0,0,0,0.2)',
//       },
//     ];

//   return (
//     <>
//       {
//         circles.map((circle, i) => 
//           <motion.div 
//            key={i} 
//            ref={ball}
//            className={`absolute top-0 left-0 bg-[${circle.bg}] size-${circle.size} rounded-full -z-${i} transition-transform duration-${50 + 50*i} ease-out pointer-events-none`} 
//            onMouseMove={(e) => { 
//             ball.current!.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
//            }} 
//           />
//         )
//       }
//     </>
//   )
// }

