"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

const CreatePost = () => {
  const [title, setTitle] = useState("");
  const router = useRouter();
  const handleSumbit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await fetch("http://127.0.0.1:8090/api/collections/posts/records", {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify({ title }),
    });
    setTitle("");
    router.refresh();
  };
  return (
    <form onSubmit={handleSumbit}>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      ></input>
      <button type="submit">Create Post</button>
    </form>
  );
};

export default CreatePost;
