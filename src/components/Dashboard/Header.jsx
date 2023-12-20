"use client"
import { ArrowUDownLeft } from "@phosphor-icons/react/dist/ssr"
import { useRouter } from "next/navigation"

const Header = ({ title }) => {
    const router = useRouter()

    const handleBack = (event) =>{
        event.preventDefault()
        router.back()
    }

    return(
     <div className="flex justify-between items-center mb-4">
        <span className="px-3 gap-2 text-on-primary hover:text-on-accent cursor-pointer" onClick={handleBack}><ArrowUDownLeft size={32} /></span>
        <h3 className="text-2xl text-on-primary font-bold">{title}</h3>
    </div>
    )
}

export default Header