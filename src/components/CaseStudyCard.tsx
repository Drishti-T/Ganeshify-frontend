import { AppCard } from "./AppCard";

export const CaseStudyCard = ({img} : {img:string}) => {

    return <div className="flex">

        <div className="border bg-white rounded-3xl px-3 py-3">
            <div className="flex  flex-col sm:flex-row gap-2">
                <AppCard img={img} basis={"md:basis-1/4"} />
                <AppCard img={img} basis={"md:basis-1/4"}/>
                <AppCard img={img} basis={"md:basis-1/4"}/>

            </div>


        </div>
    </div>


}