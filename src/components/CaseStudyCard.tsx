import { AppCard } from "./AppCard";


// export const CaseStudyCard = () => {


//     return <div className="flex">


//         <div className="border bg-white rounded-3xl px-3 py-3">
//             <div className="flex flex-col gap-6 lg:grid lg:grid-cols-2 lg:grid-rows-2 xl:flex xl:flex-row xl:gap-4">
//                 <AppCard image={cat} aspect={"square"} />
//                 <AppCard image={gtr} aspect={"rectangle"}/>
//                 <AppCard image={girl2} aspect={"rectangle"}/>
//             </div>
//         </div>

//     </div>
// }

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