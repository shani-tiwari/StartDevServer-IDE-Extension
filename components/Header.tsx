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
       className=" mt-10 w-fit h-[56vh] md:h-[72vh] flex flex-col items-center justify-end border-b border-b-stone-300 pb-8"> 

        <div className=" badge opacity-60 hover:opacity-80 flex items-center justify-center gap-1 bg-stone-100/80 rounded-full px-5 py-1 text-sm border border-stone-400 shadow-md shadow-stone-400/20">

          <div className="size-1.5 bg-stone-400/80 rounded-md"></div>
          <Link href="https://open-vsx.org/extension/ShaniTiwari/sds-StartDevServer" 
            target="_blank" 
            rel="noopener noreferrer"
            className='tracking-tight'
          >
              1800+ Installs in AntiGravity, Cursor. 🚀 
          </Link>

        </div>

        <h1 className="w-[98%] md:w-[70%] text-center text-[22px] md:text-[44px] text-foreground md:leading-14.5">
          Start your Development server & auto redirect to new browser tab with localhost url → in a click.
        </h1>

        <p className="w-[40%] text-xs md:text-base text-center mb-6 tracking-wide">Run your React/Next JS Projects in a click.</p>

        <PrimaryButton className="px-6 py-2 text-[18px] "/>
        <p className="text-xs md:text-sm text-stone-500 mt-2 max-w-44 text-center ">Copy the name and search in your favourote editor Extension tab.</p>

      </motion.header>
    )
 }