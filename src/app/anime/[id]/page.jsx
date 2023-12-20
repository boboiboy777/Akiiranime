import { getAnimeResponse } from "@/libs/api-service";
import Image from "next/image";
import VideoPlayer from "@/app/Utilities/VideoPlayer";
import Footer from "@/components/Dashboard/Footer";
import CollectionButton from "@/components/AnimeList/CollectionButton";
import { authUserSession } from "@/libs/auth-libs";
import prisma from "@/libs/prisma";
import CommentInput from "@/components/AnimeList/CommentInput";
import CommentBox from "@/components/AnimeList/CommentBox";

const page = async ({ params: { id } }) => {
  const anime = await getAnimeResponse(`anime/${id}`);
  const user = await authUserSession()
  const collection = await prisma.collection.findFirst({
    where: { user_email: user?.email, anime_mal_id: id }
  })

  return (
    <>
    {!collection && user && <CollectionButton anime_mal_id={id} user_email={user?.email} 
    anime_image={anime.data.images.webp.image_url} anime_title={anime.data.title} />}
     
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
        <h3 className="text-2xl font-bold text-on-primary text-center">
          {anime.data.title} - {anime.data.year}
        </h3>
      </div>

      <div
        className="pt-4 px-4 gap-2 py-2 flex text-center gap-2 text-on-primary">
        <div className="w-36 flex flex-col justify-center items-center rounded bg-on-asp" style={{borderRadius: '15px'}}>
           <h3>Top {anime.data.rank}</h3>
         </div>
        <div className="w-36 flex flex-col justify-center items-center rounded bg-on-asp" style={{borderRadius: '15px'}}>
           <h3>Score {anime.data.score}</h3>
         </div>
        <div className="w-36 flex flex-col justify-center items-center rounded bg-on-asp" style={{borderRadius: '15px'}}>
           <h3>Episode {anime.data.episodes}</h3>
         </div>
        <div className="w-36 flex flex-col justify-center items-center rounded bg-on-asp" style={{borderRadius: '15px'}}>
           <h3>{anime.data.duration}</h3>
         </div>
      </div>
      <div>
      <h3 className="text-2xl font-bold text-on-primary text-center">Synopsis</h3>
        <p className="text-on-primary px-4 text-center text-justify text-xl">{anime.data.synopsis}</p>
      </div>
      <div className="px-2 py-2">
        <h3 className="text-on-primary text-center mb-2 text-2xl underline">Comment</h3>
        <CommentBox anime_mal_id={id} user_image={user?.image}/>
        {
         user && <CommentInput anime_mal_id={id} user_email={user?.email} username={user?.name} anime_title={anime.data.title} user_image={user?.image}/>
        }
      </div>

      <div>
        <Footer />
      </div>

      <div>
        <VideoPlayer />
      </div>
    </>
  );
};

export default page;