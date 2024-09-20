import { Button } from "./Button";
import logo2 from '../assets/images/logo2.png'
import { useLocation } from 'react-router-dom';

export const AppBar = () => {

    const location = useLocation();
    return <div className="border-b flex justify-between px-2 py-3 bg-white">
        <div className="flex justify-center">
            <div className="flex flex-col justify-center m">
                <div className="w-[65px] h-[65px] pt-2 ml-1.5	">

                <img src={logo2} className="w-fit  object-cover"/>
                </div>
            </div>

        </div>


        {location.pathname !== '/form' && (
                <div className="flex justify-center">
                    <Button text={"CONTACT US"} />
                </div>
            )}

    </div>
}

