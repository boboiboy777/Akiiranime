"use client"

import { useState } from 'react';
import { getAnimeResponse } from "@/libs/api-service";
import Image from "next/image";
import Footer from "@/components/Dashboard/Footer";
import Header from "@/components/Dashboard/Header";

const AnimeDetails = async({ params: {id}}) => {
  const anime = await getAnimeResponse(`anime/${id}`);
  const [isSynopsisExpanded, setIsSynopsisExpanded] = useState(false);

  const handleToggleSynopsis = () => {
    setIsSynopsisExpanded(!isSynopsisExpanded);
  };

  return (
    <>
      <Header />
      <div className="pt-4 px-4 flex sm:flex-nowrap flex-wrap justify-center items-center gap-2 text-on-primary">
        <Image
          src={anime.data.images.webp.image_url}
          alt={anime.data.images.jpg.image_url}
          width={250}
          height={200}
          className="rounded object-cover"
        />
      </div>

      <div className="pt-4 px-4">
        <h3 className="text-2xl font-bold text-on-primary">
          {anime.data.title} - {anime.data.year}
        </h3>
      </div>

      <div className="pt-4 px-4 gap-2 py-2 flex text-center gap-2 text-on-primary">
        {/* ... */}
      </div>
      
      <div className="pt-4 px-4">
        <h3 
          className="text-on-accent items-center font-bold text-2xl px-4 gap-4"
          style={{borderRadius: '15px', textAlign: 'center'}}
        >
          Sinopsis
        </h3>
        <p className={`text-on-primary px-4 text-center text-xl ${isSynopsisExpanded ? 'text-justify' : 'overflow-hidden'}`}>
          {anime.data.synopsis}
        </p>
        <button
          onClick={handleToggleSynopsis}
          className="text-primary underline cursor-pointer mt-2 block text-center"
        >
          {isSynopsisExpanded ? 'Read Less' : 'Read More'}
        </button>
      </div>
      
      <Footer />
    </>
  );
};


export default AnimeDetails;
