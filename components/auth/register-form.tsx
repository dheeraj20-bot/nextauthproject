'use client'
import { useForm } from "react-hook-form"
import { CardWrapper } from "./card-wrapper"
import { zodResolver } from "@hookform/resolvers/zod"
import {Form,FormControl,FormDescription,FormField,FormItem,FormLabel,FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { RegisterSchema } from "@/schemas"
import * as z from "zod";
import { EyeIcon, EyeOff } from "lucide-react"
import { useState, useTransition } from "react"
import { Button } from "../ui/button"
import { FormError } from "../form-error"
import { FormSuccess } from "../form-success"
import { login } from "@/actions/login"
import { register } from "@/actions/register"

export const RegisterForm = ()=>{
   const [isPending,startTransition] = useTransition()
   const [error,setError] = useState<string | undefined>("")
   const [success,setSuccess] = useState<string | undefined>("")

   const form = useForm<z.infer<typeof RegisterSchema>>({
    resolver: zodResolver(RegisterSchema),
    defaultValues:{
        name:"",
        email:"",
        password:""
    }
   })

   function onSubmit(values: z.infer<typeof RegisterSchema>) {
     setError("")
     setSuccess("")
       startTransition(()=>{
        register(values)
        .then((data)=>{
            setError(data?.error)
            setSuccess(data?.success)
        })
    })
        form.reset()
        console.log(values)
  }

    return (
       <CardWrapper
       headerLabel="Create an account"
       backButtonLabel="Already have an account?"
       backButtonHref="/login"
       showSocial
       >
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">

            <div className="space-y-4">
                 <FormField
                 control={form.control}
                 name="name"
                 render={({field})=>(
                    <FormItem>
                    <FormLabel>Name</FormLabel>
                    <FormControl>
                      <Input disabled={isPending}  placeholder="John Doe" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                 )}
                 />
                 <FormField
                 control={form.control}
                 name="email"
                 render={({field})=>(
                    <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input disabled={isPending}  placeholder="john.doe@example.com" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                 )}
                 />

                 <FormField
                 control={form.control}
                 name="password"

                 render={({field})=>(
                    <FormItem>
                    <FormLabel>Password</FormLabel>
                    <FormControl>
                     <div className="relative">
                     <Input  disabled={isPending}  type="password" placeholder="******" {...field} />
                      {/* <EyeIcon className="absolute right-3 top-2 text-gray-400 cursor-pointer" />
                      <EyeOff className="absolute right-3 top-2 text-gray-400 cursor-pointer" /> */}
                     </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                 )}
                 />
            </div>
              <FormError message={error} />
              <FormSuccess message={success} />
            <Button 
            disabled={isPending}
            type="submit" 
            className="w-full"
            >
            {isPending ? "Loading ..." : "Create an account"}
            
            </Button>

          </form>
        </Form>
       </CardWrapper>
    )
}