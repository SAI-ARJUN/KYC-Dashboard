'use client';
import { ArrowUp, ArrowDown } from 'lucide-react';

export default function TotalKycSection({ data }: { data: any }) {
  const total = data.totalKYCs.new.count + data.totalKYCs.modified.count;

  return (
    <div className="card card-hover">
      {/* Title */}
      <h2 className="card-title">Total KYCs</h2>
      <p className="text-3xl font-bold mb-4 text-blue-600 dark:text-blue-400">
        {total.toLocaleString()}
      </p>

      {/* Cards Row */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        
        {/* New KYC */}
        <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-4 shadow-sm flex items-center justify-between">
          <div>
            <h3 className="text-gray-500 dark:text-gray-400 text-sm">New KYC</h3>
            <p className="text-2xl font-bold text-green-600 dark:text-green-400">
              {data.totalKYCs.new.count.toLocaleString()}
            </p>
          </div>
          <div className="flex items-center text-green-500 dark:text-green-400">
            <ArrowUp size={18} />
            <span className="ml-1 text-sm">{data.totalKYCs.new.change}%</span>
          </div>
        </div>

        {/* Modified KYC */}
        <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-4 shadow-sm flex items-center justify-between">
          <div>
            <h3 className="text-gray-500 dark:text-gray-400 text-sm">Modified KYC</h3>
            <p className="text-2xl font-bold text-red-600 dark:text-red-400">
              {data.totalKYCs.modified.count.toLocaleString()}
            </p>
          </div>
          <div className="flex items-center text-red-500 dark:text-red-400">
            <ArrowDown size={18} />
            <span className="ml-1 text-sm">{Math.abs(data.totalKYCs.modified.change)}%</span>
          </div>
        </div>
      </div>
    </div>
  );
}
    