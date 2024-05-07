import {  BsExclamationTriangle } from "react-icons/bs";


interface FormErrorProps {
    message?: string
}

export const FormError = ({ message }: FormErrorProps) => {
     if(!message) return null

    return (
        <div className=" bg-destructive/15 p-3
         rounded-md flex items-center gap-x-4 text-destructive text-sm">
            <BsExclamationTriangle className="w-5 h-5" />
            <p>{message}</p>
        </div>
    )

}