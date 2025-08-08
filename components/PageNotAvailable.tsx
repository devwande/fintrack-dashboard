import Image from "next/image";

interface PageNotAvailableProps {
  pageName: string;
}

const PageNotAvailable = ({ pageName }: PageNotAvailableProps) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] px-4">
      <div className="text-center max-w-md">
        {/* Icon */}
        <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mb-6 mx-auto">
          <svg
            className="w-12 h-12 text-gray-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
            />
          </svg>
        </div>

        {/* Title */}
        <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
          {pageName} Page
        </h1>

        {/* Message */}
        <p className="text-gray-600 mb-6 leading-relaxed">
          This page is currently not available. We're working on bringing you this feature soon.
        </p>

        {/* Status Badge */}
        <div className="flex flex-row items-center justify-center gap-5 ">
            <button
            onClick={() => window.location.reload()}
            className="px-6 py-3 bg-[#4B8B9F] text-white font-medium rounded-full hover:bg-[#3a6b7a] transition-colors duration-200 shadow-sm"
            >
            Back to Dashboard
            </button>
        </div>
      </div>
    </div>
  );
};

export default PageNotAvailable;
