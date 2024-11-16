import { AppBar } from "../components/AppBar"
import { CaseStudyCard } from "../components/CaseStudyCard"
import { ProjectForUs } from "../components/ProjectForUs"
import { Quote } from "../components/Quote"


//app 1
import image1 from '../assets/images/image.png'
import image2 from '../assets/images/image (1).png'
import image3 from '../assets/images/image (2).png'
import image4 from '../assets/images/image (3).png'
import image5 from '../assets/images/image (4).png'

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

                    <CaseStudyCard img1={image1} img2={image2} img3={image3} />
                    <CaseStudyCard img1={image6} img2={image7} img3={image8} />
                    <CaseStudyCard img1={image10} img2={image9} img3={image11} />
                 
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