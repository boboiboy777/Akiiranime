import Header from "@/components/Dashboard/Header"
import { authUserSession } from "@/libs/auth-libs"
import prisma from "@/libs/prisma"
import Image from "next/image"
import Link from "next/link"

const page = async() => {
    const user = await authUserSession()
    const collection = await prisma.collection.findMany({
        where: {user_email: user.email}
    })
console.log(collection)
    return(
        <section className="mt-4 px-4 w-full">
            <Header title={"My Collection"}/>
            <div className="grid md:grid-cols-5 sm:grid-cols-4 px-4 grid-cols-2 gap-4">
                {collection.map((collect, index) => {
                    return(
                         <Link key={index} href={`/anime/${collect.anime_mal_id}`} className="relative">
                <Image src={collect.anime_image} alt="" width={250} height={250} className="w-full"/>
                <div className="absolute flex items-center justify-center bottom-0 w-full bg-on-accent h-16">
                    <h5 className="text-xl text-center">{collect.anime_title}</h5>
                </div>
             </Link>
           
                    );
                })}
             </div>
        </section>
    )
}

export default page