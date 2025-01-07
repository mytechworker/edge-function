export const config = {
  runtime: "edge",
};

const apiURL = "https://jsonplaceholder.typicode.com/posts";

// fetch all posts
export default async function handler(req, res, next) {
  const response = await fetch(apiURL);
  const posts = await response.json();
  return new Response(JSON.stringify(posts), {
    status: 200,
    headers: {
      "Content-Type": "application/json",
    },
  });
}
