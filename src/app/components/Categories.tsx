'use client';

export default function Categories({ data }: { data: any }) {
  return (
    <div className="card">
      <h2 className="card-title">Categories</h2>

      {/* Individual */}
      <div className="mb-4">
        <p className="text-sm font-medium mb-1">Individual</p>
        <div className="mb-2">
          <p className="text-xs text-gray-500 dark:text-gray-400">RI</p>
          <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
            <div
              className="bg-blue-600 h-2 rounded-full"
              style={{ width: `${data.categories.individual.RI}%` }}
            />
          </div>
        </div>
        <div>
          <p className="text-xs text-gray-500 dark:text-gray-400">NRI</p>
          <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
            <div
              className="bg-blue-400 h-2 rounded-full"
              style={{ width: `${data.categories.individual.NRI}%` }}
            />
          </div>
        </div>
      </div>

      {/* Non-Individual */}
      <div>
        <p className="text-sm font-medium mb-1">Non Individual</p>
        <div className="mb-2">
          <p className="text-xs text-gray-500 dark:text-gray-400">RI</p>
          <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
            <div
              className="bg-green-600 h-2 rounded-full"
              style={{ width: `${data.categories.nonIndividual.RI}%` }}
            />
          </div>
        </div>
        <div>
          <p className="text-xs text-gray-500 dark:text-gray-400">NRI</p>
          <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
            <div
              className="bg-green-400 h-2 rounded-full"
              style={{ width: `${data.categories.nonIndividual.NRI}%` }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
