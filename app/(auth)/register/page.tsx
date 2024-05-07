import { RegisterForm } from "@/components/auth/register-form";
import { Metadata } from "next";


export const metadata: Metadata = {
    title: "Register     Page - Next Auth",
    description: "Next Auth implenmenataion",
};

const RegisterPage = () => {
    return (
       <RegisterForm/>
    );
};

export default RegisterPage;
