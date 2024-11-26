import { useNavigate } from "react-router-dom"
import { BottomBar } from "../components/BottomBar";

export const Submitted = () => {
    const navigate = useNavigate()
    const handleRedirect = () => {
        navigate("/");
    }
    return <div>
        <div className="h-screen bg-zinc-200 flex justify-center">
            <div className="flex flex-col justify-center">
                <div className="text-center font-medium text-3xl text-gray-600">
                    "Thank you for reaching out to us"
                </div>
                <div className="text-center my-2 text-gray-500">
                    We have received your message.
                </div>
                <div className="text-center text-gray-500">
                    We'll reach you out immediately!
                </div>

                <div className="flex justify-center my-7">
                    <button onClick={handleRedirect} className="w-auto h-auto py-3 px-6 rounded-full border border-black hover:bg-white hover:text-black text-white focus:outline-none bg-black">Back to Homepage</button>
                </div>

            </div>

        </div>
        <BottomBar></BottomBar>


    </div>
}