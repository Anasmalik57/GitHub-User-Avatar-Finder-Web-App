import axios from "axios";
import "./FetchData.css";
import { useState, useEffect } from "react";
import Search from "../Search/Search";
import useDebounce from "../../hooks/useDebounce.js"; // Import the custom hook

function FetchData() {
  const [username, setUsername] = useState("");
  const [users, setUsers] = useState([]);
  const debouncedUsername = useDebounce(username, 500); // 500ms debounce delay

  useEffect(() => {
    const fetchUsers = async () => {
      if (debouncedUsername) {
        try {
          const response = await axios.get(
            `https://api.github.com/search/users?q=${debouncedUsername}`
          );
          setUsers(response.data.items.slice(0, 30)); // Get first 30 users
        } catch (error) {
          console.error("Error fetching users:", error);
          setUsers([]); // Clear users if there's an error
        }
      } else {
        setUsers([]); // Clear users if input is empty
      }
    };

    fetchUsers();
  }, [debouncedUsername]);

  return (
    <div className="fetch-data">
      <Search
        username={username}
        setUsername={setUsername}
        users={users}
      />
    </div>
  );
}

export default FetchData;
