import Link from "next/link";


export default function Coffee(){
    return (
        <div className="my-8 w-full md:w-fit bg-black/5 border text-xs md:text-sm text-center text-stone-700/90 border-stone-400/80 rounded-xl flex flex-col items-center justify-center md:px-24  py-6 gap-1">
            <p className="text-stone-800">Installed it ?</p> 
            <p className="text-stone-800">Saved your time ?</p> 
            <p className="text-stone-800">Fasten up your Workflow !</p> 
            <p className="text-stone-900 mt-4">Do consider buying me a coffee ☕</p>

            <Link href="https://www.buymeacoffee.com/shani_tiwari" target="_blank" 
              className="px-6 py-2 my-2 font-serif font-semibold text-foreground rounded-full bg-stone-200/80 border-2 border-stone-900/40 shadow-md shadow-accent/20  active:scale-98 hover:translate-y-1 transition-transform duration-200 "
            >
              Buy me a Coffee ☕
            </Link>
        </div>
    )
};