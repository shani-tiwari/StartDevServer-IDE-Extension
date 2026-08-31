import Link from "next/link";

export default function Footer(){
  return (
    <footer className="w-full h-20 flex flex-col md:flex-row items-center justify-between my-6 font-sans">
        {/* copy right info  */}
        <div className="flex flex-col ">
            <p className="text-sm text-foreground font-semibold">
                2026 - Shani Tiwari
            </p>
            <p className="text-xs text-foreground ">
                All rights Preserved.
            </p>
        </div>
        {/* connect with me section  */}
        <div className="flex items-center gap-4">
            <Link className="hover:translate-y-1 transition-all duration-300" href='mailto:[shanitiwari2021@gmail.com]'>
                Email me
            </Link>
            <Link className="hover:translate-y-1 transition-all duration-300" href='https://twitter.com/shanidevelops'>
                Twitter
            </Link>
            <Link className="hover:translate-y-1 transition-all duration-300" href='https://github.com/shani-tiwari'>
                GitHub
            </Link>
        </div>
    </footer>
  )
}