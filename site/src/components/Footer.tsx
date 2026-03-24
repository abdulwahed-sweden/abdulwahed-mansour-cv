export function Footer() {
  return (
    <footer className="no-print border-t border-gray-200/60 dark:border-gray-800/60">
      <div className="max-w-5xl mx-auto px-6 sm:px-8 py-10">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <p className="text-sm text-gray-400 dark:text-gray-500">&copy; {new Date().getFullYear()} Abdulwahed Mansour</p>
          <div className="flex items-center gap-6">
            <a href="https://github.com/abdulwahed-sweden" target="_blank" rel="noopener noreferrer" className="text-sm text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition">GitHub</a>
            <a href="https://www.linkedin.com/in/abdulwahed-sweden/" target="_blank" rel="noopener noreferrer" className="text-sm text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition">LinkedIn</a>
            <a href="mailto:abdulwahed.mansour@gmail.com" className="text-sm text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition">Email</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
