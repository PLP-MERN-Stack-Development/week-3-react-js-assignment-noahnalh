import React, { useEffect, useState } from "react";

const PostList = () => {
  const [posts, setPosts] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const [limit] = useState(10);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const totalPages = Math.ceil(filtered.length / limit);

  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      setError("");
      try {
        const res = await fetch("https://jsonplaceholder.typicode.com/posts");
        if (!res.ok) throw new Error("Fetch failed");
        const data = await res.json();
        setPosts(data);
        setFiltered(data);
      } catch (err) {
        setError("Failed to load posts.");
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  useEffect(() => {
    const results = posts.filter((post) =>
      post.title.toLowerCase().includes(search.toLowerCase())
    );
    setFiltered(results);
    setPage(1);
  }, [search, posts]);

  const currentPosts = filtered.slice((page - 1) * limit, page * limit);

  return (
    <div className="mt-10">
      <h2 className="text-2xl font-bold mb-4">Posts</h2>

      <input
        type="text"
        placeholder="Search by title..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full mb-4 p-2 border rounded dark:bg-gray-700 dark:border-gray-600"
      />

      {loading && <p>Loading...</p>}
      {error && <p className="text-red-500">{error}</p>}

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {currentPosts.map((post) => (
          <div
            key={post.id}
            className="border rounded-lg p-4 bg-gray-50 dark:bg-gray-800 dark:border-gray-700"
          >
            <h4 className="font-semibold mb-2">{post.title}</h4>
            <p className="text-sm">{post.body}</p>
          </div>
        ))}
      </div>

      {!loading && !error && (
        <div className="mt-6 text-center flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            className="px-4 py-2 bg-blue-500 text-white rounded disabled:opacity-50"
            disabled={page === 1}
            onClick={() => setPage((p) => p - 1)}
          >
            Prev
          </button>
          <span className="text-sm">
            Page {page} of {totalPages}
          </span>
          <button
            className="px-4 py-2 bg-blue-500 text-white rounded disabled:opacity-50"
            disabled={page === totalPages}
            onClick={() => setPage((p) => p + 1)}
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
};

export default PostList;
