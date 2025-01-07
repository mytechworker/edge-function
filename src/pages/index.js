"use client";

import { useEffect, useState } from "react";

const Home = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const res = await fetch("/api/posts"); // Fetch posts
        const data = await res.json();
        setPosts(data); // Set posts
      } catch (error) {
        console.error("Failed to fetch posts:", error);
      }
    };

    fetchPosts(); // Call async function
  }, []);

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-bold text-center mb-8 uppercase">Posts</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts.map((post) => (
          <div
            key={post.id}
            className="border border-gray-200 p-4 rounded-lg bg-white"
          >
            <h3 className="font-semibold text-lg mb-2">{post.title}</h3>
            <p className="text-gray-700 mb-3 text-sm">{post.body}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
