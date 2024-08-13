import "./Search.css";

function Search({ username, setUsername, users }) {
  return (
    <div className="searchWrapper">
      <input
        type="text"
        placeholder="Enter GitHub Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />

      <div className="userList">
        {users.length > 0 ? (
          users.map((user) => (
            <div key={user.id} className="userItem">
              <img
                src={user.avatar_url}
                alt={user.login}
                className="avatarImage"
              />
              <p>{user.login}</p>
            </div>
          ))
        ) : (
          <p className="para">No users or Search Box Empty</p>
        )}
      </div>
    </div>
  );
}

export default Search;
