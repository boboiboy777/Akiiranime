"use client"
import React, {useState, useEffect } from "react";
import HeaderMenu from "../Utilities/HeaderMenu";
import NimeList from "@/components/NimeList";
import Pagination from "../Utilities/Pagination";
import Footer from "@/components/Dashboard/Footer";
import { getAnimeResponse } from "@/libs/api-service";

const page = () => {
    const [page, setPage] = useState(1)
    const [topAnime, setTopAnime] = useState([])
    const fetchData = async() => {

      const populerAnime = await getAnimeResponse("seasons/now", `page=${page}`)
      setTopAnime(populerAnime)
    }

    useEffect(() =>  {
      fetchData()
    }, [page])

  return (
    <>
   <HeaderMenu title={`This Seasons #${page}`} />
   <NimeList api={topAnime} />
   <Pagination
    page={page} 
    lastPage={topAnime.pagination?.last_visible_page} 
    setPage={setPage}
    />
    <Footer />
   </>
  );
};

export default page