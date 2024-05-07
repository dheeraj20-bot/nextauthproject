import Link from "next/link";


const SettingsPage = () => {
    return (
        <div>
            <h1 className=" text-4xl font-bold">Settings Page</h1>
            <p className="text-gray-600">Welcome to the dashboard!</p>
            <Link
            href={"/dashboard"}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
                Go to Dashboard !
            </Link>
        </div>
    );
};

export default SettingsPage;
