import Footer from "@/components/Dashboard/Foot"
import { authUserSession } from "@/libs/auth-libs"
import Image from "next/image"
import Link from "next/link"

const Page = async() => {
    const user = await authUserSession()

    return (
        <div className="mt-8 text-on-primary flex flex-col justify-center items-center">
            <h5 className="text-2xl font-bold">Welcome, {user?.name}</h5>
            <Image src={user?.image} alt="..." width={150} height={150} style={{borderRadius: '50px'}} />
            <div className="flex flex-wrap gap-4 py-8">
                <Link 
                    href="/users/dashboard/collection"
                    className="bg-on-accent text-on-primary hover:bg-on-primary hover:text-on-accent  font-bold px-4 py-3 text-xl" style={{borderRadius: '15px'}}
                >
                    My Collection
                </Link>
                <Link 
                    href="/users/dashboard/comment"
                    className="bg-on-accent text-on-primary hover:bg-on-primary hover:text-on-accent font-bold px-4 py-3 text-xl" style={{borderRadius: '15px'}}
                >
                    My Comment
                </Link>
            </div>
            <Footer />
        </div>
    )
}

export default Page