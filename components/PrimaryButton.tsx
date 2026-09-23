"use client";
import { Check, Copy } from "lucide-react";
import { useState } from "react";



export default function PrimaryButton({ className = ""}) {

    const [isCopied, setIsCopied] = useState(false);

    function copyCommand(){
        setIsCopied(true);
        copyToClipboard("sds-StartDevServer")
        setTimeout(() => {
            setIsCopied(false);
        }, 2000);
    };

    // const refBtn = useRef<HTMLButtonElement>(null);
    // const refLabel = useRef<HTMLSpanElement>(null);


    // useEffect(() => {
    //     if (window.innerWidth < 1024) return;
    //     const handleScroll = () => {
    //         if (window.scrollY > window.innerHeight * 0.2) {
    //             console.log(window.scrollY) 
    //             return;
    //         }
    //     };

    //     const el = refBtn.current;
    //     if (!el) return;

    //     const update = (e: MouseEvent) => {
    //         const rect = el.getBoundingClientRect();
    //         const x = (e.clientX - rect.left - rect.width / 4) / 30;
    //         const y = (e.clientY - rect.top - rect.height / 4) / 30;
    //         if (refLabel.current) {
    //             refLabel.current.style.transform =`rotateX(${y}deg) rotateY(${x}deg)`;
    //         }
    //     };

    //     window.addEventListener("scroll", handleScroll);

    //     document.body.addEventListener("mousemove", update);
    //     return () => {
    //         window.removeEventListener("scroll", handleScroll);
    //         document.body.removeEventListener("mousemove", update);
    //     }
    // }, []);
    

    return (
        <>
            <button
                onClick={() => copyCommand()}
                className={`${className} group relative flex items-center justify-center gap-3 bg-stone-100 rounded-t-4xl rounded-b-2xl text-sm cursor-pointer outline-2 outline-offset-2 outline-stone-500/80 shadow-md shadow-neutral-300/60 active:scale-98 hover:-translate-y-1 transition-all duration-200 overflow-hidden`}
            >
                {/* Command Display Snippet */}
                <div className="w-fit mx-auto flex items-center justify-between gap-3 font-mono text-xs text-stone-500">
                    <span>
                        sds-StartDevServer
                    </span>
                    <span className="text-stone-800/60 hover:text-stone-800/80 hover:scale-103 active:scale-90 transition-all duration-200">
                        {isCopied ? <Check size={18}/> : <Copy size={18}/>}
                    </span>
                </div>

            </button>
        </>
    );
};

    const copyToClipboard = async (text: string) => {
        try {
            if (navigator?.clipboard?.writeText) {
                await navigator.clipboard.writeText(text);
            } else {
                const textarea = document.createElement("textarea");
                textarea.value = text;
                textarea.style.position = "fixed";
                textarea.style.opacity = "0";
                document.body.appendChild(textarea);
                textarea.focus();
                textarea.select();
                document.execCommand("copy");
                document.body.removeChild(textarea);
            }
        } catch (err) {
            console.error("Failed to copy command:", err);
        }
    };
