export default function User({ user }) {
  return (
    <div className="user-card">
      <img className="user-image" src={user.avatar} alt="avatar" />
      <div className="user-content">
        <h2>{user.name}</h2>
        <h3>{user.username}</h3>
        <p>{user.bio}</p>
      </div>
    </div>
  );
}
