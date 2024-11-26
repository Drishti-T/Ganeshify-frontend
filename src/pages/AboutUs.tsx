import { AppBar } from "../components/AppBar"
import { CaseStudyCard } from "../components/CaseStudyCard"
import { ProjectForUs } from "../components/ProjectForUs"
import { Quote } from "../components/Quote"


//E-com-1
import image1 from '../assets/images/1.jpg'
import image2 from '../assets/images/2.jpg'
import image3 from '../assets/images/3.jpg'

//E-Com-4
import image4 from '../assets/images/4.jpg'
import image5 from '../assets/images/5.jpg'
import image6 from '../assets/images/6.jpg'

//Food-Order-App-2
import image7 from '../assets/images/7.jpg'
import image8 from '../assets/images/8.jpg'
import image9 from '../assets/images/9.jpg'


//Rent-App-3
import image10 from '../assets/images/10.jpg'
import image11 from '../assets/images/11.jpg'
import image12 from '../assets/images/12.jpg'

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
                    <CaseStudyCard images={[image4 , image5, image6]} />
                    <CaseStudyCard images={[image7 , image8, image9]} />
                    <CaseStudyCard images={[image10 , image11 , image12]} />                

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