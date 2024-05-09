import { auth, signOut } from "@/auth";


const SetttingsPage = async () => {
    const session = await auth()
    console.log(session?.user.role);
    

    return (
       <div>
        {JSON.stringify(session)}
        <form 
        action={
            async () => {
                'use server';
                await signOut()
            }
        }
        >
            <button
            type="submit">Logout</button>
        </form>
       </div>
    );
};

export default SetttingsPage;
