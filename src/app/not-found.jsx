"use client"
import { Prohibit } from "@phosphor-icons/react/dist/ssr"
import {useRouter} from "next/navigation"

const NotFound = () => {
    const router = useRouter()
    return (
        <div className="min-h-screen max-w-xl mx-auto flex justify-center items-center">
            <div className="flex justify-center items-center gap-4 flex-col">
            <Prohibit size={44} className="text-on-accent" />
                <h1 className="text-on-accent text-4xl font-bold">Not Found</h1>
                <button onClick={() => router.back()} className="text-on-primary hover:text-on-accent transition-all underline">
                    Kembali
                </button>
            </div>
        </div>
    )
}

export default NotFound