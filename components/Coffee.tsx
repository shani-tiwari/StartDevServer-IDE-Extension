import { User } from "lucide-react";
import Link from "next/link";


export default function Coffee(){
    return (
        <div className="my-8  w-full md:w-[50%] bg-black/2 border-2 text-xs md:text-sm text-center text-stone-700/90 border-stone-400/80 rounded-xl flex flex-col items-center justify-center md:px-24 py-6 gap-1">
            <span className="text-stone-800">Installed it ? Saved your time ? <br /> Fasten up your Workflow !</span> 

            <Link href="https://www.buymeacoffee.com/shani_tiwari" target="_blank" 
              className="px-6 py-2 my-2 font-serif font-semibold text-foreground rounded-full bg-stone-200/80 border-2 border-stone-900/40 shadow-md shadow-accent/20  active:scale-98 hover:translate-y-1 transition-transform duration-200 "
            >
              Sponsor
            </Link>
            <p className="text-stone-800/70">Add your spot on sponsors...</p>
            <div className="w-fit flex justify-between px-4 gap-2 mt-4">
              {
                Array.from({length: 3}).map((_, i) => (
                  <div key={i} className="size-10 bg-stone-200 border-2 text-lg border-stone-400 rounded-md flex items-center justify-center">
                    <User size={18}/>
                  </div>
                ))
              }
            </div>
        </div>
    )
};