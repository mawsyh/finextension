import './App.css'
import { useEffect, useState } from "react";
import LoginPage from "./LoginPage";
import { Profile } from "./Profile";
import axios from "axios";

function App() {

  const [authorized, setAuthorized] = useState<boolean>(false);
  const [username, setUsername] = useState<string>("");

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await axios.get("http://localhost:3000/me");
        setUsername(res.data?.username ?? "");
        setAuthorized(true);
      } catch (e) {
        console.log(e);
      }
    };
    fetchUser();
  }, []);

  return (
    <div className='w-72'>
      {authorized ? (
        <Profile username={username} logout={() => setAuthorized(false)} />
      ) : (
        <LoginPage authorize={() => setAuthorized(true)} />
      )}
    </div>
  )
}

export default App
