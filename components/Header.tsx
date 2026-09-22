"use client";
import PrimaryButton from "@/components/PrimaryButton";
import Link from "next/link";
import {motion} from 'framer-motion';

 
 export default function Header(){
    return (
      <motion.header
      // add stagger in children
        animate={{opacity: 1, y: 0, filter: 'blur(0px)'}} 
        initial={{opacity: 0, y: -20, filter: 'blur(5px)'}}
        transition={{duration: 0.3, delay: 0.25 }}        
       className="w-fit h-[56vh] md:h-[65vh] flex flex-col items-center justify-end border-b border-b-stone-300 pb-8"
      > 

        <div className=" badge opacity-80 mb-1 flex items-center justify-center gap-2 bg-stone-100/80 rounded-full px-5 py-1 text-xs border border-stone-400 shadow-md shadow-stone-400/20">
          <div className="size-1.5 bg-stone-400/80 rounded-md"/>
          <Link 
            href="https://open-vsx.org/extension/ShaniTiwari/sds-StartDevServer" 
            target="_blank" 
            rel="noopener noreferrer"
            className='tracking-tight'
          >
            2.2k+ Installs. Try it now !
          </Link>
        </div>

        <h1 className="w-[98%] md:w-[70%] text-center text-[22px] md:text-[44px] text-foreground md:leading-14.5 tracking-[-0.015rem]">
          Start your Development server & open it in a new browser tab → in 1 click
        </h1>

        <p className="w-[90%] text-xs md:text-base text-center mb-6 tracking-wide text-stone-700">
          {/* Start your development server and automatically open your localhost URL in a new browser tab — all in one click. 
          Supports React, Next.js. */}
          Supports all VS-Code based IDEs and run React / Next JS projects.
        </p>

        <PrimaryButton className="px-7 py-2 text-[18px] "/>
        <p className="text-xs md:text-sm text-stone-400 mt-2 max-w-46 text-center ">
          Copy & search in Extensions.
        </p>

      </motion.header>
    )
 }