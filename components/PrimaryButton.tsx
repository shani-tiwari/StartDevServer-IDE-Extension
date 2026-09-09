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
        }, 6000);
    };

    return (
        <>
            <button
                type="button"
                onClick={() => copyCommand()}
                className={`${className} group relative flex items-center justify-center gap-3 bg-stone-100 rounded-full text-sm cursor-pointer outline-1 outline-offset-1 outline-stone-400/80 shadow-md shadow-neutral-300/60 active:scale-98 hover:scale-102 transition-all duration-200 `}
            >
                {/* Command Display Snippet */}
                <div className="w-fit mx-auto flex items-center justify-between gap-2  font-mono text-xs sm:text-sm text-stone-800">
                    <span className="truncate tracking-tight">
                        sds-StartDevServer
                    </span>
                    <button onClick={() => copyCommand()} className="text-stone-800/60 hover:text-stone-800/80 hover:scale-103 transition-all duration-200">
                        {isCopied ? <Check size={18}/> : <Copy size={18}/>}
                    </button>
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
