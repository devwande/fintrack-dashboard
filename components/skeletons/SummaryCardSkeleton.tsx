const SummaryCardSkeleton = () => {
  return (
    <div className="bg-faint-green p-4 md:p-5 rounded-xl border-none w-full animate-pulse">
      <div className="flex justify-between items-center">
        <div className="h-4 bg-gray-200 rounded w-24"></div>
        <div className="w-4 h-4 bg-gray-200 rounded"></div>
      </div>
      <div className="mt-3 md:mt-4">
        <div className="h-8 bg-gray-200 rounded w-20"></div>
      </div>
      <div className="mt-1">
        <div className="h-4 bg-gray-200 rounded w-12"></div>
      </div>
    </div>
  );
};

export default SummaryCardSkeleton;
