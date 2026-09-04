
export default function About(){
    const steps = [
        "Add's a dedicated SDS button in the bottom status bar.",
        "Click `SDS` or (ctrl+shift+s) to start/stop your project's dev server.",
        "Auto-detects your project's dev command & local URL.",
        "Auto-opens the local URL in a new browser tab for you.",
        "Shows info, warning, and error messages to keep you updated.",
    ];

  return (
    <section className=" max-w-275 w-full mx-auto bg-black/1 py-10 rounded-xl md:my-12 flex flex-col font-sans border-b-2 border-b-stone-300 pb-8">
        <div className="mx-auto">
            <h2 className="text-2xl text-foreground font-semibold mb-12 w-fit">Features...?</h2>
            <div className="flex flex-col justify-center gap-7  mx-auto w-fit">
                {
                    steps.map((step, i) => 
                        <div key={i} className={`flex items-center gap-4`}>
                            <span className="size-2.5 bg-yellow-400/80  rounded-full  border border-stone-300/70"/>
                            <p className="text-sm md:text-lg text-foreground font-medium tracking-wide">{step}</p>
                        </div>
                    )
                }
            </div>
        </div>
    </section>
  )
}