
export default function About(){
    const steps = [
        "Add's a dedicated SDS button in the bottom status bar.",
        "Click `SDS` or (ctrl+shift+s) to start/stop your project's dev server.",
        "Auto-detects your project's dev command & local URL.",
        "Auto-opens the local URL in a new browser tab for you.",
        "Shows info, warning, and error messages to keep you updated.",
    ];

  return (
    <section className=" w-[90%] mx-auto bg-black/1 py-10 rounded-xl md:my-12 flex flex-col font-sans">
        <div className="mx-auto">
            <h2 className="text-2xl text-foreground font-semibold mb-12 w-fit">Features...?</h2>
            <div className="flex flex-col justify-center gap-6  mx-auto w-fit">
                {
                    steps.map((step, i) => 
                        <div key={i} className={`flex items-center gap-4`}>
                            <span className="text-lg text-foreground font-semibold bg-stone-200/80 rounded-md px-2 py-1 border border-stone-300/80">
                                🔷
                            </span>
                            <p className="text-sm md:text-lg text-foreground font-medium tracking-wide">{step}</p>
                        </div>
                    )
                }
            </div>
        </div>
    </section>
  )
}