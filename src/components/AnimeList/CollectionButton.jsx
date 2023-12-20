"use client"

import React, { useState } from "react"

const CollectionButton = ({ anime_mal_id, user_email, anime_image, anime_title }) => {

    const [isCreated, setIsCreated] = useState(false)

    const handleCollection = async(event) => {
        event.preventDefault

        const data = { anime_mal_id, user_email, anime_image, anime_title }

        const response = await fetch("/api/v1/collection", {
            method: "POST",
            body: JSON.stringify(data)
        })
        const collection = await response.json()
        if (collection.status == 200) {
            setIsCreated(true)
        } 
        return
    }
    return(
        <>
        {
        isCreated 
         ?
         <p className="text-on-primary px-5">Success Add Collection</p>
         :
        <button onClick={handleCollection} 
        className=" text-md md-text-x px-5 text-on-primary hover:text-on-accent font-bold justify-center items-center" 
        style={{borderRadius: '8px'}}
        >
            Add Collection
        </button> 
        }
        </>
    )
}

export default CollectionButton