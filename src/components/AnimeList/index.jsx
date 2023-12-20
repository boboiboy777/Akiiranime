import Image from "next/image";
import Link from "next/link";

const AnimeList = ({ api }) => {
  return (
    <section>
      <div className="flex justify-center items-center">
        <div className="grid md:grid-cols-5 sm:grid-cols-4 px-4 grid-cols-2 gap-4">
          {api.data?.map((anime, index) => {
            return (
              <Link
                href={`/anime/${anime.mal_id}`}
                key={index}
                className="cursor-pointer text-on-primary transition-all"
              >
                <div className="flex flex-col items-center">
                  <div className="relative">
                    <Image
                      src={anime.images?.webp.image_url}
                      alt="..."
                      width={300}
                      height={300}
                      className="max-h-80 object-cover dur"
                    />
                    <h3 className="font-bold md:text-x text-md p-2 text-center absolute bg-on-asp bottom-0 bg-opacity-80 text-on-primary w-full" 
                    style={{borderRadius: '8px'}}>
                      {anime.title} 
                    </h3>
                    <h3 className="w-20 text-md md-text-x left-1 flex flex-cols absolute justify-center top-6 items-center bg-on-accent" style={{borderRadius: '10px'}}>
                    Eps {anime.episodes}
                    </h3>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default AnimeList;
