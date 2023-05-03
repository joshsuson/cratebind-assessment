import { useState, useEffect } from "react";
import "./App.css";
import Search from "./components/Search";
import User from "./components/User";
import Repositories from "./components/Repositories";
import Loading from "./components/Loading";

function App() {
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);
  const [repositories, setRepositories] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (user) {
      getRepositories();
    }
    async function getRepositories() {
      const response = await fetch(
        `https://api.github.com/users/${user.username}/repos`
      );
      const data = await response.json();
      const filteredRepositories = data.filter((repo) => !repo.fork);
      const sortedRepositories = filteredRepositories.sort(
        (a, b) => b.stargazers_count - a.stargazers_count
      );
      setRepositories(sortedRepositories);
      setLoading(false);
    }
  }, [user]);

  return (
    <div className="container">
      <div className="header-text-container">
        <h2>CrateBind Assessment</h2>
        <h1>Github User Search</h1>
      </div>
      <Search
        setUser={setUser}
        user={user}
        error={error}
        setError={setError}
        setLoading={setLoading}
      />
      {loading && <Loading />}
      {!loading && user && (
        <>
          <User user={user} />
          <Repositories repositories={repositories} />
        </>
      )}
      {!loading && error && (
        <p className="error-text">
          It looks like that username couldn't be found. Please try another.
        </p>
      )}
      {!loading && !user && !error && (
        <p className="error-text">
          Please enter a username to search for a Github user.
        </p>
      )}
    </div>
  );
}

export default App;
