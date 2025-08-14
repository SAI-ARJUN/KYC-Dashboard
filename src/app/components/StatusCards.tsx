'use client';
import { FilePlus, Loader, CheckCircle, ShieldCheck, PauseCircle, AlertTriangle } from 'lucide-react';

export default function StatusCards({ data }: { data: any }) {
  const icons: any = {
    'KYC Initiated': { icon: FilePlus, color: 'text-blue-600 dark:text-blue-400' },
    'Under Process': { icon: Loader, color: 'text-yellow-500 dark:text-yellow-400' },
    'Registered': { icon: CheckCircle, color: 'text-green-500 dark:text-green-400' },
    'Validated': { icon: ShieldCheck, color: 'text-teal-500 dark:text-teal-400' },
    'Hold': { icon: PauseCircle, color: 'text-red-500 dark:text-red-400' },
    'Docs Pending': { icon: AlertTriangle, color: 'text-orange-500 dark:text-orange-400' }
  };

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
      {data.kycStatus.map((status: any) => {
        const Icon = icons[status.name]?.icon || FilePlus;
        const color = icons[status.name]?.color || 'text-gray-500 dark:text-gray-400';
        return (
          <div
            key={status.name}
            className="card card-hover flex flex-col items-center justify-center text-center"
          >
            <Icon className={`mb-2 ${color}`} size={24} />
            <p className="text-sm text-gray-500 dark:text-gray-400">{status.name}</p>
            <p className="text-lg font-bold">{status.count}</p>
          </div>
        );
      })}
    </div>
  );
}
