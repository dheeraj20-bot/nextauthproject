import { CheckCircle2Icon } from "lucide-react";


interface FormSuccessProps {
    message?: string
}

export const FormSuccess = ({ message }: FormSuccessProps) => {
     if(!message) return null

    return (
        <div className=" bg-emerald-500/15 p-3
         rounded-md flex items-center gap-x-4  text-emerald-500 text-sm">
            <CheckCircle2Icon className="w-5 h-5" />
            <p>{message}</p>
        </div>
    )

}