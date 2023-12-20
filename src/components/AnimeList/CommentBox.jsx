import prisma from "@/libs/prisma";
import Image from "next/image";
import React from "react";
import { authUserSession } from "../../libs/auth-libs";

const CommentBox = async ({ anime_mal_id, user_image }) => {
  const comments = await prisma.comment.findMany({ where: { anime_mal_id, user_image } });
  const user = await authUserSession();

  return (
    <div className="grid grid-cols-2 gap-4 mb-4">
      {comments.map((comment) => {
        return (
          <div key={comment.id} className="bg-on-primary cmntbx flex items-center">
            <Image src={user?.image} className="px-4 w-20 rounded-full img-box" width={75} height={35} />
            <div className="flex flex-col">
              <p className="text-justify px-2 font-bold text-on-accent">{comment.username}</p>
              <p className="text-xl text-on-dark px-2">{comment.comment}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default CommentBox;
