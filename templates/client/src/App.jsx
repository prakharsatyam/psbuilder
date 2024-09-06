import { useState } from 'react';
import Data from './components/Data';
import { FaLinkedin, FaGithub, FaRegUser } from 'react-icons/fa';

export default function App() {
  const [isDarkMode, setIsDarkMode] = useState(true);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className={`flex flex-col min-h-screen ${isDarkMode ? 'bg-black text-gray-200' : 'bg-gray-100 text-gray-800'}`}>
      <section className={`py-4 text-center relative ${isDarkMode ? 'bg-black' : 'bg-gray-200'}`}>
        <button 
          onClick={toggleTheme} 
          className={`absolute top-4 right-4 px-3 py-1 rounded-full focus:outline-none ${isDarkMode ? 'bg-gray-700 text-gray-200 hover:bg-gray-600' : 'bg-gray-200 text-gray-800 hover:bg-gray-300'}`}
        >
          {isDarkMode ? '🌞' : '🌙'}
        </button>
        <p className={`text-md ${isDarkMode ? 'text-gray-300' : 'text-gray-800'}`}>
          Built by <strong className={`${isDarkMode ? 'text-blue-300' : 'text-blue-600'}`}>Prakhar</strong>
        </p>
        <div className="flex justify-center mt-2 space-x-4">
          <a href="https://www.linkedin.com/in/prakhar-satyam-02a972157/" target="_blank" rel="noopener noreferrer" className={`${isDarkMode ? 'text-gray-200' : 'text-gray-800'} hover:text-blue-400`}>
            <FaLinkedin size={24} />
          </a>
          <a href="https://github.com/prakharsatyam" target="_blank" rel="noopener noreferrer" className={`${isDarkMode ? 'text-gray-200' : 'text-gray-800'} hover:text-blue-500`}>
            <FaGithub size={24} />
          </a>
          <a href="https://blog-livid-alpha.vercel.app/" target="_blank" rel="noopener noreferrer" className={`${isDarkMode ? 'text-gray-200' : 'text-gray-800'} hover:text-blue-500`}>
            <FaRegUser size={24} />
          </a>
        </div>
      </section>

      <header className="text-center mb-12 flex-grow flex items-center justify-center">
        <div>
          <h1 className="text-4xl font-extrabold mb-4">
            Welcome to <span className={isDarkMode ? 'text-blue-300' : 'text-blue-600'}>psbuilder</span>
          </h1>
          <p className="text-lg">
            The ultimate build tool for creating a full stack MERN app. 
            <span className="inline-block animate-pulse ml-2"> 🚀</span> Managing CORS can be a pain, let me help! 😉
          </p>
        </div>
      </header>

      <main className={`flex-grow ${isDarkMode ? 'bg-slate-900' : 'bg-gray-50'} shadow-lg rounded-lg p-8 w-full max-w-4xl mx-auto mb-12`}>
        <h2 className="text-2xl font-semibold mb-4">
          Get Started with psbuilder
        </h2>
        <Data />
      </main>

      <footer className={`py-4 px-4 w-full ${isDarkMode ? 'bg-black text-gray-200' : 'bg-gray-200 text-black'}`}>
  <div className="flex justify-between max-w-4xl mx-auto">
    <div className="text-sm">
      <p className="font-semibold mb-1">Frontend Tools:</p>
      <ul className="list-none">
        <li><a href="https://reactjs.org/" target="_blank" rel="noopener noreferrer" className={`hover:text-blue-500 ${isDarkMode ? 'text-gray-200' : 'text-black'}`}>React</a></li>
        <li><a href="https://tanstack.com/query" target="_blank" rel="noopener noreferrer" className={`hover:text-blue-500 ${isDarkMode ? 'text-gray-200' : 'text-black'}`}>TanStack Query</a></li>
        <li><a href="https://axios-http.com/" target="_blank" rel="noopener noreferrer" className={`hover:text-blue-500 ${isDarkMode ? 'text-gray-200' : 'text-black'}`}>Axios</a></li>
        <li><a href="https://tailwindcss.com/" target="_blank" rel="noopener noreferrer" className={`hover:text-blue-500 ${isDarkMode ? 'text-gray-200' : 'text-black'}`}>Tailwind CSS</a></li>
      </ul>
    </div>
    <div className="text-sm">
      <p className="font-semibold mb-1">Backend Tools:</p>
      <ul className="list-none">
        <li><a href="https://nodemon.io/" target="_blank" rel="noopener noreferrer" className={`hover:text-blue-500 ${isDarkMode ? 'text-gray-200' : 'text-black'}`}>Nodemon</a></li>
        <li><a href="https://expressjs.com/" target="_blank" rel="noopener noreferrer" className={`hover:text-blue-500 ${isDarkMode ? 'text-gray-200' : 'text-black'}`}>Express</a></li>
        <li><a href="https://github.com/nikku/fs-extra" target="_blank" rel="noopener noreferrer" className={`hover:text-blue-500 ${isDarkMode ? 'text-gray-200' : 'text-black'}`}>fs-extra</a></li>
        <li><a href="https://mongoosejs.com/" target="_blank" rel="noopener noreferrer" className={`hover:text-blue-500 ${isDarkMode ? 'text-gray-200' : 'text-black'}`}>Mongoose</a></li>
      </ul>
    </div>
  </div>
</footer>

    </div>
  );
}
