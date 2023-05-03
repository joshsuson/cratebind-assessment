import Repository from "./Repository";

export default function Repositories({ repositories }) {
  return (
    <ul className="repository-list">
      {repositories.map((repo) => (
        <Repository key={repo.id} repository={repo} />
      ))}
    </ul>
  );
}
