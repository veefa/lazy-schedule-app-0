import React from "react";

const Home: React.FC = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 px-4">
            <h1 className="text-4xl font-bold mb-4 text-blue-700">Lazy Schedule App</h1>
            <p className="text-lg text-gray-700 mb-8 text-center max-w-xl">
                Welcome to the Lazy Schedule App! Effortlessly organize your tasks, set reminders, and manage your time without stress.
            </p>
            <div className="flex gap-4">
                <button className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition">
                    Get Started
                </button>
                <button className="px-6 py-2 bg-gray-200 text-gray-800 rounded hover:bg-gray-300 transition">
                    Learn More
                </button>
            </div>
        </div>
    );
};

export default Home;