 import PrimaryButton from "@/components/PrimaryButton";

 
 export default function Header(){
    return (
      <header className="w-fit h-[56vh] md:h-[70vh] flex flex-col items-center justify-end "> 

        <div className="badge opacity-80 flex items-center justify-center gap-3 bg-stone-200/80 rounded-full px-8 py-1 mb-1 text-sm border border-stone-300">
          <div className="size-1.5 bg-accent rounded-md"></div>
          <p>400+ Downlodes</p>
        </div>

        <h1 className="w-[98%] md:w-2/3  text-center text-[22px] md:text-[44px] text-foreground md:leading-14.5 mb-2">
          Start your Development server & auto redirect to new browser tab with localhost url → in a click.
        </h1>

        <p className="w-[40%] text-xs md:text-base text-center mb-8 tracking-wide">Run your React/Next JS Projects in a click.</p>

        <PrimaryButton label='Install Extension' className="px-6 py-2 text-[18px] "/>

      </header>
    )
 }