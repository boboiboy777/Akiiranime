import Link from "next/link"
import { authUserSession } from "@/libs/auth-libs"

const UserButton = async() => {
    const user = await authUserSession();
    const actionLabel = user ? "Sign Out " : "Sign In"
    const actionURL = user ? "/api/auth/signout" : "/api/auth/signin"
    return(
        <div className="flex justify-between gap-2">
         { 
         user ? <Link href="/users/dashboard" className="hover:text-on-dark py-2 text-on-primary">Dashboard</Link> : null
         }
        <Link href={actionURL}
         className="bg-on-dark text-on-primary hover:bg-on-primary hover:text-on-accent px-12 inline-block py-2 kl">
            {actionLabel}</Link>
        </div>
    )
}

export default UserButton