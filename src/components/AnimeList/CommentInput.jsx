"use client"

import { useRouter } from "next/navigation";
import { useState } from "react";

const CommentInput = ({ anime_mal_id, user_email, username, anime_title, user_image }) => {
  const [comment, setComment] = useState("");
  const [isCreated, setIsCreated] = useState(false);
  const [isComment, setIsComment] = useState(false);

  const router = useRouter();

  const handleInput = (event) => {
    setComment(event.target.value);
  };

  const handleButton = async (event) => {
    event.preventDefault();

    if (comment.trim().length < 3) {
      setIsComment(true);
      setComment("");
      setTimeout(() => {
        setIsComment(false);
      }, 3000);
      return;
    }

    const data = { anime_mal_id, user_email, comment, username, anime_title, user_image };

    const response = await fetch("/api/v1/comment", {
      method: "POST",
      body: JSON.stringify(data),
    });

    const postComment = await response.json();
    if (postComment.isCreated) {
      setIsCreated(true);
      setIsComment(false);
      setComment("");
      router.refresh();
      setTimeout(() => {
        setIsCreated(false);
      }, 3000);
    } else {
      setIsComment(true);
      setTimeout(() => {
        setIsComment(false);
      }, 3000);
    }
  };

  const handleTextareaKeyDown = (event) => {
    if (event.key === "Enter" && !event.shiftKey) {
      // Prevent the default behavior of inserting a newline
      event.preventDefault();
      // Manually call the handleButton function
      handleButton(event);
    }
  };

  return (
    <div className="flex flex-col gap-2">
      {isCreated && (
        <p className="text-on-primary">Comment Sent Successfully...</p>
      )}
      {isComment && (
        <p className="text-on-primary">
          Failed Comments With a Minimum Of 3 Letters
        </p>
      )}


      <textarea
        onChange={handleInput}
        onKeyDown={handleTextareaKeyDown}
        value={comment}
        placeholder="Comments here must be at least 3 letters.."
        className="text-xl p-2 w-25 h-15 txarea"
      />
      <button
        onClick={handleButton}
        className="btn-cs w-24 bg-on-accent px-4 gap-2"
      >
        Send
      </button>
    </div>
  );
};

export default CommentInput;
