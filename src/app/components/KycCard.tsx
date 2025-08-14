import { ArrowUp, ArrowDown } from 'lucide-react';

export default function KycCard({ title, count, change }: { title: string; count: number; change: number }) {
  const isPositive = change >= 0;
  return (
    <div className="bg-white p-4 rounded-lg shadow flex justify-between items-center">
      <div>
        <h3 className="text-gray-500 text-sm">{title}</h3>
        <p className="text-2xl font-bold">{count}</p>
      </div>
      <div className={`flex items-center ${isPositive ? 'text-green-500' : 'text-red-500'}`}>
        {isPositive ? <ArrowUp size={16} /> : <ArrowDown size={16} />}
        <span className="ml-1 text-sm">{Math.abs(change)}%</span>
      </div>
    </div>
  );
}
