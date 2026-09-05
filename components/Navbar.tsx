"use client";
import Image from "next/image";
import Link from "next/link";
import {motion} from 'framer-motion'

export default function Navbar() {
    return (
        <>
            <motion.div 
             animate={{scale: 1, opacity: 1, }} 
             initial={{scale: 0.8, opacity: 0, }}
             transition={{duration: 0.3, damping: 25 }}
             className="fixed top-2 w-full z-99 px-2 "
            >
                <nav className="max-w-275 px-4 md:px-6 mt-2 py-2 bg-background/20 backdrop-blur-xs flex justify-between mx-auto border border-stone-300 rounded-full">

                    <div className="hidden md:flex items-center justify-center">
                        <h1 className="relative text-xl text-foreground font-mono tracking-[-0.08rem]">
                            Start Dev Server <sup className="bg-red-100 absolute top-2 -right-11 tracking-tight">(sds)</sup>
                        </h1>
                    </div>
                    <div className="logo md:flex-1 flex items-center justify-center">  
                        <Image src="/sds-logo.png" alt="Logo" width={70} height={70} />
                    </div>
                    <div className="flex items-center justify-center">
                        <Link 
                            href="https://github.com/shani-tiwari/StartDevServer-IDE-Extension" target="_blank" 
                            className=" flex items-center justify-center gap-2 px-3.5 py-1.5 bg-stone-100/80 rounded-full text-sm cursor-pointer outline-1 outline-offset-1 outline-stone-400 shadow-md shadow-stone-400/20 active:scale-98 hover:scale-102 transition-scale duration-200 "
                        >
                            Star on Github  ⭐
                        </Link>
                    </div>

                </nav>
            </motion.div>
        </>
    )
}