import { AppBar } from "../components/AppBar"
import { BottomBar } from "../components/BottomBar"
import { ContactUsForm } from "../components/ContactUsForm"

export const Form = () => {
    return <div>
        <div>
            <AppBar />
            <div className="flex justify-center py-6">
                <ContactUsForm />
            </div>
            <BottomBar />
        </div>
    </div>
}