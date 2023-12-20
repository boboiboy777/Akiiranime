import Header from "@/components/AnimeList/Header"
import AnimeList from "@/components/AnimeList"
import { getAnimeResponse } from "@/libs/api-service"
import Footer from "@/components/Dashboard/Footer"
  const page = async ({params}) => {
    const {keyword} = params
    const decodeKeyword = decodeURI(keyword)

  const searchAnime = await getAnimeResponse("anime", `q=${decodeKeyword}`)

  return (
     <>
    {/* populer */}
   
      <section>
        <Header title={`Search Anime ${decodeKeyword}...`} />
        <AnimeList api={searchAnime} />
      </section>
      <Footer />
   </>
  )
}

export default page