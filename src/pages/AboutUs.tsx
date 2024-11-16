import { AppBar } from "../components/AppBar"
import { CaseStudyCard } from "../components/CaseStudyCard"
import { ProjectForUs } from "../components/ProjectForUs"
import { Quote } from "../components/Quote"


//app 1
import image1 from '../assets/images/image.png'
import image2 from '../assets/images/image (1).png'
import image3 from '../assets/images/image (2).png'

//app2
import image6 from '../assets/images/image (5).png'
import image7 from '../assets/images/image (6).png'
import image8 from '../assets/images/image (7).png'

//app3
import image9 from '../assets/images/image (8).png'
import image10 from '../assets/images/image (9).png'
import image11 from '../assets/images/image (10).png'

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

                    <CaseStudyCard images={[image1 , image2, image3]} />
                    <CaseStudyCard images={[image6 , image7, image8]} />
                    <CaseStudyCard images={[image10 , image11 , image9]} />                

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