import Header from "@/components/Dashboard/Header";
import { authUserSession } from "@/libs/auth-libs";
import prisma from "@/libs/prisma";
import Link from "next/link";
import React from "react";
import Image from "next/image";

const page = async () => {
  const user = await authUserSession();
  const comments = await prisma.comment.findMany({ where: { user_email: user.user_email, user_image: user.user_image } });

  return (
    <section className="mt-4 px-4 w-full">
      <Header title={"My Comment"} />
      <div className="grid grid-cols-1 px-4 py-8 gap-8 ">
        {comments.map((comment) => {
          return (
            <Link key={comment.id} href={`/anime/${comment.anime_mal_id}`}
              className="bg-on-primary text-dark p-4 flex justify-between items-center">
              <div className="flex items-center">
                <Image src={user?.image} className="px-4 w-20 rounded-full img-box" width={75} height={35} />
                <div className="flex flex-col">
                  <p className="text-justify px-2 font-bold text-on-accent">{comment.username}</p>
                  <p className="text-xl px-2 italic">{comment.comment}</p>
                </div>
                <div className="title-box">
                    <p className="verdana text-on-accent">{comment.anime_title}</p>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
};

export default page;
