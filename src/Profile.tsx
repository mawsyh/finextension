type ProfilePageProps = {
    username: string;
    logout: () => void;
};

export const Profile = ({username, logout}: ProfilePageProps) => {
    
    return (
        <div className="flex flex-col gap-2 justify-center">
            <div className="text-xl mb-4">
                Welcome, {username}!
            </div>

            <button
                className="w-full bg-orange-700 text-white px-4 py-2 rounded-md"
            >
                Can't connect to server
            </button>

            <button
                className="w-full bg-orange-700 text-white px-4 py-2 rounded-md"
            >
                Can't connect to Pocket option
            </button>

            <button
                onClick={logout}
                className="w-full bg-red-700 text-white px-4 py-2 rounded-md"
            >
                Logout
            </button>
        </div>
    )
}