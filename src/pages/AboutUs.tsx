import { AppBar } from "../components/AppBar"
import { CaseStudyCard } from "../components/CaseStudyCard"
import { ProjectForUs } from "../components/ProjectForUs"
import { Quote } from "../components/Quote"

import cat from '../assets/images/cat.jpg'
import gtr from '../assets/images/gtr.jpg'
import girl2 from '../assets/images/girl2.jpg'
import { BottomBar } from "../components/BottomBar"

export const AboutUs = () => {
    return <div className="bg-zinc-100">
        <div className="fixed top-0 left-0 w-full z-50 bg-white">

            <AppBar />
        </div>


        <div className="pt-16 px-8">
            <Quote />

            <div className="flex items-center flex-col  lg:flex-row  gap-10">



                <div className="flex gap-4 flex-col ">

                    <CaseStudyCard img={girl2}/>
                    <CaseStudyCard img={gtr}/>
                    <CaseStudyCard img={cat}/>
                    <CaseStudyCard img={girl2}/>
                </div>

                



            </div>

        </div>
        <div>
                    <ProjectForUs />
                </div>
        <div>
            <BottomBar />
        </div>

    </div>


}