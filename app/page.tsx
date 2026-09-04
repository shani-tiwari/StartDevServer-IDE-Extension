"use client";
import About from "@/components/About";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Header from "@/components/Header";
import Image from "next/image";
import {motion} from 'framer-motion';


export default function Home() {
  return (
    <div className="w-full flex flex-col bg-background select-none">
      <main className=" w-full md:max-w-6xl mx-auto flex flex-col items-center border border-stone-300">

        <Navbar/>
        <Header/>
        <ImageSet/>
        <About/>
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
         className=" p-2 bg-stone-200/80 border border-stone-300 rounded-2xl my-12 shadow-md ">
          <Image
            src="/sds-preview.png"
            alt="SDS extension Preview page image"
            width={1080}
            height={500}
            loading="eager"
            className="mx-auto rounded-lg outline-2 -outline-offset-1 outline-stone-600"
          />
        </motion.div>
  )
}
