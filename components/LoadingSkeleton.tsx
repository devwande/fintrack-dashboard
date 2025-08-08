const LoadingSkeleton = () => {
  return (
    <div className="animate-pulse">
      {/* Desktop Skeleton */}
      <div className="hidden md:block">
        <div className="min-w-full">
          {/* Table Header Skeleton */}
          <div className="flex gap-4 p-3 border-b border-gray-200">
            <div className="h-4 bg-gray-200 rounded w-20"></div>
            <div className="h-4 bg-gray-200 rounded w-24"></div>
            <div className="h-4 bg-gray-200 rounded w-20"></div>
            <div className="h-4 bg-gray-200 rounded w-20"></div>
            <div className="h-4 bg-gray-200 rounded w-16"></div>
          </div>
          
          {/* Table Rows Skeleton */}
          {[...Array(8)].map((_, i) => (
            <div key={i} className="flex gap-4 p-3 border-t-2 border-light-gray">
              <div className="h-4 bg-gray-200 rounded w-24"></div>
              <div className="h-4 bg-gray-200 rounded w-32"></div>
              <div className="h-4 bg-gray-200 rounded w-20"></div>
              <div className="h-4 bg-gray-200 rounded w-12"></div>
              <div className="h-6 bg-gray-200 rounded-full w-20"></div>
            </div>
          ))}
        </div>
      </div>

      {/* Mobile Skeleton */}
      <div className="md:hidden">
        {/* Mobile Sort Dropdown Skeleton */}
        <div className="mb-4">
          <div className="h-10 bg-gray-200 rounded-lg w-1/3"></div>
        </div>

        {/* Mobile Cards Skeleton */}
        {[...Array(6)].map((_, i) => (
          <div key={i} className="p-4 border-t-2 border-light-gray">
            <div className="flex justify-between items-start mb-2">
              <div className="flex-1 min-w-0">
                <div className="h-4 bg-gray-200 rounded w-32 mb-2"></div>
                <div className="h-3 bg-gray-200 rounded w-20"></div>
              </div>
              <div className="text-right ml-4">
                <div className="h-4 bg-gray-200 rounded w-16 mb-1"></div>
                <div className="h-3 bg-gray-200 rounded w-8"></div>
              </div>
            </div>
            <div className="flex justify-between items-center">
              <div className="h-6 bg-gray-200 rounded-full w-20"></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LoadingSkeleton;
