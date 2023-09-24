import { useRef, useState } from "react";
import { Loader } from "./assets/loader";
import axios from "axios";

type LoginPageProps = {
  authorize: (input: string) => void;
};

const LoginPage = ({authorize}: LoginPageProps) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLoggingIn, setIsLoggingIn] = useState(false);
  const usernameRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  const buyAccount = () => {
    window.open("buyacout")
  }
  
  const canProcced = () => {
    if(!username && usernameRef.current) {
      usernameRef.current.focus();
      return false;
    }
    else if(!password && passwordRef.current) {
      passwordRef.current.focus();
      return false;
    }
    return true;
  }

  const handleLogin = async () => {
    try {
        if(!canProcced()) return;
        setIsLoggingIn(true);
        const res = await axios.post("http://localhost:3000/login", {
          username,
          password
        })
        console.log("res", res.data);
        authorize("sth")
    } catch (error) {
        console.log(error);
        
    } finally {
        setIsLoggingIn(false);
    }

  };

  return (
    <div className="flex flex-col gap-2 justify-center">
      <h1 className="text-2xl font-bold">Finantial Assistant</h1>
      <input
        ref={usernameRef}
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && handleLogin()}
        className="w-full border border-gray-300 rounded-md px-4 py-2"
      />
      <input
        ref={passwordRef}
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && handleLogin()}
        className="w-full border border-gray-300 rounded-md px-4 py-2"
      />
      <button
        disabled={isLoggingIn}
        onClick={handleLogin}
        className={`w-full  duration-150 transition-all text-white px-4 py-2 rounded-md ${isLoggingIn ? "bg-blue-500" : "bg-blue-600"}`}
      >
        {isLoggingIn ? (
          <div className="flex gap-2 justify-center items-center">
            <Loader />
            <span className="text-xs">Loading</span>
          </div>
        ) : (
          "Login"
        )}
      </button>
      <button
        onClick={buyAccount}
        className="w-full bg-purple-700 text-white px-4 py-2 rounded-md"
      >
        Buy account
      </button>
    </div>
  );
};

export default LoginPage;
