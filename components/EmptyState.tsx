import Image from "next/image";

interface EmptyStateProps {
  searchQuery?: string;
}

const EmptyState = ({ searchQuery }: EmptyStateProps) => {
  return (
    <div className="flex flex-col items-center justify-center py-12 px-4">
      <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mb-4">
        <Image
          src="/search.svg"
          alt="No results"
          width={32}
          height={32}
          className="w-8 h-8 text-gray-400"
        />
      </div>
      <h3 className="text-lg font-medium text-gray-900 mb-2">
        No transactions found
      </h3>
      <p className="text-gray-500 text-center max-w-sm">
        {searchQuery 
          ? `We couldn't find any transactions matching "${searchQuery}". Try adjusting your search terms.`
          : "No transactions available at the moment."
        }
      </p>
      {searchQuery && (
        <button
          onClick={() => window.location.reload()}
          className="mt-4 px-4 py-2 text-sm text-[#4B8B9F] hover:text-[#3a6b7a] transition-colors"
        >
          Clear search
        </button>
      )}
    </div>
  );
};

export default EmptyState;
