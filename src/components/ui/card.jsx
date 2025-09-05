export function Card({ children }) {
  return (
    <div className="p-6 bg-white dark:bg-gray-800 shadow-md rounded-lg">
      {children}
    </div>
  );
}

export function CardContent({ children }) {
  return (
    <div className="mt-2 text-gray-700 dark:text-gray-300">
      {children}
    </div>
  );
}
