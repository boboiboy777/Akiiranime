"use client"
import React, {useState, useEffect } from "react";
import HeaderMenu from "../Utilities/HeaderMenu";
import AnimeList from "@/components/AnimeList";
import Pagination from "../Utilities/Pagination";
import { getAnimeNestedResponse } from "@/libs/api-service";

const page = () => {
    const [page, setPage] = useState(1)
    const [topAnime, setTopAnime] = useState([])
    const fetchData = async() => {
    
      const populerAnime = await getAnimeNestedResponse("recommendations/anime", `page=${page}`)
      setTopAnime(populerAnime)
    }

    useEffect(() =>  {
      fetchData()
    }, [page])

  return (
    <>
   <HeaderMenu title={`Rekomendasi #${page}`} />
   <AnimeList api={topAnime} />
   <Pagination
    page={page} 
    lastPage={topAnime.pagination?.last_visible_page} 
    setPage={setPage}
    />

   </>
  );
};

export default page