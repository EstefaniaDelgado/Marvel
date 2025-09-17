export default function CharacterDetailSkeleton() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        {/* Desktop Skeleton */}
        <div className="hidden md:block bg-white rounded-lg overflow-hidden max-w-4xl mx-auto animate-pulse">
          {/* Header Skeleton */}
          <div className="bg-gray-100 px-6 py-4 border-b">
            <div className="h-8 bg-gray-300 rounded w-48"></div>
          </div>

          {/* Content Skeleton */}
          <div className="p-8 bg-gray-50">
            <div className="flex gap-8">
              {/* Image Skeleton */}
              <div className="flex-shrink-0">
                <div className="w-64 h-64 bg-gray-300 rounded-lg"></div>
              </div>

              {/* Info Skeleton */}
              <div className="flex-1 space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white rounded-lg p-4">
                    <div className="h-4 bg-gray-300 rounded w-16 mb-2"></div>
                    <div className="h-8 bg-gray-300 rounded w-12"></div>
                  </div>
                  <div className="bg-white rounded-lg p-4">
                    <div className="h-4 bg-gray-300 rounded w-16 mb-2"></div>
                    <div className="h-8 bg-gray-300 rounded w-12"></div>
                  </div>
                </div>

                <div className="bg-white rounded-lg p-4">
                  <div className="h-4 bg-gray-300 rounded w-32 mb-2"></div>
                  <div className="h-6 bg-gray-300 rounded w-20"></div>
                </div>
              </div>
            </div>

            {/* Description Skeleton */}
            <div className="mt-8 ml-[25%] w-[75%] bg-white rounded-l-full p-6">
              <div className="h-6 bg-gray-300 rounded w-24 mb-4"></div>
              <div className="space-y-2">
                <div className="h-4 bg-gray-300 rounded"></div>
                <div className="h-4 bg-gray-300 rounded w-3/4"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Skeleton */}
        <div className="md:hidden bg-white rounded-lg shadow-xl overflow-hidden animate-pulse">
          {/* Header Skeleton */}
          <div className="bg-gray-100 px-4 py-3 border-b">
            <div className="h-6 bg-gray-300 rounded w-32"></div>
          </div>

          {/* Content Skeleton */}
          <div className="p-6 bg-gray-50 space-y-6">
            {/* Image Skeleton */}
            <div className="flex justify-center">
              <div className="w-48 h-48 bg-gray-300 rounded-lg"></div>
            </div>

            {/* Stats Skeleton */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white rounded-lg p-4 text-center">
                <div className="h-3 bg-gray-300 rounded w-12 mx-auto mb-2"></div>
                <div className="h-6 bg-gray-300 rounded w-8 mx-auto"></div>
              </div>
              <div className="bg-white rounded-lg p-4 text-center">
                <div className="h-3 bg-gray-300 rounded w-12 mx-auto mb-2"></div>
                <div className="h-6 bg-gray-300 rounded w-8 mx-auto"></div>
              </div>
            </div>

            {/* Creation Date Skeleton */}
            <div className="bg-white rounded-lg p-4 text-center">
              <div className="h-4 bg-gray-300 rounded w-24 mx-auto mb-2"></div>
              <div className="h-5 bg-gray-300 rounded w-16 mx-auto"></div>
            </div>

            {/* Description Skeleton */}
            <div className="bg-white rounded-lg p-4">
              <div className="h-5 bg-gray-300 rounded w-20 mx-auto mb-3"></div>
              <div className="space-y-2">
                <div className="h-3 bg-gray-300 rounded"></div>
                <div className="h-3 bg-gray-300 rounded w-4/5 mx-auto"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
