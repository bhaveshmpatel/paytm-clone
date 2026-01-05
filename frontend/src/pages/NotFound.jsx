import { Button } from "../components/Button"
import { Heading } from "../components/Heading"
import { useNavigate } from "react-router-dom"

export const NotFound = () => {
    const navigate = useNavigate();
    return <div className="bg-slate-300 h-screen flex justify-center items-center">
        <div className="flex flex-col justify-center items-center bg-white rounded-lg w-80 p-4 text-center h-max">
            <Heading label={"404"} />
            <div className="text-slate-500 text-md pt-1 px-4 pb-4">
                Page not found
            </div>
            <div className="pt-4 w-full">
                 <Button onClick={() => {
                    navigate("/signin")
                 }} label={"Go to Home"} />
            </div>
        </div>
    </div>
}
