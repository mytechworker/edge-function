export const config = {
    runtime: "edge",
  };
  
  const apiURL = "https://jsonplaceholder.typicode.com/posts";
  
  // Fetch all posts and return a Response
  export default async function handler(req) {
    try {
      const response = await fetch(apiURL);
      const posts = await response.json();
  
      return new Response(JSON.stringify(posts), {
        status: 200,
        headers: {
          "Content-Type": "application/json",
        },
      });
    } catch (error) {
      return new Response(JSON.stringify({ message: "Failed to fetch posts" }), {
        status: 500,
        headers: {
          "Content-Type": "application/json",
        },
      });
    }
  }
  