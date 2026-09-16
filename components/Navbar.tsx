"use client";
import Image from "next/image";
import Link from "next/link";
import {motion} from 'framer-motion'
import { Star } from "lucide-react";

export default function Navbar() {
    return (
        <>
            <motion.div 
             animate={{scale: 1, opacity: 1, }} 
             initial={{scale: 0.8, opacity: 0, }}
             transition={{duration: 0.3, damping: 25 }}
             className="fixed top-2 w-full z-99 px-2 "
            >
                <nav 
                className="relative max-w-275 px-4  mt-2 py-2 bg-background/20 flex justify-between mx-auto border border-stone-300 rounded-full overflow-hidden">

                    <div 
                        style={{
                        filter: 'url(#glassEffect)',
                        backdropFilter: "blur(3px)",
                        WebkitBackdropFilter: "blur(3px)",
                        }}
                        className="absolute inset-0 pointer-events-none -z-3 "
                    />
                     <svg aria-hidden="true" className="absolute h-0 w-0 overflow-hidden">
                        <defs>
                            <filter id="glassEffect" >
                                <feTurbulence type="fractalNoise" baseFrequency="0.006 0.008" numOctaves="7"  result="noise"/>
                                <feGaussianBlur in="noise" stdDeviation="3" result="softNoise" />
                                <feDisplacementMap in="SourceGraphic" in2="softNoise" scale="20" />
                                <feGaussianBlur in="displaced" stdDeviation="0.4" />
                            </filter>
                        </defs>
                    </svg>

                    <div className="hidden md:flex items-center justify-center">
                        <h1 className="relative text-xl text-foreground font-mono tracking-[-0.01rem]">
                            SDS-StartDevServer 
                        </h1>
                    </div>
                    <div className="logo md:flex-1 flex items-center justify-center">  
                        <Image src="/sds-logo.png" alt="Logo" width={70} height={70} />
                    </div>

                    <div className="flex items-center justify-center">
                        <Link 
                            href="https://github.com/shani-tiwari/StartDevServer-IDE-Extension" target="_blank" 
                            className=" flex items-center justify-center gap-2 px-3.5 py-1.5 bg-stone-100/80 rounded-full text-sm cursor-pointer outline-1 outline-offset-1 outline-stone-400/80 shadow-md shadow-stone-400/20 active:scale-98 hover:outline-stone-500 transition-scale duration-200 "
                        >
                            Star on Github  <Star size={14} className="text-stone-500"/>
                        </Link>
                    </div>

                </nav>
            </motion.div>
        </>
    )
}