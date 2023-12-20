import Image from "next/image";
import Link from "next/link";

const AnimeFest = ({ api }) => {
  return (
    <div className="grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-4 px-4">
      {api.data?.map((anime, index) => {
        return (
          <Link href={`/anime/${anime.mal_id}`} key={index} className="cursor-pointer text-on-primary hover:text-on-accent transition-all">
            <div className="relative">
              <Image src={anime.images?.webp.image_url} alt="..." width={350} height={350} className="w-full max-h-64 object-cover" />
              <h3 className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white text-center font-bold p-2">
                {anime.title}
              </h3>
            </div>
          </Link>
        );
      })}
    <style jsx>{
      `img {
        transition: .3s ease all;
        -webkit-transition: .3 ease all;
        -moz-transition: .3s ease all;
        -ms-transition: .3s ease all;
        -o-transition: .3s ease all;
    }
    
    img:hover{
        scale: 102%;
    }`
    }</style>
    </div>
  );
};

export default AnimeFest;
