import Header from "@/components/AnimeList/Header";
import AnimeList from "@/components/AnimeList";
import Head from "@/components/AnimeList/Head";
import {
  getAnimeNestedResponse,
  getAnimeResponse,
  reproduce,
} from "@/libs/api-service";
import Footer from "@/components/Dashboard/Footer";


const page = async() => {
  const topAnime = await getAnimeResponse("top/anime", "limit=5");

  const nime = await getAnimeResponse("seasons/now", "limit=5");

  const anime = await getAnimeResponse("seasons/upcoming", "limit=5");

  // let rekom = await getAnimeNestedResponse("recommendations/anime", "entry");
  // rekom = reproduce(rekom, 4);

  return (
    <>

      <section>
        <Header
          title="Popular"
          linkTitle="See All"
          linkHref="/populer"
        />
        <AnimeList api={topAnime} />
      </section>


      <section>
        <Header title="This Season" linkTitle="See All" linkHref="/news" />
        <AnimeList api={nime} />
      </section>

{/* 
      <section>
        <Header title="Rekomendasi" linkTitle="Lihat Semua" linkHref="/rekom" />
        <AnimeList api={rekom} />
      </section>    */}

      <section>
        <Header
          title="Upcoming"
          linkTitle="See All"
          linkHref="/upcoming"
        />
        <Head api={anime} />
      </section>
    <Footer />
    
    </>
)};

export default page;
