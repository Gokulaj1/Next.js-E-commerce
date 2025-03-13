
'use client';

import { useRouter } from 'next/navigation';

export default function SearchBar() {
  const router = useRouter();

  const handleSearch = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const query = formData.get('query') as string;

    router.push(`/products/search?query=${encodeURIComponent(query)}`);
  };

  return (
    <form onSubmit={handleSearch} className="flex items-center">
      <input
        type="text"
        name="query"
        placeholder="Search products..."
        className="border p-2 rounded-l-lg"
      />
      <button
        type="submit"
        className="bg-blue-500 text-white p-2 rounded-r-lg"
      >
        Search
      </button>
    </form>
  );
}