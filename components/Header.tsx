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
       className="w-fit h-[56vh] md:h-[72vh] flex flex-col items-center justify-end border-b border-b-stone-300 pb-8"> 

        <div className=" badge opacity-60 hover:opacity-80 flex items-center justify-center gap-3 bg-stone-100/80 rounded-full px-8 py-1 text-sm border border-yellow-400/60 shadow-md shadow-stone-400/20">

          <div className="size-2 bg-accent rounded-md"></div>
          <Link href="https://open-vsx.org/extension/ShaniTiwari/sds-StartDevServer" 
            target="_blank" 
            rel="noopener noreferrer"
          >
              700+ Installs in 48 hours 🚀
          </Link>

        </div>

        <h1 className="w-[98%] md:w-2/3 text-center text-[22px] md:text-[44px] text-foreground md:leading-14.5">
          Start your Development server & auto redirect to new browser tab with localhost url → in a click.
        </h1>

        <p className="w-[40%] text-xs md:text-base text-center mb-6 tracking-wide">Run your React/Next JS Projects in a click.</p>

        <PrimaryButton label='Install Extension' className="px-6 py-2 text-[18px] "/>

      </motion.header>
    )
 }