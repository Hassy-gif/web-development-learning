import UserCard from "./UserCard";

function UsersList({ users }) {
  if (users.length === 0) {
    return <p className="no-users">No users found.</p>;
  }

  return (
    <div className="users-grid">
      {users.map((user) => (
        <UserCard key={user.id} user={user} />
      ))}
    </div>
  );
}

export default UsersList;