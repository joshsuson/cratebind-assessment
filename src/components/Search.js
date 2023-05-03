import { useRef } from "react";

export default function Search({ setUser, user, error, setError, setLoading }) {
  const inputRef = useRef();
  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    const response = await fetch(
      `https://api.github.com/users/${inputRef.current.value}`
    );
    const data = await response.json();
    if (response.status === 404) {
      if (user) setUser(null);
      setError(true);
      setLoading(false);
    } else {
      if (error) setError(null);
      const userData = {
        name: data.name,
        username: data.login,
        avatar: data.avatar_url,
        bio: data.bio,
      };
      setUser(userData);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        className="search"
        ref={inputRef}
        type="text"
        placeholder="Enter a Github username"
      />
      <button className="submit" type="submit">
        Search
      </button>
    </form>
  );
}
