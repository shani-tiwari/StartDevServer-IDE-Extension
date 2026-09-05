import Image from "next/image";
import Link from "next/link";

export default function Footer(){
  return (
    <footer className="max-w-275 w-full p-2 pb-8 pt-12 flex flex-col gap-4 md:flex-row items-center justify-between  font-sans border-t border-t-stone-300 ">

        <a href="https://twelve.tools" 
            target="_blank">
                <Image src="https://twelve.tools/badge2-dark.svg" alt="Featured on Twelve Tools" width="160" height="40"/>
        </a>
        <a href="https://www.producthunt.com/products/sds-start-dev-server?embed=true&amp;utm_source=badge-featured&amp;utm_medium=badge&amp;utm_campaign=badge-sds-start-dev-server" 
            target="_blank" 
            rel="noopener noreferrer">
             <Image alt="SDS - Start Dev Server - Run your React/Next project in a click with auto re-direct. | Product Hunt" width="200" height="54" src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=1238520&amp;theme=neutral&amp;t=1788269945200"/>
        </a>

        {/* copy right info  */}
        <div className="flex flex-col mt-4">
            <p className="text-sm text-foreground font-semibold">
                2026 - Shani Tiwari
            </p>
            <p className="text-xs text-foreground ">
                All rights Preserved.
            </p>
        </div>
        {/* connect with me section  */}
        <div className="flex h-full items-center justify-center gap-4">
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