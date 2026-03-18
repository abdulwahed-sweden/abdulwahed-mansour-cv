import { Link } from 'react-router-dom';

export function NotFound() {
  return (
    <div className="bg-white dark:bg-gray-950 min-h-screen flex items-center justify-center">
      <div className="text-center">
        <div className="text-6xl font-bold text-gray-300 dark:text-gray-700 mb-4">404</div>
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Page not found</h1>
        <p className="text-gray-600 dark:text-gray-400 mb-8">The page you're looking for doesn't exist.</p>
        <Link to="/" className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition font-semibold">Go Home</Link>
      </div>
    </div>
  );
}
