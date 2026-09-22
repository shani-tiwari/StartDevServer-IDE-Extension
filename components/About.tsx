
export default function About(){
    const steps = [
        "Add's a dedicated `▶ SDS` button in the bottom status bar of Editor.",
        "Click `▶ SDS` or (ctrl+shift+s) to start/stop your project's dev server.",
        "Auto-detect the development command from scripts to run the project.",
        "If project have child folders - SDS give options to choose any, to run.",
        "Auto re-direct↗  the user to the localhost URL in a new browser tab.",
        "Shows Info, Warning, and Error - messages to keep you updated.",
    ];

  return (
    <section className=" max-w-275 px-4 w-full mx-auto bg-black/1 py-10 rounded-xl md:my-8 flex flex-col font-sans border-2 border-stone-400/60">
        <div className="mx-auto">
            <h2 className="text-2xl text-foreground font-semibold mb-12 w-fit">Features...?</h2>
            <div className="flex flex-col justify-center gap-7 mx-auto w-fit">
                {
                    steps.map((step, i) => 
                        <div key={i} className={`flex items-center gap-4`}>
                            <span className="size-1.5 animate-pulse bg-stone-400  rounded-full  border border-stone-300/70"/>
                            <p className="text-sm md:text-lg text-foreground/80 font-medium tracking-wide">
                                {step}
                            </p>
                        </div>
                    )
                }
            </div>
        </div>
    </section>
  )
}