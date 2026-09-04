"use client";
import Image from "next/image";
import { useState } from "react";
import { createPortal } from "react-dom";



interface PrimaryButtonProps {
    className?: string;
    label: string;
};

export default function PrimaryButton({ className = "", label}: PrimaryButtonProps) {

    const [showModal, setShowModal] = useState(false);
    const command = "sds-StartDevServer"

    const handleClick = async () => {
        await copyToClipboard(command);
        setShowModal(true);
    };

    return (
        <>
            <button
                type="button"
                onClick={handleClick}
                aria-label={label}
                className={`${className} group relative flex items-center justify-center gap-3 bg-stone-100/80 rounded-full text-sm cursor-pointer outline-1 outline-offset-1 outline-stone-400 shadow-md shadow-stone-400/20 active:scale-98 hover:scale-102 transition-all duration-200 `}
            >
                <span className="text-sm md:text-base tracking-tighter text-foreground font-mono font-medium transition-colors">
                    {label}
                </span>

                <span className="inline-flex items-center justify-center size-4 md:size-6 bg-accent text-foreground rounded-lg shadow-sm transition-transform duration-200 group-hover:scale-105 group-hover:rotate-6 group-active:scale-95">
                    <span className="text-sm font-semibold transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                        ↗
                    </span>
                </span>
            </button>

            {/* Modal Popup with Backdrop Blur */}
            { showModal && createPortal(
                <div
                    role="dialog"
                    aria-modal="true"
                    className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-900/40 backdrop-blur-md transition-opacity duration-300 animate-in fade-in"
                    onClick={(e) => {
                        if (e.target === e.currentTarget) setShowModal(false);
                    }}
                >
                    <div className="relative w-full max-w-md bg-stone-50/95 border border-stone-200/80 shadow-2xl rounded-3xl p-6 sm:p-8 text-center transform transition-all duration-300 scale-100 animate-in zoom-in-95">
                        {/* Close button */}
                        <button
                            type="button"
                            onClick={() => setShowModal(false)}
                            className="absolute top-8 right-4 text-stone-400 hover:text-stone-700 active:scale-90 transition-all p-1.5 rounded-full hover:bg-stone-200/60"
                            aria-label="Close modal"
                        >
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                            </svg> 
                        </button>
                        <Image src="/sds-logo.png" alt="Logo" width={80} height={80} />


                        {/* Top Icon Badge */}
                        <div className="mx-auto mb-4 flex h-12 w-12 text-2xl font-bold items-center justify-center rounded-2xl bg-accent/10 text-accent ring-4 ring-accent/20 transition-transform hover:scale-105">
                            ✓
                        </div>

                        {/* Title */}
                        <h2 className="text-xl font-bold tracking-tight text-stone-900 font-mono">
                            Extension Name Copied!
                        </h2>
                        {/* Description */}
                        <p className="mt-1 px-6 text-sm text-stone-600 leading-relaxed">
                            Just paste in search box & install.
                        </p>

                        {/* Command Display Snippet */}
                        <div className="mt-2 w-fit mx-auto flex items-center justify-between gap-2 px-4 py-2 bg-stone-400 outline outline-offset-2 outline-stone-400/90 rounded-lg font-mono text-xs sm:text-sm text-stone-800">
                            <span className="truncate select-all font-semibold tracking-tight">
                                {command} 
                            </span>
                            <span className="text-accent text-xs px-3 py-0.5 bg-foreground rounded-full ">copied ✓</span>
                        </div>


                        <div className="flex flex-col items-center justify-center gap-2 mt-8">
                            <p className="text-xs text-stone-500 ">Open your Favourite Editor...may not work</p>
                            <Editors/>
                        </div>

                    </div>
                </div>,
                document.body
            )}
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

    function Editors(){
        const editors = [
        {
            name: "VS Code",
            open: "vscode://",
        },
        {
            name: "AntiGravity",
            open: "antigravity://",
        },
        {
            name: "Cursor",
            open: "cursor://",
        },
    ];
    function openInEditor(link: string){
        // window.location.href = link
        window.location.assign(link);
    };
    return (
        <div className="flex gap-2 mt-2">
                {editors.map(editor => 
                    <button
                      key={editor.name}
                      onClick={() => openInEditor(editor.open)}
                      className="px-3 md:px-5 py-1.5 text-sm border border-stone-400/80 rounded-md bg-stone-100 cursor-pointer hover:bg-accent/40 active:scale-98 transition-all duration-300 "
                    >
                        {editor.name}
                    </button>
                )}
        </div>
    )
}