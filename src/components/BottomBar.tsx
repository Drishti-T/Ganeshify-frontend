import { Link } from 'react-router-dom';
import instaIcon from '../assets/images/insta.png'
import linkdinIcon from '../assets/images/linkdin.png'
import emailIcon from '../assets/images/email.png'
import callIcon from '../assets/images/call.png'


export const BottomBar = () => {
    const items = ['App Develpoment', 'Game Development', 'Web Development', 'Solutions for startups'];
    return <div className="bg-black py-8 px-8 flex flex-col gap-6 md:flex-row sm:justify-between ">

        <div className="flex flex-col justify-center gap-4">
            <div className="text-white font-semibold text-2xl">

                Our Services
            </div>
            <div className="text-white font-light text-md">

                <ul>
                    {items.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))}
                </ul>
            </div>

        </div>
        <div className="flex flex-col gap-4">

            <div className="text-white font-semibold text-2xl">
                Our offices

            </div>
            <div className="text-white font-light text-sm">
            Office no. 382, 3rd floor unique square,<br></br>
            near Jahangirpura Bridge, katargam, Surat, Gujarat, India <br>
                </br>
                Pin code: 395004
            </div>

        </div>
        <div className="text-white font-semibold text-2xl flex flex-col gap-4">

            Follow us
            <div className="flex   items-center gap-3">
                <div className="w-[30px]">
                    <Link to="https://www.instagram.com/ganeshify.in/?igsh=MXgzbzg4M2lvbjByOQ%3D%3D" ><img src={instaIcon} className="w-full" /></Link>
                </div>
                <div className="w-[30px] ">
                    <Link to="https://www.linkedin.com/company/ganeshiify/" ><img src={linkdinIcon} className="w-full" /></Link>

                </div>
            </div>

        </div>

        <div className="text-white  flex flex-col gap-4">
            <div className="font-semibold text-2xl">
                Project Inquires

            </div>
            <div className='flex  gap-3'>
                <div className=" flex w-[30px] gap-2">
                    <img src={emailIcon} className="w-full" />
                </div>
                <a href="mailto:ganeshify6420@gmail.com">
                    <div className="text-sm">
                        ganeshify6420@gmail.com
                    </div>
                </a>
            </div>
            <div className='flex gap-3' >
                <div className=" flex flex-row w-[30px] gap-2">
                    <img src={callIcon} className="w-full" />

                </div>
                <div className="text-sm">
                    +91 7861003128
                </div>
            </div>
        </div>



    </div>
}
