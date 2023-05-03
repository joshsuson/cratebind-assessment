export default function Repository({ repository }) {
  return (
    <li className="repository-card">
      <h3>{repository.name}</h3>
      <div className="repository-info">
        <span>⭐ {repository.stargazers_count}</span>
        <span>💻 {repository.language}</span>
      </div>
      <p>{repository.description}</p>
      <a href={repository.html_url}>See the Code ➡️</a>
    </li>
  );
}
