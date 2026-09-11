function UserCard({ user }) {
  return (
    <div className="user-card">
      <h2>{user.name}</h2>

      <p>
        <strong>Email:</strong> {user.email}
      </p>

      <p>
        <strong>Phone:</strong> {user.phone}
      </p>

      <p>
        <strong>Website:</strong> {user.website}
      </p>

      <p>
        <strong>Company:</strong> {user.company.name}
      </p>
    </div>
  );
}

export default UserCard;