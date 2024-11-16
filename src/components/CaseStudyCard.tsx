import { AppCard } from "./AppCard";

export const CaseStudyCard = ({img1 , img2 , img3} : {img1:string , img2:string, img3:string}) => {

    return <div className="flex">

        <div className="border bg-white rounded-3xl px-3 py-3">
            <div className="flex  flex-col sm:flex-row gap-2">
                <AppCard img={img1} basis={"md:basis-1/4"} />
                <AppCard img={img2} basis={"md:basis-1/4"}/>
                <AppCard img={img3} basis={"md:basis-1/4"}/>

            </div>


        </div>
    </div>


}