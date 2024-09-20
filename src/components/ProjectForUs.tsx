import { Button } from "./Button"

export const ProjectForUs = () => {

    return <div className={`px-[50px] bg-slate-800 relative h-full py-10 mt-4`}>
        <div className="flex items-center flex-col gap-1">

        <div className="font-semibold text-2xl text-white">
        Let's Discuss Your Project
        </div>
        <div className="font-light text-lg	font-mono text-white">
        Get free consultation to turn it into an amazing digital product.
        </div>

        <div>
            <Button bg={"bg-none"} border={"border-white"} text={"LET'S DISCUSS"} />
        </div>

        </div>
      

    </div>
}