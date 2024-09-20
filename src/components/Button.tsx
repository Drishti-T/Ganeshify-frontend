
// export const Button = ({text} : {text : string}) => {

//     return <div>

// <button className="py-4 px-10 text-md font-medium text-white focus:outline-none bg-black rounded-full border border-black hover:bg-white hover:text-black focus:z-10 ">{text}</button>
//     </div>
// }
import { Link } from 'react-router-dom';
export const Button = ({ text, bg = "bg-black", border = "border-black" }: { text: string; bg?: string; border?: string }) => {
    return <div>
        <Link to={'/form'}><button className={`w-52 py-4 text-md font-medium text-white focus:outline-none ${bg} rounded-full border ${border} hover:bg-white hover:text-black focus:z-10`}>{text}</button></Link>
        {/* url= localhost:5173/form */}
    </div>
}

