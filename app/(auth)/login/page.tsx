import { LoginForm } from "@/components/auth/login-form";
import { Metadata } from "next";


export const metadata: Metadata = {
    title: "Login Page - Next Auth",
    description: "Next Auth implenmenataion",
};

const LoginPage = () => {
    return (
       <LoginForm/>
    );
};

export default LoginPage;
