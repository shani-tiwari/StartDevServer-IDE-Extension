import Image from "next/image";
import PrimaryButton from "./PrimaryButton";

export default function Navbar() {
    return (
        <>
            <div className="fixed top-2 w-full z-99 px-2">
                <nav className="max-w-275 px-4 md:px-6 mt-2 py-2 bg-background backdrop-blur-xs flex justify-between mx-auto border border-stone-300 rounded-full">

                    <div className="hidden md:flex items-center justify-center">
                        <h1 className="relative text-xl text-foreground font-mono tracking-[-0.08rem]">
                            Start Dev Server <sup className="bg-red-100 absolute top-2 -right-11 tracking-tight">(sds)</sup>
                        </h1>
                    </div>
                    <div className="logo md:flex-1 flex items-center justify-center md:w-fit w-16">  
                        <Image src="/sds-logo.png" alt="Logo" width={80} height={80} />
                    </div>
                    <div className=" flex items-center justify-center">
                        <PrimaryButton label="Install" className="px-4 py-1"/>
                    </div>

                </nav>
            </div>
        </>
    )
}