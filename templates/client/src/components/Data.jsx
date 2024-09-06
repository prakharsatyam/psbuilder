import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

function Data({ isDarkMode }) {
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ['TestData'],
    queryFn: async () => {
      const res = await axios.get('http://localhost:3000/api/v1/test');
      return res.data;
    },
  });

  if (isLoading) return <div className={`text-${isDarkMode ? 'blue-300' : 'blue-600'}`}>Loading...</div>;
  if (isError) return <div className={`text-${isDarkMode ? 'red-400' : 'red-600'}`}>An error occurred: {error.message}</div>;

  return (
    <div className={`p-4 rounded-lg shadow-lg ${isDarkMode ? 'bg-gray-800' : 'bg-gray-100'}`}>
      <h3 className={`text-xl font-semibold mb-2 ${isDarkMode ? 'text-white' : 'text-black'}`}>Fetched Data</h3>
      <pre className={`whitespace-pre-wrap ${isDarkMode ? 'text-gray-300' : 'text-gray-800'}`}>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}

export default Data;
